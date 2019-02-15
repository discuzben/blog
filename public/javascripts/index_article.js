$(function () {
    function RandomNum(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
    }
    var count=0;
    limit=7;
    function addarticle() {
        $.post('../index_article_backstage',{
                'limit':limit
            },
            function (data, status) {
                for (var i = 0; i < data.length; i++) {
                    var content_article = $("<li>" +
                        "<aside class='article_h2'>" +
                        "<div class='label'>" +
                        "<p class='label_p'>"+data[i].article_tag+"</p>" +
                        "</div>" +
                        "<p class='article_head'>"+data[i].article_title+"</p>" +
                        "</aside>" +
                        "<div class='article flex_between'>" +
                        "<img class='article_img' src="+data[i].article_img+" alt=''>" +
                        "<p>"+data[i].article_contents.substring(0,RandomNum(90,120))+"......"+
                        "<a href='article_detail.html' class='read_all'>阅读全文>></a>" +
                        "</p>" +
                        "</div>" +
                        "<div class='foot_span'>" +
                        "<ul>" +
                        "<li>" +
                        "<i>" +
                        "<svg class='icon' aria-hidden='true'>" +
                        "<use xlink:href='#icon-zuozhe'></use>" +
                        "</svg>" +
                        "</i>" +
                        "<a href=''>"+data[i].article_author+"</a>" +
                        "</li>" +
                        "<li>" +
                        "<i>" +
                        "<svg class='icon' aria-hidden='true'>" +
                        "<use xlink:href='#icon-time'></use>" +
                        "</svg>" +
                        "</i>" +
                        "<span>"+data[i].article_time+"</span>" +
                        "</li>" +
                        "<li>" +
                        "<i>" +
                        "<svg class='icon' aria-hidden='true'>" +
                        "<use xlink:href='#icon-pinglun-copy'></use>" +
                        "</svg>" +
                        "</i>" +
                        "<a href='article_detail.html'><span>"+data[i].article_commentnum+"</span>评论</a>" +
                        "</li>" +
                        "</ul>" +
                        "</div>" +
                        "</li>");
                    $("article>ul").append(content_article);
                }
            });
    }
    addarticle();
    $("article .nextpage span").click(function () {
        $("article ul").empty();
        count++;
        limit=7*(count+1);
        addarticle();
    });
    $("article").on("click",".article p .read_all",function () {
        var article_title=$(this).parents("li").children("aside").children(".article_head").text();
        $.post('../index_clicknum_backstage',
            {
                'article_title':article_title,
            },
            function (data,status) {
                // console.log(data);
            });
        $.post('../readall_click_uptate_title_backstage',
            {
                'article_title':article_title,
            },
            function (data,status) {
            });
        getclicktitle();
    });
    function getclicktitle() {
        $.post('../get_clicktitle_backstage',
            function (data,status) {
                $(".click_rank ul li").each(function (i) {
                    if(data[i].article_title.length<=14){
                        $(this).children("a").text(data[i].article_title);
                        $(this).children("a").attr("title",data[i].article_title);
                    }else{
                        $(this).children("a").attr("title",data[i].article_title);
                        $(this).children("a").text(data[i].article_title.substring(0,14)+"...");
                    }
                });
            });
    }
    getclicktitle();

});