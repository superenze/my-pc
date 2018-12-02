$(function(){
	$.ajax({
		url:"http://127.0.0.1:3000/index/getIndexProducts",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res);
			var html='';
			for(var i=0;i<res.length;i++){
				html+=`<a href="#" class="${i==0?'active':''}"><img src="${res[i].img}"></a>`
			}
			var divCard=$(".img_8");
			divCard.html(html);
			var html2="";
            for(var m=0;m<res.length;m++){
				var n=m+1;
				html2+=`<a class="${m==0?'ahov':''}">${n}</a>`;
			}
			var divCardLi=$("#img-ul");
            divCardLi.html(html2);
            
			

document.getElementsByClassName("con_one_1")[0].style.display="block";
var spans=document.querySelectorAll("[data-toggle=span]");
for(var span of spans){
	span.onmouseover=function(){
		var span=this;
		var divs=document.getElementsByClassName("lib_conbox")[0].children;
		var lis=document.getElementsByClassName("ul1")[0].children;
		//var liDiv=document.querySelectorAll(".ul1>li>div");
		for(var div of divs){	
			div.style.display="none";
		}
		for(var li of lis){
		    li.className="";
			li.children[0].className="";
		}
		span.parentNode.parentNode.className='hoverli';
		span.parentNode.className='hoverdiv';
		var id=span.getAttribute("data-target");  //.con_one_2
		
		var div=document.querySelector(id);
		div.style.display="block";
		div.addClass="border-t";
	}
}

var divs=document.getElementsByClassName("box-1");
for(var div of divs){
	div.onmouseover=function(){
		var div=this;
	    var i=div.lastElementChild;		
		div.className+=" menu-boxhov";
		i.className+=" ihov";
	}
	div.onmouseout=function(){
		var div=this;
		var i=div.lastElementChild;	
		div.className=" box-1";
		i.className="";
	}
}


//时间列表
var $ul=$(".menu-box");
var $left=$(".time-left");//左边按键
var $right=$(".time-right");//右边按键
var $allLi=$(".menu-box>li");//所有的li
if($allLi.length<=7){
	$right.addClass("disabled");
}
var moved=0;//记录移动
$left.on("click",function(e){
	e.preventDefault();
	var $left=$(this);
	if(!$left.is(".disabled")){
		moved--;
		$ul.css("marginLeft",-119*moved)
	    $right.removeClass("disabled")
		if(moved==0)
		$left.addClass("disabled")
			
	}
})
$right.on("click",function(e){
	e.preventDefault();
	var $right=$(this);
	if(!$right.is(".disabled")){
	  moved++;
	  $ul.css("marginLeft",-119*moved)
	  $left.removeClass("disabled")
	  if($allLi.length-moved==7)
	  $right.addClass("disabled")
	}
})

//秒杀内容
var $left2=$(".timeproleft");
var $right2=$(".timeproright");
var $ul2=$(".time-proconli>ul");
var $allLi2=$(".time-proconli>ul>li");
if($allLi2.length<=4){
	$right2.addClass("disabled");
}
var moved2=0;
$left2.on("click",function(){
	var $left2=$(this);
	if(!$left2.is(".disabled")){
	  moved2--;
	  $ul2.css("marginLeft",-215*moved2)
	  $right2.removeClass("disabled")
	  if(moved2==0)
	  $left2.addClass("disabled")
	}
})
$right2.on("click",function(){
	var $right2=$(this);
	if(!$right2.is(".disabled")){
	  moved2++;
      $ul2.css("marginLeft",-215*moved2)
	  $left2.removeClass("disabled")
	  if($allLi2.length-moved2==4)
	  $right2.addClass("disabled")
	}
})


//8张轮播图
function bannerImgs(){
	var $imgLis=$("#img-ul").children();
    var $imgLi=$(".ahov");
	if($imgLi.next().length>0){
		$imgLi.next().addClass("ahov");
	}else{
		$imgLis.first().addClass("ahov");
	}
    $imgLi.removeClass("ahov");

    var $imgs=$(".img_8").children();
    var $img=$(".active");
	if($img.next().length>0){
		$img.next().addClass("active");
	}else{
		$imgs.first().addClass("active");
	}
	$img.removeClass("active");
  }
var bannerTimer = setInterval(bannerImgs,3000);
var $imgLis=$("#img-ul").children();
$imgLis.mouseover(function(){
	clearInterval(bannerTimer);
	$imgLis.removeClass("ahov");
    $(this).addClass("ahov");
	var i=$(this).prevAll().length;
    var $imgBgs=$(".img_8").children();
    $imgBgs.removeClass("active");
    $imgBgs.eq(i).addClass("active");
})
$imgLis.on("mouseout",function(){
	bannerTimer=setInterval(bannerImgs,3000);
})
 var $imgBgs=$(".img_8").children();
$imgBgs.mouseover(function(){
	clearInterval(bannerTimer);
})
$imgBgs.mouseout(function(){
	bannerTimer=setInterval(bannerImgs,3000);
})
		}
	})
})


$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts1",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
	var divCardRight=$("#img-right");
			var html3="";
			for(var j=0;j<res.length;j++){
				html3+=`<div><a href=""><img src="${res[j].img}"></a></div>`
			}
			divCardRight.html(html3);
	}
	})
})

/*$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts2",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
	$(".cut1").css("background","img/cut1.png");

	}
	})
})*/
$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts3",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res)
		var html=`<div class="imgbox">
                    <div class="bigimg1">
                      <a href="#">
                        <div class="ad-font">
                          <p>${res[0].titleBig}</p> 
			              <p class="fred">${res[0].title}</p>
                        </div>
                        <img src="${res[0].img}">
                      </a>
                    </div>

                    <div class="bigimg-right">
                      <div class="bigimg2">
                        <a href="#">
                          <div class="ad-font2">
                            <p>${res[1].titleBig}</p>
						    <p>${res[1].title}</p>
                          </div>
                          <img src="${res[1].img}">
                        </a>
                      </div>
                      <div class="bigimg2">
                        <a href="#">
                          <div class="ad-font2">
                            <p>${res[2].titleBig}</p>
						   <p>${res[2].title}</p>
                          </div>
                          <img src="${res[2].img}">
                        </a>
                      </div>
                    
                    </div>
                      <div class="bg-f9">
                        <div class="bigimg3">
                          <a href="">
                            <div class="ad-font3">
                              <p>${res[3].titleBig}</p>
						     <p>${res[3].title}</p>
                            </div>
                          </a>
                          <img src="${res[3].img}">
                        </div>
                        <div class="bigimg3">
                          <a href="">
                            <div class="ad-font3">
                              <p>${res[4].titleBig}</p>
						    <p>${res[4].title}</p>
                            </div>
                          </a>
                          <img src="${res[4].img}">
                        </div>
                        <div class="bigimg3" style="border-right:1px solid #e7e7e7">
                          <a href="">
                            <div class="ad-font3">
                              <p>${res[5].titleBig}</p>
						     <p>${res[5].title}</p>
                            </div>
                          </a>
                          <img src="${res[5].img}">
                        </div>
                      </div>
                  </div>
                </div>`
	        var $div=$(".con_one_1");
			$div.html(html);
	}
	})
})
$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts4",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li><a href="#">
				<div class="eight-proming">
				<img src="${res[i].img}" >
				</div>
				<h1 class="title">${res[i].titleBig}</h1>
				<div class="money">￥${res[i].money}</div>
				</a>
				</li>`;
			
		
		}
		var $ul=$(".con_2");
	     $ul.html(html);
	}
	})	
})
$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts5",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li><a href="#">
				<div class="eight-proming">
				<img src="${res[i].img}" >
				</div>
				<h1 class="title">${res[i].titleBig}</h1>
				<div class="money">￥${res[i].money}</div>
				</a>
				</li>`;
			
		
		}
		var $ul=$(".con_3");
	     $ul.html(html);
	}
	})	
})
$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts6",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li><a href="#">
				<div class="eight-proming">
				<img src="${res[i].img}" >
				</div>
				<h1 class="title">${res[i].titleBig}</h1>
				<div class="money">￥${res[i].money}</div>
				</a>
				</li>`;
			
		
		}
		var $ul=$(".con_4");
	     $ul.html(html);
	}
	})	
})
$(function(){
	$.ajax({
	url:"http://127.0.0.1:3000/index/getIndexProducts7",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li><a href="#"><img src="${res[i].img}"></a></li>`
		}
	    var $ul=$(".brands-ul");
		$ul.html(html);
		
	}
	})	
})