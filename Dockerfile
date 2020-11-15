FROM node:15.2.0-alpine3.10
COPY ["package.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
COPY [".", "/usr/src/"]
EXPOSE 3000
CMD ["node",  "index.js"]