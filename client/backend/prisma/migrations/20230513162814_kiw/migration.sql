-- AlterTable
ALTER TABLE `movie` ADD COLUMN `movieCategory` VARCHAR(191) NULL,
    ADD COLUMN `movieImage` VARCHAR(191) NULL,
    ADD COLUMN `movieTheater` VARCHAR(191) NULL,
    ADD COLUMN `movieTrailer` VARCHAR(191) NULL,
    ADD COLUMN `showtime` VARCHAR(191) NULL,
    MODIFY `movieHour` VARCHAR(191) NOT NULL;
