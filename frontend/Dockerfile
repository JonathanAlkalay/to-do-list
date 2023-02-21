FROM node:16 AS builder

COPY ./common/package*.json ./common/
RUN npm install --prefix common

COPY ./common ./common
RUN npm run build --prefix common

COPY ./frontend/package*.json ./frontend/
RUN npm install --prefix frontend

COPY ./frontend ./frontend
RUN npm run build --prefix frontend

FROM nginx:alpine

COPY --from=builder frontend/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]