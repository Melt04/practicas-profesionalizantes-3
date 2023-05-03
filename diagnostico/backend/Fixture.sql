-- MySQL Script generated by MySQL Workbench
-- Fri Apr 21 18:53:54 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Team` (
  `id_team` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `flag` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_team`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Team-group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Team-group` (
  `idTeam-group` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTeam-group`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Team-group-member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Team-group-member` (
  `idTeam-group-member` INT NOT NULL AUTO_INCREMENT,
  `id-team-group` INT NOT NULL,
  PRIMARY KEY (`idTeam-group-member`),
  CONSTRAINT `idTeam-group`
    FOREIGN KEY (`id-team-group`)
    REFERENCES `mydb`.`Team-group` (`idTeam-group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_team`
    FOREIGN KEY (`id-team-group`)
    REFERENCES `mydb`.`Team` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`place` (
  `idplace` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `stadium_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idplace`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`match`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`match` (
  `id_match` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `goles_A` INT NOT NULL,
  `goles_B` INT NOT NULL,
  `is_played` TINYINT NOT NULL,
  `idteam_A` INT NOT NULL,
  `idteam_B` INT NOT NULL,
  `id_place` INT NOT NULL,
  PRIMARY KEY (`id_match`, `idteam_A`, `idteam_B`),
  INDEX `idteamA_idx` (`idteam_A` ASC) VISIBLE,
  INDEX `idteamB_idx` (`idteam_B` ASC) VISIBLE,
  INDEX `id_place_idx` (`id_place` ASC) VISIBLE,
  CONSTRAINT `idteamA`
    FOREIGN KEY (`idteam_A`)
    REFERENCES `mydb`.`Team` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idteamB`
    FOREIGN KEY (`idteam_B`)
    REFERENCES `mydb`.`Team` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_place`
    FOREIGN KEY (`id_place`)
    REFERENCES `mydb`.`place` (`idplace`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`team-group-match`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`team-group-match` (
  `id_team-group-match` INT NOT NULL AUTO_INCREMENT,
  `id_match` INT NOT NULL,
  `id_team_group` INT NOT NULL,
  PRIMARY KEY (`id_team-group-match`),
  INDEX `id_match_idx` (`id_match` ASC) VISIBLE,
  INDEX `id_team_group_idx` (`id_team_group` ASC) VISIBLE,
  CONSTRAINT `id_match`
    FOREIGN KEY (`id_match`)
    REFERENCES `mydb`.`match` (`id_match`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_team_group`
    FOREIGN KEY (`id_team_group`)
    REFERENCES `mydb`.`Team-group` (`idTeam-group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
