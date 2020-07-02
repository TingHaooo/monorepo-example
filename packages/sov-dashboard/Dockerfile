# build enviroment
FROM node:lts as react-build
COPY . /app
WORKDIR /app/packages/sov-dashboard
RUN yarn
RUN yarn build

# server environment
FROM nginx:alpine
COPY ./packages/sov-dashboard/nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=react-build /app/packages/sov-dashboard/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]