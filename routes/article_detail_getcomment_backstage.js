var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_getcomment_backstage', function(req, res, next) {
    // 插入数据库
    // parse a file upload
        var connection=mysqlutil.conn();
        var sql_select=
            `
            SELECT 	
            comment_content, 
            comment_time, 
            comment_author_name, 
            comment_author_head
            FROM 
            graduationproject.comment 
            WHERE article_id=(
        SELECT 	id
             
            FROM 
            graduationproject.article 
            WHERE
            article_title ='${req.body.article_title}'
        )
        order by id desc
            LIMIT 0, 50;            
        `;
        connection.query(sql_select,function (error,results,fields) {
            if(error) throw error;
            res.send(results);
        });
        connection.end();// 在此回调函数中才能得到文件上传的路径
});


module.exports = router;
