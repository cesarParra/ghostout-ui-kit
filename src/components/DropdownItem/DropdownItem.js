import React from 'react'

export default ({ children, onClick, className = '' }) => {
  return (
    <a className={`dropdown-item ${className}`} onClick={onClick}>
      {children}
    </a>
  )
}
