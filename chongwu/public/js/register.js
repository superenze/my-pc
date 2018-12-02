$(function(){
    function yanzheng(){
        $.ajax({
            url:"http://127.0.0.1:3000/user/getCode",
            type:"get",
            success:function(codeData){
                var $div=$("#tupian");
                $div.html(codeData.img);
            }
        })
    }   
    yanzheng()

    function yanzhengtu(){
        var captcha=$("#yanzheng").val().toLowerCase();
        $.ajax({
            url:"http://127.0.0.1:3000/user/codeYanzheng",
            type:"post",
            data:{ captcha },
            dataType:"json",
            success:function(res){
                if(res.ok==1){
                    $("#showMsg").html("正确").css("color","green");
                }else{
                    $("#showMsg").html("验证码不正确").css("color","red");
                }
            }
            
        })
    }
        $(".replace").on("click",function(){
            $.ajax({
                url:"http://127.0.0.1:3000/user/getCode",
                type:"get",
                success:function(codeData){
                    var $div=$("#tupian");
                    $div.html(codeData.img);
                    var captcha=$("#yanzheng").val().toLowerCase();
        $.ajax({
            url:"http://127.0.0.1:3000/user/codeYanzheng",
            type:"post",
            data:{ captcha },
            dataType:"json",
            success:function(res){
                if(res.ok==1){
                    $("#showMsg").html("正确").css("color","green");
                }else{
                    $("#showMsg").html("验证码不正确").css("color","red");
                }
            }
            
        })
                }
            })
             
        })
        $("#yanzheng").on("blur",function(){
            yanzhengtu();
        })
  /*  $(".replace").on("click",function(){
        $(".input-val").val('');
                draw(show_num);
    })
    var show_num=[];//准备一个空数组放置话的数字
    draw(show_num);//画出数字
    $("#yanzheng").on("blur",function(){
        var val=$("#yanzheng").val().toLowerCase();//将input里的值变为小写
        var num=show_num.join("");
        if(val==""){
            $("#showMsg").html("请输入验证码").css("color","red");
        }else if(val==num){
            $("#showMsg").html("正确").css("color","green");
        }else{
            $("#showMsg").html("验证码有误！").css("color","red");//如果验证码有误 把输入框清空 重新画一个验证码
            $(".input-val").val('');
                draw(show_num);
        }
        register()
    })
    function draw(show_num){//画验证码
        var canvas_width=$("#canvas").width();//获取画布的宽
        var canvas_height=$("#canvas").height();//获取画布的高
        var canvas=document.getElementById("canvas")//获取画布
        var ctx=canvas.getContext("2d");
        ctx.clearRect(0,0,canvas_width,canvas_height);//清空画布
        var sCode="A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";//范围在a-z0-9之间
        var aCode=sCode.split(",");//根据逗号进行切割成数组
        var aLength=aCode.length;//获取数组的长度

        for(var i=0;i<4;i++){//循环4次形成4个数
            var j=Math.floor(Math.random()*aLength);//获取到随机的索引值
            var deg=Math.random()*30*Math.PI/180;   //产生0~30之间的随机弧度
            var txt=aCode[j];//得到随机的一个内容
            show_num[i]=txt.toLowerCase() //内容小写循环放入数组中
            var x=10+i*20; //文字在canvas上的x坐标
            var y=20+Math.random()*8;//文字在canvas上的y坐标
            ctx.font="bold 23px 微软雅黑";
            ctx.translate(x,y);//将原点移动
            ctx.rotate(deg);//选择的角度
            ctx.fillStyle=randomColor()//生成随机颜色
            ctx.fillText(txt,0,0);//画入

            ctx.rotate(-deg);//将角度和原点复原
            ctx.translate(-x,-y);

        }
        for(var i=0;i<6;i++){//验证码上的线条
            ctx.strokeStyle=randomColor();
            ctx.beginPath();
            ctx.moveTo(Math.random()*canvas_width,Math.random()*canvas_height);
            ctx.lineTo(Math.random()*canvas_width,Math.random()*canvas_height);
            ctx.stroke();
        }
        for(var i=0;i<30;i++){//验证码上显示小点
            ctx.strokeStyle=randomColor();
            ctx.beginPath();
            var x=Math.random()*canvas_width;
            var y=Math.random()*canvas_height;
            ctx.moveTo(x,y);
            ctx.lineTo(x+1,y+1);
            ctx.stroke();

        }

    }
    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }*/
    //验证姓名
    var $name=$("#uname");
    $name.on("blur",function(){
        var uname=$name.val().trim();
        if(uname==""){
            $("#showUname").html("请输入4-16位的用户名").css("color","red");
        }
        register()
    })
    $name.keyup(function(){
        var uname=$name.val().trim();
        var passname=/^[a-zA-Z0-9_-]{4,16}/;
        if(passname.test(uname)){
            $.ajax({
                url:"http://127.0.0.1:3000/user/selectUname",
                type:"post",
                dataType:"json",
                data:{ uname },
                success: function(res) {
                    if(res.ok==1){
                        $("#showUname").html("用户名以被注册").css("color","red");
                    }else{
                        $("#showUname").html("正确").css("color","green");
                    }
                    
                }
            })
        }else{
            $("#showUname").html("请输入4-16位的用户名").css("color","red");
        }
    })
    //验证密码
    var $upwd=$("#upwd");
    $upwd.on("blur",function(){
        var upwd=$upwd.val();
        if(upwd==""){
            $("#showUpwd").html("请输入8-20位的密码").css("color","red");
        }
        register()
    })
    $upwd.keyup(function(){
        var upwd=$upwd.val();
        var passupwd=/^[a-zA-Z0-9]{8,20}$/
        if(passupwd.test(upwd)){
            $("#showUpwd").html("正确").css("color","green");
        }else{
            $("#showUpwd").html("请输入8-20位不能含有特殊符号的密码").css("color","red");
        }
    })
    //重复密码验证
    var $cpwd=$("#cpwd");
    $upwd.on("change",function(){
        var upwd=$upwd.val();
        var cpwd=$cpwd.val();
        if(cpwd==upwd){
            $("#showCupwd").html("正确").css("color","green");
        }else{
            $("#showCupwd").html("两次密码不一致").css("color","red");
        }
        register()
    })
    $cpwd.on("blur",function(){
        var cpwd=$cpwd.val();
        if(cpwd==""){
            $("#showCupwd").html("重复密码不能为空").css("color","red");
        }
        register()
    })
    $cpwd.keyup(function(){
        var upwd=$upwd.val();
        var cpwd=$cpwd.val();
        if(cpwd==upwd){
            $("#showCupwd").html("正确").css("color","green");
        }else{
            $("#showCupwd").html("两次密码不一致").css("color","red");
        }
        register()
    })
    //选中按钮
    $("#read").on("click",function(){
        register()
     })
    function register(){
    var msg= $("#showMsg").html();
    var uname=$("#showUname").html();
    var upwd=$("#showUpwd").html();
    var cpwd=$("#showCupwd").html();
    if(msg=="正确" && uname=="正确" && upwd=="正确" && cpwd=="正确"  && $("#read").prop("checked")){
        $("#get").children().css("background","#33cb98");   
    }  
   }
   //注册按钮
   var $btn=$("#get").children();
        $btn.on("click",function(){
		var uname=$("#uname").val();
		var upwd=$("#upwd").val();
		var $tishi=$("#get").children();
            $.ajax({
                url:"http://127.0.0.1:3000/user/register",
				type:"post",
				data:{ uname,upwd },
				dataType:"json",
				success:function(reg){
					if(reg.msg=="ok"){
						$tishi.html("注册成功,3秒钟后去首页");
						var t=setTimeout(function(){
							location.href="index.html";
						},3000)
						
					}
				}
            })
        })
})