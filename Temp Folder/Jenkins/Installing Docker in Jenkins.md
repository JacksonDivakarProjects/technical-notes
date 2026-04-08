Perfect — let’s walk through a **step‑by‑step guide** for installing Docker inside your Jenkins container _without using a Dockerfile_, while also handling volumes, the Docker socket, and permissions.

---

## 🔧 Step 1: Run Jenkins with Docker Socket Mounted

Start Jenkins with the host’s Docker socket mounted as a volume. This lets Jenkins talk to the host’s Docker daemon:

```bash
docker run -d --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts
```

- `jenkins_data` → persistent Jenkins home directory
- `/var/run/docker.sock` → gives Jenkins access to the host’s Docker daemon

---

## 🔧 Step 2: Enter the Jenkins Container

```bash
docker exec -it -u root jenkins bash
```

- `-u root` ensures you have root privileges inside the container (the default Jenkins user cannot install packages).

---

## 🔧 Step 3: Install Docker CLI Inside Jenkins

Run these commands inside the container:

```bash
apt-get update
apt-get install -y docker.io
```

This installs the **Docker CLI** inside Jenkins. You don’t need the full Docker engine because Jenkins will use the host’s engine via the mounted socket.

---

## 🔧 Step 4: Fix Permissions for the Docker Socket

By default, `/var/run/docker.sock` belongs to the `docker` group on the host. Inside Jenkins, you need to make sure the `jenkins` user can access it.

1. Check socket permissions on the host:
    
    ```bash
    ls -l /var/run/docker.sock
    ```
    
    Example output:
    
    ```
    srw-rw---- 1 root docker 0 Mar  2 17:46 /var/run/docker.sock
    ```
    
2. Inside the Jenkins container, add the `jenkins` user to the `docker` group:
    
    ```bash
    groupadd docker
    usermod -aG docker jenkins
    ```
    
3. Restart the container so group membership takes effect:
    
    ```bash
    docker restart jenkins
    ```
    

---

## 🔧 Step 5: Verify Docker Access

Back inside the container (as `jenkins` user):

```bash
docker exec -it jenkins bash
docker ps
```

If permissions are correct, you’ll see the list of running containers.

---

## 🔧 Step 6: Use in Jenkins Jobs

Now Jenkins jobs can run Docker commands directly. For example, in a Freestyle job:

- Add a **Build step → Execute shell**
- Run:
    
    ```bash
    docker run hello-world
    ```
    

Or in a Pipeline:

```groovy
pipeline {
    agent any
    stages {
        stage('Test Docker') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
```

---

## ✅ Summary

- Mount `/var/run/docker.sock` into Jenkins.
- Install Docker CLI inside Jenkins (via `apt-get`).
- Add `jenkins` user to the `docker` group for socket permissions.
- Restart container → Jenkins can now run Docker commands in jobs.

---

Would you like me to extend this guide with a **real Jenkins pipeline example** that spins up your MySQL container and calls the stored procedure automatically, now that Docker is available inside Jenkins?