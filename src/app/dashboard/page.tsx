import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  // Memeriksa sesi login pengguna
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Mengambil data anggota dari database
  const anggota = await prisma.anggota.findUnique({
    where: {
      id: session.anggotaId,
    },
    select: {
      nama: true,
      email: true,
      nomorAnggota: true,
    },
  });

  // Jika akun tidak ditemukan, arahkan kembali ke login
  if (!anggota) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-2xl font-extrabold text-indigo-600"
          >
            Perpustid
          </Link>

          <div className="flex items-center gap-3">
  <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
    Anggota
  </span>

  <LogoutButton />
</div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-indigo-600 p-8 text-white shadow-lg sm:p-10">
          <p className="text-sm font-medium text-indigo-100">
            Dashboard Anggota
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Halo, {anggota.nama}! 👋
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
            Selamat datang di Perpustid. Kamu dapat menggunakan
            sistem ini untuk melihat koleksi buku dan mengajukan
            peminjaman melalui perpustakaan digital.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Informasi Anggota
            </h2>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-slate-500">Nama lengkap</p>
                <p className="mt-1 font-semibold text-slate-800">
                  {anggota.nama}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-1 break-all font-semibold text-slate-800">
                  {anggota.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Nomor anggota</p>
                <p className="mt-1 font-semibold text-slate-800">
                  {anggota.nomorAnggota ?? "Belum tersedia"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              <Link
  href="/buku"
  className="block rounded-xl bg-indigo-50 p-4 transition hover:bg-indigo-100"
>
  <p className="font-semibold text-indigo-700">
    📚 Katalog Buku
  </p>

  <p className="mt-1 text-sm text-slate-600">
    Lihat koleksi buku dan ketersediaan stoknya.
  </p>
</Link>
            </h2>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">
                  📚 Katalog Buku
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Nantinya digunakan untuk melihat koleksi buku.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">
                  📖 Peminjaman Saya
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Nantinya digunakan untuk mengajukan dan memantau
                  peminjaman buku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}