Here’s a **comprehensive guide** that ties together everything you’ve studied and practiced so far — from Docker basics, MySQL setup, stored procedures, and Jenkins automation — in a structured, end‑to‑end flow.

---

## 🚀 Step 1: Running MySQL in Docker

- **Start a container with persistent storage:**
    
    ```bash
    docker run -d --name mysql_container \
      -v mysql_data:/var/lib/mysql \
      -e MYSQL_ROOT_PASSWORD=53787 \
      mysql:latest
    ```
    
- **Verify it’s running:**
    
    ```bash
    docker ps
    ```
    
- **Connect to MySQL inside the container:**
    
    ```bash
    docker exec -it mysql_container mysql -u root -p
    ```
    

---

## 📊 Step 2: Creating a Database and Stored Procedure

1. **Create a database:**
    
    ```sql
    CREATE DATABASE mydb;
    USE mydb;
    ```
    
2. **Create a table:**
    
    ```sql
    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );
    ```
    
3. **Stored procedure to insert two rows:**
    
    ```sql
    DELIMITER $$
    
    CREATE PROCEDURE insert_two_students()
    BEGIN
        INSERT INTO students (id, name, age) VALUES (1, 'Alice', 20);
        INSERT INTO students (id, name, age) VALUES (2, 'Bob', 22);
    END$$
    
    DELIMITER ;
    ```
    
4. **Call the procedure:**
    
    ```sql
    CALL insert_two_students();
    ```
    

---

## ⚙️ Step 3: Running Jenkins in Docker

- **Start Jenkins container with Docker access:**
    
    ```bash
    docker run -d --name jenkins \
      -p 8080:8080 -p 50000:50000 \
      -v jenkins_data:/var/jenkins_home \
      -v /var/run/docker.sock:/var/run/docker.sock \
      jenkins/jenkins:lts
    ```
    
- Access Jenkins at: `http://localhost:8080`

---

## 🛠 Step 4: Jenkins Job to Call Stored Procedure

### Option A: Freestyle Job

1. Create a **Freestyle project**.
2. Under **Build Triggers**, select **Build periodically** and add a cron expression:
    
    ```
    H 2 * * *
    ```
    
    → Runs daily at 2 AM.
3. In **Build → Execute shell**, add:
    
    ```bash
    # Ensure MySQL container is running
    docker ps -a --format '{{.Names}}' | grep -q '^mysql_container$' \
      || docker run -d --name mysql_container -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=53787 mysql:latest
    
    # Call stored procedure
    docker exec -i mysql_container \
      mysql -u root -p53787 -D mydb -e "CALL insert_two_students();"
    ```
    

### Option B: Pipeline Job

```groovy
pipeline {
    agent any
    triggers {
        cron('H 2 * * *')  // daily at 2 AM
    }
    stages {
        stage('Run MySQL Procedure') {
            steps {
                sh '''
                docker ps -a --format '{{.Names}}' | grep -q '^mysql_container$' \
                  || docker run -d --name mysql_container -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=53787 mysql:latest

                docker exec -i mysql_container \
                  mysql -u root -p53787 -D mydb -e "CALL insert_two_students();"
                '''
            }
        }
    }
}
```

---

## 🧩 Step 5: Best Practices

- **Use `/docker-entrypoint-initdb.d`**: Place SQL scripts in this folder when building a custom MySQL image so procedures are created automatically at container startup.
- **Extend Jenkins image**: Use a Dockerfile to install tools (like `mysql-client`) so Jenkins can interact with MySQL easily.
- **Cron expressions in Jenkins**:
    - `H 0 * * *` → every day at midnight
    - `H/15 * * * *` → every 15 minutes
    - `H 0 * * 0` → every Sunday at midnight

---

## 🎯 End-to-End Flow

1. **Docker** → Run MySQL container with persistent storage.
2. **MySQL** → Create database, table, and stored procedure.
3. **Jenkins** → Run Jenkins container with Docker access.
4. **Automation** → Jenkins job (Freestyle or Pipeline) calls stored procedure on schedule.
5. **Result** → Two rows inserted automatically into MySQL at scheduled times.

---

This guide captures your full journey: Docker fundamentals, MySQL setup, stored procedures, Jenkins automation, and cron scheduling.

Would you like me to also add a **visual architecture diagram** (text-based, not an image) showing how Jenkins, Docker, and MySQL interact in this workflow?