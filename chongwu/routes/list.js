const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/",(req,res)=>{
    var kwords=req.query.kwords;//获取get提交的关键字
    console.log(kwords);
    var arr=kwords.split(" ")//把关键字按照 截取成一个数组arr[ , , ] 
    for(var i=0;i<arr.length;i++){
        arr[i]=` title like '%${arr[i]}%'`  //arr[title like %arr[i]%,...]
    }
    var where=" where "+arr.join("and") //sql语句尽量前后都加空格
	var output={ pageSize:8 }//每页8个商品
    output.pno=req.query.pno;
    var sql="select *,(select md from chongwu_laptop_pic where lid=id limit 1) as md from chongwu_laptop";
    var order=" order by "+req.query.sort+" "+req.query.order;
	pool.query(sql+where+order,[],(err,result)=>{
		if(err) console.log(err);
		output.count=result.length//获得总记录数
		output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数  总个数除每页显示几个商品
		output.products=result.slice(output.pno*8,output.pno*8+8);//截取分页后的结果
		 res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output))
    res.end()
	})
})



module.exports=router;