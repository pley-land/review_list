FROM mysql/mysql-server:5.7

ENV MYSQL_ROOT_HOST=%
ENV MYSQL_USER=root 
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=reviews


ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
