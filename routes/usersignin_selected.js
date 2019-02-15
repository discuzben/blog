var express = require('express');
var router = express.Router();
var mysqlutil= require('./util/mysqlutil');

/* GET home page. */
router.post('/usersignin_selected', function(req, res, next) {
        var connection=mysqlutil.conn();
        var sql_query=
            `
                UPDATE graduationproject.usersignin 
                SET
                state = 'selected'
                WHERE username='${req.body.username}' AND
                password='${req.body.password}'
        `;
        connection.query(sql_query,function (error,results,fields) {
            if(error) throw error;
        });
        connection.end();
});

module.exports = router;
