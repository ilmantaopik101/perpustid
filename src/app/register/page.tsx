"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [nama, setNama] = useState("");
  const [nomorAnggota, setNomorAnggota] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [pesanError, setPesanError] = useState("");

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setPesanError("");

  if (password.length < 8) {
    setPesanError("Kata sandi harus terdiri dari minimal 8 karakter.");
    return;
  }

  if (password !== konfirmasiPassword) {
    setPesanError("Konfirmasi kata sandi tidak cocok.");
    return;
  }

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama,
        email,
        password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setPesanError(result.message || "Registrasi gagal.");
      return;
    }

    window.location.href = "/login";
  } catch {
    setPesanError(
      "Tidak dapat terhubung ke server. Silakan coba kembali."
    );
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-indigo-600 p-10 text-white md:flex">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

          <Link href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-bold text-indigo-600">
              P
            </div>
            <span className="text-xl font-bold">Perpustid</span>
          </Link>

          <div className="relative py-12">
            <div className="mb-6 text-5xl">📚</div>

            <h1 className="text-4xl font-extrabold leading-tight">
              Mulai perjalanan membacamu!
            </h1>

            <p className="mt-5 leading-8 text-indigo-100">
              Buat akun anggota untuk menjelajahi koleksi buku dan menikmati
              layanan peminjaman perpustakaan secara digital.
            </p>

            <div className="mt-8 space-y-4 text-sm text-indigo-100">
              <p>✓ Temukan koleksi buku dengan mudah</p>
              <p>✓ Ajukan peminjaman secara online</p>
              <p>✓ Pantau status dan riwayat peminjaman</p>
            </div>
          </div>

          <p className="relative text-sm text-indigo-200">
            Sistem Informasi Perpustakaan Digital
          </p>
        </section>

        <section className="p-7 sm:p-10 md:p-12">
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            ← Kembali ke beranda
          </Link>

          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Registrasi Anggota
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Buat akun baru
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Lengkapi data berikut untuk mendaftar sebagai anggota.
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-7 space-y-4">
            <div>
              <label
                htmlFor="nama"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nama lengkap
              </label>
              <input
                id="nama"
                type="text"
                autoComplete="name"
                placeholder="Masukkan nama lengkap"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="nomorAnggota"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nomor anggota
              </label>
              <input
                id="nomorAnggota"
                type="text"
                placeholder="Masukkan nomor anggota jika sudah ada"
                value={nomorAnggota}
                onChange={(event) => setNomorAnggota(event.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
              <p className="mt-1.5 text-xs leading-5 text-slate-400">
                Jika nomor anggota diterbitkan oleh petugas, bagian ini bisa
                dikosongkan saat pendaftaran.
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Kata sandi
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={8}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="konfirmasiPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Konfirmasi kata sandi
              </label>
              <input
                id="konfirmasiPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Ulangi kata sandi"
                value={konfirmasiPassword}
                onChange={(event) => setKonfirmasiPassword(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {pesanError && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {pesanError}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            >
              Daftar sekarang
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              Masuk di sini
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}