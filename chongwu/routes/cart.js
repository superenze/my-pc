const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/add", (req, res) => {
    var id = req.query.id;
    var count = req.query.count;
    var uid = req.session.uid;
    var img=req.query.img;
    var title=req.query.title;
    var money=req.query.money;
    var time=req.query.time;
    pool.query("select * from chongwu_shoppingcart where user_id=? and product_id=?", [uid, id], (err, result) => {
        if (err) console.log(err);
        if (result.length == 0) {
            pool.query("insert into chongwu_shoppingcart values(null,?,?,?,?,?,?,?)", [uid, id, count,img,title,money,time], (err, result) => {
                console.log(result)
                if (err) console.log(err);
                res.end();
            })
        }else{
            pool.query("update chongwu_shoppingcart set count=count+? where user_id=? and product_id=?",[count,uid,id],(err,result)=>{
                res.end();
            })
        }
    })


})

router.get("/pay",(req,res)=>{
    var uid=req.session.uid;
    var sql="select * from chongwu_shoppingcart where user_id=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
       })
       res.write(JSON.stringify(result));
       res.end();
    })
})

router.get("/del",(req,res)=>{
    var lid=req.query.id;
    var sql="delete from chongwu_shoppingcart where lid =?"
	pool.query(sql,[lid],(err,result)=>{
        if(err)console.log(err);
        console.log("删除成功")
		res.end();
	})
})

module.exports = router;