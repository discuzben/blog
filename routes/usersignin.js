var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/usersignin', function(req, res, next) {
        var connection=mysqlutil.conn();
        var sql_query=
            `
            SELECT 	*
	 
            FROM
            graduationproject.usersignin
            WHERE username='${req.body.username}' AND
            password='${req.body.password}'
            LIMIT 0, 50;
        `;
        connection.query(sql_query,function (error,results,fields) {
            if(error) throw error;
            req.session.user=results[0];
            console.log(req.session.user.id);
            if(results.length>0){
                res.send('{"result":true}');
            }else{
                res.send('{"result":false}');
            }
        });
        connection.end();
});

module.exports = router;
