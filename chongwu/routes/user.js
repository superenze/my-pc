const express = require('express');
//引入连接池
const pool = require('../pool.js');

//创建路由
var router = express.Router();
//在路由下添加
//2.用户注册
router.post('/register', (req, res) => {
	var $uname = req.body.uname;
	if (!$uname) {
		res.send('用户名不能为空');
		return;
	}
	var $upwd = req.body.upwd;
	if (!$upwd) {
		res.send('用户密码不能为空');
		return;
	}

	var sql = "insert into chongwu_user values(null,?,?,null,null)";
	var sql2 = "select uid from chongwu_user where uname=?";
	new Promise(function (open) {
		pool.query(sql, [$uname, $upwd], (err, result) => {
			if (err) throw err;
			if(result.affectedRows > 0){//影响的行数
				open("ok");
			}else{
				open("loss");
			}
		})
	}).then(function (msg) {
		return new Promise(function (open) {
			if(msg=="ok"){
				pool.query(sql2, [$uname], (err, result) => {
					if (err) throw err;
					console.log(result);
					if (result.length > 0) {
						var user = result[0];
						req.session.uid = user.uid
						open("ok");
					} else {
						open("loss");
					}
				})
			}else{
				open("loss");
			}
		})
	}).then(function (msg) {
		res.writeHead(200, {
			"Content-Type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		})
		res.write(JSON.stringify({msg}));
		res.end();
	})
});
//3.判断用户名有没有被注册
router.post('/selectUname', (req, res) => {
	var $uname = req.body.uname;
	if (!$uname) {
		res.send("用户名不能为空");
		return;
	}
	var sql = "select * from chongwu_user where uname=?";
	pool.query(sql, [$uname], (err, result) => {
		if (err) throw err;
		console.log(result);
		if (result.length > 0) {
			res.write(JSON.stringify({
				ok: 1
			}))//被注册
		} else {
			res.write(JSON.stringify({
				ok: 0
			}));//没被注册
		}
		res.end();
	});

});
//
router.post("/signin", (req, res) => {
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	console.log(uname, upwd);
	pool.query("select * from chongwu_user where uname=? and upwd=?", [uname, upwd], (err, result) => {
		if (err) console.log(err)
		if (result.length > 0) {
			res.writeHead(200);
			var user = result[0];
			req.session.uid = user.uid
			res.write(JSON.stringify({
				ok: 1
			}))
		} else {
			res.write(JSON.stringify({
				ok: 0,
				msg: "用户名或密码错误"
			}))
		}
		res.end();
	})
})
router.post("/islogin", (req, res) => {
	res.writeHead(200, {
		"Content-Type": "application/json;charset=utf-8",
		"Access-Control-Allow-Origin": "*"
	})
	console.log(req.session);
	if (req.session["uid"] === undefined) {

		res.write(JSON.stringify({ ok: 0 }))
		res.end()
	} else {
		var uid = req.session.uid;
		var sql = "select * from chongwu_user where uid=?";
		pool.query(sql, [uid], (err, result) => {
			if (err) console.log(err)

			var user = result[0];
			res.write(JSON.stringify({
				ok: 1, uname: user.uname
			}))
			res.end()

		})
	}
})
router.get("/signout", (req, res) => {
	req.session["uid"] = undefined;
	res.end();
})

/*var svgCaptcha = require('svg-captcha');
function  getCaptcha(req,res,next){
	var captcha=svgCaptcha.create({
	inverse:false,
	fontSize:20,
	noise:4,
	width:91,
	height:52
	});
	req.session=captcha.text.toLowerCase();
	console.log(req.session);
	res.cookie("captcha",req.session);
	res.setHeader('Content-Type','image/avg+xml');
	res.write(String(capthcah.data));
	res.end();
	router.get("/getCaptcha",(req,res,next)=>{
	return getCaptcha(req, res, next);
})

}*/
var svgCaptcha = require('svg-captcha');
router.get("/getCode",(req, res) => {
    var codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 3, // 干扰线条的数量
		height: 52 ,
		width:92
    }
    var captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    var codeData = {
        img:captcha.data
	}
	res.send(codeData);
	res.end();
})
router.post("/codeYanzheng",(req,res)=>{
	if(req.body.captcha==req.session.captcha){
		res.write(JSON.stringify({
			ok:1
		}))
	console.log(res.ok)
	}else{
		res.write(JSON.stringify({
			ok:0
		}))
	}
	console.log(req.body.captcha)
	console.log(req.session.captcha)
	res.end();
})



//导出路由
module.exports = router;