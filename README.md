# 👤 User Profiles App

A simple React application to display a list of users, view detailed profiles, and interact via Email or WhatsApp.

## 🚀 Features

- 🔍 Search users by name
- 👥 View user cards (2 per row)
- 📄 View individual user profiles
- 📧 Send email to user using **EmailJS**
- 💬 Contact user on **WhatsApp**
- ⚙️ Connected to a **fake backend** using JSON Server

---

## 📁 Project Structure

/public
/src
├── components
│ └── UserCard.js
├── pages
│ ├── UserProfilePage.js
│ └── UsersPage.js  
├── styles
│ └── UserStyles.css
├── App.js
└── index.js
db.json
README.md
.env


---

## 🧪 How to Run the Project

### 1. Clone the Project


git clone https://github.com/eyachamekh/Contact-App.git

cd Contact-App


### 2. Install Dependencies

npm install

### 3. Start JSON Server

npx json-server --watch db.json --port 3001

### 4. Start the React App

npm start


