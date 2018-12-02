$(function () {
	if (location.search.indexOf("kword") != -1) {
		var kwords = decodeURI(location.search.split("=")[1]);
		var pno = 0,sort = "id", order = "asc";
		function loadPage(no = 0) {
			no//新页号
			pno = no;
			$.ajax({
				url: "http://127.0.0.1:3000/list",
				type: "get",
				data: { kwords, pno, sort, order },
				dataType: "json",
				success: function (output) {
					console.log(output);
					var { products, pageCount, count } = output;
					var html = ""
					for (var p of products) {//循环加入
						var { id, title, money, chongwu_money, sale, md, weight } = p;
						html += `<div class="list-box-con" data-id="${id}">
                <!--国旗图片-->
                <div class="pro-country">
                  <img src="">
                </div>
                <div class="gimg">
                  <div class="hovtitle">${weight}</div>
                  <div style="display:none"></div>
                  <!-- 商品图片 -->
                  <a ><img src="${md}" width="200" height="200" border="0" alt="${title}"></a>
                  <!-- 活动标识 -->
                  <div style="display:block"></div>
                </div>
                <!-- 不同规格商品 -->
                <div class="fmgood-main">
                  </div>
                  <a  class="gtitle">
                    <span class="title-typename"></span>
                    <span class="title-subject">${title}</span>
                  </a>
                  <p class="gprice">
                    <span class="" style="color:#999;font-size:12px;text-decoration:line-through;">￥${(money * 1).toFixed(2)}</span>
                    <span class="price">￥${(chongwu_money * 1).toFixed(2)}</span>
                    
                  </p>
                  <p class="deal-cnt">
                    <i class="">已售${sale}袋</i> 
                    
                  </p>
              </div>`

					}
					//总共找到多少个商品
					var $span = $(".borcol:first").children().last().children().last().children();
					$span.html(count);
					var $span = $(".borcol2").children().last().children().last().children();
					$span.html(count);
					var $span = $(".borcol:first").children().last().children().last().prev();
					$span.html((pno + 1) + "/" + pageCount);
					var $span = $(".borcol2").children().last().children().last().prev();
					$span.html((pno + 1) + "/" + pageCount);

					//div 点击跳转
					var $div = $(".lis_box");
					$div.html(html);
					$(".list-box-con").on("click", function (e) {
						e.preventDefault();
						location.href = `details.html?id=` + $(this).attr("data-id");
					})

					//判断国旗是否显示
					var $img = $(".pro-country").children();
					if ($img.src == null) {
						$(".pro-country").css("display", "none");

					}
					//翻页处理
					var html = "";
					for (var i = 1; i <= pageCount; i++) {
						html += `<a href="" class="${i == pno + 1 ? 'active' : ''} items">${i}</a>`
					}
					var $divs2 = $(".lis_plr:first");
					
					var $divs = $(".pages");
					$divs.find(".items").remove();		//点击下一个删除之前加载的
					$divs.children().first().after(html);//将页数添加到上一页的后面
					console.log($divs2.children().first())//下一页
					console.log($divs2.children().first().next())//上一页
					if (pno == 0) {//如果当前页也就是第一页就禁用上一页
						$divs.children().first().addClass("disabled");
						$divs2.children().first().next().addClass("disabled");
						
					} else {
						$divs.children().first().removeClass("disabled");
						$divs2.children().first().next().removeClass("disabled");
						
					}
					if (pno == pageCount - 1) {
						$divs.children().last().prev().addClass("disabled");
						$divs2.children().first().addClass("disabled");
						
					} else {
						$divs.children().last().prev().removeClass("disabled");
						$divs2.children().first().removeClass("disabled");
					
					}

					//翻页叛变显示
					var $i = $(".pages").children().last();
					$i.html(`共${count}条`);


					//当没有搜索到内容时
		$(".search-notip").hide();
		var $span=$(".cred");
		var val=$("#search").children().first().val();
		$span.html(val);
		if($(".lis_box").children().length>0){
			return
		}else{
			$(".search-notip").show();
			$(".pages").hide();
		}

				}

			})

		}
		loadPage();
		//只在页面首次加载时，在分页按钮的父元素上绑定一次
		var $div = $(".pages");
		$div.on("click", "a", function (e) {
			e.preventDefault();
			var $a = $(this);
			//除了禁用和当前正在激活按钮之外才能点击
			if (!$a.is(".disabled,.avtive")) {//如果a有禁用或者 active的样式
				if ($a.hasClass("prevA")) {//上一页
					var no = pno - 1;//新页号=当前页号-1
				} else if ($a.hasClass("nextA"))//下一页
					var no = pno + 1;//新页号=当前页号+1
				else
					var no = $a.html() - 1;//新页号=按钮内容-1
				loadPage(no);//重新加载新页号的页面内容
			}
		})
		//上面翻页绑定
		var $div = $(".lis_plr");
		$div.on("click", "a", function (e) {
			e.preventDefault();
			var $a = $(this);
			if (!$a.is(".disabled")) {
				var no = pno
				if ($a.hasClass("prevA")) {//上一页
					no = pno - 1;//新页号=当前页号-1
				} else if ($a.hasClass("nextA")) {
					no = pno + 1;//新页号=当前页号+1
				}
				loadPage(no);
			}
		})


		//收起 更过
		var $btn = $(".more-down");
		$btn.on("click", function () {
			if ($btn.children().last().html() == "收起") {
				$(".filter").hide();
				$(".filnav").hide();
				$btn.children().last().html("更多");
			} else {
				$(".filter").show();
				$(".filnav").show();
				$btn.children().last().html("收起");
			}

		})
		//筛选框
		var $div = $(".borcol");
		$(window).scroll(function () {
			if ($btn.children().last().html() == "收起") {
				if ($(document).scrollTop() >= 900) {
					$div.addClass("fixed");
				} else {
					$div.removeClass("fixed");
				}
			} else {
				if ($(document).scrollTop() >= 600) {
					$div.addClass("fixed");
				} else {
					$div.removeClass("fixed");
				}
			}


		})

		//筛选销量价格和默认状态
		var div = $(".lis_pll");
		$div.on("click", "span", function (e) {
			e.preventDefault();
			var $span = $(this);
			$span.addClass("nobg").siblings().attr("class","arrow");
			sort=$span.attr("data-sort");
			order="asc";
			if (!$span.is(":first-child")) {
				if ($span.hasClass("asc")) {
					$span.removeClass("asc").addClass("desc");
					order="desc";
				}
				else if ($span.hasClass("desc")) {
					$span.removeClass("desc").addClass("asc");
				}
				else {
					if(sort=="chongwu_money" ){
						$span.addClass("asc");
					}else{
						$span.addClass("desc");
						order="desc";
					}
				}
			}
			loadPage(0);
		})
		
		

	}

})