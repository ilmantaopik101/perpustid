import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export const runtime = "nodejs";

export async function POST() {
  try {
    await deleteSession();

    return NextResponse.json({
      message: "Logout berhasil.",
    });
  } catch (error) {
    console.error("Logout API error:", error);

    return NextResponse.json(
      { message: "Logout gagal. Silakan coba kembali." },
      { status: 500 }
    );
  }
}