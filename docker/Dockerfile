FROM node:14
WORKDIR /var/www/html/

RUN apt update -y && apt upgrade -y && apt dist-upgrade -y && apt full-upgrade -y && apt autoremove -y

COPY . /var/www/html/

RUN npm ci
RUN rm .env.local
RUN npm run app:prod
RUN cd server && npm ci
RUN npm run server:build

RUN /var/www/html/docker/clean-up.sh

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "run", "start"]
