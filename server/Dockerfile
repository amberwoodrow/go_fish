FROM node

WORKDIR /api

COPY package.json /api/package.json

RUN npm install

COPY . /api

EXPOSE 3000
