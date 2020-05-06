FROM mhart/alpine-node:8.11.4
WORKDIR /nikolics-milan-website
COPY package*.json /nikolics-milan-website/
RUN npm install
COPY . /nikolics-milan-website/
RUN npm run build