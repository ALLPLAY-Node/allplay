-- CreateTable
CREATE TABLE `sport_facilities` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `operator_id` BIGINT NOT NULL,
    `name` VARCHAR(20) NULL,
    `sport_type` BIGINT NOT NULL,
    `address` VARCHAR(50) NULL,
    `photo_url` VARCHAR(255) NULL,
    `cost` INTEGER NULL,
    `introduction` VARCHAR(191) NULL,
    `information` VARCHAR(191) NULL,
    `usage_guide` VARCHAR(191) NULL,
    `contact_number` VARCHAR(15) NULL,
    `url` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `region_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `facility_id` BIGINT NOT NULL,
    `text` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `join_request` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `club_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sport_type` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `sport_type` VARCHAR(5) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `region` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `region_name` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clubs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NULL,
    `club_photo_url` VARCHAR(255) NULL,
    `capacity` INTEGER NULL,
    `activity_frequency` VARCHAR(20) NULL,
    `join_requirement` VARCHAR(30) NULL,
    `summary` VARCHAR(50) NULL,
    `level` VARCHAR(191) NULL,
    `age` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `region_id` BIGINT NOT NULL,
    `sport_type_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notice` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `club_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `title` VARCHAR(30) NULL,
    `notice` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NULL,
    `phone_number` VARCHAR(30) NULL,
    `user_id` VARCHAR(20) NULL,
    `password` VARCHAR(12) NULL,
    `birth` DATE NULL,
    `gender` VARCHAR(191) NULL,
    `profile_photo_url` VARCHAR(255) NULL,
    `email` VARCHAR(50) NULL,
    `introduce` VARCHAR(191) NULL,
    `status` BOOLEAN NULL,
    `inactive_date` DATETIME(3) NULL,
    `privacy_agreement` BIGINT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `region_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_clubs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `club_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `is_leader` BOOLEAN NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review_photos` (
    `photo_id` BIGINT NOT NULL AUTO_INCREMENT,
    `review_id` BIGINT NOT NULL,
    `photo_url` VARCHAR(255) NULL,
    `uploaded_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`photo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sport_facilities` ADD CONSTRAINT `sport_facilities_operator_id_fkey` FOREIGN KEY (`operator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sport_facilities` ADD CONSTRAINT `sport_facilities_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sport_facilities` ADD CONSTRAINT `sport_facilities_sport_type_fkey` FOREIGN KEY (`sport_type`) REFERENCES `sport_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_facility_id_fkey` FOREIGN KEY (`facility_id`) REFERENCES `sport_facilities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `join_request` ADD CONSTRAINT `join_request_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `clubs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `join_request` ADD CONSTRAINT `join_request_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clubs` ADD CONSTRAINT `clubs_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clubs` ADD CONSTRAINT `clubs_sport_type_id_fkey` FOREIGN KEY (`sport_type_id`) REFERENCES `sport_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notice` ADD CONSTRAINT `notice_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `clubs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notice` ADD CONSTRAINT `notice_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_clubs` ADD CONSTRAINT `user_clubs_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `clubs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_clubs` ADD CONSTRAINT `user_clubs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review_photos` ADD CONSTRAINT `review_photos_review_id_fkey` FOREIGN KEY (`review_id`) REFERENCES `review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
