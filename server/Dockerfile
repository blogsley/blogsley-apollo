# Current version. See the following:
# https://nodejs.org/en/about/releases/
ARG NODE_VERSION=node:14-buster

ARG NGINX_VERSION=nginx:1.18-alpine

## Base image for dev and build stages
FROM ${NODE_VERSION} AS apollo-base
#RUN npm install -g typescript
#RUN npm install -g ts-node
#RUN npm install -g nodemon
RUN mkdir /app && chown -R node /app/
USER node
WORKDIR /app/


## Development stage
FROM apollo-base AS apollo-dev
ENTRYPOINT ["bash", "./startdev.sh"]
