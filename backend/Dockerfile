FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install all dependencies (including @nestjs/mongoose)
RUN npm install

# Copy the rest of the application
COPY . .

# Ensure ts-node-dev is installed (if not already in devDependencies)
RUN npm install --save-dev ts-node-dev

# Expose the NestJS port
EXPOSE 3001

# Run the app with hot-reloading
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/main.ts"]
