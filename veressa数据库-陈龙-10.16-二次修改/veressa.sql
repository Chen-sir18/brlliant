/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.40 : Database - vereesa
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vereesa` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `vereesa`;

/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_title` varchar(50) DEFAULT NULL,
  `b_details` varchar(100) DEFAULT NULL,
  `b_img` varchar(100) DEFAULT NULL,
  `b_username` varchar(50) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `b_userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`b_id`),
  KEY `b_fore` (`b_userid`),
  CONSTRAINT `b_fore` FOREIGN KEY (`b_userid`) REFERENCES `vuser` (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `blogs` */

insert  into `blogs`(`b_id`,`b_title`,`b_details`,`b_img`,`b_username`,`photo`,`b_userid`) values (1,'Open The Gates For Lorem ','Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.','blog2.jpg','Adam Smith','avt-blog1.png',NULL),(2,'Fast-Track Your lorem ipsum ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog3.jpg','Adam Smith','avt-blog1.png',NULL),(3,'How to Build Your Perfect Lighting ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog-grid-1.jpg','Adam Smith','avt-blog1.png',NULL),(4,'We design functional furniture ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog-grid-2.jpg','Adam Smith','avt-blog1.png',NULL),(5,'Top 10 Tips To Grow  ','Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat[...]','blog-grid-3.jpg','Adam Smith','avt-blog1.png',NULL),(6,'Ipsum Dolor Ame Ctetur   ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog-grid-4.jpg','Adam Smith','avt-blog1.png',NULL),(7,'New Designer Outdoor Furniture ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog3.jpg','Adam Smith','avt-blog1.png',NULL),(8,'Take The Stress Out Of Lorem ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog4.jpg','Adam Smith','avt-blog1.png',NULL),(9,'Markup Image Alignment ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog5.jpg','Adam Smith','avt-blog1.png',NULL),(10,'We bring you the best by working Men ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','mansory-1.jpg','Adam Smith','avt-blog1.png',NULL),(11,'Mind Blowing Method ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog6.jpg','Adam Smith','avt-blog1.png',NULL),(12,'How to Build Your Perfect Lighting ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','blog2.jpg','Adam Smith','avt-blog1.png',NULL),(13,'Fast-Track Your lorem ipsum ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','mansory-2.jpg','Adam Smith','avt-blog1.png',NULL),(14,'Open The Gates For Lorem  ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','mansory-4.jpg','Adam Smith','avt-blog1.png',NULL),(15,'New Designer Outdoor Furniture   ','Phasellus condimentum nulla a arcu lacinia,a venenatis ex congue.Mauris nec ante magna.','mansory-3.jpg','Adam Smith','avt-blog1.png',NULL),(16,'Fast-Track Your lorem ipsum   ','Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat[...]','blog-item-list-1.jpg','Adam Smith','avt-blog1.png',NULL),(17,'Open The Gates For Lorem   ','Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.','blog-item-list-2.jpg','Adam Smith','avt-blog1.png',NULL),(18,'We bring you the best by working Men   ','Lorem ipsum dolor sit amet conse ctetur adipisicing elit do eiusmod tempor. Dolor sit amet[...]','blog-item-list-3.jpg','Adam Smith','avt-blog1.png',NULL),(19,'How to Build Your Perfect Lighting   ','Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.','blog-item-list-4.jpg','Adam Smith','avt-blog1.png',NULL),(20,'New Designer Outdoor Furniture    ','Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.','blog-item-list-5.jpg','Adam Smith','avt-blog1.png',NULL);

/*Table structure for table `class` */

DROP TABLE IF EXISTS `class`;

CREATE TABLE `class` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(100) DEFAULT NULL,
  `c_store` int(11) DEFAULT NULL,
  `c_price` double(8,2) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `class` */

insert  into `class`(`c_id`,`c_name`,`c_store`,`c_price`) values (1,'lamp',100,45.00),(2,'desk',100,45.00),(3,'chair',100,75.00),(4,'clock',100,379.00);

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `g_id` int(11) NOT NULL AUTO_INCREMENT,
  `g_title` varchar(100) DEFAULT NULL,
  `g_price` double(8,2) DEFAULT NULL,
  `g_img` varchar(100) DEFAULT NULL,
  `g_details` longtext,
  `g_material` varchar(50) DEFAULT NULL,
  `class` int(11) DEFAULT NULL,
  `g_part` varchar(50) DEFAULT NULL,
  `g_part_to` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`g_id`),
  KEY `g_fore` (`class`),
  CONSTRAINT `g_fore` FOREIGN KEY (`class`) REFERENCES `class` (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

/*Data for the table `goods` */

insert  into `goods`(`g_id`,`g_title`,`g_price`,`g_img`,`g_details`,`g_material`,`class`,`g_part`,`g_part_to`) values (1,'Sale up to 40% off!',270.00,'slider-thumb4.jpg','The home scandinavian',NULL,3,'轮播1',NULL),(2,'Black Friday Sale!',170.00,'slider-thumb5.jpg','Lighting Collection Big Sale',NULL,1,'轮播1',NULL),(3,'Vereesa Lamp Collection',170.00,'slider-thumb6.jpg','The inspiration behind our store',NULL,1,'轮播1',NULL),(6,'Plastic Dining Chair',45.00,'product-item-17.jpg',NULL,NULL,1,'Dotd',NULL),(7,'Plastic Dining Chair',45.00,'product-item-21.jpg',NULL,NULL,1,'Dotd',NULL),(9,'Plastic Dining Chair',45.00,'product-item-20.jpg',NULL,NULL,1,'Dotd',NULL),(10,'Plastic Dining Chair',45.00,'product-item-22.jpg',NULL,NULL,2,'Dotd',NULL),(11,'Plastic Dining Chair',45.00,'product-item-19.jpg',NULL,NULL,2,'Dotd',NULL),(12,'Plastic Dining Chair',45.00,'product-item-18.jpg',NULL,NULL,2,'Dotd',NULL),(16,'Plastic Dining Chair',45.00,'product-item-1.jpg',NULL,NULL,3,'Bestseller','allike'),(17,'Plastic Dining Chair',45.00,'product-item-2.jpg',NULL,NULL,3,'Bestseller','allike'),(18,'Plastic Dining Chair',45.00,'product-item-3.jpg',NULL,NULL,1,'Bestseller','allike'),(19,'Plastic Dining Chair',45.00,'product-item-4.jpg',NULL,NULL,3,'Bestseller','allike'),(20,'Plastic Dining Chair',45.00,'product-item-5.jpg',NULL,NULL,3,'Bestseller',NULL),(21,'Plastic Dining Chair',45.00,'product-item-6.jpg',NULL,NULL,3,'Bestseller',NULL),(22,'Plastic Dining Chair',45.00,'product-item-7.jpg',NULL,NULL,3,'Bestseller',NULL),(24,'Plastic Dining Chair',45.00,'product-item-8.jpg',NULL,NULL,3,'Bestseller',NULL),(25,'Plastic Dining Chair',45.00,'product-item-9.jpg',NULL,NULL,4,'Arrivals',NULL),(26,'Plastic Dining Chair',45.00,'product-item-10.jpg',NULL,NULL,4,'Arrivals',NULL),(27,'Plastic Dining Chair',45.00,'product-item-13.jpg',NULL,NULL,3,'Arrivals',NULL),(28,'Plastic Dining Chair',45.00,'product-item-14.jpg',NULL,NULL,1,'Arrivals',NULL),(29,'Plastic Dining Chair',45.00,'product-item-15.jpg',NULL,NULL,2,'Arrivals',NULL),(30,'Plastic Dining Chair',45.00,'product-item-16.jpg',NULL,NULL,1,'Arrivals',NULL),(31,'Plastic Dining Chair',45.00,'product-item-2.jpg',NULL,NULL,1,'Arrivals',NULL),(37,'Sale up to 40% off!',25.00,'slider-thumb-full-1.jpg','In stock with 4 colors',NULL,3,'轮播2',NULL),(38,' Start weekend off!',NULL,'slider-thumb-full-2.jpg',' Huge sale Up to 75% Off',NULL,3,'轮播2',NULL),(39,'Make your style Difference!',9.00,'slider-thumb-full-3.jpg',' Let’s create Your own style',NULL,3,'轮播2',NULL),(40,'About A Chair AAC 22',375.00,'product-item-11.jpg','Standard Issue Field Watch From Weiss Watch Co.',NULL,3,'Selling',NULL),(41,'About A Chair AAC 22',375.00,'product-item-5.jpg','Standard Issue Field Watch From Weiss Watch Co.',NULL,3,'Selling',NULL),(42,'Baniversary Chair',375.00,'product-item-10.jpg',' Standard Issue Field Watch From Weiss Watch Co.',NULL,3,'Selling',NULL),(43,' Table Supplies Sale!',NULL,'slider-thumb2.jpg',' Up to 75%  On All Store Items',NULL,2,'轮播3',NULL),(44,'  New Arrivals!',75.00,'slider-thumb3.jpg',' Living Room Limited Items',NULL,3,'轮播3',NULL),(45,'  New Arrivals! ',75.00,'slider-thumb1.jpg',' Living Room Limited Items',NULL,3,'轮播3',NULL),(46,'  Start ur weekend off right! ',75.00,'banner-01_full_width.jpg',' Chairs Sale 15% OFF ',NULL,3,'轮播4',NULL),(47,'  Little America™ Lamp ',250.00,'banner-02_full_width.jpg','Suit your style with our new  Lamp collection ',NULL,3,'轮播4',NULL),(48,'  Plastic Dining Chair ',45.00,'product-item-10.jpg',NULL,NULL,1,'Rated',NULL),(49,'  Plastic Dining Chair ',45.00,'product-item-12.jpg',NULL,NULL,1,'Rated',NULL),(50,'  Plastic Dining Chair ',45.00,'product-item-8.jpg',NULL,NULL,1,'Rated',NULL),(51,'  Plastic Dining Chair ',45.00,'product-item-4.jpg',NULL,NULL,1,'Rated',NULL),(52,'  Plastic Dining Chair ',45.00,'product-item-9.jpg',NULL,NULL,1,'Rated',NULL),(53,'  Plastic Dining Chair ',45.00,'product-item-13.jpg',NULL,NULL,1,'Rated',NULL),(54,'  Plastic Dining Chair ',45.00,'product-item-16.jpg',NULL,NULL,1,'Rated',NULL),(55,'  Plastic Dining Chair ',45.00,'product-item-8.jpg',NULL,NULL,1,'Rated',NULL),(56,'  Plastic Dining Chair ',45.00,'product-item-black-1.jpg',NULL,NULL,3,'WFeatured',NULL),(57,'  Plastic Dining Chair ',45.00,'product-item-black-2.jpg',NULL,NULL,3,'WFeatured',NULL),(58,'  Plastic Dining Chair ',45.00,'product-item-black-3.jpg',NULL,NULL,3,'WFeatured',NULL),(59,'  Plastic Dining Chair ',45.00,'product-item-black-4.jpg',NULL,NULL,3,'WFeatured',NULL),(60,'  Plastic Dining Chair ',45.00,'product-item-black-5.jpg',NULL,NULL,3,'WFeatured',NULL),(61,'  Plastic Dining Chair ',45.00,'product-item-black-6.jpg',NULL,NULL,3,'WFeatured',NULL),(62,'  Plastic Dining Chair ',45.00,'product-item-11.jpg',NULL,NULL,2,'Arrivals',NULL);

/*Table structure for table `latest` */

DROP TABLE IF EXISTS `latest`;

CREATE TABLE `latest` (
  `l_id` int(11) NOT NULL AUTO_INCREMENT,
  `l_img` varchar(100) DEFAULT NULL,
  `l_title` varchar(50) DEFAULT NULL,
  `l_details` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `latest` */

insert  into `latest`(`l_id`,`l_img`,`l_title`,`l_details`) values (1,'slider-blog-thumb-1.jpg','We bring you the best by working','Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue. Mauris nec ante magna. '),(2,'slider-blog-thumb-2.jpg','We know that buying furniture','Using Lorem Ipsum allows designers to put together layoutsand the form content '),(3,'slider-blog-thumb-3.jpg','We design functional furniture','Risus non porta suscipit lobortis habitasse felis, aptentinterdum pretium ut. '),(4,'slider-blog-thumb-4.jpg','We know that buying furniture',' Class integer tellus praesent at torquent cras, potenti erat famesvolutpat etiam. ');

/*Table structure for table `shopcat` */

DROP TABLE IF EXISTS `shopcat`;

CREATE TABLE `shopcat` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_img` varchar(100) DEFAULT NULL,
  `s_name` varchar(50) DEFAULT NULL,
  `s_color` varchar(50) DEFAULT NULL,
  `s_size` varchar(10) DEFAULT NULL,
  `s_store` int(11) DEFAULT NULL,
  `s_countPrice` double(8,2) DEFAULT NULL,
  `class` int(11) DEFAULT NULL,
  `s_userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`s_id`),
  KEY `c_fore` (`class`),
  KEY `c_user_fk` (`s_userid`),
  CONSTRAINT `c_fore` FOREIGN KEY (`class`) REFERENCES `class` (`c_id`),
  CONSTRAINT `c_user_fk` FOREIGN KEY (`s_userid`) REFERENCES `vuser` (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `shopcat` */

insert  into `shopcat`(`s_id`,`s_img`,`s_name`,`s_color`,`s_size`,`s_store`,`s_countPrice`,`class`,`s_userid`) values (1,'product-item-4.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL),(2,'product-item-1.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL),(3,'product-item-2.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL),(4,'product-item-3.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL),(5,'product-item-5.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL),(6,'product-item-6.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1,45.00,3,NULL);

/*Table structure for table `vuser` */

DROP TABLE IF EXISTS `vuser`;

CREATE TABLE `vuser` (
  `v_id` int(11) NOT NULL AUTO_INCREMENT,
  `v_email` varchar(50) DEFAULT NULL,
  `v_username` varchar(50) DEFAULT NULL,
  `v_password` varchar(18) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `v_createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `v_status` int(11) DEFAULT NULL COMMENT '0表示失效，1表示正常',
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `vuser` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
