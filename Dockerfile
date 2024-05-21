FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000 
CMD ["npm","start"]


# port number in EXPOSE needs to match server.js port number