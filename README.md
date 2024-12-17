# Node-Mongo-CRUD

Node-Mongo-CRUD is a simple CRUD (Create, Read, Update, Delete) application using Node.js and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/GadStam/Node-Mongo-CRUD.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Node-Mongo-CRUD
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the MongoDB server. You can use MongoDB Atlas or run a local MongoDB server.
2. Create a `.env` file in the root of the project and add your MongoDB URI:
    ```env
    MONGO_URI=mongodb://localhost:27017/yourdbname
    ```
3. Start the application:
    ```bash
    npm start
    ```
4. The server will be running on `http://localhost:3000`

## Technologies Used

- **MongoDB**: A NoSQL database used to store the records.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with MongoDB.
- **Zod**: A TypeScript-first schema declaration and validation library, used for validating request bodies.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building the server-side application.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js, used to handle routing and middleware.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests.
- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server, used during development for easier testing.
- **Mocha**: A JavaScript test framework running on Node.js, used for writing and running tests.
- **Chai**: A BDD / TDD assertion library for Node.js and the browser, used with Mocha for assertions in tests.

## API Endpoints

The following API endpoints are available:

- **Create a new Movie**
    ```http
    POST /api/movies
    ```
    - Request body:
        ```json
        {
      "titulo": "Pulp Fiction",
      "genero": ["crime", "drama"],
      "año": 1994,
      "director": "Quentin Tarantino"
        }
        ```

- **Get all movies**
    ```http
    GET /api/movies
    ```
- **Get all Movies by gender**
    ```http
    GET /api/movies?genero=action
    ```

- **Get a single Movie by ID**
    ```http
    GET /api/movies/:id
    ```

- **Update a record by ID**
    ```http
    PATCH /api/movies/:id
    ```
    - Request body:
        ```json
        {
            "genero": ["horror"]
        }
        ```

- **Delete a Movie by ID**
    ```http
    DELETE /api/movies/:id
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
