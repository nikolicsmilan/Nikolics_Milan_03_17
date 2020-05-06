FROM mhart/alpine-node:8.11.4
WORKDIR /nikolics-milan-api
COPY package*.json /nikolics-milan-api/
RUN apk update nodejs
RUN npm install
COPY . /nikolics-milan-api/
EXPOSE 9000
CMD ["npm", "start"]