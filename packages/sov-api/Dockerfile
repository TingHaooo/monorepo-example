FROM node:lts

ARG port
COPY . /app
WORKDIR /app/packages/sov-api
RUN yarn
EXPOSE "$port"
CMD yarn dev