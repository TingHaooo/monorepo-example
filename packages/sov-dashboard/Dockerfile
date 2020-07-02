FROM node:lts

ARG port
ARG env

COPY . /app
WORKDIR /app/packages/sov-dashboard
RUN chmod u+x ./bash.sh && ./bash.sh $env
EXPOSE "$port"
CMD yarn dev