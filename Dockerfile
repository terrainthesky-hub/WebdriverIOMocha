# Use an official Node runtime as a parent image
FROM node:latest

# Install Chrome for running tests
RUN apt-get update && apt-get install -y wget gnupg2
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update && apt-get install -y google-chrome-stable

# Install other dependencies
RUN apt-get install -y libnss3 libgconf-2-4 libfontconfig1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
COPY package*.json ./
RUN npm install

# Make port 4444 available to the world outside this container
EXPOSE 4444

# Run WebdriverIO tests when the container launches
CMD ["npx", "wdio", "wdio.conf.ts"]

COPY ./allure-results ./allure-results