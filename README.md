# Social Network API

## Description

This project is a **Social Network API** built using **TypeScript**, **Express.js**, and **MongoDB** (with **Mongoose** ODM). The application allows users to create thoughts, react to friends' thoughts, and manage a friend list. It provides essential routes for performing CRUD operations on users, thoughts, and reactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Routes](#api-routes)
- [Models](#models)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

## Installation

To use this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your **MongoDB connection string**:

   ```
   MONGODB_URI=mongodb://localhost:27017/socialnetworkDB
   PORT=3000
   ```

4. **Compile TypeScript to JavaScript**:

   ```bash
   npx tsc
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

---

## Usage

1. **Start the server** using the `npm start` command (or run with `ts-node` in development):

   ```bash
   npx ts-node src/index.ts
   ```

2. **Test the API** using **Insomnia** or **Postman**. Available routes include:

   - **Users**: Create, update, delete, and manage friends.
   - **Thoughts**: Create, update, delete, and react to thoughts.

3. **Interacting with the API**:
   Use **Insomnia** or **Postman** to send requests to the following endpoints. See the **API Routes** section for route details.

---

## Technologies Used

- **TypeScript** – for strict type checking and modern JavaScript features.
- **Node.js** – as the runtime environment.
- **Express.js** – for routing and API middleware.
- **MongoDB** – as the NoSQL database.
- **Mongoose** – as the ODM for MongoDB.
- **Insomnia/Postman** – for testing API routes.

---

## API Routes

### **Users**

- **GET** `/api/users` – Get all users
- **GET** `/api/users/:userId` – Get a single user by ID (including populated thoughts and friends)
- **POST** `/api/users` – Create a new user  
   Example:
  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
- **PUT** `/api/users/:userId` – Update a user by ID
- **DELETE** `/api/users/:userId` – Delete a user by ID (BONUS: Delete associated thoughts)

**Friend Management**

- **POST** `/api/users/:userId/friends/:friendId` – Add a new friend
- **DELETE** `/api/users/:userId/friends/:friendId` – Remove a friend

---

### **Thoughts**

- **GET** `/api/thoughts` – Get all thoughts
- **GET** `/api/thoughts/:thoughtId` – Get a single thought by ID
- **POST** `/api/thoughts` – Create a new thought and associate it with a user  
   Example:
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
- **PUT** `/api/thoughts/:thoughtId` – Update a thought by ID
- **DELETE** `/api/thoughts/:thoughtId` – Delete a thought by ID

**Reaction Management**

- **POST** `/api/thoughts/:thoughtId/reactions` – Add a reaction to a thought  
   Example:
  ```json
  {
    "reactionBody": "Great thought!",
    "username": "johndoe"
  }
  ```
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` – Remove a reaction by ID

---

## Models

### **User Model**

- `username`: String, required, unique, trimmed
- `email`: String, required, unique, must match valid email format
- `thoughts`: Array of \_id values referencing the `Thought` model
- `friends`: Array of \_id values referencing the `User` model

**Virtual**:

- `friendCount`: Retrieves the number of friends a user has.

---

### **Thought Model**

- `thoughtText`: String, required, 1-280 characters
- `createdAt`: Date, default is current timestamp
- `username`: The user that created this thought
- `reactions`: Array of nested documents using the `Reaction` schema

**Virtual**:

- `reactionCount`: Retrieves the number of reactions on a thought.

---

### **Reaction Schema** (Subdocument for Thought)

- `reactionId`: ObjectId, default is a new ObjectId
- `reactionBody`: String, required, 280 characters max
- `username`: The user that created the reaction
- `createdAt`: Date, default is current timestamp

---

## Walkthrough video

Here is a [walkthrough video](https://drive.google.com/file/d/1J-_5Kmv_5Wgdxm9KSnXqtNzvRe4WP-As/view?usp=sharing) demonstrating the functionality using Insomnia.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## Questions

If you have any questions or need further assistance, feel free to reach out:

- **Email**: [josephatamaniukl@gmail.com](josephatamaniuk@gmail.com)
- **GitHub**: [kurlee710](https://github.com/kurlee710)

---

## Notes

- Remember to run the database locally or configure your MongoDB connection string properly.
- Use **Insomnia** or **Postman** to test the API routes.
