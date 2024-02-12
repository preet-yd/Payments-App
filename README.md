# Project Overview

## Frontend Development (React):

- Implemented a user interface featuring signup, signin, and a dashboard using React.
- Created modular and reusable UI elements such as Heading, SubHeading, InputBox, and Button.
- Leveraged React Router for seamless navigation and utilized axios for handling asynchronous HTTP requests.

## Backend Development (Node.js, Express):

- Established a secure authentication system with JSON Web Tokens (JWT) via the authMiddleware module, ensuring secure communication.
- Implemented robust user signup and signin functionality with input validation using Zod schemas.
- Developed APIs for updating user information, retrieving data based on filters, and verifying user authentication.

## Database (MongoDB):

- Utilized MongoDB for efficient data storage, connecting to the database using Mongoose.
- Defined structured data models with schemas for the User and Account entities.

## Transaction Handling:

- Incorporated transactional capabilities in the backend for atomic and consistent fund transfers.
- Utilized MongoDB transactions to ensure seamless and secure money transfers between accounts.

## Deployment:

- Deployed the backend on a server, listening at port 3000 using Express.
- Connected to a MongoDB Atlas cluster for scalable and reliable data storage.

## State Management:

- Managed frontend state using React's local state and React Hooks, ensuring a smooth user experience.

## Additional Features:

- Integrated CORS middleware for handling cross-origin resource sharing.
- Applied Tailwind CSS for visually appealing styling.
- Implemented a search functionality on the frontend (Users component) to filter and display user data based on specified criteria.
