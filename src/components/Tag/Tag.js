import React from 'react'
import '../../../css/components/Tag/Tag.css'

export default ({ children, className = '' }) => {
  return (
    <div className={`tag ${className}`}>
      {children}
    </div>
  )
}