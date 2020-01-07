FROM node:10

WORKDIR /usr/rendering-service

VOLUME /usr/rendering-service/

EXPOSE 5000

COPY entryPoint.sh /docker/entryPoint.sh
RUN chmod +x /docker/entryPoint.sh
ENTRYPOINT "/docker/entryPoint.sh"