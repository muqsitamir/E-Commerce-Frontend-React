
#### Nginx Setup

1. `sudo apt install nginx`
2. `nginx --version`
3. `sudo service nginx start`
4. `sudo service nginx status`
5. `sudo nano /etc/nginx/sites-available/<project_name>.conf`

```

server {
        listen <domain_name>:80;
        server_name <domain_name>;
        root /root/<project_name>/build;
        index index.html;
        location / {
                try_files $uri /index.html =404;
        } 
}

```

6. `ln -s /etc/nginx/sites-available/<yourprojectname>.conf /etc/nginx/sites-enabled/<yourprojectname>.conf`


### Setting up build

1. Run `npm install -f`
2. Run `npm run build`

