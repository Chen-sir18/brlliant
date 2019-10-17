

/*
``goods 商品表
``汉字   轮播1  -  轮播4  均为每个页面最顶部的轮播
``Dotd   为  HOME1 中Deal of the day
··Bestseller 为三个 HOME 页面中的  tab切换部分的 Bestseller     此部分 含有allike的同时为页面  PAGES  部分  You may also like  内容同时也是轮播的
··Arrivals 为三个 HOME 页面中的  tab切换部分的 New Arrivals
··Rated 为三个 HOME 页面中的  tab切换部分的   Top Rated
··Selling 为 第二个 HOME页面中的  Best Selling   轮播
·· WFeatured 为  第二个 HOME页面中的 Weekly Featured轮播
*/



/*创建库*/
CREATE DATABASE vereesa;

SHOW DATABASES; -- 查看库
SHOW TABLES; -- 查看表

USE vereesa ; -- 打开库


DROP TABLE vuser;

/* 创建商品表，g_title为标题字段、g_price商品价格、g_img图片、g_details商品介绍、g_material商品材料介绍、class商品类型且为外键*/
CREATE TABLE goods(
	g_id INT PRIMARY KEY AUTO_INCREMENT,
	g_title VARCHAR(100),
	g_price DOUBLE(8,2),
	g_img VARCHAR(100),
	g_details LONGTEXT,
	g_material VARCHAR(50),
	class INT,
	g_part VARCHAR(50),
	g_part_to VARCHAR(50)
	);
ALTER TABLE goods ADD g_part_to VARCHAR(50)	
ALTER TABLE goods ADD CONSTRAINT g_fore FOREIGN KEY (class) REFERENCES  class(c_id) -- 添加商品表的外键
											
SELECT * FROM goods; -- 查看表

SELECT * FROM goods WHERE g_part = 'WFeatured'

INSERT INTO goods VALUES(

	NULL,'  Plastic Dining Chair ',45.00,'product-item-black-6.jpg',NULL,NULL,3,'WFeatured',NULL
	
	)

/*商品分类表 分类id、分类名称、分类的库存、库存商品价格*/             
CREATE TABLE class(
	c_id INT PRIMARY KEY AUTO_INCREMENT,
	c_name VARCHAR(100),
	c_store INT,
	c_price DOUBLE(8,2)
	);
/*插入数据  lamp 灯  库存数量  价格
······desk 桌子  库存  价格
······chair 椅子  库存  价格
·······clock 时钟 库存  价格
*/
INSERT INTO class VALUES(
	(NULL,'lamp',100,45.00),
	(NULL,'desk',100,45.00),
	(NULL,'chair',100,75.00),
	(NULL,'clock',100,379.00)
	)
	
SELECT * FROM class;

/*购物车表  id、图片、名称、颜色、尺寸、数量、总计价格 、类型 、用户id*/
CREATE TABLE shopCat(
	s_id INT PRIMARY KEY AUTO_INCREMENT,
	s_img VARCHAR(100),
	s_name VARCHAR(50),
	s_color VARCHAR(50),
	s_size VARCHAR(10),
	s_store INT,
	s_countPrice DOUBLE(8,2),
	class INT,
	s_userid INT,
	CONSTRAINT c_fore FOREIGN KEY (class) REFERENCES  class(c_id),       -- 添加购物车表的外键
	 CONSTRAINT c_user_fk FOREIGN KEY (s_userid) REFERENCES  vuser(v_id)   -- 添加用户表外键
	);
	
SELECT * FROM shopCat;	

INSERT INTO shopCat VALUES( 
	NULL,'product-item-6.jpg ','Plastic Dining Chair ',' Black/White/Brown ','XS/S/M/XL',1 , 45.00 , 3 , NULL
	)

/*博客表  id 、博客标题、详情、图片、博客用户名称、博客用户头像*/
CREATE TABLE blogs(
	b_id INT PRIMARY KEY AUTO_INCREMENT,
	b_title VARCHAR(50),
	b_details VARCHAR(100),
	b_img VARCHAR(100),
	b_username VARCHAR(50),
	photo VARCHAR(100),
	b_userid INT,
	CONSTRAINT b_fore FOREIGN KEY (b_userid) REFERENCES  vuser(v_id)   -- 添加博客表的外键
	);
	
SELECT * FROM blogs;
	
SELECT * FROM blogs WHERE b_img = 'blog2.jpg'

INSERT INTO blogs VALUES(
	
	NULL,
	'New Designer Outdoor Furniture    ',
	'Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.',
	 'blog-item-list-5.jpg',
	 'Adam Smith',
	 'avt-blog1.png',
	 NULL
	)

/*用户表 id、邮箱、用户名、密码、时间、状态*/
CREATE TABLE vuser(
	v_id INT PRIMARY KEY AUTO_INCREMENT,
	v_email VARCHAR(50),
	v_username VARCHAR(50),
	v_password VARCHAR(18),
	photo VARCHAR(100),
	v_createTime TIMESTAMP,
	v_status INT COMMENT '0表示失效，1表示正常'
	)
	
SELECT * FROM vuser;	

/*消息表  id  图片  标题   详情描述*/
CREATE TABLE latest (
	l_id INT PRIMARY KEY AUTO_INCREMENT,
	l_img VARCHAR(100),
	l_title VARCHAR(50),
	l_details VARCHAR(200)
	)
SELECT * FROM latest;

INSERT INTO latest VALUES(
	NULL,
	'slider-blog-thumb-4.jpg',
	'We know that buying furniture',
	' Class integer tellus praesent at torquent cras, potenti erat famesvolutpat etiam. '
	)














