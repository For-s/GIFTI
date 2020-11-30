var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kimminsun',
  database : 'gifti'
});

connection.connect();

if(choiced_id==='n'){
    connection.query('UPDATE gifti.ntsf SET n = n+1 WHERE id=1', function(err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}
else if(choiced_id==='s'){
    connection.query('UPDATE gifti.ntsf SET s = s+1 WHERE id=1', function(err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}
else if(choiced_id==='t'){
    connection.query('UPDATE gifti.ntsf SET t = t+1 WHERE id=1', function(err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}
else if(choiced_id==='f'){
    connection.query('UPDATE gifti.ntsf SET f = f+1 WHERE id=1', function(err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}

connection.end();