var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_comment_newnum_backstage', function(req, res, next) {
    // 插入数据库
    // parse a file upload
        var connection=mysqlutil.conn();
        var sql_update=
            `
            UPDATE graduationproject.article 
                SET
                article_commentnum = article_commentnum+1 
                
                WHERE
                article_title ='${req.body.article_title}';
        `;
        connection.query(sql_update,function (error,results,fields) {
            if(error) throw error;
            res.send("success");
        });
        connection.end();// 在此回调函数中才能得到文件上传的路径
});


module.exports = router;
