# React Weather App

This is a simple weather application built with React, Docker, and Kubernetes. It displays the current weather information for a given location.

## Features

- Displays current weather information including temperature, humidity, wind speed, etc.
- Allows users to search for weather information by city name.
- Responsive design for mobile and desktop.

## Technologies Used

- React.js
- Docker
- Kubernetes (K8s)
- Helm

## Prerequisites

- Node.js (npm)
- Docker
- Kubernetes cluster (Minikube, Docker Desktop Kubernetes, or a cloud provider)

## Installation

1. **Clone the repository:**
   git clone https://github.com/keshav-curie-money/weather-app.git
   cd weather-app

2. **Install dependencies:**
   npm install

3. **Run the application locally:**
   npm start

4. **Build the Docker image:**
   docker build -t your-dockerhub-username/weather-app:latest .

5. **Build the Docker image:**
   docker push your-dockerhub-username/weather-app:latest

6. **Deploy the application to Kubernetes using Helm:**
   helm install weather-app-helm ./weather-app-helm
