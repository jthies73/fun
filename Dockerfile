# Use latest official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all files from current directory to working dir in container
COPY . .

# Install dependencies
RUN yarn install --prod

# Build the Next.js app
RUN yarn build

# start the app
CMD ["yarn", "start"]
