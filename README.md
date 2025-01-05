# **To-Do List REST API**

## **Project Overview**

This project is a simple **To-Do List REST API** built using **Node.js** and **SQLite**. The API allows users to manage tasks effectively through **CRUD (Create, Read, Update, Delete)** operations. Each task consists of a title, description, and a status, which can be updated to track progress. The API stores task data in an **SQLite database** to persist the information across server restarts.

---

## **Features**
- **Create a task**: Add new tasks to your to-do list.
- **Fetch all tasks**: Retrieve a list of all tasks in the to-do list.
- **Fetch a task by ID**: Retrieve details of a specific task using its unique ID.
- **Update a task**: Change the status of a task (pending, in-progress, or completed).
- **Delete a task**: Remove a task from the list.

---

## **Table of Contents**

1. Project Description
2. Technologies Used
3. Installation Instructions
4. API Endpoints
5. How to Run the Project
6. Testing the API

---

## **Technologies Used**
This project uses the following technologies:

- **Node.js**: JavaScript runtime used for building the server.
- **Express.js**: Web framework for Node.js used to create the REST API.
- **SQLite**: Lightweight relational database to store task data.
- **Nodemon**: Tool to automatically restart the server during development.
- **Postman** (optional): API testing tool for interacting with the endpoints.

---

## **Installation Instructions**

### Step 1: Clone the repository

Begin by cloning this project to your local machine using the following command:

```bash
git clone (https://github.com/sasikumar057/ToDo.git)
```

## Step 2: Navigate to the project directory

Go to the project folder:

```bash
cd ToDo
```
## Step 3: Install dependencies

Install the required dependencies by running the following command:

```bash
npm install express  body-parser dotenv mysql2 nodemon --save-dev
```
This will install Express, SQLite, Nodemon, and other necessary packages.

## Step 4: Database Setup

The project uses SQLite as the database. The database will be created automatically when you run the server for the first time. You don't need to manually set up the database.

# API Endpoints
Here are the available API endpoints for interacting with the To-Do List REST API:
## 1. POST /tasks - Create a New Task
- **Description:** Create a new task with a title, description, and status (default is "pending").
- **Request Body (JSON):**
```bash
  {
    "title": "Task Title",
    "description": "Task Description"
 }
```
- **Response (JSON):**
```bash
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
}
```
## 2. GET /tasks - Get All Tasks
- **Description:** Retrieve a list of all tasks.
- **Response (JSON):**
```bash
[
    {
        "id": 1,
        "title": "Task Title",
        "description": "Task Description",
        "status": "pending"
    },
    ...
]
```
## 3. GET /tasks/:id - Get Task by ID
- **Description:** Fetch a task by its unique ID.
- **Response (JSON):**
```bash
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
}
```
## 4. PUT /tasks/:id - Update Task Status
- **Description:** Update the status of a task (pending, in-progress, completed).
- **Request Body (JSON):**
```bash
{
    "status": "in-progress"
}
```
- **Response (JSON):**
```bash
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "in-progress"
}
```
## 5. DELETE /tasks/:id - Delete a Task
- **Description:** Delete a task by its ID.
- **Response (JSON):**
```bash
{
    "message": "Task deleted successfully"
}
```

# How to Run the Project
After setting up the project, follow these steps to run it:
## Step 1: Start the Server
You can start the server with Nodemon (which will automatically restart the server upon code changes) by running the following command:
```bash
npx nodemon server.js
```
This will start the server on [http://localhost:3000.]

## Step 2: Access the API
Once the server is running, you can interact with the API using any HTTP client (like Postman or Insomnia) or by using curl from the terminal.

# Testing the API
To test the functionality of the API, you can use Postman or cURL to make requests to the API.
## Example Requests
1. ### Create a Task (POST /tasks):
   - In Postman, set the method to POST, enter http://localhost:3000/api/tasks, and send the following body:
    ```bash
    {
    "title": "Learn Node.js",
    "description": "Study Node.js for backend development"
   }
   ```
  - You should receive a JSON response with the created task.
    
2. ### Get All Tasks (GET /tasks):
   - In Postman, set the method to GET and enter http://localhost:3000/api/tasks to fetch all tasks.
3. ### Get Task by ID (GET /tasks/:id):
   - In Postman, set the method to GET and enter http://localhost:3000/api/tasks/1 to get the task with ID 1.
4. ### Update Task Status (PUT /tasks/:id):
   - In Postman, set the method to PUT and enter http://localhost:3000/api/tasks/1 with the following body:
  ```bash
{
    "status": "completed"
}

  ```

5. ### Delete a Task (DELETE /tasks/:id):
   - In Postman, set the method to DELETE and enter http://localhost:3000/api/tasks/1 to delete the task with ID 1.
