for(var i = 0;i<$(".firstPage div").length;i++){
    $(".firstPage div:eq("+i+")").addClass("ani");
    $(".firstPage div:eq("+i+")").attr({
        "swiper-animate-effect":"bounceInLeft",
        "swiper-animate-duration":"1s",
        "swiper-animate-delay":0.1*i+"s"
    });
}
$(".secondPage_info_title").addClass("ani");
$(".secondPage_info_title").attr({
    "swiper-animate-effect":"flip",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
$(".secondPage_info_header").addClass("ani");
$(".secondPage_info_header").attr({
    "swiper-animate-effect":"flip",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
$(".thirdPage_title").addClass("ani");
$(".thirdPage_title").attr({
    "swiper-animate-effect":"wobble",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
$(".fourthPage_title").addClass("ani");
$(".fourthPage_title").attr({
    "swiper-animate-effect":"rubberBand",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
$(".fifthPage_title").addClass("ani");
$(".fifthPage_title").attr({
    "swiper-animate-effect":"bounceIn",
    "swiper-animate-duration":"1s",
    "swiper-animate-delay":"0s"
});
var secondPageAnimates = $(".secondPage_info_content p");
for(var i = 0;i<secondPageAnimates.length;i++){
    $(secondPageAnimates[i])
        .addClass("ani")
        .attr({
            "swiper-animate-effect":"lightSpeedIn",
            "swiper-animate-duration":"1s",
            "swiper-animate-delay":0.1*i+"s"
        });
}
var thirdPageAnimates = $(".fourthPage_info > div");
for(var i = 0;i<thirdPageAnimates.length;i++){
    $(thirdPageAnimates[i])
        .addClass("ani")
        .attr({
            "swiper-animate-effect":"lightSpeedIn",
            "swiper-animate-duration":"1s",
            "swiper-animate-delay":0.1*i+"s"
    });
}
var fifthPageAnimates = $(".fifthPage_info > div");
for(var i = 0;i<fifthPageAnimates.length;i++){
    $(fifthPageAnimates[i])
        .addClass("ani")
        .attr({
            "swiper-animate-effect":"fadeInUp",
            "swiper-animate-duration":"1s",
            "swiper-animate-delay":0.1*i+"s"
        });
}
var lastPageAnimates = $(".lastPage > div");
for(var i = 0;i<lastPageAnimates.length;i++){
    $(lastPageAnimates[i])
        .addClass("ani")
        .attr({
            "swiper-animate-effect":"zoomIn",
            "swiper-animate-duration":"1s",
            "swiper-animate-delay":0.1*i+"s"
        });
}
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton:".nextPage",
    paginationClickable: true,
    direction: 'vertical',
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper); 
        $(".thirdPage_info_center").css({
            "animation":"none",
            "height":0,
        });
        $(".thirdPage_info_point1").css({
            "animation":"none",
            "opacity":0,
        });
        $(".thirdPage_info_point2").css({
            "animation":"none",
            "opacity":0,
        });
        $(".thirdPage_info_point3").css({
            "animation":"none",
            "opacity":0,
        });
        $(".thirdPage_info_point4").css({
            "animation":"none",
            "opacity":0,
        });
    }, 
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); 
        if(swiper.activeIndex==2){
            $(".thirdPage_info_center").css("animation","lineShow linear 5s forwards");
            $(".thirdPage_info_point1").css("animation","point1 linear 1s 0.5s forwards");
            $(".thirdPage_info_point2").css("animation","point2 linear 1s 1.5s forwards");
            $(".thirdPage_info_point3").css("animation","point3 linear 1s 2.8s forwards");
            $(".thirdPage_info_point4").css("animation","point4 linear 1s 4.3s forwards");
        }else{
            $(".thirdPage_info_center").css({
                "animation":"none",
                "height":0,
            });
            $(".thirdPage_info_point1").css({
                "animation":"none",
                "opacity":0,
            });
            $(".thirdPage_info_point2").css({
                "animation":"none",
                "opacity":0,
            });
            $(".thirdPage_info_point3").css({
                "animation":"none",
                "opacity":0,
            });
            $(".thirdPage_info_point4").css({
                "animation":"none",
                "opacity":0,
            });
        }
        if(swiper.activeIndex==5){
            $(".nextPage").css("display","none");
        }else{
            $(".nextPage").css("display","block");
        }
    }
});
var audioPlayFlag = true;
$(".firstPage_audio").click(function(){
    if(audioPlayFlag){
        $("audio")[0].pause();
        $(this).css("animation","none");
        audioPlayFlag = false;
    }else{
        $("audio")[0].play();
        $(this).css("animation","audioFlagRotate linear  2s infinite");
        audioPlayFlag = true;
    }
});
var icons = $(".fourthPage_info div[class*=left]");
for(var i = 0;i<icons.length;i++){
    $(icons[i]).css({
        "background":"url(images/skill"+(i+1)+".png)",
        "background-size":"cover",
        "width":"20%",
        "height":"115%",
        "float":"left",
        "margin-left":"10%",
    });
}
