import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Belum login." },
        { status: 401 }
      );
    }

    const buku = await prisma.buku.findMany({
      orderBy: {
        judul: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      data: buku,
    });
  } catch (error) {
  console.error("GET /api/buku error:", error);

  return NextResponse.json(
    {
      success: false,
      message: "Gagal mengambil data buku.",
      detail: error instanceof Error ? error.message : String(error),
    },
    { status: 500 }
  );
}
}

export async function POST(request: Request) {
  try {
    // Periksa sesi anggota
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { message: "Silakan login terlebih dahulu." },
        { status: 401 }
      );
    }

    // Ambil data dari request
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { message: "Data pengajuan tidak valid." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;
    const bukuId = data.bukuId;

    if (
      typeof bukuId !== "number" ||
      !Number.isInteger(bukuId) ||
      bukuId <= 0
    ) {
      return NextResponse.json(
        { message: "ID buku tidak valid." },
        { status: 400 }
      );
    }

    // Periksa apakah buku tersedia
    const buku = await prisma.buku.findUnique({
      where: { id: bukuId },
    });

    if (!buku) {
      return NextResponse.json(
        { message: "Buku tidak ditemukan." },
        { status: 404 }
      );
    }

    if (buku.stok <= 0) {
      return NextResponse.json(
        { message: "Maaf, stok buku sedang habis." },
        { status: 400 }
      );
    }

    // Pastikan anggota masih terdaftar
    const anggota = await prisma.anggota.findUnique({
      where: { id: session.anggotaId },
    });

    if (!anggota) {
      return NextResponse.json(
        { message: "Akun anggota tidak ditemukan." },
        { status: 404 }
      );
    }

    // Buat pengajuan peminjaman
    const peminjaman = await prisma.peminjaman.create({
      data: {
        anggotaId: anggota.id,
        bukuId: buku.id,
      },
      select: {
        id: true,
        tanggalAjukan: true,
        status: true,
        buku: {
          select: {
            judul: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Pengajuan peminjaman berhasil dikirim.",
        data: peminjaman,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API pengajuan peminjaman error:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}