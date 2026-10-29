import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { message: "Data registrasi tidak valid." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const nama = typeof data.nama === "string" ? data.nama.trim() : "";
    const email =
      typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const password =
      typeof data.password === "string" ? data.password : "";

    if (!nama || nama.length > 100) {
      return NextResponse.json(
        { message: "Nama wajib diisi dan maksimal 100 karakter." },
        { status: 400 }
      );
    }

    if (
      !email ||
      email.length > 191 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { message: "Format email tidak valid." },
        { status: 400 }
      );
    }

    if (password.length < 8 || password.length > 72) {
      return NextResponse.json(
        { message: "Kata sandi harus terdiri dari 8–72 karakter." },
        { status: 400 }
      );
    }

    const anggotaTerdaftar = await prisma.anggota.findUnique({
      where: { email },
      select: { id: true },
    });

    if (anggotaTerdaftar) {
      return NextResponse.json(
        { message: "Email sudah terdaftar." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const anggota = await prisma.anggota.create({
      data: {
        nama,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        nomorAnggota: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Registrasi berhasil.",
        anggota,
      },
      { status: 201 }
    );
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { message: "Email atau data unik sudah terdaftar." },
        { status: 409 }
      );
    }

    console.error("Register API error:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}