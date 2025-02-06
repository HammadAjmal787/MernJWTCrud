MERN JWT CRUD App
A MERN (MongoDB, Express.js, Node.js) application implementing CRUD operations with JWT authentication.

Features
✅ User Authentication with JWT (JSON Web Token)
✅ CRUD Operations (Create, Read, Update, Delete) for managing resources
✅ Secure API Routes with authentication middleware
✅ MongoDB Database Integration using Mongoose
✅ RESTful API with Express.js

Tech Stack
MongoDB – Database

Express.js – Backend Framework

Node.js – Server Environment

JWT – Authentication

Mongoose – MongoDB ODM

Setup Instructions
1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/MernJWTCrud.git
cd MernJWTCrud
2. Install Dependencies
Backend
bash
Copy
cd backend
npm install
Frontend
bash
Copy
cd frontend
npm install
3. Configure Environment Variables
Create a .env file in the backend folder and add the following:

ini
Copy
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Replace your_mongodb_connection_string with your MongoDB Atlas connection string.

Replace your_secret_key with a strong secret key for JWT signing.

4. Run the Application
Backend
bash
Copy
cd backend
npm run dev
Frontend
bash
Copy
cd frontend
npm start
5. API Endpoints
Method	Endpoint	Description	
POST	/api/users	Register a new user
POST	/api/users/login	Login & get JWT token	
GET	/api/goals	Get all user goals	
POST	/api/goals	Create a new goal	
PUT	/api/goals/:id	Update a goal
DELETE	/api/goals/:id	Delete a goal	
License
This project is open-source. Feel free to use and modify it!


