$(function () {
    function RandomNum(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
    }
    function getclicktitle() {
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
    }
    // 调用获取文章题目函数添加到点击排行榜
    getclicktitle();
    // 获取文章详情
    $.post('../article_detail_backstage1',
        function (data,status) {
            $("article .article_title,title").text(data[0].article_title);
            $("article .foot_span li:nth-child(1) a").text(data[0].article_author);
            $("article .foot_span li:nth-child(2) span").text(data[0].article_time);
            $("article .foot_span li:nth-child(3) span,article .comment .header_l_a span").text(data[0].article_commentnum);
            // console.log($("header_l_a>span"));
            // 封装动态加载评论
            function Get_comment() {
                $.post('../article_detail_getcomment_backstage',
                    {
                        'article_title':data[0].article_title
                    },
                    function (data,status) {
                        // console.log(data);
                        for (var i = 0; i < data.length; i++) {
                            var content_comment=$("<div class='comment_views_content'>"+
                                "<div class='comment_author_head'>"+
                                "<img src="+data[i].comment_author_head+">"+"</div>"+
                                "<div class='comment_author_name'>"+data[i].comment_author_name+"<span>"+data[i].comment_time+"</span>"+"</div>"+
                                "<div class='comment_author_font'>"+data[i].comment_content+"</div>"+
                                "<div class='comment_author_btn'>"+
                                "<button class='comment_del'>删除</button>"+
                                "</div>"+
                                "</div>");
                            $("article>.comment>.comment_views").append(content_comment);
                        }
                    });
            }
            // 调用动态加载评论
            Get_comment();
            // $(".comment .comment_views").on("remove",".comment_views_content");
            // 点击发布后获取本地时间、要发布的评论内容、加载出来的文章题目，
            // 根据题目存储评论、评论时间、评论人，评论人头像，文章id到数据库，
            // 再从数据库获取这些评论，动态加载到页面

            $("#comment_write_btn").click(function () {
                var comment_content = $("#comment_write_text").val();
                var date =new Date();
                var comment_time=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
                var article_title=$("article .article_title").text();
                $.post('../article_detail_comment_insert_backstage1',
                    {
                        'article_title':article_title
                    },
                    function (data,status) {
                        var article_id=data[0].id;
                        $.post('../article_detail_comment_insert_backstage2',
                            function (data,status) {
                                var position=data[0].userhead.indexOf('\\');
                                var path3=data[0].userhead.substring(position);

                                // console.log(img_path);
                                var path4=path3.replace(/\\/g,'\\\\');
                                path4='http://127.0.0.1:3000/'+path4;
                            // console.log(path4);
                                $.post('../article_detail_comment_insert_backstage3',
                                    {
                                        'comment_content':comment_content,
                                        'comment_time':comment_time,
                                        'comment_author_name':data[0].username,
                                        'comment_author_head':path4,
                                        'article_id':article_id
                                    },
                                    function (data,status) {
                                        $(".comment .comment_views").empty();
                                        Get_comment();
                                    });
                            });
                    });

                $.post('../article_detail_comment_newnum_backstage',
                    {
                        'article_title':article_title
                    },
                    function (data,status) {
                        $.post('../article_detail_comment_getnum_backstage',
                            {
                                'article_title':article_title
                            },
                            function (data,status) {
                                $("article .foot_span li:nth-child(3) span,article .comment .header_l_a span").text(data[0].article_commentnum);
                            });
                    });
                $("#comment_write_text").val("");

            });
        });
    // 获取文章内容
    $.post('../article_detail_backstage2',
        function (data,status) {
            $("article .article").text(data[0].article_detail);
        });
    $(".comment").on("click",".comment_del",function () {
        var comment_author_font=$(this).parent().siblings(".comment_author_font").text();
        var author_name=$(this).parent().siblings(".comment_author_name").text();
        var comment_time=$(this).parent().siblings(".comment_author_name").children().text();
        var comment_author_name=author_name.substring(0,author_name.indexOf(comment_time));
        var article_title=$("article .article_title").text();
        $.post('../article_detail_comment_del_backstage',{
            'comment_author_name':comment_author_name,
            'comment_author_font':comment_author_font,
            'comment_time':comment_time
        },function (data,status) {
            $(".comment .comment_views").empty();
            $.post('../article_detail_getcomment_backstage',
                {
                    'article_title':article_title
                },
                function (data,status) {
                    // console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        var content_comment=$("<div class='comment_views_content'>"+
                            "<div class='comment_author_head'>"+
                            "<img src="+data[i].comment_author_head+">"+"</div>"+
                            "<div class='comment_author_name'>"+data[i].comment_author_name+"<span>"+data[i].comment_time+"</span>"+"</div>"+
                            "<div class='comment_author_font'>"+data[i].comment_content+"</div>"+
                            "<div class='comment_author_btn'>"+
                            "<button class='comment_del'>删除</button>"+
                            "</div>"+
                            "</div>");
                        $("article>.comment>.comment_views").append(content_comment);
                    }
                });
        });
        $.post('../article_detail_comment_reducenum_backstage',{
            'article_title':article_title
        },function (data,status) {
                $.post('../article_detail_comment_getnum_backstage',
                    {
                        'article_title':article_title
                    },
                    function (data,status) {
                        $("article .foot_span li:nth-child(3) span,article .comment .header_l_a span").text(data[0].article_commentnum);
                    });
            });
    });
});