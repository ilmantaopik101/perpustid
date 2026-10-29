# Perpustid

**Perpustid** adalah sistem informasi perpustakaan berbasis web yang dirancang untuk membantu pengelolaan katalog buku dan proses peminjaman buku dengan dukungan QR Code.

## Deskripsi Proyek

Perpustid dikembangkan untuk mempermudah anggota perpustakaan dalam mengakses informasi buku dan mengajukan peminjaman. Sistem juga menyediakan fitur bagi petugas perpustakaan untuk memverifikasi permintaan peminjaman dan mengelola proses pengembalian buku.

Penggunaan QR Code pada kartu anggota direncanakan untuk membantu proses identifikasi anggota saat mengakses layanan perpustakaan.

## Tujuan

- Mempermudah anggota mencari informasi buku.
- Menyediakan proses pengajuan peminjaman buku secara online.
- Membantu petugas memverifikasi permintaan peminjaman.
- Mempermudah pencatatan peminjaman dan pengembalian buku.
- Mengurangi ketergantungan pada pencatatan manual.

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| Next.js 14 | Framework aplikasi web |
| React | Membangun antarmuka pengguna |
| TypeScript | Menambahkan pemeriksaan tipe pada JavaScript |
| Tailwind CSS | Mengatur tampilan dan desain |
| MySQL | Menyimpan data aplikasi |
| Prisma ORM | Menghubungkan aplikasi dengan database |
| Git | Mengelola versi kode |
| GitHub | Menyimpan repositori dan dokumentasi proyek |

*Catatan: Teknologi database dan ORM akan dikonfigurasi pada tahap pengembangan berikutnya.*

## Fitur yang Direncanakan

1. Registrasi dan login anggota.
2. Identifikasi anggota menggunakan QR Code.
3. Dashboard anggota.
4. Katalog dan pencarian buku.
5. Pengajuan peminjaman buku.
6. Verifikasi peminjaman oleh petugas.
7. Pencatatan pengembalian buku.
8. Dashboard petugas.
9. Pengelolaan data buku dan anggota.
10. Riwayat peminjaman anggota.

## Persyaratan Pengembangan

Pastikan perangkat telah memiliki:

- Node.js dan npm.
- Git.
- MySQL melalui Laragon atau instalasi MySQL lainnya.
- Visual Studio Code atau editor kode sejenis.

## Menjalankan Proyek

Instal dependensi:

```bash
npm install
```

Jalankan server pengembangan:

```bash
npm run dev
```

Buka alamat berikut di browser:

```text
http://localhost:3000
```

## Struktur Proyek

Struktur utama proyek saat ini:

```text
perpustid/
├── public/
├── src/
│   └── app/
│       ├── fonts/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

Struktur dapat berkembang seiring penambahan fitur.

## Status Pengembangan

**Tahap saat ini:** Persiapan proyek dan dokumentasi awal.

Fitur aplikasi, konfigurasi database, autentikasi, dan integrasi QR Code akan dikembangkan secara bertahap.

## Lisensi

Lisensi proyek belum ditentukan.