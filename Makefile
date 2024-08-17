# Default environment is production
ENV ?= prod

# Docker Compose files for different environments
COMPOSE_FILE_PROD = -f docker-compose.yml
COMPOSE_FILE_DEV = -f docker-compose.dev.yml

# Choose the appropriate Docker Compose file based on the environment
ifeq ($(ENV),dev)
    COMPOSE_FILE := $(COMPOSE_FILE_DEV)
else
    COMPOSE_FILE := $(COMPOSE_FILE_PROD)
endif

# Define the Makefile commands

.PHONY: build up down clean prisma_migrate prisma_push prisma_migrate_reset

build:
	@echo "Building $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) build

up:
	@echo "Starting $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) up -d

down:
	@echo "Stopping $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) down

clean:
	@echo "Cleaning up $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) down -v --rmi all --remove-orphans

migrate:
	@echo "Running Prisma Migrate with name '$(name)' in $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) exec <your-service-name> npx prisma migrate dev --name $(name)

db-push:
	@echo "Pushing Prisma schema to the database in $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) exec <your-service-name> npx prisma db push

migrate-reset:
	@echo "Resetting Prisma Migrations in $(ENV) environment..."
	docker-compose $(COMPOSE_FILE) exec <your-service-name> npx prisma migrate reset --force