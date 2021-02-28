-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 28, 2021 at 03:49 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `powa`
--
CREATE DATABASE IF NOT EXISTS `powa` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `powa`;

-- --------------------------------------------------------

--
-- Table structure for table `sensor`
--

CREATE TABLE `sensor`
(
    `_id`   varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `_uid`  int                                                     NOT NULL,
    `_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `_unit` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci  NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sensor_data`
--

CREATE TABLE `sensor_data`
(
    `id`         int          NOT NULL,
    `sensor_id`  varchar(255) NOT NULL,
    `created_at` datetime     NOT NULL,
    `value`      float        NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sensor`
--
ALTER TABLE `sensor`
    ADD PRIMARY KEY (`_id`),
    ADD UNIQUE KEY `uid` (`_uid`);

--
-- Indexes for table `sensor_data`
--
ALTER TABLE `sensor_data`
    ADD PRIMARY KEY (`id`),
    ADD KEY `sensor_sencor_data` (`sensor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sensor`
--
ALTER TABLE `sensor`
    MODIFY `_uid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sensor_data`
--
ALTER TABLE `sensor_data`
    MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sensor_data`
--
ALTER TABLE `sensor_data`
    ADD CONSTRAINT `sensor_sencor_data` FOREIGN KEY (`sensor_id`) REFERENCES `sensor` (`_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
