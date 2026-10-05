import axios from 'axios'
import { API_CONFIG } from '../config/api'

// Generate a random short ID for demo purposes
const generateShortId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

// Mock implementation for demo purposes
// TODO: Replace this mock implementation with instructor-provided backend API
const mockShortenUrl = async (longUrl) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const shortId = generateShortId()
  const shortUrl = `${window.location.origin}/demo/${shortId}`
  
  return {
    shortId,
    shortUrl
  }
}

// Real API implementation (to be used when backend is provided)
const realShortenUrl = async (longUrl) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.API_BASE_URL}${API_CONFIG.ENDPOINTS.SHORTEN}`,
      { longUrl }
    )
    return response.data
  } catch (error) {
    throw new Error('Failed to shorten URL. Please try again.')
  }
}

// Main service function
// Currently uses mock implementation
// Switch to realShortenUrl when backend is available
export const shortenUrl = async (longUrl) => {
  // TODO: When instructor provides backend, uncomment the line below and remove mock call
  // return await realShortenUrl(longUrl)
  
  // Currently using mock/demo implementation
  return await mockShortenUrl(longUrl)
}
