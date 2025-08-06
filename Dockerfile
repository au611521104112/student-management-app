FROM node:16
WORKDIR /app
COPY backend/server.js .
RUN npm init -y
RUN npm install express cors mongoose
CMD ["node", "server.js"]
EXPOSE 3000
