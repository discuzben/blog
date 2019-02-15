var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/get_clicktitle_backstage', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_gettitle=
        `
        SELECT  article_title   
        FROM 
        graduationproject.article
        ORDER BY article_clicknum DESC
        limit 0,6;
        `;
    connection.query(sql_gettitle,function (error,results,fields) {
        if(error) throw error;
        if (results.length>0){
            res.send(results);
        }else{
            res.send("无数据");
        }
    });
    connection.end();
});

module.exports = router;