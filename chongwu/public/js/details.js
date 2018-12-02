
$(function () {
	if (location.search.indexOf("id=") != -1) {
		var id = location.search.split("=")[1];
		(async function () {
			var res = await $.ajax({
				url: "http://127.0.0.1:3000/details",
				type: "get",
				data: { id },//"id="+id 前台传来的值去后台
				dataType: "json"
			})
			console.log(res);
			var { product, pics, specs } = res;
			var { title, little_title, money, chongwu_money, sale, evaluate, consult, give } = product;
			var $divBig = $(".gddes").children().first()
			$divBig.html(title)
			$divBig.next().html(little_title)
			var $divMoney = $(".big-price").children().children().first().next()
			$divMoney.html(money.toFixed(2))
			var $money = $(".big-price").children().eq(1).children().eq(2);
			$money.html(chongwu_money.toFixed(2));
			var $sale = $(".ats-style").first().children().last();
			$sale.html(sale);
			var $eva = $(".ats-style").eq(1).children().eq(1);
			$eva.html(evaluate);
			var $con = $(".ats-style").eq(1).children().eq(3);
			$con.html(consult);
			var $give = $(".ats-style").eq(2).children().eq(1);
			$give.html(give);

			var smImgs = '', mdImgs = ''
			for (var i = 0; i < pics.length; i++) {
				smImgs += `<li class="${i == 0 ? 'on' : ''}"><a href=""><img src="${pics[i].sm}"></a></li>`;
				mdImgs += `<a href="" class="${i == 0 ? 'active' : ''}">
				<img src="${pics[i].md}">
				 <div class="mask none"></div>
				 <div class="super-mask"></div>
				 <div class="bigimg none" style="background:url(../${pics[i].lg})"></div>  
				 <img src="${pics[i].lg}" class="change" style="display:none;">
				</a>`;
			}
			$(".oborder").html(smImgs);
			$("#wrap").html(mdImgs);

			var htmla = "";
			for (var i = 0; i < specs.length; i++) {
				htmla += `<a href="details.html?id=${specs[i].id}">${specs[i].weight} <span class="${specs[i].id == id ? 'goods-select ' : ''}"></span> </a>`;
			}
			$(".norms-con").first().html(htmla);

			var $span = $(".mobile-buy-code");
			var $div = $(".faq-code");
			$span.hover(function () {
				$div.css("display", "inline-block");
			},
				function () {
					$div.css("display", "none");
				}
			)

			//袋数量
			var $input = $(".buynum");
			var $inputVal = $input.val();
			var $btnLess = $(".chgnum").first();
			var $btnAdd = $(".chgnum").last();
			$btnAdd.on("click", function (e) {
				$inputVal++;
				$input.val($inputVal);
			})
			$btnLess.on("click", function (e) {
				if ($inputVal > 1) {
					$input.val($inputVal--);
				} else
					$input.val(1);
			})

			//小图片
			var $ul = $(".oborder");//小图片ul
			$ul.on("mouseover", "li", function (e) {
				$(this).addClass("on").siblings().removeClass("on");
				var $a = $(this).prevAll().length + 1;
				$(`div#wrap>a:nth-child(${$a})`).addClass("active");
				$(`div#wrap>a:nth-child(${$a})`).siblings().removeClass("active")
			})

			var $left = $(".back");//左边按钮
			var $right = $(".next");//右边按钮
			var moved = 0;//记录移动
			var $allLi = $ul.children();
			if ($allLi.length <= 4) {
				$right.addClass("disabled");
			}
			$left.on("click", function () {
				if (!$left.is(".disabled")) {
					moved--;
					$ul.css("marginLeft", -84 * moved);
					$right.removeClass("disabled");
					if (moved == 0)
						$left.addClass("disabled");
				}
			})
			$right.on("click", function () {
				if (!$right.is(".disabled")) {
					moved++;
					$ul.css("marginLeft", -84 * moved);
					$left.removeClass("disabled");
					if ($allLi.length - moved == 4)
						$right.addClass("disabled");
				}
			})



			var $mImg = $("#wrap>a>img");//中图片
			var $lgDiv = $(".bigimg");//大图片
			var $mask = $(".mask");//半透明玻璃板
			var $smask = $(".super-mask");//
			$smask.hover(function () {                        //每次经过都发生根据图片的大小发生变化
				var $changeimg = $(this).nextAll(".change");
				$mask.width(300 * (500 / $changeimg.width()));
				$mask.height(300 * (380 / $changeimg.height()));
				$mask.removeClass("none");
				$lgDiv.removeClass("none");

			}, function () {
				$mask.addClass("none");
				$lgDiv.addClass("none");
			}).mousemove(function (e) {
				var msizeW = $mask.width();   //width=150 height=114
				var msizeH = $mask.height();  //mask宽和高

				var maxW = 300 - msizeW;//left最大值
				var maxH = 300 - msizeH;//top最大值
				var left = e.offsetX - msizeW / 2;
				var top = e.offsetY - msizeH / 2
				if (left < 0)
					left = 0;
				else if (left > maxW)
					left = maxW;
				if (top < 0)
					top = 0;
				else if (top > maxH)
					top = maxH;
				$mask.css({ left, top });
				var $changeimg = $(this).nextAll(".change");
				$lgDiv.css("background-position", `-${$changeimg.width() / 300 * left}px -${$changeimg.height() / 300 * top}px`);
			})

			var $span = $(".span")
			$span.on("click", function () {
				/*if($span.hasClass("checkbox"))
					$span.removeClass("checkbox")
				else
					$span.addClass("checkbox")*/
				$(this).toggleClass("checkbox")             //两种方法				    

			})
			var $money1 = $(".dp-text>p:nth-child(2)>span>i").eq(0) //套餐价
			console.log($money1)
			var $money = $(".loadbox>li>div>p:nth-child(2)>span>i")//单个小的套餐价格
			console.log($money)
			var $eMoney = $(".loadbox>li>div:nth-child(2)>p:nth-child(3)")//e宠价
			var $saveMoney = $(".loadbox>li>div:nth-child(2)>p:nth-child(4)")//省钱
			var sMoney = $saveMoney.html().split("￥")[1];//切割得到价格
			var $bigSaveMoney = $(".span1").html().split("￥")[1]//切割得到总共省钱
			var total = $(".dpjs>p:nth-child(2)>span").html().split("￥");//总的套餐价格
			var cost = $(".dpjs>p:nth-child(3)>span").html().split("￥");//总的原价

			var $left1 = $(".libtn")//左边按钮
			var $right1 = $(".btn_next")//右边按钮
			var move = 0//记录移动
			var $lis = $(".loadbox").children()
			var a = (($lis.length - 1) / 2) + 1
			if ($lis.length <= 3) {
				$right1.addClass("disabled");
			}
			$left1.on("click", function () {
				if (!$left1.is(".disabled")) {
					move--;
					$(".loadbox").css("marginLeft", -move * 236)
					$right1.removeClass("disabled")
					if (move == 0)
						$left1.addClass("disabled")
				}
			})
			$right1.on("click", function () {
				if (!$right1.is(".disabled")) {
					move++
					$(".loadbox").css("marginLeft", -move * 236);
					$left1.removeClass("disabled");
					if (a - move == 3)
						$right1.addClass("disabled");
				}
			})
			//点击加入购物车
			var $a = $(".db");
			$a.on("click", function (e) {
			var count = $(".buynum").val();
			var img=$(".oborder>li>a>img:first").attr("src");
			var title=$(".gdtitle").html();
			var money=$(".big-price>div:nth-child(2)>span:nth-child(3)").html();
			var time=new Date();
				e.preventDefault();
				(async function(){
				var res=await $.ajax({
					url:"http://127.0.0.1:3000/user/islogin",
					type:"post",
					dataType:"json"
				})
				if(res.ok==1){
				await $.ajax({
						url:"http://127.0.0.1:3000/cart/add",
						type:"get",
						data:{id,count,img,title,money,time},
					})
					$(".buynum").val(1)   //把数量重置为提交完之后商品回恢复到1袋
					alert("添加成功")
				}else{
					alert("请先登录");
				}
			})()
			})
		  //点击去支付页面
		  var $a=$(".pay");
		  $a.on("click",function(e){
			e.preventDefault();
			(async function(){
                var res=await $.ajax({
					url:"http://127.0.0.1:3000/user/islogin",
					type:"post",
					dataType:"json"
				})
				if(res.ok==1){
					location.href="http://127.0.0.1:3000/shopping-list.html";
				}else{
					alert("请先登录");
				}
			})()
		  })
		})()

	}

})