$(function(){
    var leftchange=$("#pictures").width()-144;
    $(window).resize(function () {
        leftchange=$("#pictures").width();
    });
    var target=count=0;

    var int=self.setInterval(function(){
        if(count==4){
            count=0;
            $("#viewlist").css('left','0');
        }
        count++;
        Myanimate();
    },3000)

    function Myanimate(){
        $("#viewlist").animate({
            "left":count*(-leftchange)+"px"
        },800)
        $("#list li").eq(count%4).addClass('select').siblings().removeClass('select');
    }

    $("#pictures").mouseover(function(){
        window.clearInterval(int);
    }).mouseout(function(){
        int=self.setInterval(function(){
            if(count==4){
                count=0;
                $("#viewlist").css('left','0');
            }
            count++;
            Myanimate();
        },3000)
    });

    $("#prev").click(function(){
        if(count==0){
            count=4;
            $("#viewlist").css('left',function(){
                return -leftchange*4+"px";
            });
        }
        count--;
        Myanimate();
    });

    $("#next").click(function(){
        if(count==4){
            count=0;
            $("#viewlist").css('left','0');
        }
        count++;
        Myanimate();
    });

    $("#list li").mouseover(function(event){
        $(this).addClass('select').siblings().removeClass('select');
        count=$(this).index();
        $("#viewlist").animate({
            "left":count*(-leftchange)+"px"
        },500)
    });
    $("#pictures").mouseenter(function(){
        $("#list,#prev,#next").fadeIn("slow");
    }).mouseleave(function(){
        $("#list,#prev,#next").fadeOut("slow");
    });
});