var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_comment_del_backstage', function(req, res, next) {
    // 插入数据库
    // parse a file upload
        var connection=mysqlutil.conn();
        var sql_select=
            `  
            DELETE FROM graduationproject.comment 
            WHERE
            comment_content='${req.body.comment_author_font}' 
            AND comment_time='${req.body.comment_time}' 
            AND comment_author_name='${req.body.comment_author_name}';
        `;
        connection.query(sql_select,function (error,results,fields) {
            if(error) throw error;
            res.send("{'result':删除成功}");
        });
        connection.end();// 在此回调函数中才能得到文件上传的路径
});


module.exports = router;
