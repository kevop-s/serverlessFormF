FROM node:12.18-stretch

COPY front /front/

COPY docker-entrypoint.sh /sbin/

WORKDIR /front

RUN npm install && \
    chmod +x /sbin/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "/sbin/docker-entrypoint.sh" ]