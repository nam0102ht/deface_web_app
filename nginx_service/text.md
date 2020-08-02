RUN docker file
docker build -t nginx_service .
docker run --rm -it -p 8080:80 nginx_service