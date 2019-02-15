var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_comment_insert_backstage2', function(req, res, next) {
    // 插入数据库
    // parse a file upload
        var connection=mysqlutil.conn();
        var sql_select=
            `
            select 	username,userhead
            from
            graduationproject.usersignin 
            where state='selected'
        `;
        connection.query(sql_select,function (error,results,fields) {
            if(error) throw error;
            res.send(results);
        });
        connection.end();// 在此回调函数中才能得到文件上传的路径
});


module.exports = router;
