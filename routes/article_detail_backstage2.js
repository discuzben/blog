var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_backstage2', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_query=
        ` 
           	SELECT  DISTINCT article_detail
    		 
            FROM 
            graduationproject.article_detail 
            WHERE id=ANY(
            SELECT id
             
            FROM 
            graduationproject.article
    
            WHERE 
            article_title = (
            SELECT 	 select_by_title
                 
                FROM 
                graduationproject.select_by_title
                WHERE id='1'
            ) 
        )

        `;
    connection.query(sql_query,function (error,results,fields) {
        if(error) throw error;
        if(results.length>0){
            res.send(results);
        }else{
            res.send('{"result":文章不存在}');
        }
    });
    connection.end();
});

module.exports = router;
