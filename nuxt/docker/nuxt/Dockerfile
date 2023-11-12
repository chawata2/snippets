FROM node:18-slim

ARG UID
ARG GID

ENV TZ Asia/Tokyo

RUN usermod -u ${UID:-1000} node \
    && groupmod -g ${GID:-1000} node

WORKDIR /app
RUN mkdir -p /app/node_modules
RUN chown -R node:node /app

USER node
