# base image our image will be based upon
FROM node:4.2.5

# create app direct
RUN mkdir -p /opt/hello-squirrel
WORKDIR /opt/hello-squirrel

# install app deps

RUN npm install -g yarn
COPY package.json /opt/hello-squirrel
RUN yarn

COPY . /opt/hello-squirrel

CMD ["npm", "start"]

