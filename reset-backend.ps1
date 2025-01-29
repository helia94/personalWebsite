docker system prune -f
docker-compose build --no-cache backend
docker-compose up backend
