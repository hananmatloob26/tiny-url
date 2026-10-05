export const validateUrl = (url) => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'Please enter a URL.' }
  }

  const trimmedUrl = url.trim()

  try {
    const urlObject = new URL(trimmedUrl)
    
    if (urlObject.protocol !== 'http:' && urlObject.protocol !== 'https:') {
      return { isValid: false, error: 'Please enter a valid URL starting with http:// or https://' }
    }

    return { isValid: true, error: null }
  } catch (error) {
    return { isValid: false, error: 'Please enter a valid URL.' }
  }
}
