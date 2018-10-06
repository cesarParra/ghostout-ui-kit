import React from 'react'
import Button from '../Button'

export default ({ children, triggerContent, className = '' }) => {
  return (
    // TODO: Implement non-hoverable dropdowns
    <div className={`dropdown is-hoverable ${className}`}>
      <div className='dropdown-trigger'>
        <Button>
          {triggerContent}
        </Button>
      </div>
      <div className='dropdown-menu'>
        <div className="dropdown-content">
          {children}
        </div>
      </div>
    </div>
  )
}

