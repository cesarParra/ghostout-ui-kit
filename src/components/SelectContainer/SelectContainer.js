import React from 'react'
import '../../../css/components/SelectContainer/SelectContainer.css'

export default ({ children, className = '' }) => {
  return (
    <div className={`select ${className}`}>
      {children}
    </div>
  )
}
