import React from 'react'

const LoadingButton = ({ children, isLoading, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg
        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200
        ${isLoading ? 'cursor-wait' : ''}`}
    >
      {isLoading ? 'Shortening...' : children}
    </button>
  )
}

export default LoadingButton
