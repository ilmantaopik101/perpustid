import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { message: "Data login tidak valid." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const email =
      typeof data.email === "string"
        ? data.email.trim().toLowerCase()
        : "";

    const password =
      typeof data.password === "string"
        ? data.password
        : "";

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email dan kata sandi wajib diisi." },
        { status: 400 }
      );
    }

    const anggota = await prisma.anggota.findUnique({
      where: { email },
    });

    if (!anggota) {
      return NextResponse.json(
        { message: "Email atau kata sandi salah." },
        { status: 401 }
      );
    }

    const passwordCocok = await bcrypt.compare(
      password,
      anggota.password
    );

    if (!passwordCocok) {
      return NextResponse.json(
        { message: "Email atau kata sandi salah." },
        { status: 401 }
      );
    }

    await createSession(anggota.id);

    return NextResponse.json({
      message: "Login berhasil.",
      anggota: {
        id: anggota.id,
        nama: anggota.nama,
        email: anggota.email,
        nomorAnggota: anggota.nomorAnggota,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}