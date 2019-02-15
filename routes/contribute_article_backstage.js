var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');
var formidable = require('formidable'),
    util = require('util');

/* GET home page. */
router.post('/contribute_article_backstage', function(req, res, next) {
    // 插入数据库
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;// 保留扩展名
    form.uploadDir = 'public/images/';// 设置文件上传路径
    form.parse(req, function (err, fields, files) {
        var img_path = files.img_upload.path;
        var position=img_path.indexOf('\\');
        var path1=img_path.substring(position);
        var path2=path1.replace(/\\/g,'\\\\');
        path2='http://127.0.0.1:3000/'+path2;
        var date =new Date();
        var contribute_time=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
        sql_exe(fields, res, path2,contribute_time)// 在此回调函数中才能得到文件上传的路径
    });
});
function sql_exe(fields, res, img_path,contribute_time) {
    var connection=mysqlutil.conn();
    var sql_insert=
        `
        	INSERT INTO graduationproject.article 
            (
            article_tag, 
            article_img, 
            article_title, 
            article_contents, 
            article_comment, 
            article_author, 
            article_time, 
            article_commentnum, 
            article_clicknum, 
            article_url
            )
            VALUES
            (
            '${fields.article_tag}', 
            '${img_path}', 
            '${fields.article_title}', 
            '${fields.article_contents}', 
            '0',
            '${fields.article_author}', 
            '${contribute_time}', 
            '0', 
            '0', 
            '${fields.article_url}'
            );
        `;
    connection.query(sql_insert,function (error,results,fields) {
        if(error) throw error;
        res.send("success");
    });
    connection.end();
}

module.exports = router;
