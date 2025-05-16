# CRUD-book

A simple CRUD application for a book store.  
A RESTful API built with **Node.js**, **Express**, and **MySQL** to manage a collection of books.

---

## 🔧 Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for building API routes  
- **MySQL** – Relational database for storing book data  
- **dotenv** – For managing environment variables  
- **Postman** – For testing the API  

---

## 📁 Project Structure
```
CRUD-book/
├── app.js # Entry point
├── routes/
│ └── bookRoutes.js # All route definitions
├── controllers/
│ └── bookController.js # Logic for handling requests
├── models/
│ └── db.js # MySQL database connection
└── .env # Environment variables
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install

### 2. Set Up Environment Variables and Start the Server

Create a `.env` file in the root directory and add the following:

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabasename
