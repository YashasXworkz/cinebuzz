# CineBuzz Unleashed

A modern movie and TV show browsing application with user authentication.

## Project Structure

- **Frontend**: React, TypeScript, React Router, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB

## Features

- User authentication (signup, signin, profile)
- Browse movies and TV shows
- View detailed information about movies and TV shows
- Mobile-responsive design

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Setup

1. Clone the repository:
```
git clone https://github.com/yourusername/cinebuzz-unleashed-nexus.git
cd cinebuzz-unleashed-nexus
```

2. Install dependencies:
```
node setup.js
```

3. Configure MongoDB:
   - Update the MongoDB connection string in `server/.env`
   - Set a secure JWT secret key

4. Start the development servers:

Frontend:
```
npm run dev
```

Backend:
```
cd server
npm run dev
```

## API Documentation

### Authentication Endpoints

- **POST /api/auth/signup** - Register a new user
  - Required fields: `name`, `email`, `password`

- **POST /api/auth/signin** - Login a user
  - Required fields: `email`, `password`

- **GET /api/auth/me** - Get current user profile
  - Requires authentication

## TMDB API Integration

The application uses the TMDB (The Movie Database) API for image URLs, but currently has hardcoded movie and TV show data. To fully integrate with TMDB API:

1. Get an API key from [TMDB](https://www.themoviedb.org/documentation/api)
2. Add your API key to the environment variables
3. Modify the data fetching logic to use the TMDB API endpoints

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
