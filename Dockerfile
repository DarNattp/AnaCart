FROM node:14.20.0 AS node

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:alpine

COPY --from=node /app/dist/hello-world /usr/share/nginx/html

EXPOSE 4200 80

# Stage
