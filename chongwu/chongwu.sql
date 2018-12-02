set names utf8;
drop database if exists chongwu;
create database chongwu charset=utf8;
use chongwu;
/*用户信息表*/
create table chongwu_user(
  uid  int primary key auto_increment,
  uname varchar(32),
  upwd varchar(16),
  phone varchar(11),
  avatar VARCHAR(128) #用户图像路径
);
/*用户信息*/
insert into chongwu_user values(null,'dingding','123456','13501234567','img/avatar/default.png');
insert into chongwu_user values(null,'dangdang','123456','13501234567','img/avatar/default.png');
insert into chongwu_user values(null,'doudou','123456','13501234567','img/avatar/default.png');
insert into chongwu_user values(null,'yaya','123456','13501234567','img/avatar/default.png');

create table chongwu_index_carouse(
	cid int primary key auto_increment,
	img varchar(128),
	title varchar(32)
);
insert into chongwu_index_carouse values(null,'img/2baff0d974f0d0e2da8fb34438e79b8c.jpg','轮播图');
insert into chongwu_index_carouse values(null,'img/f50215c98cf115f1db6da4cac463f0c1.jpg@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/523cb4f5902ef0c7f88dc86a28444914.jpg@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/3374436b6421f09b759ab929d95f75bc.jpg@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/61f854a2a272b7a915272103c84a64bf.jpg@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/6f8847a8c9534247f01df7df4bd4cc5d.png@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/af730e2d318bc4e802dbd6f7a4036d90.jpg@!water','轮播图');
insert into chongwu_index_carouse values(null,'img/1fc74058f65adfd48b0820cd3e94664c.jpg@!water','轮播图');

create table chongwu_index_right(
	cid int primary key auto_increment,
	img varchar(128),
	title varchar(32)
);
insert into chongwu_index_right values(null,'img/f667e688bb707ddd02d0ffcc6b3227ee.png','右边小广告');
insert into chongwu_index_right values(null,'img/35fcda32dc5d0af952949e7052f87220.png','右边小广告');
insert into chongwu_index_right values(null,'img/daec91842077d2a1bfd284338be45707.png','右边小广告');

create table chongwu_index_xiaosha(
	cid int primary key auto_increment,
	img varchar(128),
	imgZhe varchar(128),
	imgG varchar(128),
	title varchar(32)
);
insert into chongwu_index_xiaosha values(null,'img/7e81814782566309cc4511f4d5a5e167.jpg','img/cut1.png','img/daysur_end.png','可悠Cocoyo 轻薄强吸收宠物尿片/尿垫 M号 45*60cm 50片');
insert into chongwu_index_xiaosha values(null,'img/7e81814782566309cc4511f4d5a5e167.jpg','img/cut1.png','img/daysur_end.png','可悠Cocoyo 轻薄强吸收宠物尿片/尿垫 M号 45*60cm 50片');
insert into chongwu_index_xiaosha values(null,'img/7e81814782566309cc4511f4d5a5e167.jpg','img/cut1.png','img/daysur_end.png','可悠Cocoyo 轻薄强吸收宠物尿片/尿垫 M号 45*60cm 50片');
insert into chongwu_index_xiaosha values(null,'img/7e81814782566309cc4511f4d5a5e167.jpg','img/cut1.png','img/daysur_end.png','可悠Cocoyo 轻薄强吸收宠物尿片/尿垫 M号 45*60cm 50片');
insert into chongwu_index_xiaosha values(null,'img/7e81814782566309cc4511f4d5a5e167.jpg','img/cut1.png','img/daysur_end.png','可悠Cocoyo 轻薄强吸收宠物尿片/尿垫 M号 45*60cm 50片');

create table chongwu_index_gouliang(
	cid int primary key auto_increment,
	kid int,
	img varchar(128),
	titleBig varchar(64),
	title varchar(64),
	money double(10,2)
);
insert into chongwu_index_gouliang values(null,1,'img/af90be564b5053fd3b01fc6a09e02a1b.jpg','玫斯肠道护理犬粮','易消化好吸收 呵护泪腺',null);
insert into chongwu_index_gouliang values(null,1,'img/073a654507f948ec7de441b7baeda073.jpg','欧冠','原装进口 畅销全球57国',null);
insert into chongwu_index_gouliang values(null,1,'img/f8c562fbfeb62cfd6c70813e5fb9168e.jpg','伯纳天纯','生命之芯 源自天纯',null);
insert into chongwu_index_gouliang values(null,1,'img/0ee0a006978155f12a59aceb39c3fb2c.jpg','优基','富含100亿活的益生菌',null);
insert into chongwu_index_gouliang values(null,1,'img/0ee0a006978155f12a59aceb39c3fb2c.jpg','优基','富含100亿活的益生菌',null);
insert into chongwu_index_gouliang values(null,1,'img/0ee0a006978155f12a59aceb39c3fb2c.jpg','优基','富含100亿活的益生菌',null);

insert into chongwu_index_gouliang values(null,2,'img/b078237dd0fe9fd42d428fa22454756d.jpg@!200w-c','加拿大原装进口 原始猎食渴望 六种鱼肉+美毛专用配方 全犬粮 2kg',null,'290.00');
insert into chongwu_index_gouliang values(null,2,'img/ad634e600ecfece56fc3874748f37467.png@!200w-c','耐吉斯SOLUTION 比利时版 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg',null,'100.00');
insert into chongwu_index_gouliang values(null,2,'img/9da86a9eea993530763c4eb10befe2aa.png@!200w-c','加拿大原装进口纽顿 无谷低升糖系列 去骨鸡肉&火鸡肉全龄犬粮 1.82kg',null,'190.00');
insert into chongwu_index_gouliang values(null,2,'img/bfbc6ac03d8d96921e69e100269b9416.jpg@!200w-c','美国Wellness 宠物健康系列 鸡肉配方小型幼犬粮 2.7kg',null,'219.00');
insert into chongwu_index_gouliang values(null,2,'img/297e767a0184a74e4af69da6a994fc90.jpg@!200w-c','加拿大原装进口 爱肯拿Acana 无谷深海鱼配方全犬粮 11.4kg',null,'870.00');
insert into chongwu_index_gouliang values(null,2,'img/dc902e0a91b952dc46f7674a6498a5f8.jpg@!200w-c','比利时原装进口 欧帝亿IMPERIAL PAW 小型犬幼犬鸡肉配方粮 1.5kg',null,'163.00');
insert into chongwu_index_gouliang values(null,2,'img/d1910db9d7e66405c16f19d484cccd5b.png@!200w-c','耐吉斯SOLUTION 比利时版 鸡肉+三文鱼成犬粮 3磅/1.36kg',null,'95.00');
insert into chongwu_index_gouliang values(null,2,'img/f7d06714ad38fb920c61f3ef054b0c10.png@!200w-c','加拿大原装进口纽顿 无谷低升糖系列 去骨鳟鱼&三文鱼全龄犬粮 1.82kg',null,'190.00');

insert into chongwu_index_gouliang values(null,3,'img/de14f044aef6e92c9b1e047153e6aab8.jpg@!200w-c','海尔仕 香酥牛肉味全犬种成犬粮 10kg',null,'109.00');
insert into chongwu_index_gouliang values(null,3,'img/f379b04f67e8932493d330bff6597776.jpg@!200w-c','醇粹Purich 金标中大型犬幼犬粮 15kg',null,'498.00');
insert into chongwu_index_gouliang values(null,3,'img/e0df12aa4cd525731232a50005adb8bf.jpg@!200w-c','皇家royal canin PR27小型犬成犬专用狗粮2kg ',null,'111.00');
insert into chongwu_index_gouliang values(null,3,'img/a710c822f5ef0f992473c15b5046dcb2.jpg@!200w-c','比瑞吉 健康型天然粮 大型犬幼犬粮 15kg',null,'609.00');
insert into chongwu_index_gouliang values(null,3,'img/bf75a5722439d2625418fa60c1aaaf0a.jpg@!200w-c','比瑞吉 健康型天然粮 小型犬全价成犬粮 1.5kg',null,'99.00');
insert into chongwu_index_gouliang values(null,3,'img/cc852072d137ed4f761e08e86b43b4f2.jpg@!200w-c',' 醇粹Purich 18个月以下 大型犬奶糕及幼犬粮 15KG ',null,'398.00');
insert into chongwu_index_gouliang values(null,3,'img/d1910db9d7e66405c16f19d484cccd5b.png@!200w-c','耐吉斯SOLUTION 比利时版 鸡肉+三文鱼成犬粮 3磅/1.36kg',null,'95.00');
insert into chongwu_index_gouliang values(null,3,'img/f7d06714ad38fb920c61f3ef054b0c10.png@!200w-c','冠能大型犬幼犬全价犬粮 12kg',null,'559.00');

insert into chongwu_index_gouliang values(null,4,'img/6c83bba33d7a4966f27940aa63de8157.jpg@!200w-c','德国原装进口克劳德医生 犬用肾脏处方罐头 200g',null,'25.00');
insert into chongwu_index_gouliang values(null,4,'img/a1c1419a7e1af0eaa632187c511e67d4.jpg@!200w-c','德国原装进口克劳德医生 犬用肠道处方粮 1kg',null,'104.00');
insert into chongwu_index_gouliang values(null,4,'img/a2fac035fc7891a1b33288b22a814749.jpg@!200w-c','德国原装进口克劳德医生 犬用肝脏处方粮 1kg',null,'104.00');
insert into chongwu_index_gouliang values(null,4,'img/31c691fb0654b94f91235725c5572936.jpg@!200w-c','德国原装进口克劳德医生 犬用皮毛处方粮 1kg',null,'104.00');
insert into chongwu_index_gouliang values(null,4,'img/0ee3f3ca95593c80a84c0cb55a205a9e.jpg@!200w-c','德国原装进口克劳德医生 犬用肠道处方罐头 200g',null,'25.00');
insert into chongwu_index_gouliang values(null,4,'img/502687b348c2aa7514c9ba0ed4de1029.jpg@!200w-c','德国原装进口克劳德医生 犬用肝脏处方罐头 200g',null,'25.00');
insert into chongwu_index_gouliang values(null,4,'img/213f478a9e486bed285306db83acafea.jpg@!200w-c','宠儿香 家庭专用系列 美健膳食罐头 90g ',null,'16.00');
insert into chongwu_index_gouliang values(null,4,'img/98f877cec546eaf13b6b21bff6368600.jpg@!200w-c','K9 犬猫用处方罐 营养速补康复功能 170g',null,'25.00');

insert into chongwu_index_gouliang values(null,5,'img/9c2070d2319d58f55cf762e66cf18db2.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/ff40e64b2bd1a45631b3ac2fe06fe3a2.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/fc04341d858e72a3937fd5484f4a32e8.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/purchase_suppliers_file_1537336194.png',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/49a02619757b7b87d56230a78564b563.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/9c2070d2319d58f55cf762e66cf18db2.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/0702e6cbe56dcdeb3d62fbdc38c5c1a5.jpg',null,null,null);
insert into chongwu_index_gouliang values(null,5,'img/41ee95701493529d52782fd05e23dcab.jpg',null,null,null);


/*详情*/
create table chongwu_laptop_pic(
        pid int primary key auto_increment,
        lid int,
        sm varchar(128),
        md varchar(128),
        lg varchar(128)
);
insert into chongwu_laptop_pic values(null,1,'img/e387280f8f78df613b08168d870d1362.png','img/c0bfa7b46316959c8f351140af9b7828.png@!300w-c','img/73ccce4eb90bffb27c1ad7ec4669d15b.png@!water');
insert into chongwu_laptop_pic values(null,1,'img/c0bfa7b46316959c8f351140af9b78281.png','img/e387280f8f78df613b08168d870d1362.png@!300w-c','img/e387280f8f78df613b08168d870d1362.png@!water');
insert into chongwu_laptop_pic values(null,1,'img/c0bfa7b46316959c8f351140af9b78282.png','img/73ccce4eb90bffb27c1ad7ec4669d15b.png@!300w-c','img/73ccce4eb90bffb27c1ad7ec4669d15b1.png@!water');
insert into chongwu_laptop_pic values(null,2,'img/564b2fea64207fdb0c555835d30f56d2.jpg@!100w-c','img/564b2fea64207fdb0c555835d30f56d2.jpg@!300w-c','img/564b2fea64207fdb0c555835d30f56d2.jpg@!water');

insert into chongwu_laptop_pic values(null,3,'img/ce6ec462a2bdeb85e6aabb6500f5dcad.jpg@!100w-c','img/ce6ec462a2bdeb85e6aabb6500f5dcad.jpg@!300w-c','img/ce6ec462a2bdeb85e6aabb6500f5dcad.jpg@!water');
insert into chongwu_laptop_pic values(null,3,'img/1328d00dc49eac3042be09ed0c8f3995.jpg@!100w-c','img/1328d00dc49eac3042be09ed0c8f3995.jpg@!300w-c','img/1328d00dc49eac3042be09ed0c8f3995.jpg@!water');
insert into chongwu_laptop_pic values(null,3,'img/3a38b0e3fe81db2386e4b6368343eec6.jpg@!100w-c','img/3a38b0e3fe81db2386e4b6368343eec6.jpg@!300w-c','img/3a38b0e3fe81db2386e4b6368343eec6.jpg@!water');
insert into chongwu_laptop_pic values(null,4,'img/0d5a977d93182a6d6557d4ca71455cf6.jpg@!100w-c','img/0d5a977d93182a6d6557d4ca71455cf6.jpg@!300w-c','img/0d5a977d93182a6d6557d4ca71455cf6.jpg@!water');
insert into chongwu_laptop_pic values(null,4,'img/4163307f8cb6fa6a3c45f73aeec95a33.jpg@!100w-c','img/4163307f8cb6fa6a3c45f73aeec95a33.jpg@!300w-c','img/4163307f8cb6fa6a3c45f73aeec95a33.jpg@!water');
insert into chongwu_laptop_pic values(null,4,'img/6f99f236862928b2a0d7198504942860.jpg@!100w-c','img/6f99f236862928b2a0d7198504942860.jpg@!300w-c','img/6f99f236862928b2a0d7198504942860.jpg@!water');
insert into chongwu_laptop_pic values(null,4,'img/966d911fcd3902e424c34a00a78c1e03.jpg@!100w-c','img/966d911fcd3902e424c34a00a78c1e03.jpg@!300w-c','img/966d911fcd3902e424c34a00a78c1e03.jpg@!water');
insert into chongwu_laptop_pic values(null,5,'img/9bb6be6cf17820e005ba4575433dfd9c.jpg@!100w-c','img/9bb6be6cf17820e005ba4575433dfd9c.jpg@!300w-c','img/9bb6be6cf17820e005ba4575433dfd9c.jpg@!water');
insert into chongwu_laptop_pic values(null,5,'img/02d473f9fe78cab48bfb37f91ca0a128.jpg@!100w-c','img/02d473f9fe78cab48bfb37f91ca0a128.jpg@!300w-c','img/02d473f9fe78cab48bfb37f91ca0a128.jpg@!water');
insert into chongwu_laptop_pic values(null,5,'img/1b3e083ea26a89a4bbdaf96c13e8c569.jpg@!100w-c','img/1b3e083ea26a89a4bbdaf96c13e8c569.jpg@!300w-c','img/1b3e083ea26a89a4bbdaf96c13e8c569.jpg@!water');
insert into chongwu_laptop_pic values(null,5,'img/cadb07c98420e5b609b39d27c02512da.jpg@!100w-c','img/cadb07c98420e5b609b39d27c02512da.jpg@!300w-c','img/cadb07c98420e5b609b39d27c02512da.jpg@!water');
insert into chongwu_laptop_pic values(null,6,'img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!100w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!300w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!water');
insert into chongwu_laptop_pic values(null,6,'img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!100w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!300w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!water');
insert into chongwu_laptop_pic values(null,6,'img/0f83e56e3a7350a7a0c12d9e87ecc8fd.jpg@!100w-c','img/0f83e56e3a7350a7a0c12d9e87ecc8fd.jpg@!300w-c','img/0f83e56e3a7350a7a0c12d9e87ecc8fd.jpg@!water');
insert into chongwu_laptop_pic values(null,7,'img/a86c5b80f1bcc522e1c606cc3fb39581.jpg@!100w-c','img/a86c5b80f1bcc522e1c606cc3fb39581.jpg@!300w-c','img/a86c5b80f1bcc522e1c606cc3fb39581.jpg@!water');
insert into chongwu_laptop_pic values(null,7,'img/451cbe05b7f5fac75a303bfc220a08bd.jpg@!100w-c','img/451cbe05b7f5fac75a303bfc220a08bd.jpg@!300w-c','img/451cbe05b7f5fac75a303bfc220a08bd.jpg@!water');
insert into chongwu_laptop_pic values(null,7,'img/f277c14b5cf89d2f37ea8308ffe53727.jpg@!100w-c','img/f277c14b5cf89d2f37ea8308ffe53727.jpg@!300w-c','img/f277c14b5cf89d2f37ea8308ffe53727.jpg@!water');
insert into chongwu_laptop_pic values(null,7,'img/263b81a58ed792477d2c8794bc73bdf7.jpg@!100w-c','img/263b81a58ed792477d2c8794bc73bdf7.jpg@!300w-c','img/263b81a58ed792477d2c8794bc73bdf7.jpg@!water');
insert into chongwu_laptop_pic values(null,8,'img/0a30cf4cc99788fca908635b73f2c900.jpg@!100w-c','img/0a30cf4cc99788fca908635b73f2c900.jpg@!300w-c','img/0a30cf4cc99788fca908635b73f2c900.jpg@!water');
insert into chongwu_laptop_pic values(null,8,'img/bb43b91d386d46dc23791de766756cee.jpg@!100w-c','img/bb43b91d386d46dc23791de766756cee.jpg@!300w-c','img/bb43b91d386d46dc23791de766756cee.jpg@!water');
insert into chongwu_laptop_pic values(null,9,'img/e3158e0d01f6ba9bc799dfb2bfb90a70.jpg@!100w-c','img/e3158e0d01f6ba9bc799dfb2bfb90a70.jpg@!300w-c','img/e3158e0d01f6ba9bc799dfb2bfb90a70.jpg@!water');
insert into chongwu_laptop_pic values(null,9,'img/13b0ff47a78271f78a9b6f699ca5b080.jpg@!100w-c','img/13b0ff47a78271f78a9b6f699ca5b080.jpg@!300w-c','img/13b0ff47a78271f78a9b6f699ca5b080.jpg@!water');
insert into chongwu_laptop_pic values(null,10,'img/1f413625dacd95dde472be1a353cb212.jpg@!100w-c','img/1f413625dacd95dde472be1a353cb212.jpg@!300w-c','img/1f413625dacd95dde472be1a353cb212.jpg@!water');
insert into chongwu_laptop_pic values(null,10,'img/fc1a7f81acc056be56117e2d7eef126a.jpg@!100w-c','img/fc1a7f81acc056be56117e2d7eef126a.jpg@!300w-c','img/fc1a7f81acc056be56117e2d7eef126a.jpg@!water');
insert into chongwu_laptop_pic values(null,11,'img/c6ed4c5e9a2861d30c1c018731680933.jpg@!100w-c','img/c6ed4c5e9a2861d30c1c018731680933.jpg@!300w-c','img/c6ed4c5e9a2861d30c1c018731680933.jpg@!water');
insert into chongwu_laptop_pic values(null,11,'img/025fa44d36774bdc969d2b0b27f47a4d.jpg@!100w-c','img/025fa44d36774bdc969d2b0b27f47a4d.jpg@!300w-c','img/025fa44d36774bdc969d2b0b27f47a4d.jpg@!water');
insert into chongwu_laptop_pic values(null,11,'img/986bf165a5685f592e3a7cb8555abb0c.jpg@!100w-c','img/986bf165a5685f592e3a7cb8555abb0c.jpg@!300w-c','img/986bf165a5685f592e3a7cb8555abb0c.jpg@!water');
insert into chongwu_laptop_pic values(null,11,'img/bb7bf6b8db361f8d6b356a28ea1198f7.jpg@!100w-c','img/bb7bf6b8db361f8d6b356a28ea1198f7.jpg@!300w-c','img/bb7bf6b8db361f8d6b356a28ea1198f7.jpg@!water');
insert into chongwu_laptop_pic values(null,12,'img/bccc63647cb14a05ad5239d7ae31cb56.jpg@!100w-c','img/bccc63647cb14a05ad5239d7ae31cb56.jpg@!300w-c','img/bccc63647cb14a05ad5239d7ae31cb56.jpg@!water');
insert into chongwu_laptop_pic values(null,12,'img/b3e3791b95b28fdc3c9acbb304f51330.jpg@!100w-c','img/b3e3791b95b28fdc3c9acbb304f51330.jpg@!300w-c','img/b3e3791b95b28fdc3c9acbb304f51330.jpg@!water');
insert into chongwu_laptop_pic values(null,12,'img/275a7bd68e9134591552041fdd1a2303.jpg@!100w-c','img/275a7bd68e9134591552041fdd1a2303.jpg@!300w-c','img/275a7bd68e9134591552041fdd1a2303.jpg@!water');
insert into chongwu_laptop_pic values(null,12,'img/b945bddaa33dfd61d0126f2b0ee4af9d.jpg@!100w-c','img/b945bddaa33dfd61d0126f2b0ee4af9d.jpg@!300w-c','img/b945bddaa33dfd61d0126f2b0ee4af9d.jpg@!water');
insert into chongwu_laptop_pic values(null,12,'img/8e14e20063e6c7d6da5471f5937989aa.jpg@!100w-c','img/8e14e20063e6c7d6da5471f5937989aa.jpg@!300w-c','img/8e14e20063e6c7d6da5471f5937989aa.jpg@!water');
insert into chongwu_laptop_pic values(null,13,'img/4102452ff7264cd98ad7c146a2876c0a.jpg@!100w-c','img/4102452ff7264cd98ad7c146a2876c0a.jpg@!300w-c','img/4102452ff7264cd98ad7c146a2876c0a.jpg@!water');
insert into chongwu_laptop_pic values(null,13,'img/414e52a875ddc91478025884bf9b4b3c.jpg@!100w-c','img/414e52a875ddc91478025884bf9b4b3c.jpg@!300w-c','img/414e52a875ddc91478025884bf9b4b3c.jpg@!water');
insert into chongwu_laptop_pic values(null,13,'img/6358bb6ffdcc4273723ead94cd7eaa07.jpg@!100w-c','img/6358bb6ffdcc4273723ead94cd7eaa07.jpg@!300w-c','img/6358bb6ffdcc4273723ead94cd7eaa07.jpg@!water');
insert into chongwu_laptop_pic values(null,13,'img/9a91fb12a5211c49b887656c24bc3f4b.jpg@!100w-c','img/9a91fb12a5211c49b887656c24bc3f4b.jpg@!300w-c','img/9a91fb12a5211c49b887656c24bc3f4b.jpg@!water');
insert into chongwu_laptop_pic values(null,14,'img/57d896fa67e3f876990cae7e9635ab17.jpg@!100w-c','img/57d896fa67e3f876990cae7e9635ab17.jpg@!300w-c','img/57d896fa67e3f876990cae7e9635ab17.jpg@!water');
insert into chongwu_laptop_pic values(null,14,'img/566172c885c2af8375818aa6fd173db7.jpg@!100w-c','img/566172c885c2af8375818aa6fd173db7.jpg@!300w-c','img/566172c885c2af8375818aa6fd173db7.jpg@!water');
insert into chongwu_laptop_pic values(null,14,'img/9e8a4c9c1fdd67d679f9bf50eab09299.jpg@!100w-c','img/9e8a4c9c1fdd67d679f9bf50eab09299.jpg@!300w-c','img/9e8a4c9c1fdd67d679f9bf50eab09299.jpg@!water');
insert into chongwu_laptop_pic values(null,14,'img/7d5845950b5291254d25ee96567fdf15.jpg@!100w-c','img/7d5845950b5291254d25ee96567fdf15.jpg@!300w-c','img/7d5845950b5291254d25ee96567fdf15.jpg@!water');
insert into chongwu_laptop_pic values(null,15,'img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!100w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!300w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!water');
insert into chongwu_laptop_pic values(null,15,'img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!100w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!300w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!water');
insert into chongwu_laptop_pic values(null,16,'img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!100w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!300w-c','img/ac17b5194f2453a7dd83fb09979b4f26.jpg@!water');
insert into chongwu_laptop_pic values(null,16,'img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!100w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!300w-c','img/95dd27fc9e975a13b48a7dc9652e47c2.jpg@!water');



insert into chongwu_laptop_pic values(null,17,'img/d907ad80892a77208a44ce936d6d0191.jpg@!100w-c','img/d907ad80892a77208a44ce936d6d0191.jpg@!300w-c','img/d907ad80892a77208a44ce936d6d0191.jpg@!water');
insert into chongwu_laptop_pic values(null,17,'img/ed9575bce53fa839dc165e7540eccc08.jpg@!100w-c','img/ed9575bce53fa839dc165e7540eccc08.jpg@!300w-c','img/ed9575bce53fa839dc165e7540eccc08.jpg@!water');
insert into chongwu_laptop_pic values(null,17,'img/71ead0e33fda50fb882f0f8b0b5f9829.png@!100w-c','img/71ead0e33fda50fb882f0f8b0b5f9829.png@!300w-c','img/71ead0e33fda50fb882f0f8b0b5f9829.png@!water');
insert into chongwu_laptop_pic values(null,17,'img/56ab5288c8f3cf044f4d52e3311ffd4c.jpg@!100w-c','img/56ab5288c8f3cf044f4d52e3311ffd4c.jpg@!300w-c','img/56ab5288c8f3cf044f4d52e3311ffd4c.jpg@!water');
insert into chongwu_laptop_pic values(null,18,'img/9bf51534f0f41ee323087208277c0427.jpg@!100w-c','img/9bf51534f0f41ee323087208277c0427.jpg@!300w-c','img/9bf51534f0f41ee323087208277c0427.jpg@!water');
insert into chongwu_laptop_pic values(null,18,'img/a757054f6fbf688cf9520c689001bda0.jpg@!100w-c','img/a757054f6fbf688cf9520c689001bda0.jpg@!300w-c','img/a757054f6fbf688cf9520c689001bda0.jpg@!water');
insert into chongwu_laptop_pic values(null,18,'img/5eb7481df8a1c7c3e605080e1c641365.png@!100w-c','img/5eb7481df8a1c7c3e605080e1c641365.png@!300w-c','img/5eb7481df8a1c7c3e605080e1c641365.png@!water');
insert into chongwu_laptop_pic values(null,18,'img/4bcb2cfc31bcccd13e25e3f6aba6d9a1.jpg@!100w-c','img/4bcb2cfc31bcccd13e25e3f6aba6d9a1.jpg@!300w-c','img/4bcb2cfc31bcccd13e25e3f6aba6d9a1.jpg@!water');
insert into chongwu_laptop_pic values(null,18,'img/88d7a48f7b871e1b333b7c37963c6646.jpg@!100w-c','img/88d7a48f7b871e1b333b7c37963c6646.jpg@!300w-c','img/88d7a48f7b871e1b333b7c37963c6646.jpg@!water');
insert into chongwu_laptop_pic values(null,19,'img/a2831da85d9fc8355c17ac4abd2d3205.jpg@!100w-c','img/d6d2e477ea35afc1a6d4cc0464cdd52b.png@!300w-c','img/a2831da85d9fc8355c17ac4abd2d3205.jpg@!water');
insert into chongwu_laptop_pic values(null,19,'img/95d82807d4a8712626d0299a99a4ffcb.jpg@!100w-c','img/95d82807d4a8712626d0299a99a4ffcb.jpg@!300w-c','img/95d82807d4a8712626d0299a99a4ffcb.jpg@!water');
insert into chongwu_laptop_pic values(null,19,'img/d6d2e477ea35afc1a6d4cc0464cdd52b.png@!100w-c','img/d6d2e477ea35afc1a6d4cc0464cdd52b.png@!300w-c','img/d6d2e477ea35afc1a6d4cc0464cdd52b.png@!water');
insert into chongwu_laptop_pic values(null,19,'img/ce51d3a2d6a99f4947556c836571ceb7.jpg@!100w-c','img/ce51d3a2d6a99f4947556c836571ceb7.jpg@!300w-c','img/ce51d3a2d6a99f4947556c836571ceb7.jpg@!water');
insert into chongwu_laptop_pic values(null,20,'img/8baf786e9e6e0cd424ef11754a1a496d.jpg@!100w-c','img/8baf786e9e6e0cd424ef11754a1a496d.jpg@!300w-c','img/8baf786e9e6e0cd424ef11754a1a496d.jpg@!water');
insert into chongwu_laptop_pic values(null,20,'img/d1fa612e0443fd04a92ddd4a468dc4bc.jpg@!100w-c','img/d1fa612e0443fd04a92ddd4a468dc4bc.jpg@!300w-c','img/d1fa612e0443fd04a92ddd4a468dc4bc.jpg@!water');
insert into chongwu_laptop_pic values(null,20,'img/a679c9363e1633e0b4da3bbef188c6c4.jpg@!100w-c','img/a679c9363e1633e0b4da3bbef188c6c4.jpg@!300w-c','img/a679c9363e1633e0b4da3bbef188c6c4.jpg@!water');
insert into chongwu_laptop_pic values(null,21,'img/8d3c3a4523bf4b6d1fefaf73501073d9.jpg@!100w-c','img/8d3c3a4523bf4b6d1fefaf73501073d9.jpg@!300w-c','img/8d3c3a4523bf4b6d1fefaf73501073d9.jpg@!water');
insert into chongwu_laptop_pic values(null,21,'img/3663c0995d5ec031d3976e00c41d81c7.jpg@!100w-c','img/3663c0995d5ec031d3976e00c41d81c7.jpg@!300w-c','img/3663c0995d5ec031d3976e00c41d81c7.jpg@!water');
insert into chongwu_laptop_pic values(null,21,'img/aed06efc2d5639859e60136892c3cf87.png@!100w-c','img/aed06efc2d5639859e60136892c3cf87.png@!300w-c','img/aed06efc2d5639859e60136892c3cf87.png@!water');
insert into chongwu_laptop_pic values(null,21,'img/acc88bf12b41bbaa8af02e18bc69faa5.jpg@!100w-c','img/acc88bf12b41bbaa8af02e18bc69faa5.jpg@!300w-c','img/acc88bf12b41bbaa8af02e18bc69faa5.jpg@!water');
insert into chongwu_laptop_pic values(null,21,'img/3ab4769af5771acf190fd54ac59c6673.jpg@!100w-c','img/3ab4769af5771acf190fd54ac59c6673.jpg@!300w-c','img/3ab4769af5771acf190fd54ac59c6673.jpg@!water');
insert into chongwu_laptop_pic values(null,22,'img/6fcc444b19403cd54a466316e4ccb766.jpg@!100w-c','img/1f413625dacd95dde472be1a353cb212.jpg@!300w-c','img/6fcc444b19403cd54a466316e4ccb766.jpg@!water');
insert into chongwu_laptop_pic values(null,22,'img/0a15999e32bec021e21dbec4d33b27e8.png@!100w-c','img/0a15999e32bec021e21dbec4d33b27e8.png@!300w-c','img/0a15999e32bec021e21dbec4d33b27e8.png@!water');
insert into chongwu_laptop_pic values(null,22,'img/3d86becabdb195b97964f68ae25d55e6.jpg@!100w-c','img/3d86becabdb195b97964f68ae25d55e6.jpg@!300w-c','img/3d86becabdb195b97964f68ae25d55e6.jpg@!water');
insert into chongwu_laptop_pic values(null,22,'img/29576ff4bf0c737d41abdaa55d8a5305.jpg@!100w-c','img/29576ff4bf0c737d41abdaa55d8a5305.jpg@!300w-c','img/29576ff4bf0c737d41abdaa55d8a5305.jpg@!water');
insert into chongwu_laptop_pic values(null,23,'img/e356d95840d1ae7001461a2e7f67d23d.jpg@!100w-c','img/e356d95840d1ae7001461a2e7f67d23d.jpg@!300w-c','img/e356d95840d1ae7001461a2e7f67d23d.jpg@!water');
insert into chongwu_laptop_pic values(null,23,'img/38e1ce0060acced230b29c2ee26505c8.jpg@!100w-c','img/38e1ce0060acced230b29c2ee26505c8.jpg@!300w-c','img/38e1ce0060acced230b29c2ee26505c8.jpg@!water');
insert into chongwu_laptop_pic values(null,23,'img/ae067eb25f5fee642d3fb0da1f478b03.jpg@!100w-c','img/ae067eb25f5fee642d3fb0da1f478b03.jpg@!300w-c','img/ae067eb25f5fee642d3fb0da1f478b03.jpg@!water');
insert into chongwu_laptop_pic values(null,24,'img/e2e9d674d95259658b679a40a418ec6c.jpg@!100w-c','img/e2e9d674d95259658b679a40a418ec6c.jpg@!300w-c','img/e2e9d674d95259658b679a40a418ec6c.jpg@!water');
insert into chongwu_laptop_pic values(null,24,'img/35ba103aac5cfed808b61843312627ae.jpg@!100w-c','img/35ba103aac5cfed808b61843312627ae.jpg@!300w-c','img/35ba103aac5cfed808b61843312627ae.jpg@!water');
insert into chongwu_laptop_pic values(null,24,'img/873f4ae32aa88e717e27f312dc73f206.jpg@!100w-c','img/873f4ae32aa88e717e27f312dc73f206.jpg@!300w-c','img/873f4ae32aa88e717e27f312dc73f206.jpg@!water');
insert into chongwu_laptop_pic values(null,24,'img/20ad10c0445ae0134d9302b66106690a.jpg@!100w-c','img/20ad10c0445ae0134d9302b66106690a.jpg@!300w-c','img/20ad10c0445ae0134d9302b66106690a.jpg@!water');
insert into chongwu_laptop_pic values(null,25,'img/65e3daeb5843a849bf08fa19bc43a6e0.jpg@!100w-c','img/65e3daeb5843a849bf08fa19bc43a6e0.jpg@!300w-c','img/65e3daeb5843a849bf08fa19bc43a6e0.jpg@!water');
insert into chongwu_laptop_pic values(null,25,'img/59a87c7c455706197a16301d4c0fa656.jpg@!100w-c','img/59a87c7c455706197a16301d4c0fa656.jpg@!300w-c','img/59a87c7c455706197a16301d4c0fa656.jpg@!water');
insert into chongwu_laptop_pic values(null,25,'img/6c0ba75a6de97707761aa9a2393255b2.jpg@!100w-c','img/6c0ba75a6de97707761aa9a2393255b2.jpg@!300w-c','img/6c0ba75a6de97707761aa9a2393255b2.jpg@!water');
insert into chongwu_laptop_pic values(null,25,'img/4048a5bb483c1e34efd4613e1b0c67d3.jpg@!100w-c','img/4048a5bb483c1e34efd4613e1b0c67d3.jpg@!300w-c','img/4048a5bb483c1e34efd4613e1b0c67d3.jpg@!water');
insert into chongwu_laptop_pic values(null,26,'img/03f81fc29fddba139fa8a4c0a1caf865.jpg@!100w-c','img/03f81fc29fddba139fa8a4c0a1caf865.jpg@!300w-c','img/03f81fc29fddba139fa8a4c0a1caf865.jpg@!water');
insert into chongwu_laptop_pic values(null,26,'img/9f4de246fbac9e94aa09be8179976326.jpg@!100w-c','img/9f4de246fbac9e94aa09be8179976326.jpg@!300w-c','img/9f4de246fbac9e94aa09be8179976326.jpg@!water');
insert into chongwu_laptop_pic values(null,26,'img/40545cbf2ded3de907a7ee70f4bdddc6.jpg@!100w-c','img/40545cbf2ded3de907a7ee70f4bdddc6.jpg@!300w-c','img/40545cbf2ded3de907a7ee70f4bdddc6.jpg@!water');
insert into chongwu_laptop_pic values(null,27,'img/e819588faf14796311e896d73621cf72.jpg@!100w-c','img/e819588faf14796311e896d73621cf72.jpg@!300w-c','img/e819588faf14796311e896d73621cf72.jpg@!water');
insert into chongwu_laptop_pic values(null,27,'img/7d11b57f81479ec5c1a2731074fd5e15.jpg@!100w-c','img/7d11b57f81479ec5c1a2731074fd5e15.jpg@!300w-c','img/7d11b57f81479ec5c1a2731074fd5e15.jpg@!water');
insert into chongwu_laptop_pic values(null,27,'img/0ca0029e2ef7813fe87cd25eea2dd416.jpg@!100w-c','img/0ca0029e2ef7813fe87cd25eea2dd416.jpg@!300w-c','img/0ca0029e2ef7813fe87cd25eea2dd416.jpg@!water');
insert into chongwu_laptop_pic values(null,28,'img/406fa47ea69bc69758273f0a8e03c608.jpg@!100w-c','img/406fa47ea69bc69758273f0a8e03c608.jpg@!300w-c','img/406fa47ea69bc69758273f0a8e03c608.jpg@!water');
insert into chongwu_laptop_pic values(null,28,'img/b558763f4b8848277ee17e0986905eaf.jpg@!100w-c','img/b558763f4b8848277ee17e0986905eaf.jpg@!300w-c','img/b558763f4b8848277ee17e0986905eaf.jpg@!water');
insert into chongwu_laptop_pic values(null,28,'img/0280d2e602476391c4ce6ed801c26ae7.jpg@!100w-c','img/0280d2e602476391c4ce6ed801c26ae7.jpg@!300w-c','img/0280d2e602476391c4ce6ed801c26ae7.jpg@!water');
insert into chongwu_laptop_pic values(null,29,'img/1d28d43aaf9955257908493f75088a8a.jpg@!100w-c','img/1d28d43aaf9955257908493f75088a8a.jpg@!300w-c','img/1d28d43aaf9955257908493f75088a8a.jpg@!water');
insert into chongwu_laptop_pic values(null,29,'img/1801c28280c72a3b1b091059473df37e.jpg@!100w-c','img/1801c28280c72a3b1b091059473df37e.jpg@!300w-c','img/1801c28280c72a3b1b091059473df37e.jpg@!water');
insert into chongwu_laptop_pic values(null,29,'img/a2fb54cac2f1895c75bb23f8751d8e6f.jpg@!100w-c','img/a2fb54cac2f1895c75bb23f8751d8e6f.jpg@!300w-c','img/a2fb54cac2f1895c75bb23f8751d8e6f.jpg@!water');
insert into chongwu_laptop_pic values(null,30,'img/dc98a3bed6e5e4328a225f412012622d.jpg@!100w-c','img/dc98a3bed6e5e4328a225f412012622d.jpg@!300w-c','img/dc98a3bed6e5e4328a225f412012622d.jpg@!water');
insert into chongwu_laptop_pic values(null,30,'img/52aa6ef432d5fc41b4f4ef4e4ed0f761.jpg@!100w-c','img/52aa6ef432d5fc41b4f4ef4e4ed0f761.jpg@!300w-c','img/52aa6ef432d5fc41b4f4ef4e4ed0f761.jpg@!water');
insert into chongwu_laptop_pic values(null,30,'img/db004ae3aa26c257430a9ea5c8cea760.jpg@!100w-c','img/db004ae3aa26c257430a9ea5c8cea760.jpg@!300w-c','img/db004ae3aa26c257430a9ea5c8cea760.jpg@!water');
insert into chongwu_laptop_pic values(null,31,'img/ee146b7d56aeac033f5ee86f9b636f10.jpg@!100w-c','img/ee146b7d56aeac033f5ee86f9b636f10.jpg@!300w-c','img/ee146b7d56aeac033f5ee86f9b636f10.jpg@!water');
insert into chongwu_laptop_pic values(null,31,'img/d4e3d76d6203b07e92e6c899329acd78.jpg@!100w-c','img/d4e3d76d6203b07e92e6c899329acd78.jpg@!300w-c','img/d4e3d76d6203b07e92e6c899329acd78.jpg@!water');
insert into chongwu_laptop_pic values(null,31,'img/d4e3d76d6203b07e92e6c899329acd78.jpg@!100w-c','img/d4e3d76d6203b07e92e6c899329acd78.jpg@!300w-c','img/d4e3d76d6203b07e92e6c899329acd78.jpg@!water');
insert into chongwu_laptop_pic values(null,32,'img/f0db49b92409a9e16f476db4fb641459.jpg@!100w-c','img/f0db49b92409a9e16f476db4fb641459.jpg@!300w-c','img/f0db49b92409a9e16f476db4fb641459.jpg@!water');
insert into chongwu_laptop_pic values(null,32,'img/4ed73fb99b50b53c42729147a1f916be.jpg@!100w-c','img/4ed73fb99b50b53c42729147a1f916be.jpg@!300w-c','img/4ed73fb99b50b53c42729147a1f916be.jpg@!water');
insert into chongwu_laptop_pic values(null,32,'img/db369a158553ba81a496facdd4ba475c.jpg@!100w-c','img/db369a158553ba81a496facdd4ba475c.jpg@!300w-c','img/db369a158553ba81a496facdd4ba475c.jpg@!water');
insert into chongwu_laptop_pic values(null,33,'img/6fff65274b9be6f1e40e9b34bfecaf14.jpg@!100w-c','img/6fff65274b9be6f1e40e9b34bfecaf14.jpg@!300w-c','img/6fff65274b9be6f1e40e9b34bfecaf14.jpg@!water');
insert into chongwu_laptop_pic values(null,33,'img/8e5836a1d17ad209a4fde7199af70fe1.jpg@!100w-c','img/8e5836a1d17ad209a4fde7199af70fe1.jpg@!300w-c','img/8e5836a1d17ad209a4fde7199af70fe1.jpg@!water');
insert into chongwu_laptop_pic values(null,33,'img/53a70791b107503b02913b4d3da53b31.jpg@!100w-c','img/53a70791b107503b02913b4d3da53b31.jpg@!300w-c','img/53a70791b107503b02913b4d3da53b31.jpg@!water');
insert into chongwu_laptop_pic values(null,33,'img/587c3a7e1fec305cbf441c266c2a1dff.jpg@!100w-c','img/587c3a7e1fec305cbf441c266c2a1dff.jpg@!300w-c','img/587c3a7e1fec305cbf441c266c2a1dff.jpg@!water');
insert into chongwu_laptop_pic values(null,34,'img/3bd2630e10a3a91175d69a88db7aeb81.jpg@!100w-c','img/3bd2630e10a3a91175d69a88db7aeb81.jpg@!300w-c','img/3bd2630e10a3a91175d69a88db7aeb81.jpg@!water');
insert into chongwu_laptop_pic values(null,34,'img/c9946441082a952c9aab42fddd5b720e.jpg@!100w-c','img/c9946441082a952c9aab42fddd5b720e.jpg@!300w-c','img/c9946441082a952c9aab42fddd5b720e.jpg@!water');
insert into chongwu_laptop_pic values(null,34,'img/3c13b1457679e4bbe4932361e641a77d.jpg@!100w-c','img/3c13b1457679e4bbe4932361e641a77d.jpg@!300w-c','img/3c13b1457679e4bbe4932361e641a77d.jpg@!water');
insert into chongwu_laptop_pic values(null,34,'img/3fe643edeb321b216381f0b3e9c360c1.jpg@!100w-c','img/3fe643edeb321b216381f0b3e9c360c1.jpg@!300w-c','img/3fe643edeb321b216381f0b3e9c360c1.jpg@!water');
insert into chongwu_laptop_pic values(null,35,'img/b308954a8b2a0a25042625cbd0b50f23.jpg@!100w-c','img/b308954a8b2a0a25042625cbd0b50f23.jpg@!300w-c','img/b308954a8b2a0a25042625cbd0b50f23.jpg@!water');
insert into chongwu_laptop_pic values(null,35,'img/d9d90d2746d31dd5f52abd280c832a65.jpg@!100w-c','img/d9d90d2746d31dd5f52abd280c832a65.jpg@!300w-c','img/d9d90d2746d31dd5f52abd280c832a65.jpg@!water');
insert into chongwu_laptop_pic values(null,35,'img/3413aea3e2b625feee3b810fe29411cc.jpg@!100w-c','img/3413aea3e2b625feee3b810fe29411cc.jpg@!300w-c','img/3413aea3e2b625feee3b810fe29411cc.jpg@!water');
insert into chongwu_laptop_pic values(null,35,'img/0cc946d18c3c9094664135e6c48dd6c0.jpg@!100w-c','img/0cc946d18c3c9094664135e6c48dd6c0.jpg@!300w-c','img/0cc946d18c3c9094664135e6c48dd6c0.jpg@!water');

create table chongwu_laptop(
        id int primary key auto_increment,
        lid int,
        title varchar(128),
        little_title varchar(128),
        money double(10,2),
        chongwu_money double(10,2),
        sale int,
        evaluate int,
        consult int,
        give double(10,2),
        weight varchar(32)
);
insert into chongwu_laptop values(null,1,'耐吉斯SOLUTION 比利时版 鸡肉+三文鱼配方奶糕粮 18磅/8.16kg','天然食材 低敏呵护 亮丽皮毛 美味享受','576.00','460.00','304','296','47','46','8.16kg');
insert into chongwu_laptop values(null,1,'耐吉斯SOLUTION 比利时版 鸡肉+三文鱼狗狗奶糕 1.36kg','天然食材 低敏呵护 亮丽皮毛 美味享受','174.00','105.00','911','296','47','10','1.36kg');
insert into chongwu_laptop values(null,2,'冠能 小型犬成犬全价犬粮 800g','补钙发育 小型犬精准定制配方','72.00','56.00','5901','1175','291','5','800g');
insert into chongwu_laptop values(null,2,'冠能小型犬成犬全价犬粮 7kg','雀巢旗下狗粮 经典配方 好营养 助消化 促成长','450.00','349.00 ','5901','1175','291','34','7kg');
insert into chongwu_laptop values(null,3,'冠能 小型犬挑食及美毛配方成犬全价犬粮 2.5kg','雀巢旗下犬粮 经典配方 助消化 促成长','204.00','169.00 ','12285','2075','385','16','2.5kg');
insert into chongwu_laptop values(null,3,'冠能 小型犬成犬全价犬粮 2.5kg','补钙发育 小型犬精准定制配方','204.00','169.00 ','5901','1175','291','16','2.5kg');
insert into chongwu_laptop values(null,3,'冠能 小型犬挑食及美毛配方成犬全价犬粮 800g','明眼美毛 小型犬精准定制配方','72.00','56.00 ','12285','2075','385','5','800g');
insert into chongwu_laptop values(null,4,'冠能 小型犬幼犬全价犬粮 2.5kg','持续为幼犬提供免疫初乳保护','222.00','179.00 ','9691','2147','799','17','2.5kg');
insert into chongwu_laptop values(null,4,'冠能 小型犬幼犬全价犬粮 7kg','雀巢旗下狗粮 经典配方 好营养 助消化 促成长','474.00','369.00  ','9691','2147','799','36','7kg');
insert into chongwu_laptop values(null,4,'冠能 小型犬幼犬全价犬粮 800g','持续为幼犬提供免疫初乳保护','78.00','59.00','9691','2147','799','5','800g');
insert into chongwu_laptop values(null,5,'冠能 大型犬成犬全价犬粮 2.5kg','科学营养配方 易消化吸收 维护健康状态 优护一生','198.00','159.00 ','970','705','194','15','2.5kg');
insert into chongwu_laptop values(null,5,'冠能 大型犬成犬全价犬粮 12kg','科学营养配方 易消化吸收 维护健康状态 优护一生','684.00','549.00','2391','705','194','54','12kg');
insert into chongwu_laptop values(null,6,'冠能 中型犬成犬全价犬粮 2.5kg','雀巢旗下犬粮 经典配方 助长营养','198.00','159.00 ','9741','1413','557','15','2.5kg');
insert into chongwu_laptop values(null,6,'冠能 中型犬成犬全价犬粮 12kg','雀巢旗下犬粮 经典配方 助消化 促成长','684.00','549.00 ','9741','1413','557','54','12kg');
insert into chongwu_laptop values(null,7,'冠能 小型犬挑食及美毛配方成犬全价犬粮 800g','明眼美毛 小型犬精准定制配方','72.00','56.00 ','12285','2090','385','5','800g');
insert into chongwu_laptop values(null,7,'冠能 小型犬挑食及美毛配方成犬全价犬粮 2.5kg','明眼美毛 小型犬精准定制配方','204.00','169.00 ','12285','2090','385','16','2.5kg');
insert into chongwu_laptop values(null,8,'玫斯METZ 无谷物幼犬粮 1.36kg(3lb)','无谷配方 好消化 易吸收 全面营养','99.90','83.00','1053','256','86','8','3磅');
insert into chongwu_laptop values(null,8,'玫斯METZ 无谷物幼犬粮 5.45kg(12lb)','低敏无谷 助长发育 增强肌肉 全面营养','347.00','289.00 ','1053','256','86','28','12磅');
insert into chongwu_laptop values(null,8,'玫斯METZ 无谷物幼犬粮 13.6kg(30lb)','低敏无谷 助长发育 增强肌肉 全面营养','835.00','696.00','1053','256','86','69','30磅');
insert into chongwu_laptop values(null,9,'玫斯METZ 无谷低敏幼犬粮 9.07kg(20lb)','无谷低敏配方 助发育 增营养 强骨骼 增强后腿肌肉','392.40','327.00 ','112','24','18','32','30磅');
insert into chongwu_laptop values(null,10,'玫斯METZ 无谷物成犬粮 1.36kg(3lb)','无谷配方 好消化 易吸收 全面营养','94.00','78.00 ','775','181','51','7','3磅');
insert into chongwu_laptop values(null,10,'玫斯METZ 无谷物成犬粮 5.45kg(12lb)','无谷低敏 增强肌肉 健壮骨骼 全面营养','318.00','265.00 ','775','181','51','26','12磅');
insert into chongwu_laptop values(null,10,'玫斯METZ 无谷物成犬粮 13.6kg(30lb)','无谷低敏 增强肌肉 健壮骨骼 全面营养','762.00','635.00 ','775','181','51','63','30磅');
insert into chongwu_laptop values(null,11,'玫斯METZ 口腔护理成犬粮 1.36kg','发酵鲜肉配方 呵护口腔健康','149.00','142.00 ','25','8','0','14','1.36kg');
insert into chongwu_laptop values(null,11,'玫斯METZ 口腔护理成犬粮 5.45kg','发酵鲜肉配方 呵护口腔健康','372.80',' 355.00 ','25','8','0','35','5.45kg');
insert into chongwu_laptop values(null,12,'畅享Cheer Share 乳酪马铃薯贵宾幼犬粮 500g','固色通泪配方 绽放毛色 明目护眼 减少泪痕','48.00',' 40.00 ','350','116','7','4','0.5kg');
insert into chongwu_laptop values(null,12,'畅享Cheer Share 乳酪马铃薯贵宾幼犬粮 1.5kg','固色通泪配方 绽放毛色 明目护眼 减少泪痕','132.00','110.00 ','350','116','7','11','1.5kg');
insert into chongwu_laptop values(null,13,'畅享Cheer Share 牛肉紫薯成犬粮 1.5kg','润护肠胃 排毒通便 健康皮毛 强体健骨','47.50','95.00 ','432','215','4','9','1.5kg');
insert into chongwu_laptop values(null,13,'畅享Cheer Share 牛肉紫薯成犬粮 10kg','健美活力配方 润护肠胃 排毒通便 健康皮毛','406.80','339.00 ','432','215','4','33','10kg');
insert into chongwu_laptop values(null,14,'畅享Cheer Share 功能粮 牛油果美毛幼犬粮 1.5kg','防结亮毛 修复防脱 请除体臭 滋养生毛','166.80','139.00 ','61','30','0','13','1.5kg');
insert into chongwu_laptop values(null,15,'畅享Cheer Share 功能粮 牛油果美毛全犬粮 7.5kg','防结亮毛 修复防脱 请除体臭 滋养生毛','660.0','550.00 ','12','10','0','55','7.5kg');
insert into chongwu_laptop values(null,16,'畅享Cheer Share 犬用鸡肉燕麦罐头 165g','浓汁鸡汤 搭配鸡胸肉 低脂易消化 美味满足','22.00','18.00 ','30','40','0','1','165g');
insert into chongwu_laptop values(null,16,'皇家royal canin 泰迪贵宾犬成犬粮 500g','补充能量 均衡营养 健康体型','48.00','40.00 ','4039','3142','805','4','500g');
insert into chongwu_laptop values(null,16,'皇家royal canin 泰迪贵宾犬成犬粮 3kg','专为小型犬定制 均衡营养 健肤美毛 毛色靓丽','249.60','208.00 ','18075','3142','805','20','3kg');
insert into chongwu_laptop values(null,16,'皇家royal canin 泰迪贵宾犬成犬粮 7.5kg','小型犬定制配方 健肤美毛 亮丽毛色','558.00','465.00','1602','3142','805','46','7.5kg');




create table chongwu_laptop_famliy(
     lid  int primary key auto_increment,
     fname varchar(64)
);
insert into chongwu_laptop_famliy  values(1,'耐吉斯SOLUTION');
insert into chongwu_laptop_famliy  values(2,'奥能');
insert into chongwu_laptop_famliy  values(3,'玫斯METZ');
insert into chongwu_laptop_famliy  values(4,'畅享Cheer Share');
insert into chongwu_laptop_famliy  values(5,'皇家royal canin');

create table chongwu_shoppingcart(
	lid int primary key auto_increment,
	user_id int,
	product_id int,
	count int,
	img varchar(128),
	title varchar(64),
	money double(10,2),
	time varchar(50)
);