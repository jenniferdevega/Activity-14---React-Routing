# Activity 14 - React Routing

### **Objective:**

To familiarize with the fundamentals of client-side routing in React using the **`react-router-dom`** library.

### **Requirements:**

1. **Setup:**
    - Initialize a new React project.
    - Navigate to your new project folder.
    - Install the required routing library: **`npm install react-router-dom`**.
2. **Task 1: Basic Routing**
    - Create four components: **`Home`**, **`About`**, **`Services`**, and **`Contact`**.
    - In your **`App.js`**, setup routes for each of these components using **`BrowserRouter`**, **`Route`**, and **`Switch`** from **`react-router-dom`**.
    - Ensure that when you navigate to each path (e.g., **`/about`**), the corresponding component is rendered.
3. **Task 2: Navigation**
    - Add a **`Navbar`** component to your application.
    - In the **`Navbar`** component, use the **`Link`** component from **`react-router-dom`** to create navigation links for each of your routes.
    - Make sure that clicking on each navigation link correctly navigates to its corresponding route.
4. **Task 4: Redirects & 404 Page**
    - Add a **`Redirect`** in your routes so that if a user navigates to a route that doesn't exist, they're redirected to a 404 Not Found page.
    - Create a **`NotFound`** component that displays a message indicating the page was not found.
5. **Submission:**
    - Once completed, push your code to a GitHub repository.
    - Share the link to the GitHub repository in our Discord channel under the #submissions section.

### **Resources:**

- [React Router Documentation](https://reactrouter.com/web/guides/quick-start)
- [React Router Tutorial](https://www.youtube.com/watch?v=Law7wfdg_ls)