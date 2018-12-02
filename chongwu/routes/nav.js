const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/mohu",(req,res)=>{
    var kwords=req.query.kw;
    var arr=kwords.split(" ")//把关键字按照 截取成一个数组arr[ , , ]
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like '%${arr[i]}%'`  //arr[title like %arr[i]%,...]
    }
    var where=" where "+arr.join("and") //sql语句尽量前后都加空格
    var sql="select title from chongwu_laptop";
    pool.query(sql+where,[],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
})


module.exports=router;