var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/readall_click_uptate_title_backstage', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_update_title=
        ` 
        UPDATE graduationproject.select_by_title 
            SET
            select_by_title = '${req.body.article_title}'
            
            WHERE
            id = '1' ;
        `;
    connection.query(sql_update_title,function (error,results,fields) {
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