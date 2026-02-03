/*
  Warnings:

  - You are about to drop the column `club_photo_url` on the `clubs` table. All the data in the column will be lost.
  - You are about to drop the column `region_name` on the `region` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clubs` DROP COLUMN `club_photo_url`,
    ADD COLUMN `contact_number` VARCHAR(15) NULL,
    ADD COLUMN `homepage_url` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `region` DROP COLUMN `region_name`,
    ADD COLUMN `city` VARCHAR(10) NULL,
    ADD COLUMN `district` VARCHAR(10) NULL;

-- CreateTable
CREATE TABLE `club_photos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `club_id` BIGINT NOT NULL,
    `club_photo_url` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `club_photos` ADD CONSTRAINT `club_photos_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `clubs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
