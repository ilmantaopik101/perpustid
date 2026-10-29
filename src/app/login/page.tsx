"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      "Tampilan login berhasil digunakan. Autentikasi database akan dibuat pada tahap berikutnya."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-indigo-600 p-10 text-white md:flex">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/40 blur-3xl" />

          <Link href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-bold text-indigo-600">
              P
            </div>
            <span className="text-xl font-bold">Perpustid</span>
          </Link>

          <div className="relative py-12">
            <div className="mb-6 text-5xl">📚</div>

            <h1 className="text-4xl font-extrabold leading-tight">
              Selamat datang kembali!
            </h1>

            <p className="mt-5 leading-8 text-indigo-100">
              Masuk ke akunmu untuk menjelajahi koleksi buku dan mengelola
              aktivitas peminjaman melalui Perpustid.
            </p>

            <div className="mt-8 space-y-4 text-sm text-indigo-100">
              <p>✓ Jelajahi katalog buku</p>
              <p>✓ Ajukan peminjaman secara online</p>
              <p>✓ Pantau riwayat peminjaman</p>
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

          <div className="mt-10">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Login Anggota
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Masuk ke akunmu
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Masukkan email dan kata sandi yang sudah terdaftar.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
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
                autoComplete="current-password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            >
              Masuk
            </button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs text-slate-400">
                BELUM PUNYA AKUN?
              </span>
            </div>
          </div>

          <Link
            href="/register"
            className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Buat akun baru
          </Link>

          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Layanan perpustakaan digital untuk memudahkan pengelolaan
            peminjaman buku.
          </p>
        </section>
      </div>
    </main>
  );
}