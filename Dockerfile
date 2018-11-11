FROM johnpapa/angular-cli as Builder

RUN npm install --production

RUN npm run build:prod

