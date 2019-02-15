$(function () {
    $.post('../get_clicktitle_backstage',
        function (data,status) {
            $(".click_rank ul li").each(function (i) {
                if(data[i].article_title.length<=14){
                    $(this).children("a").text(data[i].article_title);
                    $(this).children("a").attr("title",data[i].article_title);
                }else{
                    $(this).children("a").attr("title",data[i].article_title);
                    $(this).children("a").text(data[i].article_title.substring(0,13)+"...");
                }
            });
        });
    $(".form_submit").click(function () {
        var article_detail=$(".form_textarea").val();
        $.post('../contribute_article_detail_backstage',{
            'article_detail':article_detail
        },
            function (data,status) {
            });
    });
});