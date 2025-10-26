# Docker Setup for Taatom Prelaunch Website

This guide explains how to build and run the Taatom prelaunch website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (included with Docker Desktop)
- Environment variables configured

## Quick Start

### 1. Configure Environment Variables

Create a `.env.local` file in the root directory with your configuration:

```env
MONGO_URL="mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="taatompreusers"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
```

### 2. Build and Run with Docker Compose

#### Production Mode
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### Development Mode
```bash
# Run in development mode with hot reload
docker-compose -f docker-compose.dev.yml up

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop the container
docker-compose -f docker-compose.dev.yml down
```

The website will be available at `http://localhost:3000`

## Docker Commands

### Build Docker Image

```bash
docker build -t taatom-prelaunch .
```

### Run Docker Container

```bash
docker run -p 3000:3000 \
  -e MONGO_URL="your_mongodb_url" \
  -e DB_NAME="taatompreusers" \
  -e EMAIL_USER="your_email" \
  -e EMAIL_PASS="your_password" \
  taatom-prelaunch
```

### Using Environment File

```bash
docker run -p 3000:3000 --env-file .env.local taatom-prelaunch
```

## Development with Docker

### Development Mode with Hot Reload

Use the development Docker Compose file for hot reload:

```bash
# Start development container
docker-compose -f docker-compose.dev.yml up

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d
```

Changes to your code will automatically reload the application.

### Direct Development Container

For development with mounted volumes:

```bash
docker run -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  -v /app/.next \
  --env-file .env.local \
  node:18-alpine \
  sh -c "npm install && npm run dev"
```

## Production Deployment

### Build for Production

```bash
docker build -t taatom-prelaunch:latest .
```

### Push to Docker Registry

```bash
# Tag the image
docker tag taatom-prelaunch:latest your-registry/taatom-prelaunch:latest

# Push to registry
docker push your-registry/taatom-prelaunch:latest
```

### Deploy on VPS/Cloud

```bash
# Pull image
docker pull your-registry/taatom-prelaunch:latest

# Run container
docker run -d \
  --name taatom-prelaunch \
  -p 3000:3000 \
  --env-file .env.local \
  --restart unless-stopped \
  your-registry/taatom-prelaunch:latest
```

## Docker Compose Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f web

# Restart services
docker-compose restart

# Rebuild and restart
docker-compose up -d --build

# View running containers
docker-compose ps
```

## Troubleshooting

### Environment Variables Not Loading from .env.local

The warnings about environment variables are normal. Docker Compose reads from `.env.local` but needs the variables to be exported. 

**Solution**: The environment variables are loaded at runtime from `.env.local` file. The build-time warnings don't affect functionality.

### Container won't start

```bash
# Check logs
docker-compose logs web

# Check if port is already in use
lsof -i :3000

# Rebuild if needed
docker-compose up -d --build
```

### Database connection issues

The database connection happens at runtime, not during build. This is normal and expected.

### MongoDB connection issues

Verify your MongoDB connection string is correct and accessible from the Docker container.

### Email not sending

Check that your email credentials are correct and that "Less secure app access" is enabled for Gmail.

## Multi-stage Build

The Dockerfile uses multi-stage builds to:
1. **deps**: Install dependencies
2. **builder**: Build the Next.js application
3. **runner**: Create the final production image

This results in a smaller final image (~300MB vs ~1GB).

## Security Notes

- Never commit `.env.local` files to version control
- Use Docker secrets in production
- Regularly update base images
- Run containers as non-root user (already configured)

## Health Checks

The docker-compose includes a health check that monitors the application:

```bash
# Check health status
docker-compose ps
```

## Cleaning Up

```bash
# Remove containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Remove images
docker rmi taatom-prelaunch

# Clean up all unused resources
docker system prune -a
```

## References

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

