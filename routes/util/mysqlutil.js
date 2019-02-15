var mysql = require('mysql');
function conn() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'graduationproject'
    });
    connection.connect();
    return connection
}
function abc() {
}
module.exports = {conn, abc};