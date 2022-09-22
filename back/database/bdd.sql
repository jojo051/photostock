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

CREATE TABLE `image`(
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR( 50 ) NOT NULL ,
  `size` VARCHAR( 25 ) NOT NULL ,
  `type` VARCHAR( 25 ) NOT NULL ,
  `blob` BLOB NOT NULL ,
  PRIMARY KEY ( `id` ) 
);
/*------ insertions--------*/

/*INSERT INTO path_image (`id`, `name`, `date`) VALUES (1, 'jojo.png', '2022-06863Z-07T14:51:59.');*/
INSERT INTO path_image (`id`, `name`, `date`) VALUES (1, 'grapefruit-slice-332-332.jpg', '2022-06863Z-07T14:51:59.');
INSERT INTO path_image (`id`, `name`, `date`) VALUES (2, 'istockphoto-1140180560-612x612.jpg', '2022-06863Z-07T14:51:59.');
INSERT INTO path_image (`id`, `name`, `date`) VALUES (3, 'troll.png', '2022-06863Z-07T14:51:59.');


INSERT INTO image (`id`, `name`, `size`, `type`,`blob`) VALUES (1,'test.jpg','31648','image/jpeg','<Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>');