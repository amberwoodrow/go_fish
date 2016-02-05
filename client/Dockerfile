FROM node

COPY . /client

WORKDIR /client

RUN npm install

RUN apt-get update
RUN apt-get install nginx -y


EXPOSE 80

CMD nginx -g 'daemon off;' -c /client/nginx.conf
