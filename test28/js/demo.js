$(document).ready(function(){
/* 使用了单例模式，我觉得好处就是通过线程同步，来使资源并发访问*/
	
    //网页头部header鼠标滑过点击事件
    var top = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var me = this;
            me.btn1 = $('.l1');
            me.btn2 = $('.l2');
            me.btn3 = $('.l3');
            me.btn4 = $('.more');
            me.btn5 = $('.changebg');
            me.btn6 = $('.bg-t-rig');
            me.btn7 = $('section');
        },
        bind:function(){
            var me = this;
            me.btn1.hover(function(){
                me.test($(".weather"));
            });
            me.btn2.hover(function(){
                me.test($(".me"));
            });
            me.btn3.hover(function(){
                me.test($(".set-up"));
            });
            me.btn4.hover(function(){
                me.testm();
            });
            me.btn5.click(function(){
                me.testd();
            });
            me.btn6.click(function(){
                me.testu();
            });
            me.btn7.click(function(){
                me.testu();
            });
        },
        test:function(a){
            a.toggle();
        },
        testm:function(){
            $(".moreproduct").show();
            $(".moreproduct").mouseleave(function(){
                $(".moreproduct").hide();
            });
        },
        testd:function(){
            $(".background").slideDown(500);
        },
        testu:function(){
            $(".background").slideUp(500);
        }
    }
    top.init();
    //切换皮肤
    var bgChange = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var me = this;
            me.btn1 = $('.pic1');
            me.btn2 = $('.pic21');
            me.btn3 = $('.pic22');
            me.btn4 = $('.pic31');
            me.btn5 = $('.pic32');
            me.btn6 = $('.pic33');
            me.btn7 = $('.pic41');
            me.btn8 = $('.pic42');
            me.btn9 = $('.pic43');
            me.btn11 = $('.pic1-font');
            me.btn12 = $('.pic21-font');
            me.btn13 = $('.pic22-font');
            me.btn14 = $('.pic31-font');
            me.btn15 = $('.pic32-font');
            me.btn16 = $('.pic33-font');
            me.btn17 = $('.pic41-font');
            me.btn18 = $('.pic42-font');
            me.btn19 = $('.pic43-font');
        },
        bind:function(){
            var me = this;
            me.btn1.hover(function(){
                me.test($(".pic1-font"),"url(./css/bb1.png)");
            });
            me.btn2.hover(function(){
                me.test($(".pic21-font"),"url(./css/bb2.png)");
            });
            me.btn3.hover(function(){
                me.test($(".pic22-font"),"url(./css/bb3.png)");
            });
            me.btn4.hover(function(){
                me.test($(".pic31-font"),"url(./css/bb4.png)");
            });
            me.btn5.hover(function(){
                me.test($(".pic32-font"),"url(./css/bb5.png)");
            });
            me.btn6.hover(function(){
                me.test($(".pic33-font"),"url(./css/bb6.png)");
            });
            me.btn7.hover(function(){
                me.test($(".pic41-font"),"url(./css/bb7.png)");
            });
            me.btn8.hover(function(){
                me.test($(".pic42-font"),"url(./css/bb8.png)");
            });
            me.btn9.hover(function(){
                me.test($(".pic43-font"),"url(./css/bb9.png)");
            });
            me.btn11.click(function(){
                me.textc("url(./css/baidubg1.jpg)");
            });
            me.btn12.click(function(){
                me.textc("url(./css/baidubg2.jpg)");
            });
            me.btn13.click(function(){
                me.textc("url(./css/baidubg3.jpg)");
            });
            me.btn14.click(function(){
                me.textc("url(./css/baidubg4.jpg)");
            });
            me.btn15.click(function(){
                me.textc("url(./css/baidubg5.jpg)");
            });
            me.btn16.click(function(){
                me.textc("url(./css/baidubg6.jpg)");
            });
            me.btn17.click(function(){
                me.textc("url(./css/baidubg7.jpg)");
            });
            me.btn18.click(function(){
                me.textc("url(./css/baidubg8.jpg)");
            });
            me.btn19.click(function(){
                me.textc("url(./css/baidubg9.jpg)");
            });
        },
        test:function(a,number){
            a.toggle();
            $(".b-rig1").css("background-image",number);
        },
        textc:function(num){
            $(".container").css("background-image",num);
            $(".jQf").css("color","#fff");
            $("#logoimg").attr("src","./img/logo.png");
            $("article").css("background","rgba(255,255,255,0.4)");
            localStorage.setItem("background-image",num);
            localStorage.setItem("src","./img/logo.png");
        }
    }
    bgChange.init();
    
    //导航栏点击切换事件
    var navChange = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var me = this;
            me.btn1 = $(".myinterest");
            me.btn2 = $(".recommend");
            me.btn3 = $(".daohang");
            me.btn4 = $(".shipin");
            me.btn5 = $(".gouwu");
            me.btn6 = $(".ao-yun");
            me.btn11 = $(".my-interest");
            me.btn22 = $(".miannews");
            me.btn33 = $(".navigation");
            me.btn44 = $(".video");
            me.btn55 = $(".shopping");
            me.btn66 = $(".aoyun");
            me.btns = $('.set');
        },
        bind:function(){
            var me = this;
            me.btn1.click(function(){
               me.test($(".myinterest"),$(".recommend"),$(".daohang"),$(".shipin"),$(".gouwu"),$(".ao-yun"),$(".my-interest"),$(".miannews"),$(".navigation"),$(".video"),$(".shopping"),$(".aoyun"));
            });
            me.btn2.click(function(){
                me.test($(".recommend"),$(".myinterest"),$(".daohang"),$(".shipin"),$(".gouwu"),$(".ao-yun"),$(".miannews"),$(".my-interest"),$(".navigation"),$(".video"),$(".shopping"),$(".aoyun"));
            });
            me.btn3.click(function(){
                me.test($(".daohang"),$(".myinterest"),$(".recommend"),$(".shipin"),$(".gouwu"),$(".ao-yun"),$(".navigation"),$(".my-interest"),$(".miannews"),$(".video"),$(".shopping"),$(".aoyun"));
            });
            me.btn4.click(function(){
                me.test($(".shipin"),$(".myinterest"),$(".recommend"),$(".daohang"),$(".gouwu"),$(".ao-yun"),$(".video"),$(".my-interest"),$(".miannews"),$(".navigation"),$(".shopping"),$(".aoyun"));
            });
            me.btn5.click(function(){
                me.test($(".gouwu"),$(".myinterest"),$(".recommend"),$(".shipin"),$(".daohang"),$(".ao-yun"),$(".shopping"),$(".my-interest"),$(".miannews"),$(".video"),$(".navigation"),$(".aoyun"));
            });
            me.btn6.click(function(){
                me.test($(".ao-yun"),$(".myinterest"),$(".recommend"),$(".shipin"),$(".gouwu"),$(".daohang"),$(".aoyun"),$(".my-interest"),$(".miannews"),$(".video"),$(".shopping"),$(".navigation"));
            });
            me.btns.click(function(){
                me.testc();
            });
        },
        test:function(n1,n2,n3,n4,n5,n6,n11,n12,n13,n14,n15,n16){
            n1.css({"background":"#9a9da0","color":"#fff"});
            n2.css({"background":"#fff","color":"#000"});
            n3.css({"background":"#fff","color":"#000"});
            n4.css({"background":"#fff","color":"#000"});
            n5.css({"background":"#fff","color":"#000"});
            n6.css({"background":"#fff","color":"#000"});
            n11.show();
            n12.hide();
            n13.hide();
            n14.hide();
            n15.hide();
            n16.hide();
        },
        testc:function(){
            $(".mysett").fadeToggle(1000);
        }
    }
    navChange.init();
	//固定定位
	$(function(){
         $(window).scroll(function(){
            var formH = $(".form2").offset().top;
            var scroH = $(this).scrollTop();
            console.log(formH);
            if(scroH >= formH){
                $(".form").show();
            }else if(scroH < formH){
                $(".form").hide();
            }
         })
    });
})
window.onload = function(){
    if(localStorage.getItem('background-image')){
        $(".container").css("background-image",localStorage.getItem('background-image'));
        $("#logoimg").attr("src","./img/logo.png"),localStorage.getItem("src","./img/logo.png");
    }
}