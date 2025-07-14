## User & Product Manager App
A modern web app built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Material UI** and **Redux Toolkit (with RTK Query)**. The app displays three dynamic and interactive columns: **Products**, **Users**, and **Selected Products**.

---

## Features

- **Searchable**: All three columns (Products, Users, Selected Products) support live search.
- **Select Products**: Clicking on a product adds it to the Selected Products column.
- **Remove Products**: Clicking on a trash icon on selected product column removes it from the selection.
- **Infinite Scroll**: Initially displays 10 products, and loads more on scroll with InfiniteScroll react component.
- **User Detail Page**: Clicking a user navigates to a user profile page.
- **Responsive UI**: Optimized for mobile, tablet, and desktop.
- **State Management**: Redux Toolkit + RTK Query for global state and data fetching.
- **Clean Codebase**: Well-structured, modular, and easy to maintain.

---

## API Endpoints

- Users: [`https://fakestoreapi.com/users`]
- Products: [`https://fakestoreapi.com/products`]

---

## Getting Started

1. Install Dependencies :

```bash
npm install

2. run the development server:

npm run dev

3. Then open [`http://localhost:3000`] in your browser

Developed by [Talieh-Esbati]