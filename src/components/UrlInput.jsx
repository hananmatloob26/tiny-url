import React from 'react'

const UrlInput = ({ value, onChange, error, disabled }) => {
  return (
    <div className="w-full">
      <label htmlFor="url-input" className="sr-only">
        Enter your long URL
      </label>
      <input
        id="url-input"
        type="url"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder="Paste your long URL here..."
        className={`w-full px-6 py-4 text-lg border-2 rounded-lg focus:outline-none
          transition-colors duration-200
          ${error 
            ? 'border-red-300 focus:border-red-500' 
            : 'border-gray-300 focus:border-indigo-500'
          }
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? 'url-error' : undefined}
      />
    </div>
  )
}

export default UrlInput
