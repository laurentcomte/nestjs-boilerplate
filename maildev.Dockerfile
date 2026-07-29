FROM node:22.23.2-alpine

RUN npm i -g maildev@2.0.5

CMD maildev
