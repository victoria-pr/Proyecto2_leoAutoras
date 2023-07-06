-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema leoAutoras
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema leoAutoras
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `leoAutoras` DEFAULT CHARACTER SET utf8 ;
USE `leoAutoras` ;

-- -----------------------------------------------------
-- Table `leoAutoras`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `leoAutoras`.`user` (
  `iduser` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `leoAutoras`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `leoAutoras`.`author` (
  `idauthor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NULL,
  `country` VARCHAR(45) NOT NULL,
  `birthdate` DATE NOT NULL,
  `deathdate` DATE NULL,
  `image` VARCHAR(255) NULL,
  `bio` VARCHAR(1500) NULL,
  PRIMARY KEY (`idauthor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `leoAutoras`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `leoAutoras`.`book` (
  `idbook` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `publish_date` DATE NOT NULL,
  `isbn` VARCHAR(55) NULL,
  `sinopsis` VARCHAR(1500) NULL,
  `pages` INT NULL,
  `publisher` VARCHAR(105) NOT NULL,
  `language` VARCHAR(45) NULL,
  `cover` VARCHAR(255) NULL,
  `editions` VARCHAR(45) NULL,
  `idauthor` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idbook`),
  UNIQUE INDEX `isbn_UNIQUE` (`isbn` ASC) ,
  INDEX `fk_book_author_idx` (`idauthor` ASC) ,
  CONSTRAINT `fk_book_author`
    FOREIGN KEY (`idauthor`)
    REFERENCES `leoAutoras`.`author` (`idauthor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
