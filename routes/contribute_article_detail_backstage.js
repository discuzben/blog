var express = require('express');
var router = express.Router();
var mysqlutil=require('./util/mysqlutil');

/* GET home page. */
router.post('/contribute_article_detail_backstage', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_insert=
        `
            INSERT INTO graduationproject.article_detail 
            (
            article_detail
            )
            VALUES
            (
            '${req.body.article_detail}'
            );
        `;
    connection.query(sql_insert,function (error,results,fields) {
        if(error) throw error;
        res.send("success");
    });
    connection.end();
    });
// });
module.exports = router;
