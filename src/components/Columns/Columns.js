import React from 'react'
import '../../../css/components/Columns/Columns.css'

export default (props) => {
  return (
    <div className={`columns is-multiline ${props.className}`}>
      {props.children}
    </div>
  )
}
