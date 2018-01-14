const MySQLEvents = require('mysql-events');
const mysql = require('mysql');

const eventCred = {
  host:     'localhost',
  user:     'eventUser',
  password: ''
};
const sqlCred = {
  host:     'localhost',
  user:     'deletionUser',
  password: '',
  database: 'dbName'
};

const mysqlConn = mysql.createConnection(sqlCred);
const mysqlEventWatcher = MySQLEvents(eventCred);

const watcher = mysqlEventWatcher.add(
  'dbName.gpTableName',
  function (oldRow, newRow, event) {
    let rowObj = event.rows[0];
    //row inserted
    if (oldRow === null) {
      //insert code goes here
      //console.log(rowObj);
      let dim = rowObj.lessercorner.split(";")[0];
      switch (dim) {
        case "world":
        console.log("Permitted dim");
        break;
        case "DIM-1":
        console.log("Permitted dim");
        break;
        case "DIM1":
        console.log("Permitted dim");
        break;
        case "DIM6":
        console.log("Permitted dim");
        break;
        case "DIM7":
        console.log("Permitted dim");
        break;
        case "DIM-37":
        console.log("Permitted dim");
        break;
        case "DIM-42":
        console.log("Permitted dim");
        break;
        case "DIM-112":
        console.log("Permitted dim");
        break;
        default:
        console.log("Not permitted dim. Purging record: "+rowObj.id);
        let sql = "DELETE FROM griefprevention_claimdata WHERE id = "+rowObj.id;
        console.log("Purging...");
        mysqlConn.query(sql, function () {
          console.log("Purge Complete");
        });
      }
    }
/*
    //row deleted
    if (newRow === null) {
      //delete code goes here
    }

    //row updated
    if (oldRow !== null && newRow !== null) {
      //update code goes here
    }

    //detailed event information
    //console.log(event); // don't matter, it updates, delete or insert
*/
  }
);