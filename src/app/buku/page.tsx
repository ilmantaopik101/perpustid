"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Buku = {
  id: number;
  isbn: string | null;
  judul: string;
  penulis: string;
  penerbit: string | null;
  tahunTerbit: number | null;
  stok: number;
};

export default function KatalogBukuPage() {
  const [bukuDiproses, setBukuDiproses] = useState<number | null>(null);
  const [pesanAksi, setPesanAksi] = useState("");
  const [jenisPesan, setJenisPesan] = useState<"sukses" | "error" | "">("");
  const [buku, setBuku] = useState<Buku[]>([]);
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [pesanError, setPesanError] = useState("");
  const [kataKunci, setKataKunci] = useState("");

async function ajukanPeminjaman(bukuId: number) {
  setBukuDiproses(bukuId);
  setPesanAksi("");
  setJenisPesan("");

  try {
    const response = await fetch("/api/buku", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bukuId }),
    });

    const result = await response.json();

    if (response.status === 401) {
      window.location.href = "/login";
      return;
    }

    if (!response.ok) {
      setJenisPesan("error");
      setPesanAksi(result.message || "Pengajuan gagal.");
      return;
    }

    setJenisPesan("sukses");
    setPesanAksi(
      `Pengajuan buku "${result.data.buku.judul}" berhasil dikirim. Menunggu verifikasi petugas.`
    );
  } catch {
    setJenisPesan("error");
    setPesanAksi("Tidak dapat terhubung ke server.");
  } finally {
    setBukuDiproses(null);
  }
}

  useEffect(() => {
    async function ambilBuku() {
      try {
        const response = await fetch("/api/buku");
        const result = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = "/login";
            return;
          }

          throw new Error(result.message || "Gagal mengambil data buku.");
        }

        setBuku(result.data);
      } catch (error) {
        setPesanError(
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengambil data buku."
        );
      } finally {
        setSedangMemuat(false);
      }
    }
    
    ambilBuku();
  }, []);

  const bukuTerfilter = buku.filter((item) => {
    const pencarian = kataKunci.toLowerCase();

    return (
      item.judul.toLowerCase().includes(pencarian) ||
      item.penulis.toLowerCase().includes(pencarian) ||
      (item.penerbit ?? "").toLowerCase().includes(pencarian)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-2xl font-extrabold text-indigo-600"
          >
            Perpustid
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      {/* Konten */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Koleksi Perpustakaan
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Katalog Buku 📚
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            Temukan buku yang kamu butuhkan dan periksa ketersediaan
            stoknya sebelum mengajukan peminjaman.
          </p>
        </div>

        {/* Pencarian */}
        <div className="mt-8">
          <input
            type="search"
            placeholder="Cari judul, penulis, atau penerbit..."
            value={kataKunci}
            onChange={(event) => setKataKunci(event.target.value)}
            className="w-full max-w-xl rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {/* Notifikasi pengajuan */}
{pesanAksi && (
  <div
    role="alert"
    className={`mt-5 rounded-xl p-4 text-sm font-medium ${
      jenisPesan === "sukses"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-red-50 text-red-700"
    }`}
  >
    {pesanAksi}
  </div>
)}

        {/* Ringkasan */}
        {!sedangMemuat && !pesanError && (
          <p className="mt-6 text-sm text-slate-500">
            Menampilkan{" "}
            <span className="font-bold text-slate-800">
              {bukuTerfilter.length}
            </span>{" "}
            dari {buku.length} buku.
          </p>
        )}

        {/* Status memuat */}
        {sedangMemuat && (
          <div className="py-20 text-center">
            <p className="text-slate-500">Memuat katalog buku...</p>
          </div>
        )}

        {/* Pesan error */}
        {!sedangMemuat && pesanError && (
          <div
            role="alert"
            className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700"
          >
            <p className="font-semibold">Katalog gagal dimuat.</p>
            <p className="mt-2 text-sm">{pesanError}</p>
          </div>
        )}

        {/* Daftar buku */}
        {!sedangMemuat && !pesanError && bukuTerfilter.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bukuTerfilter.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100">
                  <span className="text-6xl" aria-hidden="true">
                    📚
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-2 min-h-14 text-lg font-bold text-slate-900">
                    {item.judul}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.penulis}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold">Penerbit:</span>{" "}
                      {item.penerbit || "Belum tersedia"}
                    </p>

                    <p>
                      <span className="font-semibold">Tahun:</span>{" "}
                      {item.tahunTerbit ?? "Belum tersedia"}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm text-slate-500">Stok buku</span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        item.stok > 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {item.stok > 0
                        ? `${item.stok} tersedia`
                        : "Stok habis"}
                    </span>
                  </div>
                  {/* Tombol pengajuan */}
                  <button
                    type="button"
                    onClick={() => ajukanPeminjaman(item.id)}
                    disabled={item.stok <= 0 || bukuDiproses !== null}
                    className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {bukuDiproses === item.id
                      ? "Mengirim pengajuan..."
                      : item.stok <= 0
                        ? "Stok Habis"
                        : "Ajukan Peminjaman"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Data kosong */}
        {!sedangMemuat &&
          !pesanError &&
          bukuTerfilter.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <p className="text-4xl">📖</p>

              <h2 className="mt-4 text-lg font-bold text-slate-800">
                {buku.length === 0
                  ? "Belum ada buku"
                  : "Buku tidak ditemukan"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {buku.length === 0
                  ? "Koleksi buku belum ditambahkan ke database."
                  : "Coba gunakan kata kunci pencarian yang berbeda."}
              </p>
            </div>
          )}
      </section>
    </main>
  );
}