FROM node:20 AS omniapp-api

WORKDIR /usr/src/app

# Install pnpm
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && \
    chmod +x /bin/pnpm

# Copy root package.json
COPY package.json ./

# Install dependencies using pnpm fetch
RUN pnpm fetch

# Copy api package.json
COPY package*.json ./

# Install workspace dependencies
RUN pnpm recursive install

# Copy application source
COPY . .

EXPOSE 3099

CMD [ "pnpm", "dev" ]