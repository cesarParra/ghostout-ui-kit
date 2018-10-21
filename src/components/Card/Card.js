import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/components/Card/Card.css'

const Card = ({children, className = ''}) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Card;