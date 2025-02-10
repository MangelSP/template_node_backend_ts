# Node.js Backend Template with TypeScript

This is a Node.js backend template built with TypeScript, designed to help you quickly bootstrap scalable and maintainable backend applications. It includes features like authentication, role-based access control, logging, caching, and support for multiple databases (MySQL, PostgreSQL, MongoDB).

## Features

- **TypeScript**: Strongly typed code for better maintainability.
- **Clean Architecture**: Separation of concerns with controllers, services, and repositories.
- **Authentication**: JWT-based authentication with role and permission management.
- **Logging**: Integrated logging using Winston.
- **Caching**: Support for Redis or in-memory caching.
- **Multiple Databases**: Support for MySQL, PostgreSQL, and MongoDB.
- **Swagger Documentation**: Auto-generated API documentation.
- **Error Handling**: Centralized error handling middleware.
- **Environment Variables**: Configuration via .env file.
- **Export Utilities**: Export data to PDF, Excel, and TXT formats.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)
- MySQL/PostgreSQL/MongoDB (optional, depending on your database choice)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/template-node-backend-ts.git
   cd template-node-backend-ts
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Create a .env file** in the root directory and add the required environment variables:

   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=root
   MYSQL_PASSWORD=yourpassword
   MYSQL_DB=template_db
   ```

4. **Run the project in development mode:**

   ```bash
   pnpm dev
   ```

5. **Access the API documentation at:**

   ```
   http://localhost:3000/api-docs
   ```

## Project Structure

```
src/
├── config/                  # Configuration files (DB, logger, cache, etc.)
├── controllers/             # Controllers (request/response handling)
├── services/                # Services (business logic)
├── repositories/            # Repositories (data access layer)
├── middleware/              # Middleware (authentication, validation, etc.)
├── models/                  # Data models (interfaces, types)
├── routes/                  # API routes
├── utils/                   # Utility functions (helpers, export utilities)
├── interfaces/              # Global interfaces
├── types/                   # Global types
├── app.ts                   # Express app configuration
└── server.ts                # Server entry point
```

## API Endpoints

### Authentication

- **POST** `/auth/login`: Authenticate a user and generate a JWT.
- **GET** `/auth/profile`: Get the profile of the authenticated user.

### Trips

- **GET** `/trips`: Get a list of all trips.
- **POST** `/trips`: Create a new trip.
- **GET** `/trips/:id`: Get a trip by ID.
- **PUT** `/trips/:id`: Update a trip by ID.
- **DELETE** `/trips/:id`: Delete a trip by ID.

## Environment Variables

| Variable        | Description                        | Default Value |
|-----------------|------------------------------------|---------------|
| PORT            | Port on which the server runs      | 3000          |
| JWT_SECRET      | Secret key for JWT signing         | -             |
| MYSQL_HOST      | MySQL database host                | localhost     |
| MYSQL_PORT      | MySQL database port                | 3306          |
| MYSQL_USER      | MySQL database user                | root          |
| MYSQL_PASSWORD  | MySQL database password            | -             |
| MYSQL_DB        | MySQL database name                | template_db   |

## Running the Project

### Development Mode

```bash
pnpm dev
```

### Production Mode

1. **Build the project:**

   ```bash
   pnpm build
   ```

2. **Start the server:**

   ```bash
   pnpm start
   ```

## Testing

To run tests, use the following command:

```bash
pnpm test
```

## Exporting Data

The project includes utilities to export data to PDF, Excel, and TXT formats. Use the following endpoints:

- **POST** `/export/pdf`: Export data to PDF.
- **POST** `/export/excel`: Export data to Excel.
- **POST** `/export/txt`: Export data to TXT.

## Contributing

5. Open a pull request.


## Acknowledgments

- **Express** - Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript** - JavaScript with syntax for types.
- **Swagger** - API documentation tool.
- **Winston** - Logging library for Node.js.

