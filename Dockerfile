FROM johnpapa/angular-cli as Builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build:prod

FROM nginx:1.13.9-alpine

# copy artifact build from the 'build environment'
COPY --from=Builder /app/dist /usr/share/nginx/html

ENV BASE_URL=http://localhost:3000

WORKDIR /app

COPY /docker/start.sh .

# expose port 80
EXPOSE 80

ENTRYPOINT ["sh", "./start.sh"]



