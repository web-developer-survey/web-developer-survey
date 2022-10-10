# build stage
FROM node:17 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
RUN npm install -g @vue/cli
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY  nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
