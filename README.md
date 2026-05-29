🚗 CarDekho Recommendation System

A full-stack MERN application that helps users find the best car based on their preferences like budget, fuel type, transmission, features, and priority (safety/comfort/performance).

The system uses a custom scoring engine + explanation logic to recommend top matching cars.

✨ Features
🔍 Smart car filtering (budget, fuel type, transmission)
🧠 Explainable recommendations (“Why this car?”)
🚗 Top 3 personalized car suggestions
⚡ Fast REST API backend
🎨 React + Tailwind UI frontend
🗂 MongoDB database for car storage

🧠 How It Works
User submits preferences
Backend filters cars from database
Each car is scored based on:
Safety (airbags)
Comfort (features)
Performance (engine)
Feature match
Cars are sorted by score
Top 3 cars are returned with explanation

🏗 Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Backend
Node.js
Express.js
MongoDB + Mongoose
Other
REST API
Custom recommendation algorithm
