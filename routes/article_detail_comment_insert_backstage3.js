var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_comment_insert_backstage3', function(req, res, next) {
    // 插入数据库
    // parse a file upload
        var connection=mysqlutil.conn();
        var sql_insert=
            `
                insert into graduationproject.comment 
                (
                article_id, 
                comment_content, 
                comment_time, 
                comment_author_name, 
                comment_author_head
                )
                values
                (
                '${req.body.article_id}', 
                '${req.body.comment_content}', 
                '${req.body.comment_time}', 
                '${req.body.comment_author_name}', 
                '${req.body.comment_author_head}'
                );
        `;
        connection.query(sql_insert,function (error,results,fields) {
            if(error) throw error;
            res.send("success");
        });
        connection.end();// 在此回调函数中才能得到文件上传的路径
});


module.exports = router;
