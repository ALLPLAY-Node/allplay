/*
  Warnings:

  - You are about to alter the column `level` on the `clubs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `age` on the `clubs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `gender` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `clubs` MODIFY `level` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED') NULL,
    MODIFY `age` ENUM('TEENS', 'TWENTIES', 'THIRTIES', 'FORTIES', 'FIFTIES', 'OVER_SIXTIES') NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `gender` ENUM('MALE', 'FEMALE') NULL;
