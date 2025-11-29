# Resume Website — Web Technology Assignment (Question 1)

**Author:** V SEETHARAMA — 4MW23CS177  
**Project:** Personal Resume & Bio-Data Website  
**Hosted:** GitHub Pages  
**Technologies:** HTML, CSS, JavaScript, jQuery

---

## 🎯 Project Overview

This project is a **multi-page personal resume website** created for the Web Technology Lab Assignment (Question 1).  
It includes:

- **Home Page (index.html)**  
- **Resume Page (resume.html)**  
- **Bio-Data Page (about.html)**  
- **External CSS styling**  
- **Basic JavaScript and jQuery feature** (fade-in effect)

The website is fully hosted using **GitHub Pages**.

---

## 🔗 Live Website Link

👉 **https://vseetharama.github.io/resume-site**

---

## 📁 Folder Structure

resume-site/
├── index.html # Home page
├── resume.html # Resume page
├── about.html # Bio-data page
│
├── css/
│ └── style.css # Complete styling for all pages
│
├── js/
│ └── main.js # jQuery fade-in effect
│
└── images/ # (Optional) profile photo / images

---

## 🛠️ Technologies Used

- **HTML5** — page structure  
- **CSS3** — styling, layout, design  
- **JavaScript** — small interactions  
- **jQuery (3.6.0)** — simple animations (fade-in)  
- **GitHub Pages** — hosting  

---

## ✨ Features Implemented

### ✔ Multi-page Navigation  
Header navigation links all three pages:

- Home  
- Resume  
- About/Bio-data  

### ✔ External CSS Styling  
Colors, layout, typography, spacing — all defined in `style.css`.

### ✔ jQuery Enhancement  
A simple fade-in animation added:

```js
$(document).ready(function () {
    $("main").hide().fadeIn(800);
});
----------------------------------------------
Hosting (GitHub Pages)

Steps followed:

Created a GitHub repository named resume-site

Uploaded HTML, CSS, JS, and image files

Enabled GitHub Pages

Selected:
Source: main branch
Folder: /(root)
save.
GitHub generated a live website link: https://vseetharama.github.io/resume-site/
