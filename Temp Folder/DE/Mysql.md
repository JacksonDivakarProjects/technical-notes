To connect a MySQL instance running on your local machine to Databricks Community Edition, you must ==bridge the gap between your private local network and the public Databricks cloud==. Because Databricks cannot "see" your computer's `localhost`, you need to expose your local port securely.

## Method 1: Using ngrok (Recommended for Testing)

[ngrok](https://ngrok.com/docs/using-ngrok-with/mysql) is a popular tool that creates a secure tunnel to your local machine and provides a public URL that Databricks can reach. [1, 2]

1. Expose MySQL: Run the following command in your local terminal to expose the default MySQL port (3306):  
    `ngrok tcp 3306`.
2. Get the Public Address: ngrok will provide a "Forwarding" address like `0.tcp.ngrok.io:12345`.
3. Configure MySQL User: Ensure your local MySQL user is allowed to connect from a remote host (not just `localhost`):  
    `CREATE USER 'db_user'@'%' IDENTIFIED BY 'your_password';`.
4. Connect in Databricks: In your Databricks notebook, use the ngrok address as your host:
    
    ```python
    remote_host = "0.tcp.ngrok.io"
    remote_port = "12345" # Use the port provided by ngrok
    ```
    
    [1, 2, 3, 4, 5]

## Method 2: Using an SSH Tunnel (More Secure)

If you have access to a public server (like an AWS EC2 instance), you can set up a Reverse SSH Tunnel. [6]

- You map your local MySQL port to a port on the public server.
- Databricks then connects to the public server's IP and the mapped port, which forwards the traffic back to your local machine. [6, 7]

## Method 3: Local File Upload (Easiest & Most Reliable)

If you don't need a "live" connection, the most stable way to work in the Free Edition is to bypass networking entirely: [8]

1. Export from MySQL: Run a command to save your data as a CSV:  
    `SELECT * FROM your_table INTO OUTFILE 'data.csv' FIELDS TERMINATED BY ',';`
2. Upload to Databricks: Use the Data tab in the Databricks sidebar to upload the CSV directly to the Databricks File System (DBFS).
3. Read the File:
    
    ```python
    df = spark.read.format("csv").option("header", "true").load("/FileStore/tables/data.csv")
    ```
    
    [9]

## Important Troubleshooting Tips

- Firewall: Ensure your local firewall (Windows Firewall or macOS) allows inbound connections on port 3306.
- MySQL Bind Address: Check your `my.cnf` or `my.ini` file. The `bind-address` must be set to `0.0.0.0` rather than `127.0.0.1` to accept external connections.
- Driver Check: Databricks usually has the MySQL JDBC driver pre-installed, but you may need to attach it to your cluster if you get a "Class not found" error. [8, 10, 11, 12]

  

[1] [https://www.ibm.com](https://www.ibm.com/docs/en/apicgraphql-ipaas?topic=ngrok-using-mysql)

[2] [https://help.rocketadmin.com](https://help.rocketadmin.com/en/articles/8556731-how-to-connect-a-local-database-via-ngrok)

[3] [https://docs.uibakery.io](https://docs.uibakery.io/concepts/data-sources/connecting-local-database-via-ngrok)

[4] [https://www.matillion.com](https://www.matillion.com/connectors/mysql/databricks)

[5] [https://community.databricks.com](https://community.databricks.com/t5/data-engineering/set-up-connection-to-on-prem-sql-server/td-p/69159)

[6] [https://dev.to](https://dev.to/thekbbohara/how-to-expose-your-local-mysql-database-to-a-friend-using-an-ec2-reverse-ssh-tunnel-baby-25f8)

[7] [https://www.cdata.com](https://www.cdata.com/kb/articles/mysql-ssh-tunnel.rst)

[8] [https://www.siliconindia.com](https://www.siliconindia.com/news/general/how-to-connect-mysql-with-databricks-nid-233421-cid-1.html)

[9] [https://www.cdata.com](https://www.cdata.com/kb/tech/databricks-odbc-mysql-php.rst)

[10] [https://getbruin.com](https://getbruin.com/ingestion/platforms/copy-data-from-mysql-to-databricks/)

[11] [https://getbruin.com](https://getbruin.com/ingestion/platforms/copy-data-from-mysql-to-databricks/)

[12] [https://www.siliconindia.com](https://www.siliconindia.com/news/general/how-to-connect-mysql-with-databricks-nid-233421-cid-1.html)