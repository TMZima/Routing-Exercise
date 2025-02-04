# Routing Exercise

## Cosmic Encyclopedia 🌌

Hello, future software developer! In this exercise, we will practice routing in React by using `React Router v6` to navigate between the many wonders of space. 🤩

Your primary goal is to develop a React application that showcases various celestial objects. Users will navigate through different "pages" dedicated to planets, stars, nebulae, and galaxies, learning fascinating facts about each.

## Component Design 🎨

- `App` acts as the foundation of your application, orchestrating the main layout and integrating the router setup to manage navigation between components.
- `NavBar` provides the navigational structure for your application, offering links that allow users to smoothly transition between different sections.
- `HomePage` is the initial landing page that greets users, offering an introduction or overview of what the application offers.
- `ContentPage` represents a dynamic component responsible for displaying specific content based on user selection or navigation. This component adapts to show different information based on the current route parameters.
- `NavigateBackButton` is a utility component that enhances navigation by offering a straightforward method for users to return to previous pages.

## Tasks 📋

- Initialize your React application and install React Router v6 (Hint: `npm install react-router-dom`).
- Implement the `NavBar` component by creating links that allow users to navigate to different categories of celestial objects (e.g., Planets, Stars, Galaxies).
- Implement a `HomePage` component that introduces users to the Cosmic Encyclopedia.
- Develop dynamic `ContentPage` routes. Each object will have its own URL and content, loaded based on an ID.
- Implement the `NavigateBackButton` to allow users to return to the previous page, enhancing your application's navigational experience.
- Create a dataset of celestial objects with IDs, titles, and content to be displayed on their respective pages.

Happy coding!

## Starter Code 🌱

Either use your cleaned-up "Hello, World!" application from the Vite exercise or create a new project using Vite as the starter code.
