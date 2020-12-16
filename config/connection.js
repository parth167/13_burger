const mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hacktheolanet",
    database: "todoagain_db",
});
};
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
connection.connect();
module.exports = connection;
