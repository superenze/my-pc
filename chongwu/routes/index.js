const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由
var router=express.Router();

router.get('/getIndexProducts',(req,res)=>{
	var sql="select * from chongwu_index_carouse";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts1',(req,res)=>{
	var sql="select * from chongwu_index_right";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts2',(req,res)=>{
	var sql="select * from chongwu_index_miaosha";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts3',(req,res)=>{
	var sql="select * from chongwu_index_gouliang";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts4',(req,res)=>{
	var sql="select * from chongwu_index_gouliang where kid=2";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts5',(req,res)=>{
	var sql="select * from chongwu_index_gouliang where kid=3";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts6',(req,res)=>{
	var sql="select * from chongwu_index_gouliang where kid=4";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
router.get('/getIndexProducts7',(req,res)=>{
	var sql="select * from chongwu_index_gouliang where kid=5";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			 "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
		})
        res.write(JSON.stringify(result));
		res.end();
	})
})
module.exports=router;