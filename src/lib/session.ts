import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;

if (!secretKey) {
  throw new Error("SESSION_SECRET belum diatur di file .env");
}

const encodedKey = new TextEncoder().encode(secretKey);

const COOKIE_NAME = "perpustid_session";
const SESSION_DURATION = 60 * 60 * 24 * 7;

export async function createSession(anggotaId: number) {
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION * 1000
  );

  const token = await new SignJWT({ anggotaId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(encodedKey);

  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });

    if (
      typeof payload.anggotaId !== "number" ||
      !Number.isInteger(payload.anggotaId) ||
      payload.anggotaId <= 0
    ) {
      return null;
    }

    return {
      anggotaId: payload.anggotaId,
    };
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
}