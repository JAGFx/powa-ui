FROM node:14-alpine
WORKDIR /var/www/html/
COPY . /var/www/html/

# Build front
RUN npm ci
RUN npm run app:prod

# Build server
ENV NODE_ENV production
RUN cd server && npm ci
RUN npm run server:build

EXPOSE 3000

CMD ["npm", "run", "start"]
