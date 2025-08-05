# Real Estate Platform

A full-stack real estate platform built with React.js and Node.js, allowing users to browse, search, and manage property listings.

## Features

- Property search and filtering
- Property listing management  
- User authentication
- Property details with images
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 18 with Vite
- React Router for navigation
- Tailwind CSS for styling
- React Hook Form for form handling
- Redux Toolkit for state management

### Backend  
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- Cloudinary for image storage
- bcrypt for password hashing

## Setup Instructions

### Prerequisites
- Node.js 16+
- MongoDB
- Cloudinary account (for image storage)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd real-estate-platform
```

2. Install server dependencies
```bash
cd server
npm install
cp .env.example .env
# Configure your environment variables in .env
```

3. Install client dependencies  
```bash
cd ../client
npm install
cp .env.example .env
# Configure your environment variables in .env
```

4. Start the development servers

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client  
npm run dev
```

The client will be available at http://localhost:5173 and the server at http://localhost:3000.

## Environment Variables

### Server (.env)
See `.env.example` for required environment variables.

### Client (.env)
See `.env.example` for required environment variables.

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js backend  
│   ├── src/
│   └── package.json
└── README.md
```