# CRUD-book

A simple CRUD application for a book store.  
A RESTful API built with **Node.js**, **Express**, and **MySQL** to manage a collection of books.

---

## Description

This project allows users to create, read, update, and delete books from a MySQL database with JWT-based authentication protecting certain routes.

---

## 🔧 Technologies Used

- **Node.js** – JavaScript runtime  
- **JWT** – JSON Web Tokens for user authentication  
- **Express.js** – Web framework for building API routes  
- **MySQL** – Relational database for storing book data  
- **Docker** – Containerization platform to run the app easily  
- **dotenv** – For managing environment variables  
- **Postman** – For testing the API  

---

## 🚀 Getting Started

Make sure you have a `.env` file configured with your database and JWT secrets before running.

```bash
git clone git@github.com:aboubakrbkd/CRUD-book.git
cd CRUD-book/CRUD-book/
docker build -t crud_book .
docker run -p 3001:3001 --env-file .env crud_book
```
