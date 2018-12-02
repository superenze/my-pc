$(function(){
    //1. 动态创建link引用nav.css
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
    //2. ajax请求nav.html片段
    $.ajax({
      url:"http://127.0.0.1:3000/footer.html",
      type:"get",
      success:function(res){
         $(".myFooter").replaceWith(res)
        }
    })
  })