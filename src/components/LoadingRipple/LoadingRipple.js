import React from 'react'
import '../../../css/components/LoadingRipple/LoadingRipple.css'

export default () => {
  return (
    <div className="overlay-box">
      <div className="overlay-content">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    </div>
  )
}
