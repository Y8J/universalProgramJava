/*商品分类展开与隐藏*/
$(function(){
    $(".af_hover_spfl").hover(function() {
        $(".t_m_n_cl_details").stop().slideDown()
    }, function() {
        $(".t_m_n_cl_details").stop().slideUp()
    });    
})


/*banner插入开始*/
$(function() {
        var $key=0
    $(".af_sy_next").click(function(event) {
        autoplay()
    });
    $(".af_sy_pre").click(function(event) {
        $(".af_sy_ban ul li").stop().fadeOut(500);
        $key--;
        $key=$key%$(".af_sy_ban ul li").length
        $(".af_sy_ban ul li").eq($key).stop().fadeIn(500);
        $(".af_sy_ban ol li").eq($key).addClass('current').siblings().removeClass('current')
    });
    /*下按钮*/
    $(".af_sy_ban ol li").click(function(event) {
        $(".af_sy_ban ul li").stop().fadeOut(500);
        $key--;
        var $key=$(this).index();
        $(".af_sy_ban ul li").eq($key).stop().fadeIn(500);
        $(".af_sy_ban ol li").eq($key).addClass('current').siblings().removeClass('current')
    });
    var timer=setInterval(autoplay,3000)
    function autoplay(){
        $(".af_sy_ban ul li").stop().fadeOut(500);
        $key++;
        $key=$key%$(".af_sy_ban ul li").length
        $(".af_sy_ban ul li").eq($key).stop().fadeIn(500);
        $(".af_sy_ban ol li").eq($key).addClass('current').siblings().removeClass('current')
    }
    $(".af_sy_ban").hover(function() {
        $(".af_sy_pre,.af_sy_next").show()
        clearInterval(timer)
    }, function() {
        $(".af_sy_pre,.af_sy_next").hide()
        clearInterval(timer)
        timer=setInterval(autoplay,3000)
    });
});

/*banner插入结束*/


/*爱派个人中心列表*/
$(function(){
    $(".af_mip_list_l>ul>li").click(function(event) {
        $(this).addClass('current').siblings().removeClass('current')
    });
});

/*关于爱派footer左列表*/
$(function(){
    $(".f_mian_l>ul>li").click(function(event) {
        $(this).addClass('current').siblings().removeClass('current')
    });
});

/*首页商品分类左列表bg*/
$(function(){
    $(".t_m_n_cl_details li:odd").css("background","#E6E6E6");
    $(".t_m_n_cl_details li:even").css("background","#D9D9D9");             
});

/*商品详情介绍和评论
$(function(){
    $(".btn_on").click(function(){
        $(this).addClass("btn_on_chk").siblings().removeClass("btn_on_chk");
        $(".tab_content>div").eq($(this).index()).show().siblings().hide()
    });
})
*/

/*mip订单管理 线上线下切换类af_a1*/
$(function(){
    $(".af_ddgl_2a>a").click(function(event) {
        $(this).addClass('af_a1').siblings().removeClass('af_a1')
    });
})
$(function(){
    $(".af_dfk_list>ul>li").click(function(event) {
        $(this).addClass('current').siblings().removeClass('current')
    });
})


/* 线上退款弹窗 */
$(function(){
    $(".af_xs_sqtk").click(function(event) {
        $(".af_xs_sqtk_tc").show()
    });
    $(".af_xs_tc_in>p>i").click(function(event) {
        $(".af_xs_sqtk_tc").hide()
    });
})

/*星星评价打分*/
$(function (){
    var oStar=$(".af_star")
    var oUl=$(".af_star ul")
    var aLi=$(".af_star li")
    var i = iScore = iStar = 0;
    for (i = 1; i <= aLi.length; i++){
        aLi[i - 1].index = i;
        //鼠标移过显示分数
        aLi[i - 1].onmouseover = function (){
            fnPoint(this.index);
        };
        //鼠标离开后恢复上次评分
        aLi[i - 1].onmouseout = function (){
            fnPoint();
        };
        //点击后进行评分处理
        aLi[i - 1].onclick = function (){
            iStar = this.index;
        }
    }
    //评分处理
    function fnPoint(iArg){
        //分数赋值
        iScore = iArg || iStar;
        for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : ""; 
    }
});

/*设置收货地址*/
$(function(){
    $(".af_shdz>ul>li>i").click(function(event) {
        $(this).parent("li").addClass('af_dg').siblings().removeClass('af_dg')
    });
})

/*省市区地址选择弹窗*/
$(function(){
    $(".af_tj").click(function(event) {
    	$("#phone").val("");
    	$("#name").val("");
    	$("textarea").val("");
    	$("#receive_id").val("");
        $(".af_dztj_tc").show();
    });
    $(".new_dz").click(function(event) {
        $(".af_dztj_tc").hide()
        window.location.reload();
    });
})

/*装修店铺导航颜色主色选择*/
$(function(){
    $(".af_dpzx_tr>ul>li").click(function(event) {
        $(this).addClass('af_zs').siblings().removeClass('af_zs')
    });
})

/*装修店铺背景颜色主色选择*/
$(function(){
    $(".af_dpzx_cr>ul>li").click(function(event) {
        $(this).addClass('af_cs').siblings().removeClass('af_cs')
    });
})

/*装修店铺商品编辑关闭*/
$(function(){
    $(".af_bjsp_mt .gb").click(function(event) {
        if (!confirm("确认要删掉编辑产品吗？")) {
            window.event.returnValue = true;
        } else{
            $(".af_bjsp_mt").hide()
        }
    });
})

/*装修店铺商品待编辑关闭*/
$(function(){
    $(".af_bjsp_dbj .gb").click(function(event) {
        if (!confirm("确认要删掉编辑产品吗？")) {
            window.event.returnValue = true;
        } else{
            $(".af_bjsp_dbj").hide()
        }
    });
})

/*售后确认收货文字切换*/
$(function(){
    $(".af_qyth_c").click(function(event) {
        if (!confirm("确认要要退款吗？")) {
            window.event.returnValue = true;
        } else{
            $(this).removeClass('af_qyth_c').html("已退款")
        }
    });
})

/* 报表数据默认选择开始打勾 */
$(function(){
    $(document).click(function(event) {
        if($(event.target).is(".af_pprev>a")) {
            $(".af_sxsj").show()
        } else{
            $(".af_sxsj").hide()
        };
    });
    $(".af_sxsj>ul>li").click(function(event) {
        $(".af_pprev>a").text($(this).text());
        $(".af_sxsj").hide()
        $(this).addClass('af_sxr').siblings().removeClass('af_sxr')
    });
})

/*返回顶部开始*/
$(function(){
    $("#af_scrollTop").click(function(event) {
        $("html,body").animate({"scrollTop":0}, 500)
    });
    $(window).scroll(function(event) {
        var val=$(document).scrollTop()
        if (val>100) {
            $(".af_scroll_r").stop().animate({right:'0'},300)
        };
        if (val<100) {
            $(".af_scroll_r").stop().animate({right:'-46px'},300)
        };
    });
})

/* 不限.展开pro_class */
$(function(){
    $(".af_zk_main").hover(function() {
        $(this).children(".af_zknr_x").stop().slideDown()
        $(".af_zknr_x>ul>li").click(function(event) {
            $(this).addClass('af_current').siblings().removeClass('af_current')
            $(this).parent().parent().siblings("span").text($(this).text())
            $(this).parent().parent().siblings("span").attr("value",$(this).val())
            $(".af_zknr_x").stop().slideUp()
        });
    }, function() {
        $(".af_zknr_x").stop().slideUp()
    });
})

/* 不限.展开pro_class */
$(function(){
    $(".af_zk_sort").hover(function() {
        $(".af_zknr_sort").stop().slideDown()
        $(".af_zknr_sort>ul>li").click(function(event) {
            $(this).addClass('af_current').siblings().removeClass('af_current')
            $(this).parent().parent().siblings("span").text($(this).text())
            $(this).parent().parent().siblings("span").attr("value",$(this).val())
            $(".af_zknr_sort").stop().slideUp()
        });
    }, function() {
        $(".af_zknr_sort").stop().slideUp()
    });
})


/* 首页收藏心 */
$(function(){
    var tj=true
    $(".af_yshy_lst ul li h4>i").click(function(event) {
        if (tj == true) {
        $(this).addClass('af_xx_sc')
        tj = false
        }else{
        $(this).removeClass('af_xx_sc')
        tj = true
        };
    });
})

/* 商品分类的收藏心 */
$(function(){
    var sc=true
    $(".af_click_x").click(function(event) {
        if (sc == true) {
        $(this).children('i').addClass('current')
        sc = false   
        }else{
        $(this).children('i').removeClass('current')
        sc = true
        };
    });
})

/* 商品规格选择 */
$(function(){
    $(".flt_lt .c").click(function(event) {
        $(this).addClass('current').siblings().removeClass('current')
    });
})

