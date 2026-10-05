import React, { useState } from 'react'

const ShortUrlResult = ({ shortUrl, onReset }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Your Short URL
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-indigo-600 font-mono text-sm sm:text-base break-all">
            {shortUrl}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
              focus:ring-offset-2 transition-colors duration-200"
            aria-label="Copy short URL to clipboard"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={onReset}
            className="px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-lg
              hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 
              focus:ring-offset-2 transition-colors duration-200"
            aria-label="Shorten another URL"
          >
            New URL
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Note: This is a frontend demo. The short URL shown above is for demonstration 
        purposes only and does not perform actual redirects.
      </p>
    </div>
  )
}

export default ShortUrlResult
