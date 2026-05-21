FROM dhi.io/node:26-debian13-sfw-dev

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]
