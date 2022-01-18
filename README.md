# Döte

This is an downsizing & organizing site (and future iPhone app.)
**My name is Natalie** and I'm studying to be a UX Developer.

## Objective:

- Build a frontend with React and CSS
- Build an API server as example list of 'to do'
- Use Express and MySQL to access and navigate the

### Dependencies:

Run yarn in the project folder to install dependencies related to Express (the server).
cd client and run yarn install dependencies related to React (the client).

### Database Prep:

Create .env file in project directory and add

DB_NAME=todos
DB_PASS=YOUR_PASSWORD
(replace YOUR_PASSWORD with your actual password)
Alternatively, you can rename the provided .env.example file to .env.
Type mysql -u root -p to access the MySQL CLI using your password.

In the MySQL CLI, type create database todos; to create a database in MySQL.

Run the following in the MySQL CLI: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD'; (replace YOUR_PASSWORD with your actual password)

Run node model/database.js in your TERMINAL, in the project folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers:

Run yarn start in project directory to start the Express server on port 5000
cd client and run yarn start to start client server in development mode with hot reloading in port 3000.
Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
You can test your client app in http://localhost:3000
You can test your API in http://localhost:5000/api

## Instructions:

Use Postman to confirm that you have completed these correctly

GET /api/todos should retrieve all resources.
This route is almost complete!
  
POST /api/todos should create a new resource.
To test that your query is correct, check to see if your new resource exists using mysql.
To test your route, use Postman to see if GET api/todos returns your new resources.

PUT /api/todos/:id should replace a resource.
To test that your query is correct, check to see if your updated resource exists using mysql.
To test your route, use Postman to see if GET api/todos includes your updated resources.
  
DELETE /api/todos/:id should delete a resource.
To test that your query is correct, check to see if your resource was deleted using mysql.
To test your route, use Postman to see if GET api/todos does not include your new resources.

### Frontend:

Spend time reviewing the existing code in client/src/App.js.
  
Finish populating tasks from the API call in useEffect.
Read about useEffect in the React Docs
  
Then, add a list of tasks to the DOM. Each task should have the following:
The text of the task.
A strike through (using CSS) if the task is complete.
Two buttons:
One button to mark the task complete (this should call the updateTask function)
One button to delete the task (this should call the deleteTask function)

Finish the updateTask function so it calls the server.
Finish the deleteTask function so it calls the server.
Add styling.
