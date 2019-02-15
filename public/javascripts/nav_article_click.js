$(function () {
    // console.log($("nav>#navul>li:eq(2)>div:eq(1)>a").text());
    $("nav>#navul>li:eq(1)>div:eq(0)>a:eq(0)," +
        "nav>#navul>li:eq(1)>div:eq(1)>a:eq(0)," +
        "nav>#navul>li:eq(1)>div:eq(1)>a:eq(1)," +
        "nav>#navul>li:eq(2)>div>a," +
        "nav>#navul>li:eq(3)>div>a," +
        ".tags>ul>li>a").click(function () {
        var classification_val=$(this).text();
        if(classification_val=='生活笔记'){
            $.post('../nav_article_click_backstage',
                {
                    'classification_val1':'个人随笔',
                    'classification_val2':'个人日记',
                    'classification_val3':'null',
                    'classification_val4':'null'
                },
                function (data,status) {
                    // console.log(data);
                });
        }else if(classification_val=='技术杂谈'){
            $.post('../nav_article_click_backstage',
                {
                    'classification_val1':'mysql',
                    'classification_val2':'jquery',
                    'classification_val3':'css3',
                    'classification_val4':'node.js'
                },
                function (data,status) {
                    console.log(data);
                });
        }else{
            $.post('../nav_article_click_backstage',
                {
                    'classification_val1':classification_val,
                    'classification_val2':'null',
                    'classification_val3':'null',
                    'classification_val4':'null'
                },
                function (data,status) {
                    console.log(data);
                });
        }
    });
});