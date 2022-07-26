DROP DATABASE IF EXISTS upload_files;

CREATE DATABASE upload_files;

USE upload_files;

/* Création des tables  */

CREATE TABLE `path_image`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (100) NOT NULL,
  `date` VARCHAR (100) NOT NULL,
  PRIMARY KEY (`id`)
);

/*------ insertions--------*/

/*INSERT INTO path_image (`id`, `name`, `date`) VALUES (1, 'jojo.png', '2022-06863Z-07T14:51:59.');*/
