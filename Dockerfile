FROM johnpapa/angular-cli as Builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build:prod

FROM nginx:1.13.9-alpine

# copy artifact build from the 'build environment'
COPY --from=Builder /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]



