# 🛒 Simple E-Commerce Web Application

A basic full-stack E-Commerce Web Application built using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

This project demonstrates product management, user authentication, shopping cart functionality, checkout, and order tracking.

---

## 📌 Features

### User Features
- User Registration
- User Login
- View Products
- Add Products to Cart
- Checkout Products
- Track Orders

### Admin Features
- Add Products
- Manage Product Catalog
- View Orders
- Role-Based Access (Admin/User)

### Backend Features
- REST APIs
- MySQL Database Integration
- Product Management
- Order Management

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

---

## 📂 Project Structure

ecommerce-app/

├── frontend/

│ ├── index.html

│ ├── login.html

│ ├── register.html

│ ├── cart.html

│ ├── orders.html

│ ├── admin.html

│ ├── style.css

│ └── script.js

│

├── backend/

│ ├── server.js

│ └── package.json

│

├── database.sql

└── README.md

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
```

### 2. Open Project

```bash
cd ecommerce-app
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Create MySQL Database

Open MySQL and run:

```sql
CREATE DATABASE ecommerce;
```

Then execute the SQL file:

```bash
database.sql
```

### 5. Configure Database

Open:

```javascript
backend/server.js
```

Update:

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "ecommerce"
});
```

Replace:

```text
YOUR_PASSWORD
```

with your MySQL password.

### 6. Start Backend Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

### 7. Run Frontend

Open:

```text
frontend/index.html
```

in your browser.

---

## 🗄️ Database Tables

### Users

Stores user information and roles.

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |
| role | ENUM |

### Products

Stores product details.

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR |
| price | DECIMAL |

### Cart

Stores cart items.

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| product_id | INT |
| quantity | INT |

### Orders

Stores placed orders.

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| product_id | INT |
| quantity | INT |
| status | VARCHAR |

---

## 🔗 API Endpoints

### Authentication

```http
POST /register
POST /login
```

### Products

```http
GET /products
POST /products
```

### Cart

```http
POST /cart
GET /cart/:userId
```

### Orders

```http
POST /checkout
GET /orders/:userId
GET /orders
```

---

## 🚀 Future Improvements

- Product Images
- Product Search
- Product Categories
- JWT Authentication
- Password Encryption
- Payment Gateway Integration
- Wishlist Feature
- Admin Dashboard Analytics
- Responsive Mobile Design

---

## 🎯 Learning Outcomes

This project helps understand:

- Frontend Development
- Backend Development
- REST APIs
- MySQL Integration
- CRUD Operations
- User Authentication
- Order Management
- Full-Stack Application Development

---

## 👨‍💻 Author

Muhammad Hashim Khan

CSE Student

Hindusthan Institute of Technology

---

## 📄 License

This project is created for educational and internship purposes.
