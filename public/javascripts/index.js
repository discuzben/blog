$(function(){
    if ($(window).width()<=1100) {
        $(".index").css("margin","0");
        $("#navul li div:nth-child(1) a,#navul li div:nth-child(2) a").css("font-size","12px");
        $("#navul").width("75%");
    }else{
        $(".index").css("margin","0 120px");
        $("#navul li div:nth-child(1) a,#navul li div:nth-child(2) a").css("font-size","16px");
        $("#navul").width("75%");
    }
    if ($(window).width()<=1100) {
        $(".textbox,.else,#blackboard,.video_list,.video_head_fr").hide();
        $("article,#pictures,.personal_video").width("100%");
    }else{
        $(".textbox,.else,#blackboard,.video_list,.video_head_fr").show();
        // $("article").width("68%");
        $("#pictures,.personal_video").width("60%");
    }
    if ($(window).width()<=570) {
        $("#navul li div:nth-child(1) a").css("font-size","10px");

        $("article .article").css("font-size","12px");
        $(".article_h2").css("font-size","0.9em");
        $("article .foot_span ul li a,article .foot_span ul li span").css("font-size","12px");
        $(".article_img").css("height","40%");
    }else{
        $("article .article").css("font-size","15px");
        $(".article_h2").css("font-size","1.3em");
        $("article .foot_span ul li a,article .foot_span ul li span").css("font-size","15px");
        $("article .article img").css("height","100%");
    }
    $(window).resize(function(){
        $("article").on("resize",".article img",function () {
            $(this).css("height",function () {
                return 0.16*$("article .article").width();
            });
            console.log($("article .article img").height());
        });
        if ($(this).width()<=920) {
            $("#navul").width("75%");
            $("#navul li div:nth-child(1) a,#navul li div:nth-child(2) a").css("font-size","12px");
            $(".index").css("margin","0");
        }else{
            $("#navul").width("60%");
            $(".index").css("margin","0 120px");
            $("#navul li div:nth-child(1) a,#navul li div:nth-child(2) a").css("font-size","16px");
        }
        if ($(this).width()<=570) {
            $("article .article").css("font-size","12px");
            $(".article_h2").css("font-size","0.9em");
            $("article .foot_span ul li a,article .foot_span ul li span").css("font-size","12px");
            $("article .article img").css("height","70px");
        }else{
            $("article .article").css("font-size","15px");
            $(".article_h2").css("font-size","1.3em");
            $("article .foot_span ul li a,article .foot_span ul li span").css("font-size","15px");
            $("article .article img").css("height","120px");
        }
        if ($(this).width()<=1100) {
            $(".textbox,.else,#blackboard,.video_list,.video_head_fr").hide();
            $("article,#pictures,.personal_video").width("100%");
        }else{
            $(".textbox,.else,#blackboard,.video_list,.video_head_fr").show();
            // $("article").width("68%");
            $("#pictures,.personal_video").width("60%");
        }
        $("#pictures img").width("100%").height("100%");
    });
    $("#navul li").hover(function(){
        $(this.children[1]).stop().fadeToggle('slow','linear');
    });
    $("#navul").css('height','50');
    function playvid()
    {
        $("video").play();
    }

    function pauseid()
    {
        $("video").pause();
    }
    $(".tags li").css("background-color", function(){
        var colorAngle = Math.floor(Math.random()*360);
        var color = 'hsla('+ colorAngle +',100%,30%,0.5)';
        return color;
    }).mouseenter(function(){
        $(this).css("background-color","#F40");
    }).mouseleave(function(){
        $(this).css("background-color",function(){
            var colorAngle = Math.floor(Math.random()*360);
            var color = 'hsla('+ colorAngle +',100%,30%,0.5)';
            return color;
        });
    });
    $(".sharelink li").mouseenter(function(){
        $(this).children().css("color","white");
    }).mouseleave(function(){
        $(this).children().css("color","#555");
    });
    $('.return').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
        $.post('../get_clicktitle_backstage',
            function (data,status) {
                $(".click_rank ul li a").each(function (i) {
                    $(this).click(function () {
                        $.post('../readall_click_uptate_title_backstage',
                        {
                            'article_title':data[i].article_title,
                        },
                        function (data,status) {
                        });
                        $.post('../index_clicknum_backstage',
                            {
                                'article_title':data[i].article_title,
                            },
                            function (data,status) {
                            });
                });
            });

    })
});