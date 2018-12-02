$(function(){
    //1. 动态创建link引用nav.css
    $("<link rel='stylesheet' href='css/shoppingcart-nav.css'>").appendTo("head");
    //2. ajax请求nav.html片段
    $.ajax({
      url:"http://127.0.0.1:3000/shoppingcart-nav.html",
      type:"get",
      success:function(res){
         $(".myHeader").replaceWith(res)
        //1.查找触发的元素
         var $btnSearch=$(".cart-search>a");
         var $input=$(".search-text");
		//2.绑定事件
		$btnSearch.on("click",function(e){
            e.preventDefault();
			var kw=$input.val().trim();//kw是输入框输出的value去除空格；
			if(kw!=="")
			location.href=`list.html?kwords=${kw}`
		})
		$input.keyup(function(e){
            e.preventDefault();
			if(e.keyCode==13){
            $btnSearch.click();
        }
		})
		if(location.search.indexOf("kwords")!=-1){
			var kwords=decodeURI(location.search.split("=")[1]);
			$input.val(kwords);
		}
		//登录按钮
		$(".signin").children().first().click(function(e){
			e.preventDefault();
			location.href="user_login.html?back="+location.href;
		})
		$.ajax({
			url:"http://127.0.0.1:3000/user/islogin",
			type:"post",
			dataType:"JSON",
			success:function(res){
				if(res.ok==0){
        $(".signout").hide();
        $(".signin").show();
      }else{
        $(".signout").show();
        $(".signin").hide();
        $(".login-name").html(res.uname);
		
      }
			}
		})
			$(".btnSignout").click(function(e){
			e.preventDefault();
			$.ajax({
				url:"http://127.0.0.1:3000/user/signout",
				type:"get",
				success:function(){
					location.reload();
				}
			})
		})
      }
    })
  })