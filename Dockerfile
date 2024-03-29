# Development
FROM node:20-alpine AS development
ENV NODE_ENV development
ARG PORT=3000
ENV PORT ${PORT}
EXPOSE ${PORT} 9229

# Set global npm dependencies to be stored under the node user directory
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node
WORKDIR /home/node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
CMD [ "npm", "run", "start" ]

# Production-build
FROM development AS production-build
ENV NODE_ENV production

RUN npm ci
RUN npm run build

# Production
FROM nginxinc/nginx-unprivileged:1-alpine AS production
COPY --from=production-build /home/node/build /usr/share/nginx/html
