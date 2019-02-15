var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/nav_article_click_backstage', function(req, res, next) {
    console.log(req.body.length);
    var connection=mysqlutil.conn();
    var sql_update=
        `
        UPDATE classification SET 
        classification = CASE id 
                WHEN 1 THEN '${req.body.classification_val1}' 
                WHEN 2 THEN '${req.body.classification_val2}' 
                WHEN 3 THEN '${req.body.classification_val3}'
                WHEN 4 THEN '${req.body.classification_val4}' 
        END
        WHERE id IN (1,2,3,4);
        `;
    connection.query(sql_update,function (error,results,fields) {
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
