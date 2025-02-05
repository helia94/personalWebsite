# File: backend/Dockerfile
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy only the backend folder
COPY backend /app/backend

# Install Gunicorn
RUN pip install gunicorn


# Command to run the app with Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "backend.app:app"]
