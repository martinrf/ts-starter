FROM node:12-alpine

COPY package.json /usr/local/bin/service/
COPY yarn.lock /usr/local/bin/service/
WORKDIR /usr/local/bin/service/
RUN DOCKER_ENV=1 yarn install --frozen-lockfile --production
COPY dist /usr/local/bin/service/dist/
EXPOSE 5000
WORKDIR /usr/local/bin/service/dist
CMD [ "node", "server.js" ]
