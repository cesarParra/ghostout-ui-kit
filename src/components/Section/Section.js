import React from 'react'
import '../../../css/components/Section/Section.css'

export default (props) => {
  return (
    <div className={"section " + props.className}>
      {props.children}
    </div>
  )
}