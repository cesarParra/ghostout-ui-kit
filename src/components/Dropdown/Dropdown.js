import React from 'react'
import Button from '../Button'
import '../../../css/components/Dropdown/Dropdown.css'

export default ({ children, triggerContent, className = '', triggerClassName = '' }) => {
  return (
    // TODO: Implement non-hoverable dropdowns
    <div className={`dropdown is-hoverable ${className}`}>
      <div className='dropdown-trigger'>
        <Button className={triggerClassName}>
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

