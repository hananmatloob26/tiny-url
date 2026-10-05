import React from 'react'

const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <div 
      className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md"
      role="alert"
    >
      <p className="text-sm text-red-600">{message}</p>
    </div>
  )
}

export default ErrorMessage
