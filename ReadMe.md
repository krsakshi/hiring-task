<h1>Title Management Frontend-Hiring-task</h1>

<h2>Description</h2>
<p>This project is a responsive web application that allows users to register, log in, and access a personalized dashboard. Built with React, the app features secure user authentication and an intuitive design. In addition to standard login and registration, users can connect their MetaMask wallet to manage and interact with blockchain-based features. Key functionalities include a registration page, secure login, MetaMask integration, and a dashboard for viewing user-specific details, making it ideal for applications that combine traditional web functionality with Web3 capabilities.</p>

<h2>Features</h2>
<ul>
    <li>User authentication</li>
      <ul> 
         <li> Login</li>
         <li> Register</li>
      </ul>
    <li>Dashboard for displaying user-specific information</li>
   <ul><li> Metamask Wallet</li>
   <li>Add Title</li>
   <li>Delete Title</li></ul>
    <li>Responsive design</li>
</ul>

<h2>Technologies Used</h2>
<ul>
   <li>React - Frontend framework for building user interfaces.</li>
   <li>JavaScript - Programming language for application logic and interactions.</li>
   <li>CSS - Styling for layout, colors, and responsiveness.</li>
   <li>React Router - Library for handling in-app navigation.</li>
   <li>MetaMask - Ethereum wallet for Web3 integration, enabling blockchain-based interactions.</li>
   <li>Jest - Testing framework for unit and integration tests.</li>
   <li>Node.js - Backend runtime for managing server-side operations.</li>
   <li>Express - Server framework for handling backend requests.</li>
   <li>Babel - JavaScript compiler to ensure compatibility across different environments.</li>
   <li>Fetch API - For handling HTTP requests to the backend.</li>
   <li>HTML - Base structure of the web pages.</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<p>Make sure you have the following installed on your machine:</p>
<ul>
    <li>Node.js (v12 or higher)</li>
    <li>npm (Node package manager)</li>
    <li>MySQL</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:</li>
    <pre>git clone [Repository Link]
cd your-repo-name</code></pre>

<h3> Run backend </h3>
<p>
  1. Install dependencies

    
      cd task
      npx yarn

   2.  Create a .env file and update username and password accordingly.

   3. Run server

      
      <pre><code>npx yarn dev</code></pre>
      

   4. You can access our backend via <http://localhost:8000>
      </p>

<h3> Run frontend </h3>
<p>
  1. Install dependencies

    
      npm install
      npm install react react-dom react-router-dom
      npm install --save-dev jest
      npm install @babel/core @babel/preset-env @babel/preset-react

   
   2. Run server

      <pre><code>npm start</code></pre>
      

   3. You can access our frontend via <http://localhost:3000>
      </p>
  
</ol>

<h2>Usage</h2>
<p>
    <strong>Login Page:</strong> Users can log in using their credentials.<br>
    <strong>Register Page:</strong> New users can create an account by providing their information.<br>
    <strong>Dashboard Page:</strong> After logging in, users will be redirected to their dashboard where they can see their details.
</p>

<h2>Testing</h2>
<p>To run the tests, use the following command:</p>
<pre><code>npm test</code></pre>
<p>Ensure that all tests pass successfully.</p>

<h2>Pages</h2>

<h3>Login Page</h3>
<p>The login page allows users to enter their email and password to access their account. It includes:</p>
<ul>
    <li>Email input field</li>
    <li>Password input field</li>
    <li>Login button</li>
    <li>Link to navigate to the registration page</li>
</ul>

<h4>Login Screenshot</h4>
<img src="path/to/your-image.jpg" alt="Description of image" width="300" height="200">

<h3>Register Page</h3>
<p>The registration page allows new users to create an account by entering their details:</p>
<ul>
    <li>Name input field</li>
    <li>Email input field</li>
    <li>Password input field</li>
    <li>Register button</li>
</ul>

<h4>Register Screenshot</h4>
<img src="path/to/your-image.jpg" alt="Description of image" width="300" height="200">

<h3>Dashboard Page</h3>
<p>The dashboard page is displayed after successful login and includes user-specific information. Users can view their details and manage their settings here.</p>

<h4>Dashboard Screenshot</h4>
<img src="path/to/your-image.jpg" alt="Description of image" width="300" height="200">


</body>
</html>
