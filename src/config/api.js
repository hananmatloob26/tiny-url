// API Configuration
// This file contains the API base URL and configuration for the backend
// When the instructor provides the backend, update the API_BASE_URL

export const API_CONFIG = {
  // TODO: Replace with the actual API base URL provided by instructor
  // Example: 'https://your-backend-api.com' or 'http://localhost:3000'
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  
  // API endpoints
  ENDPOINTS: {
    SHORTEN: '/api/shorten'
  }
}
