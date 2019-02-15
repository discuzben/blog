var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/index_clicknum_backstage', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_update=
        `
        UPDATE graduationproject.article 
	    SET
	    article_clicknum = article_clicknum+1
	    
        WHERE article_title='${req.body.article_title}'
        
        `;
    connection.query(sql_update,function (error,results,fields) {
        if(error) throw error;
    });
    connection.end();
});

module.exports = router;
