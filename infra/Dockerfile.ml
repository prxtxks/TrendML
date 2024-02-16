# ML microservice Dockerfile
FROM python:3.11
WORKDIR /ml
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]