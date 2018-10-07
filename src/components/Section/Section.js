import React from 'react'
import '../../../css/components/Section/Section.css'

export default ({children, className=''}) => {
  return (
    <div className={`section ${className}`}>
      {children}
    </div>
  )
}