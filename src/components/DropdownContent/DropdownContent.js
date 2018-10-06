import React from 'react'

export default ({ children, className = '' }) => {
  return (
    <div className={`dropdown-item ${className}`}>
      {children}
    </div>
  )
}
