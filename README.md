# Dream Sat

A responsive Arabic RTL product showcase website built for **Dream Sat**, an electronics and home appliances store in Hurghada, Egypt.

The project is currently **Version 1**, focused on providing a clean and responsive frontend experience for browsing products and contacting the store through WhatsApp.

**Live Website:** https://dream-sat.vercel.app/

---

## 📌 Project Overview

Dream Sat is a static frontend website designed to give customers an easy way to:

* Browse available products
* Explore products by category
* Search for products
* View detailed product information
* Discover best-selling products
* Contact the store
* Place product inquiries/orders through WhatsApp
* Find the store's location and contact information

The current version intentionally uses a lightweight frontend architecture without a backend or database.

---

## 🚀 Version 1

Version 1 focuses on building and deploying the complete frontend experience.

### Current Features

* 📱 Responsive design for desktop, tablet, and mobile
* 🌐 Arabic RTL interface
* 🔎 Product search
* 🗂️ Product categories
* 🛍️ Product listing
* 📦 Product details page
* ⭐ Best-selling products section
* 🔗 Related product navigation
* 📱 WhatsApp-based product ordering
* 📍 Store location and contact information
* 🖼️ Responsive image-based hero section
* 📄 Multiple dedicated pages
* ⚡ Lightweight static architecture
* 🚀 Deployment through Vercel

---

## 🛠️ Technologies

The project was built using:

* **HTML5** for page structure
* **CSS3** for styling and responsive layouts
* **Vanilla JavaScript** for application logic and dynamic content
* **JSON** for product data
* **Git & GitHub** for version control
* **Vercel** for deployment
* **Google Fonts - Cairo** for Arabic typography

No frontend framework or backend framework is used in Version 1.

---

## 📁 Project Structure

```text
DreamSat/
│
├── assets/
│   ├── images/
│   └── ...
│
├── css/
│   └── ...
│
├── js/
│   ├── shared.js
│   └── ...
│
├── data/
│   └── products.json
│
├── index.html
├── category.html
├── product.html
├── contact.html
│
└── README.md
```

The project keeps the frontend separated into reusable HTML, CSS, JavaScript, image, and data resources.

---

## 📦 Product Data

Product information is currently managed through a JSON data source.

Each product can contain information such as:

* Product ID
* Product name
* English name
* Price
* Category
* Image
* Description

JavaScript reads the product data and dynamically generates the required product sections and pages.

This approach keeps the current Version 1 simple and easy to maintain without requiring a database.

---

## 🔎 Product Search

The website includes a client-side search experience that allows users to search through the available products.

Search results are generated from the product data used by the frontend.

---

## 📱 WhatsApp Ordering

Instead of implementing a shopping cart and payment system in Version 1, customers can contact Dream Sat directly through WhatsApp.

The website can generate a WhatsApp message containing information about the selected product, allowing the customer to quickly send an inquiry or order request to the store.

This keeps the ordering process simple while the project is still frontend-only.

---

## 📄 Website Pages

### Home

The homepage provides:

* Store introduction
* Hero section
* Product search
* Product categories
* Best-selling products
* Navigation to product details

### Categories

Products can be browsed according to their categories.

### Product Details

Each product has its own details page containing its available information and ordering option.

### Contact

The contact page provides the store's contact information, location, and communication options.

---

## 🌐 Deployment

The project is hosted using **Vercel** and connected to the GitHub repository.

The deployment workflow is:

```text
Local Development
       ↓
     Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
  Live Website
```

Every new push to the main branch can trigger a new deployment through Vercel.

### Live Website

https://dream-sat.vercel.app/

---

## 🔮 Version 2 Roadmap

Version 2 is planned as the next major stage of the project.

The goal is to move from a static frontend into a complete web application with a real backend and persistent data.

### Planned Improvements

* [ ] ASP.NET Core Web API
* [ ] Database integration
* [ ] Entity Framework Core
* [ ] Product management through a backend
* [ ] Admin dashboard
* [ ] Add, edit, and delete products
* [ ] Product and category management
* [ ] Online order management
* [ ] Customer information management
* [ ] Persistent order data
* [ ] Backend-based search and filtering
* [ ] Authentication and authorization for administrators
* [ ] Replace static JSON product data with database-driven data
* [ ] Connect Version 1 frontend to the new backend API

### Version Evolution

```text
Version 1
────────────────────────────
HTML + CSS + JavaScript + JSON
            │
            ▼
   Product Showcase Website
            │
            ▼
     WhatsApp Ordering


Version 2
────────────────────────────
Frontend
    │
    ▼
ASP.NET Core Web API
    │
    ▼
Entity Framework Core
    │
    ▼
Database
    │
    ├── Products
    ├── Categories
    ├── Customers
    └── Orders

            +
      Admin Dashboard
```

The long-term goal is to turn Dream Sat into a complete web application where products, customers, and orders can be managed through a real backend system.

---

## 🎯 Project Goals

The project was built with two main goals:

1. Create a practical and useful website for a real local business.
2. Use the project as a foundation for learning and implementing a full-stack architecture in Version 2.

Version 1 focuses on the frontend experience and deployment, while Version 2 will introduce backend development, database management, and administrative functionality.

---

## 📸 Screenshots

Screenshots of the website will be added here.

> Screenshots can be added to this section as the project evolves.

---

## 📍 Business

**Dream Sat**
Hurghada, Egypt

The store provides electronics, home appliances, accessories, and related products.

---

## 👨‍💻 Author

**Kerollos Romany**

.NET Backend Developer | Computer Science Student

---

## 📌 Project Status

**Current Version:** `1.0`

**Status:** Active

Version 1 is deployed and available online.

Version 2 is planned to introduce the backend, database, administration system, and online order management.

---

## 📄 License

No open-source license has been specified for this project.
