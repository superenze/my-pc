$(function () {
	//1. 动态创建link引用nav.css
	$("<link rel='stylesheet' href='css/nav.css'>").appendTo("head");
	//2. ajax请求nav.html片段
	$.ajax({
		url: "http://127.0.0.1:3000/nav.html",
		type: "get",
		success: function (res) {
			$(".myHeader").replaceWith(res)
			//1.查找触发的元素
			var $btnSearch = $("#search").children().last();
			var $input = $("#search").children().first();
			//2.绑定事件
			$btnSearch.on("click", function () {
				var kw = $input.val().trim();//kw是输入框输出的value去除空格；
				if (kw !== "")
					location.href = `list.html?kwords=${kw}`
			})
			$input.keyup(function (e) {
				if (e.keyCode == 13)
					$btnSearch.click()
			})
			if (location.search.indexOf("kwords") != -1) {
				var kwords = decodeURI(location.search.split("=")[1]);
				$input.val(kwords);
			}
			//登录按钮
			$(".signin").children().first().click(function (e) {
				e.preventDefault();
				location.href = "user_login.html?back=" + location.href;
			})
			$.ajax({
				url: "http://127.0.0.1:3000/user/islogin",
				type: "post",
				dataType: "JSON",
				success: function (res) {
					if (res.ok == 0) {
						$(".signout").hide();
						$(".signin").show();
					} else {
						$(".signout").show();
						$(".signin").hide();
						$(".login-name").html(res.uname);

					}
				}
			})
			//登出按钮事件
			$(".btnSignout").click(function (e) {
				e.preventDefault();
				$.ajax({
					url: "http://127.0.0.1:3000/user/signout",
					type: "get",
					success: function () {
						location.reload();
					}
				})
			})

			//购物车
			var $btn = $(".signout>a:nth-child(3)");
			$btn.on("click", function (e) {
				e.preventDefault();
				location.href = "http://127.0.0.1:3000/shopping-list.html";
				
			})
			//模糊查询
			var $ul = $(".search-mohu");
			var $input = $("#search>input");
			$ul.on("click","li",function(){
				var $li=$(this);
				var html=$li.html();
				$input.val(html);

			})
			function search() {
				var $ul = $(".search-mohu");
				$ul.hide();
				var cpLock = false;
				var $input = $("#search>input");
				$input.on("compositionstart", function () {
					cpLock = true;
					console.log("不搜索");
				});
				$input.on("compositionend", function () {
					cpLock = false;
					console.log("汉字搜索");
				})
				$input.on("input", function () {
					var kw = $input.val().trim();
					if (cpLock) {
						$.ajax({
							url: "http://127.0.0.1:3000/nav/mohu",
							type: "get",
							data: { kw },
							dataType: "json",
							success: function (result) {
								var html = "";
								for (var i = 0; i < result.length; i++) {
									html += `	<li>${result[i].title}</li>	`;
									if (i > 10)  break 
								}
								$ul.html(html);
								$ul.show().css("zIndex", 100)

							}
						})
					}else{
						if ($input.val().trim().length < 1) {
							$ul.hide();
						}
					}
				})
			}
			search();



		}
	})
})