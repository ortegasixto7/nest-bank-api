FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN npm i --omit=dev && npm cache clean --force
RUN npm i -g @nestjs/cli
RUN npm run build
COPY ./src/graphql/**/*.graphql /app/dist

FROM node:18-alpine
WORKDIR /app
COPY --from=build-stage /app/dist dist
COPY --from=build-stage /app/node_modules node_modules
EXPOSE 8004
CMD ["node", "dist/main.js"]