FROM node:7.6-alpine

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

# Bundle app source

EXPOSE 3011

CMD [ "npm", "start" ]
