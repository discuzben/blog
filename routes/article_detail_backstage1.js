var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/article_detail_backstage1', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_query=
        ` 
      SELECT 	article_tag, 
                article_title, 
                article_author, 
                article_time, 
                article_commentnum, 
                article_clicknum
                 
                FROM 
                graduationproject.article
            
                WHERE 
                article_title = (
                SELECT 	 select_by_title
                     
                    FROM 
                    graduationproject.select_by_title
                    WHERE id='1'
                ) 
                ;
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
