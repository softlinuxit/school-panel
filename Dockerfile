FROM node:14
WORKDIR /app
COPY . /app

RUN npm run build:production
RUN npm run setup:production
CMD npm run start:production
