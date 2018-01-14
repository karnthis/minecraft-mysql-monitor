# minecraft-mysql-monitor

This project was built for the Xtreme Idiots Minecraft server. It is designed to monitor the Grief Prevention MySQL database in real time, and delete invalid claims that would cause GP to crash on next startup. As XI runs a The 1.7.10 Pack server, this is configured to work best with that.

I have adjusted the version here to have placeholder values that you can fill in with your own details as needed.

## To get running do the following:
1. Confirm your host allows running custom Node.js processes
2. Configure your MySQL instance to use bin-logs. Add the following to my.ini "log-bin=LOGGERNAME" and "binlog_format=row". Replace LOGGERNAME with whatever you want your binlog files to be named
3. Create two mysql users. One must have Replication Slave and Replication Client permissions, and the other must have the Delete permission
4. Install Node/NPM
5. Download this project to your minecraft host
6. Navigate to the downloaded project directory in command line, and type "npm install". This will install everything you need.
7. Update the index.js with the following:
   - Lines 6-7, enter the Delete mysql username and password
   - Lines 11-12, enter the Replication msql username and password
   - Line 13, enter the database name that contains your Grief Prevention data
   - Line 20, replace the database and table names with your relevant data (default GP table name is griefprevention_claimdata). Be sure to maintain the "." format!
   - Line 55, update the sql table name (if different from default)
8. Restart MySQL if you haven't already
9. Fire up the process using "npm start" in your command line from step 6
10. That's it! Give it a test, and post an issue if you have troubles you can't figure out
