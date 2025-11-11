# 🔗 KGS Assessment 2: URL Shrinker

This is a URL Shortening application that allows users to convert long URLs into compact shareable links. The system stores shortened URLs in the database and redirects users to the original website when the short link is visited.

---

## 🌐 Live Demo

[https://kgs-assignment-2.netlify.app/](https://kgs-assignment-2.netlify.app/)

---

## 📌 About

The goal of this project is to provide a fast and simple way to shorten URLs. Users can enter any long URL, receive a unique short link, and use that shortened link anywhere. The backend stores the mapping between long and short URLs using a MongoDB database.

---

## ✨ Key Features

* Input any valid URL and generate a short version
* Database storage for repeated use and tracking
* Automatic redirect to the original link when short URL is visited
* Clean and simple user interface
* Works quickly and efficiently

---

## 🏗 Tech Stack

| Layer    | Technologies                  |
| -------- | ----------------------------- |
| Frontend | React, HTML5, CSS, JavaScript |
| Backend  | Node.js, Express.js           |
| Database | MongoDB                       |

---

## 📁 Project Structure

```
client/
  src/
    components/
    pages/
    App.js

server/
  models/
  routes/
  controllers/
  server.js
```

---

## 🔄 How It Works

1. User enters a long URL in the input box
2. App sends the URL to the backend
3. Backend generates a unique short code
4. Short code + base URL becomes the new shortened link
5. When someone visits that short link, backend redirects them to the original long URL

---

## 🏷 Topics Used

```
nodejs
javascript
css
html5
mongodb
reactjs
expressjs
```

---

## 👨‍💻 Author

**Abhishek Solanki**
🌐 Portfolio: [https://abhishek07788.github.io](https://abhishek07788.github.io)
🐱 GitHub: [https://github.com/Abhishek07788](https://github.com/Abhishek07788)
💼 LinkedIn: [https://linkedin.com/in/abhishekpratapsolanki](https://linkedin.com/in/abhishekpratapsolanki)

---
