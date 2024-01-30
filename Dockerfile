# Step 1: Choose the base image with Node.js
FROM node:21-alpine as base

# Set the working directory in the container
WORKDIR /app

# Step 2: Install dependencies
# Copy package.json and related files first to leverage Docker caching
COPY package*.json ./
RUN npm install

# Step 3: Copy the rest of the application code
COPY . .

# Step 4: Build the application
RUN npm run build

# Step 5: Expose the port the app runs on
EXPOSE 3030

# Step 6: Define the command to run the app
CMD ["npm", "start"]