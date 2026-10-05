import React, { useState } from 'react'
import { validateUrl } from '../utils/urlValidation'
import { shortenUrl } from '../services/urlService'
import UrlInput from './UrlInput'
import LoadingButton from './LoadingButton'
import ErrorMessage from './ErrorMessage'
import ShortUrlResult from './ShortUrlResult'

const UrlShortener = () => {
  const [url, setUrl] = useState('')
  const [validationError, setValidationError] = useState('')
  const [apiError, setApiError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [shortUrl, setShortUrl] = useState('')

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
    setValidationError('')
    setApiError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous errors
    setValidationError('')
    setApiError('')

    // Validate URL
    const validation = validateUrl(url)
    if (!validation.isValid) {
      setValidationError(validation.error)
      return
    }

    // Start loading
    setIsLoading(true)

    try {
      const result = await shortenUrl(url.trim())
      setShortUrl(result.shortUrl)
    } catch (error) {
      setApiError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setUrl('')
    setShortUrl('')
    setValidationError('')
    setApiError('')
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-3xl mx-auto">
        {!shortUrl ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <UrlInput
                value={url}
                onChange={handleUrlChange}
                error={validationError}
                disabled={isLoading}
              />
              <ErrorMessage message={validationError} />
              <ErrorMessage message={apiError} />
              <div className="mt-6">
                <LoadingButton
                  type="submit"
                  isLoading={isLoading}
                  disabled={!url.trim()}
                >
                  Shorten URL
                </LoadingButton>
              </div>
            </div>
          </form>
        ) : (
          <ShortUrlResult shortUrl={shortUrl} onReset={handleReset} />
        )}
      </div>
    </section>
  )
}

export default UrlShortener
