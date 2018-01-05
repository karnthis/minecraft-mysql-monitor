var MySQLEvents = require('mysql-events');
var dsn = {
  host:     'localhost',
  user:     'root',
  password: '' // no password set that's why keep blank
};
var mysqlEventWatcher = MySQLEvents(dsn);
console.log(mysqlEventWatcher);
var watcher =mysqlEventWatcher.add(
   'mc2',
  function (oldRow, newRow, event) {
     //row inserted
    if (oldRow === null) {
      //insert code goes here
      console.log(event);
    }

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
  },
  'Active'
);