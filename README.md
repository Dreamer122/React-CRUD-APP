Crud App

Project : Crud App

Summary : This project is built using ReactJS that allows users to perform basic CRUD operations on user data. It provides functionalities to add, edit, delete, and view user information.
Features:
Add User: Users can add new users by providing their name, username, email, and website.
Edit User: Users can edit existing user information, including name, username, email, and website.
Delete User: Users can delete user records from the database.
View User: Users can view detailed information about each user, including their name, username, email, and website.

Components:
App.jsx - The main component of the application
Renders the Navbar component.
Renders the main content area using React Router's Outlet.
Renders the Footer component.

main.jsx - responsible for rendering the main application component (App) and setting up routing using React Router.

Router Setup: 
router: This variable is initialized using createBrowserRouter from react-router-dom. 
It specifies routes and uses an array of route objects.
Each route object consists of a path and an element.
Nested routes are defined within the children array of a parent route.
The <RouterProvider> component wraps your application with the provided router configuration.
Navbar - Displays the navbar at the top of the page.
Provides links to navigate to the homepage, add user page, about page and contact page.
React Router's NavLink component for navigation.

Home - Displays the home page of the application.
Retrieves user data from the  API using Axios.
Displays a table with user data, including name, username, email, website, etc.

Adduser - Displays the page for adding a new user.
Displays a form for users to input new user details such as name, username, email, and website.
Submits the form data to the  API using Axios to add a new user.

Viewdata - Displays the page for viewing detailed information about a specific user.
Retrieves detailed user information from the API using Axios.
Displays the user's name, username, email, website, etc.

Editdata - Displays the page for editing user information.
Displays a form pre-filled with the user's current details for editing.
Submits the updated user information to the backend API using Axios to save changes.
Footer - the footer section at the bottom of the application.

External Libraries : 
React Router DOM - Used for navigation and routing within the application.
JSON Server - Used for API using a JSON file as a database.
Axios -  Axios is used for making HTTP requests to send and retrieve data from the server.

Installation : 
npm install react-router-dom   or npm i react-router-dom
npm install json-server   or npm i json-server
npm install react-axios  or npm i react-axios
To run json-server -  npm run json-server
![Screenshot (25)](https://github.com/Dreamer122/React-CRUD-APP/assets/126068795/de6fe87e-d400-4715-88a7-512b7cfcb60b)









 




