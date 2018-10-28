import React from 'react'
import '../../../css/components/ListItem/ListItem.css'

export default ({ children }) => {
  return (
    <li className='go-list-item'>{children}</li>
  );
}