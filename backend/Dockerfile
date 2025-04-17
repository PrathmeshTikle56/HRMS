FROM node:18

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose NestJS app port
EXPOSE 3001

# Run with hot-reloading
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/main.ts"]
