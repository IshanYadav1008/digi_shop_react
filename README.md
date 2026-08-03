# DigiShop Frontend

A modern e-commerce frontend built with **React.js** and **Vite**, connected 
to the DigiShop Backend API. The application provides user authentication, 
product browsing, cart management, order tracking, and role-based access 
control.

---

# Live Links

| Resource              |                     Link                           |
|-----------------------|----------------------------------------------------|
| 🌐 Live Demo          | https://digi-shop-react.vercel.app                 |
| 🚀 Backend API        | https://digi-shop-node.onrender.com                |
| 💻 Backend Repository | https://github.com/IshanYadav1008/digishop-backend |

---

# Features

### Authentication

- User Signup & Login
- JWT Authentication
- Token stored in Local Storage
- Automatic Login Persistence
- Logout Functionality

### Products

- Browse Products
- View Product Details
- Search Products
- Add Products to Cart

### Cart

- View Cart
- Update Product Quantity
- Remove Products
- Place Orders

### Orders

- View Order History
- Cancel Pending Orders
- Track Order Status

### User Profile

- View Profile
- Update Profile

### Admin

- View Registered Users
- Protected Admin Routes

### Security

- Protected Routes
- Role-Based Authorization
- Axios Interceptors for JWT Authentication

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Library |
| Vite | Build Tool |
| React Router DOM | Client-side Routing |
| Axios | HTTP Client |
| Context API | State Management |
| Local Storage | JWT Token Storage |

---

# Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
│
├── context
│   └── AuthContext.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── Orders.jsx
│   ├── Profile.jsx
│   └── UsersList.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

# Installation

```bash
# Clone repository
git clone https://github.com/IshanYadav1008/digishop-frontend.git

# Navigate to project
cd digishop-frontend

# Install dependencies
npm install

# Create .env file

# Add backend URL
VITE_API_URL=http://localhost:3000

# Start development server
npm run dev
```

---

# Environment Variables

```env
VITE_API_URL=your_backend_api_url
```

---

# Backend Integration

The frontend communicates with the DigiShop Backend using **Axios**.

- REST API Communication
- JWT Authentication
- Axios Interceptors
- Automatic Authorization Header

---

# Available Scripts

```bash
npm run dev      # Development Server
npm run build    # Production Build
npm run preview  # Preview Production Build
```

---

# Future Improvements

- Responsive UI
- Product Filters
- Wishlist
- Product Reviews
- Pagination
- Admin Dashboard
- Order Invoice

---

# Author

**Ishan Yadav**

- GitHub: https://github.com/IshanYadav1008
- LinkedIn: https://www.linkedin.com/in/ishan-yadav-969b15120
