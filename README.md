# DigiShop — Frontend

A full-featured e-commerce frontend built with React and Vite, 
connected to DigiShop Backend API.

## 🚀 Live URL
Coming Soon

## 🔗 Backend Repository
Coming Soon

## 🛠️ Tech Stack
- **Framework**   — React 18
- **Build Tool**  — Vite
- **Routing**     — React Router DOM
- **HTTP Client** — Axios
- **State**       — Context API + localStorage

## ✨ Features

### Authentication
- User Signup & Login
- JWT Token stored in localStorage
- Auto logout on token expiry
- Redirect after login/signup

### Products
- View all products
- Add to cart — logged in users only

### Cart
- View cart items
- Update product quantity
- Remove products from cart
- Place order from cart

### Orders
- View all orders
- Cancel pending orders
- Track order status

### Admin
- View all users
- Users List page — admin only

### Security
- Protected Routes — login required
- Admin Routes     — admin role required
- JWT Token sent automatically with every request via Axios Interceptor

## 📁 Project Structure
-----------------------
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── Orders.jsx
│   ├── Profile.jsx
│   └── UsersList.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx

## ⚙️ Setup & Installation
--------------------------

# Clone the repository
git remote add origin https://github.com/IshanYadav1008/digi_shop_react.git

# Go to project folder
cd digi_shop_react

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variable
VITE_API_URL=http://localhost:3000

# Start development server
npm run dev

## 🔐 Environment Variables
VITE_API_URL=your_backend_url

## 🔗 API Connection
--------------------
// Axios automatically sends JWT token with every request
// via Axios Interceptor — no manual token handling needed

## 👤 Author: Ishan Yadav