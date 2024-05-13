FROM node:latest
COPY . /rezau/app/

WORKDIR /rezau/app/
RUN npm install

EXPOSE 8080

CMD ["node","index.js"]