var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"rootroot",
    database:"nodejs"
})
// const DB={
//     host:"localhost",
//     port:3306,
//     user:"root",
//     password:"rootroot",
//     database:"nodejs"
// };
module.exports = connection;