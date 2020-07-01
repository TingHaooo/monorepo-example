ARG port

FROM node:lts
COPY . /app
WORKDIR /app/packages/sov-dashboard
RUN yarn 
EXPOSE "$port"
CMD yarn dev