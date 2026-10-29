export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-slate-900">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Perpustid</h1>
            <p className="text-xs text-slate-500">Perpustakaan Digital</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#beranda" className="transition hover:text-indigo-600">
            Beranda
          </a>
          <a href="#fitur" className="transition hover:text-indigo-600">
            Fitur
          </a>
          <a href="#tentang" className="transition hover:text-indigo-600">
            Tentang
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Masuk
          </a>
          <a
            href="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
          >
            Daftar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="beranda"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 md:pt-20 lg:grid-cols-2 lg:px-10 lg:pb-28"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Layanan perpustakaan dalam satu platform
          </div>

          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Temukan Buku.
            <br />
            <span className="text-indigo-600">Bangun Pengetahuan.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Perpustid membantu anggota menemukan buku dan mengajukan peminjaman
            secara online. Proses peminjaman juga dilengkapi identifikasi QR
            Code dan verifikasi oleh petugas perpustakaan.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Mulai Sekarang
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#fitur"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
            >
              Pelajari Fitur
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
            <div>
              <p className="text-2xl font-bold text-slate-900">Praktis</p>
              <p className="mt-1 text-sm text-slate-500">Pengajuan online</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">Terstruktur</p>
              <p className="mt-1 text-sm text-slate-500">Data peminjaman</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">QR Code</p>
              <p className="mt-1 text-sm text-slate-500">Identifikasi anggota</p>
            </div>
          </div>
        </div>

        {/* Ilustrasi dashboard */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-sky-200/60 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-slate-300/50 sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm text-slate-500">Dashboard Anggota</p>
                <h3 className="mt-1 text-lg font-bold">Selamat datang!</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-xl">
                📚
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="text-sm text-indigo-700">Buku tersedia</p>
                <p className="mt-2 text-3xl font-extrabold text-indigo-900">
                  <span aria-label="ilustrasi">120+</span>
                </p>
                <p className="mt-1 text-xs text-indigo-600">
                  Koleksi perpustakaan
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Peminjaman</p>
                <p className="mt-2 text-3xl font-extrabold text-emerald-900">
                  Online
                </p>
                <p className="mt-1 text-xs text-emerald-700">
                  Ajukan dari website
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold">Alur Peminjaman</h4>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  3 langkah
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Pilih buku</p>
                    <p className="text-xs text-slate-500">
                      Cari buku dari katalog
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-bold text-sky-700">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Ajukan peminjaman</p>
                    <p className="text-xs text-slate-500">
                      Kirim permintaan melalui website
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Verifikasi petugas</p>
                    <p className="text-xs text-slate-500">
                      Petugas memeriksa permintaan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold">Proses lebih teratur</p>
                <p className="text-xs text-slate-500">
                  Informasi peminjaman terpusat dalam satu sistem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur */}
      <section id="fitur" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Fitur Utama
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Semua kebutuhan perpustakaan lebih teratur
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Dirancang untuk membantu anggota dan petugas menjalankan proses
              perpustakaan melalui satu sistem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🔎"
              title="Katalog Buku"
              description="Cari dan lihat informasi buku sebelum mengajukan peminjaman."
            />
            <FeatureCard
              icon="▦"
              title="QR Code Anggota"
              description="Gunakan QR Code pada kartu anggota untuk membantu identifikasi anggota."
            />
            <FeatureCard
              icon="📋"
              title="Pengajuan Online"
              description="Ajukan peminjaman buku melalui website tanpa pencatatan manual di awal proses."
            />
            <FeatureCard
              icon="✓"
              title="Verifikasi Petugas"
              description="Permintaan peminjaman diperiksa petugas sebelum disetujui."
            />
            <FeatureCard
              icon="📚"
              title="Riwayat Peminjaman"
              description="Rencanakan pencatatan riwayat pinjam dan pengembalian buku."
            />
            <FeatureCard
              icon="🔐"
              title="Akses Terstruktur"
              description="Pengembangan akses anggota dan petugas sesuai peran masing-masing."
            />
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-[2rem] bg-indigo-600 px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
              Tentang Perpustid
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold sm:text-4xl">
              Membawa layanan perpustakaan menuju pengalaman digital
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-indigo-100">
              Perpustid dikembangkan sebagai proyek sistem informasi
              perpustakaan dengan fokus pada kemudahan akses katalog,
              pengajuan peminjaman, dan verifikasi oleh petugas.
            </p>
            <a
              href="/register"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Perpustid. Sistem Informasi
            Perpustakaan.
          </p>
          <p>Dikembangkan untuk mendukung layanan perpustakaan digital.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl text-indigo-700">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}