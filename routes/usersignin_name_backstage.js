var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/usersignin_name_backstage', function(req, res, next) {
        var connection=mysqlutil.conn();
        var sql_query=
            `
            SELECT 	username
	 
            FROM
            graduationproject.usersignin
            WHERE state='selected'
        `;
        connection.query(sql_query,function (error,results,fields) {
            if(error) throw error;
            res.send(results);
        });
        connection.end();
});

module.exports = router;
