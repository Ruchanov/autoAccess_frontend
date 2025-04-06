FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

# запустить npm-force-resolutions до npm install
RUN npx npm-force-resolutions && npm install

COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
