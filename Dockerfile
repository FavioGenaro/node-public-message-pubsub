FROM node:16

COPY [".","/usr/src"]

WORKDIR /usr/src

RUN npm install

EXPOSE 8080

CMD ["node","index.js"]