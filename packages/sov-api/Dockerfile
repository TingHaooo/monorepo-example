ARG port

FROM node:lts
COPY . /app
WORKDIR /app/packages/sov-api
RUN yarn
EXPOSE "$port"
CMD yarn dev