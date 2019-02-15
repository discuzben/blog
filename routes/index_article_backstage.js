var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/index_article_backstage', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_query=
        `
            SELECT 	*
            FROM
            graduationproject.article
            ORDER BY id DESC
            LIMIT 0, ${req.body.limit};
        `;
    connection.query(sql_query,function (error,results,fields) {
        if(error) throw error;
        if(results.length>0){
            res.send(results);
        }else{
            res.send('{"result":non}');
        }
    });
    connection.end();
});

module.exports = router;
