# ---------- build ----------
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- runtime ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf "server {\n  listen 8080;\n  root /usr/share/nginx/html;\n  location /api/ { return 404; }\n  try_files \$uri /index.html;\n}" > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
