FROM node:12.8.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY src /usr/src/app/src
# Expose the port the app runs in
EXPOSE 3000
CMD npm run dev
