# 🚀 URL Shortener Application

A **fully functional URL shortener backend application** built from scratch to understand how services like **Bitly** and **TinyURL** work behind the scenes.

This project focuses on **clean backend architecture**, **efficient database design**, and **scalable API development**.

---

## ✨ Features

* 🔗 Convert long URLs into short, shareable links
* 🔄 Seamless redirection to original URLs
* 📊 Track visit history with timestamps
* ⚡ Fast and efficient performance
* 🛡️ Robust error handling

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Backend framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB
* **RESTful API** – Clean API architecture
* **MVC Pattern** – Scalable project structure

---

## 📂 Project Structure

```
url-shortener/
├── controllers/
│   └── urlController.js
├── models/
│   └── urlModel.js
├── routes/
│   └── urlRoutes.js
├── config/
│   └── db.js
├── .env
├── .gitignore
├── server.js
└── README.md
```

---

## 🚀 API Endpoints

### ➕ Create Short URL

**POST** `/url`

```json
{
  "longUrl": "https://example.com"
}
```

**Response**

```json
{
  "shortId": "69a9bb"
}
```

---

### 🔄 Redirect to Original URL

**GET** `/u/:shortId`

* Redirects user to the original URL
* Stores visit timestamp automatically

---

### 📊 URL Analytics

**GET** `/analytics/:shortId`

**Response**

```json
{
  "totalClicks": 5,
  "analytics": [
    { "timestamp": 1699999999999 },
    { "timestamp": 1700001111111 }
  ]
}
```

---

## 🧠 What I Learned

* Designing RESTful APIs
* MongoDB schema modeling
* Handling redirects efficiently
* Tracking analytics data
* Clean MVC architecture
* Avoiding common Mongoose pitfalls

This project reinforced that **simple products hide complex systems underneath**.

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/url-shortener.git

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start the server
npm start
```

---

## 🔐 Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 💡 Future Improvements

* User authentication
* Rate limiting
* URL expiration
* Custom aliases
* Click statistics by country/device
* Frontend UI

---

## 🤝 Feedback

Feedback and suggestions are welcome! If you have ideas to improve this project, feel free to open an issue or reach out.

---

## 🏁 Conclusion

This project is part of my continuous learning journey in backend development. Building real-world systems like this helps bridge the gap between theory and production-ready code.

**Always learning. Always building.** 💪

---

## 📌 Tags

`#NodeJS` `#MongoDB` `#BackendDevelopment` `#JavaScript` `#APIs` `#WebDevelopment` `#100DaysOfCode`
