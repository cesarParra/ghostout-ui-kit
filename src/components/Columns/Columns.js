import React from 'react'

export default (props) => {
  return (
    <div className={`columns is-multiline ${props.className}`}>
      {props.children}
    </div>
  )
}
