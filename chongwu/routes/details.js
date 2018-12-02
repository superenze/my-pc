const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	var id=req.query.id;
	var output={         //准备放置取出来的数据
		product:{},
		pics:[],
		specs:[]
	};
	//用lid查询当前的商品信息
	var sql1="select * from chongwu_laptop where id =?";
	var sql2="select * from chongwu_laptop_pic where lid=?";
	var sql3="select id,weight from chongwu_laptop where lid=( select lid from chongwu_laptop where id=? )";
	Promise.all([
		new Promise(function(open){
		pool.query(sql1,[id],(err,result)=>{
			if(err) console.log(err);
			output.product=result[0];
			open();
			console.log("查询product完成！")
		})
	}),	
		new Promise(function(open){
		pool.query(sql2,[id],(err,result)=>{
			if(err) console.log(err);
			output.pics=result;
			open();
			console.log("查询pics完成！")
		})
	}),
		new Promise(function(open){
		pool.query(sql3,[id],(err,result)=>{
			if(err) console.log(err);
			output.specs=result;
			open();
			console.log("查询specs完成！")
		})
	})
	]).then(function(){
		res.writeHead(200,{
	  "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
		})	
	   res.write(JSON.stringify(output));
       res.end();
       console.log("响应完成!");
		})
		

	
});









module.exports=router;