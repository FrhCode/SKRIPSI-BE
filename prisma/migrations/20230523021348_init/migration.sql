-- CreateTable
CREATE TABLE `User` (
    `id_user` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengguna` (
    `id_pengguna` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_invoice` VARCHAR(191) NOT NULL,
    `name_pengguna` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tgl_konsul` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_penyakit` VARCHAR(191) NOT NULL,
    `gejala` VARCHAR(191) NOT NULL,
    `total_perhitungan` DOUBLE NOT NULL,

    PRIMARY KEY (`id_pengguna`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penyakit` (
    `id_penyakit` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_penyakit` VARCHAR(191) NOT NULL,
    `nama_penyakit` VARCHAR(191) NOT NULL,
    `Solusi` TEXT NOT NULL,

    UNIQUE INDEX `Penyakit_kode_penyakit_key`(`kode_penyakit`),
    PRIMARY KEY (`id_penyakit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gejala` (
    `id_Gejala` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_Gejala` VARCHAR(191) NOT NULL,
    `nama_Gejala` VARCHAR(191) NOT NULL,
    `nilai_ds` DOUBLE NOT NULL,

    UNIQUE INDEX `Gejala_kode_Gejala_key`(`kode_Gejala`),
    PRIMARY KEY (`id_Gejala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rule_base` (
    `penyakitId` INTEGER NOT NULL,
    `GejalaId` INTEGER NOT NULL,

    UNIQUE INDEX `Rule_base_penyakitId_GejalaId_key`(`penyakitId`, `GejalaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Rule_base` ADD CONSTRAINT `Rule_base_penyakitId_fkey` FOREIGN KEY (`penyakitId`) REFERENCES `Penyakit`(`id_penyakit`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rule_base` ADD CONSTRAINT `Rule_base_GejalaId_fkey` FOREIGN KEY (`GejalaId`) REFERENCES `Gejala`(`id_Gejala`) ON DELETE CASCADE ON UPDATE CASCADE;
