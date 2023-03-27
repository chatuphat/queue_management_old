# Specify the base image
FROM node:14.18.1-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files to the container
COPY . .

# Build the project
RUN yarn build

# Specify the command to run the project