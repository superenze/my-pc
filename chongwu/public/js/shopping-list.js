$(function () {
  function getDateTime(val) {
    var date = new Date(val);
    date = new Date(date.getTime() + 1000 * 60 * 30);
    var now = new Date();
    if (date.getTime() < now.getTime()) {
      return "-1";
    }
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var t = date.getHours();
    var mins = date.getMinutes();
    var s = date.getSeconds();
    m < 10 && (m = "0" + m);
    d < 10 && (d = "0" + d);
    t < 10 && (t = "0" + t);
    mins < 10 && (mins = "0" + mins);
    s < 10 && (s = "0" + s);
    return `${y}-${m}-${d} ${t}:${mins}:${s}`;
  }

  var timmer;
  function load() {
    (async function () {
      $.ajax({
        url: "http://127.0.0.1:3000/cart/pay",
        type: "get",
        dataType: "json",
        success: function (res) {
          console.log(res)
          var html = ""
          var price = 0;
          for (var i = 0; i < res.length; i++) {
            var curTime = getDateTime(res[i].time);
            var timeStr = curTime == "-1" ? "已失效" : "请在 " + curTime + " 前付款带走我好么？拜托啦~";
            html += `<tr class="cart-order ${curTime == '-1' ? 'disabled' : ''}" data-time="${res[i].time}" data-id="${res[i].lid}">
                    <td width="70" align="center">
                      ${curTime == '-1' ? '' : '<input type="checkbox" checked="checked" class="checkone">'}
                    </td>
                    <td width="520" valign="middle">
                      <div class="por-img fl clear">
                        <a href="" target="_blank">
                          <img src="${res[i].img}">
                        </a>
                      </div>
                      <div class="por-intro fl clear">
                        <a href="" target="_blank">${res[i].title}</a>
                        <p>${timeStr}</p>
                      </div>
                    </td>
                    <td width="170" align="center" style="padding-top:20px;">
                      <div class="buynum clear">
                        <span class="less1 fl">-</span>
                        <input type="text" class="fl" readonly value="${res[i].count}">
                        <span class="add1 fl" style="font-size:12px;">+</span>
                      </div>
                      <p style="color:#666;font-size:12px;">有货</p>
                    </td>
                    <td width="220" class="price" align="center" data-price="${res[i].money}" style="font-weight:700;font-size:14px;">
                      ￥${res[i].money.toFixed(2)}
                    </td>
                    <td width="220" align="center">
                      <a href="" style="color:#666;font-size:12px;" class="del">[删除]</a>
                    </td>
                  </tr>`

          }
          $("tbody .cart-order").remove();
          var $tr = $("tbody").append(html);
          var count = i;
          var $i = $(".one1>i:nth-child(2)")
          $i.html(count);

          //如果购物车没有内容
          $(".ftc").hide();
          console.log($("tbody").children().length)
          if ($("tbody").children().length < 2) {
            $("table").hide();
            $(".ftc").show();
          }

          setAllprice();
          timmer = setInterval(function () {
            var trs = $(".cart-order");
            for (var tr of trs) {
              tr = $(tr);
              if (tr.hasClass("disabled")) {
                continue;
              }
              var dt = new Date(tr.attr("data-time")).getTime() + 1000 * 60 * 30;
              var nt = new Date().getTime();
              if (dt < nt) {
                tr.addClass("disabled");
                tr.find(":checkbox").remove();
                tr.children().eq(1).children().eq(1).children().eq(1).html("已失效");
              }
            }
            setAllprice();
            if (trs.length == $(".cart-order.disabled").length) {//如果总的长度和禁用的长度一样就停止计时器
              clearInterval(timmer);

            }
          }, 1000);
        }
      })
    })()
  }
  load();

  function setAllprice() {
    var trs = $(".cart-table .cart-order");
    var allPrice = 0;
    var count = 0;
    for (var tr of trs) {
      tr = $(tr);
      var l = tr.find(":checked").length;
      if (l > 0) {
        var num = tr.find(".buynum input").val() * 1//强制转换为number
        count += num;
        allPrice += num * tr.find(".price").attr("data-price")
      }
    }
    $(".cart-table .allprice").html("￥" + allPrice.toFixed(2));
    $(".cart-table  .go-balance span").html(count)
  }

  $(".cart-table").on("click", ".del", function (e) {
    e.preventDefault();
    var id = $(this).parent().parent().attr("data-id");
    $.ajax({
      url: "http://127.0.0.1:3000/cart/del",
      type: "get",
      data: { id },
      success: function () {
        load()
      }
    })
  })


  $("#con_one_1").on("click", ".less1", function () {
    var checkbox = $(this).parents(".cart-order").find(":checked");
    if (checkbox.length == 0 || $(this).parents(".cart-order").hasClass("disabled")) {
      return;
    }
    var $val = $(this).next();
    if ($val.val() > 1) {
      var $newVal = parseInt($val.val()) - 1;
      $val.val($newVal);

      setAllprice();
    }



  })
  $("#con_one_1").on("click", ".add1", function () {
    var checkbox = $(this).parents(".cart-order").find(":checked");
    if (checkbox.length == 0 || $(this).parents(".cart-order").hasClass("disabled")) {
      return;
    }
    var $val = $(this).prev();
    var $newVal = parseInt($val.val()) + 1;
    $val.val($newVal);

    setAllprice();

  })

  //多选
  var allcheckbox = $(".allcheck");
  allcheckbox.on("click", function () {
    var checkboxs = $(".checkone");
    var a = allcheckbox.prop('checked');
    for (var checkbox of checkboxs) {
      $(checkbox).prop('checked', a);
    }
    setAllprice();
  })
  $("tbody").on("click", ".checkone", function (e) {
    var $check = $(this);
    var checkboxs = $(".checkone");
    var allcheckbox = $(".allcheck");
    for (var checkbox of checkboxs) {
      if ($(checkbox).prop("checked")) {
        $(allcheckbox).prop("checked", true)
        setAllprice();
      } else {
        $(allcheckbox).prop("checked", false);  //只要有一个为选中立即跳出循环
        setAllprice();
        return;
      }
    }
    
  })





})

