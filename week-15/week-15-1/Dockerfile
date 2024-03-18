FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build


EXPOSE 4000

CMD [ "node", "dist/index.js" ]