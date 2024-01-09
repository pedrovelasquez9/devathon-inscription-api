-- CreateTable
CREATE TABLE `developer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` LONGTEXT NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `github_link` VARCHAR(45) NOT NULL,
    `linkedin_link` VARCHAR(45) NOT NULL,
    `idrole` INTEGER NOT NULL,
    `ceremony_available` TINYINT NOT NULL,
    `discord_username` VARCHAR(45) NOT NULL,
    `idseniority` INTEGER NOT NULL,
    `looking_for_work` TINYINT NOT NULL,
    `retire_probability` TINYINT NOT NULL,
    `condition_accepted` TINYINT NOT NULL,
    `idteam` INTEGER NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `created_by` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(45) NULL,
    `updated_at` DATETIME(0) NULL,

    INDEX `idrole_idx`(`idrole`),
    INDEX `idseniority_idx`(`idseniority`),
    INDEX `idteam_idx`(`idteam`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `created_by` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(45) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seniority` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `created_by` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(45) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `stack_frontend` LONGTEXT NOT NULL,
    `stack_backend` LONGTEXT NOT NULL,
    `available_frontend_quota` INTEGER NOT NULL DEFAULT 3,
    `available_backend_quota` INTEGER NOT NULL DEFAULT 3,
    `edition` INTEGER NOT NULL DEFAULT 6,
    `status` TINYINT NOT NULL DEFAULT 1,
    `created_by` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(45) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `developer` ADD CONSTRAINT `idrole` FOREIGN KEY (`idrole`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `developer` ADD CONSTRAINT `idseniority` FOREIGN KEY (`idseniority`) REFERENCES `seniority`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `developer` ADD CONSTRAINT `idteam` FOREIGN KEY (`idteam`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

