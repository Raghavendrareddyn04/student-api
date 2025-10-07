# ---------- build stage ----------
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
# Install ALL deps (incl. dev) to build
RUN npm ci

COPY . .
# Build NestJS app (Nx)
RUN npm run student-build

# ---------- runtime stage ----------
FROM node:18-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NODE_OPTIONS=--max-old-space-size=256

# Only copy built artifacts and prod deps
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production

EXPOSE 3000
CMD ["node","dist/apps/student-api/main.js"]
