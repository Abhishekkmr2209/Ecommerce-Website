# Ecommerce-Website
# Cara – E-Commerce Website (Frontend Project)

Welcome to **Cara**, a fully responsive and dynamic e-commerce website designed to showcase front-end development skills using **HTML**, **CSS**, **JavaScript**, and **API Integration**.

This project simulates a real-world shopping platform with features commonly found in modern online stores, including dynamic product handling, interactive UI components,responsiveness and clean modular code.

---

## Features Overview

###  **Dynamic Product Listing & Cart System**
- Interactive **product cards** that allow users to add items to the cart.
- Clicking on a product opens a **product detail page** showing:
  - Main product image
  - similar or related products
- **Form validation** prevents users from adding items without selecting a quantity.
- Items added to cart are stored in **`localStorage`**, simulating persistence.
- **Cart limit of 10 items** is enforced across the site.

### **Site-wide Navigation & Newsletter**
- Consistent **responsive navbar** with a **hamburger menu** for small screens.
- **Cart icon** with live item count appears on all pages.
- **Newsletter section** on every page:
  - User-submitted email is sent directly to the developer's inbox.
  - Validated email form with confirmation of submission.

### **Shop Page**
- Dynamically displays products loaded from a `products.js` data file (simulating a backend).
- **Price filter** functionality allows users to filter visible products.
- **Custom pagination system** with:
  - Button highlighting for active pages
  - Smooth navigation without page reloads

### **Blog Page**
- Showcases curated content from the fashion industry’s R&D.
- Each blog includes:
  - A **"Continue Reading"** and **"Read Less"** toggle
  - Pagination to navigate through multiple blogs

### **About Page**
- Embedded **video section** with styled presentation highlighting the brand's identity.

### **Contact Page**
- **Google Maps embed** showing store location.
- Animated **Font Awesome icons** for visual enhancement.
- **Contact form** that sends messages via API to the developer’s email.
  - Built using a third-party email **API integration**
  - Currently on free-tier plan (recipient-restricted)

### **Cart Page**
- Displays all selected products with:
  - Quantity controls
  - Individual item removal via (❌) buttons
- **Real-time subtotal** calculation
- Enforces total quantity cap of 10 items
- **Clear Cart** functionality with:
  - Modal confirmation dialog (Yes / No)
  - Prevents background scrolling and interaction when open
- **Buy Now** button opens modal for final confirmation:
  - Prevents background scrolling and interaction when open

---

## Responsive Design

- Optimized for **small** and **medium** screen sizes.
- Fully responsive layout using **CSS media queries**.
- Adaptive components including:
  - Collapsible navigation menu
  - Reflowing product and blog cards
  - Scalable modals and input fields

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| HTML5      | Page structure and semantic layout |
| CSS3       | Styling, responsive design, and animations |
| JavaScript | Dynamic behavior,DOM manipulation,API Intergation,form - validation,            localStorage,pagination and modals |
| Font Awesome | Icons for UI enhancement |
| Google Maps Embed | Location visualization on Contact page |
| Email API (SMTP.js / Elastic Email) | Sending contact form and newsletter data to developer inbox |

---

## 💡 Highlights

- This project serves as a comprehensive demonstration of real-world front-end development 
  skills, focused on building scalable and responsive e-commerce interfaces.
- Demonstrates proficiency in:
  - DOM manipulation
  - UI/UX considerations
  - Frontend state management via localStorage
  - Modular coding practices and dynamic rendering
- Simulates e-commerce functionalities such as product filtering, pagination, and cart management effectively.

---



## Contact

**Developer:** Abhishek Yadav  


---



