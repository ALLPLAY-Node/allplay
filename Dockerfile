# 1. Base image
FROM node:20-alpine AS builder

# 2. Work directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

# 4. Copy source code and build
COPY . .
RUN npx prisma generate
RUN npx tsc

# 5. Production image
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

# Environment variables (will be provided at runtime)
EXPOSE 3000

# Start command
CMD ["npm", "start"]
