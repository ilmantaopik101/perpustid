-- CreateTable
CREATE TABLE `anggota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `nomor_anggota` VARCHAR(30) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `anggota_nomor_anggota_key`(`nomor_anggota`),
    UNIQUE INDEX `anggota_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buku` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(20) NULL,
    `judul` VARCHAR(200) NOT NULL,
    `penulis` VARCHAR(150) NOT NULL,
    `penerbit` VARCHAR(150) NULL,
    `tahunTerbit` INTEGER NULL,
    `stok` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `buku_isbn_key`(`isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peminjaman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anggota_id` INTEGER NOT NULL,
    `buku_id` INTEGER NOT NULL,
    `tanggal_ajukan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tanggal_pinjam` DATETIME(3) NULL,
    `tanggal_jatuh_tempo` DATETIME(3) NULL,
    `tanggal_kembali` DATETIME(3) NULL,
    `status` ENUM('MENUNGGU_VERIFIKASI', 'DISETUJUI', 'DITOLAK', 'DIPINJAM', 'DIKEMBALIKAN') NOT NULL DEFAULT 'MENUNGGU_VERIFIKASI',
    `catatan_petugas` VARCHAR(500) NULL,

    INDEX `peminjaman_anggota_id_idx`(`anggota_id`),
    INDEX `peminjaman_buku_id_idx`(`buku_id`),
    INDEX `peminjaman_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `peminjaman` ADD CONSTRAINT `peminjaman_anggota_id_fkey` FOREIGN KEY (`anggota_id`) REFERENCES `anggota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peminjaman` ADD CONSTRAINT `peminjaman_buku_id_fkey` FOREIGN KEY (`buku_id`) REFERENCES `buku`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
