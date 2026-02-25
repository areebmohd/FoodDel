# 🍔 FoodDel – MERN Food Delivery Website

A **full-stack food delivery web application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), designed to let users browse restaurant menus, place food orders, and manage deliveries — similar to modern food ordering platforms. ([GitHub][1])

> 🚀 This project includes separate **admin**, **backend**, and **frontend** components, making it a complete end-to-end food delivery system ready for development, learning, and deployment. ([GitHub][1])

---

## ⭐ Main Goal

It is demo for a public food delivery site that delivers food from online orders. It has menu, cart and online payment.
Realtime access to order info and account login. Admin has access to admin panel that can add food items in the site, view users and orders.

## 🛠️ Features

✔ Full **MERN stack architecture** (React + Node + Express + MongoDB)
✔ User-friendly frontend for browsing and ordering food ([GitHub][1])
✔ Backend APIs to handle orders, users, menus, and more ([GitHub][1])
✔ Administrative panel for managing restaurants and orders ([GitHub][1])
✔ Simple authentication and role-based access (to be extended)
✔ Responsive UI suitable for web browsers

---

## 📁 Project Structure

```
FoodDel/
├── admin/                  # Admin dashboard code
├── backend/                # Server API (Node.js + Express)
├── frontend/               # Client app (React.js)
├── .gitignore
├── package.json
└── README.md
```

Each folder can be run independently to start the respective part of the application. ([GitHub][1])

---

## 🧠 Tech Stack

| Layer     | Technology                  |
| --------- | --------------------------- |
| Database  | **MongoDB**                 |
| Backend   | **Node.js**, **Express.js** |
| Frontend  | **React.js**                |
| Styling   | CSS / UI libs               |
| Dev Tools | NPM / Git                   |

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/areebmohd/FoodDel.git
cd FoodDel
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Admin (Optional)

```bash
cd ../admin
npm install
```

---

### 3. Configure Environment Variables

Create `.env` files (in `backend` and optionally `frontend`) with appropriate variables:

```
# Example (backend/.env)
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET
```

> 🔑 Replace placeholders with real connection strings and secret keys.

---

### 4. Start Development Environment

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
cd ../frontend
npm run start
```

#### Admin

```bash
cd ../admin
npm start
```

Once the servers are running, open the app in your browser (usually at `http://localhost:3000` or specified port).

---

## 🧠 How It Works

* The **frontend** React app lets users explore menus and place orders.
* The **backend API** (Express + Node) serves endpoints for users, food items, orders, and admin operations.
* **MongoDB** stores structured data (users, food items, orders).
* Admin panel provides a control interface for restaurant owners or staff.

You can extend this basic structure to include **authentication**, **cart workflows**, **payments (Stripe/razorpay)**, **delivery tracking**, and more — like typical food delivery platforms. ([GitHub][2])

---

## 🧰 Useful Scripts

| Script        | Description                              |
| ------------- | ---------------------------------------- |
| `npm run dev` | Start backend in dev mode (with nodemon) |
| `npm start`   | Start frontend or admin app              |
| `npm test`    | Run test suite (if added)                |

---

## 🚀 Deployment

To deploy this project, you can use:

* **Render** or **Heroku** for backend
* **Vercel** or **Netlify** for frontend
* **MongoDB Atlas** for a managed database

Make sure to configure environment variables securely in the deployment platform.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/...`)
3. Make your changes
4. Submit a Pull Request

[1]: https://github.com/areebmohd/FoodDel "GitHub - areebmohd/FoodDel: food delivery website created using mern stack"
[2]: https://github.com/saqibbedar/food-del?utm_source=chatgpt.com "saqibbedar/food-del: Food Ordering App (MERN Stack)"
