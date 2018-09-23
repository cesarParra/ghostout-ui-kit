import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/components/Card/Card.css'

const Card = (props) => {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
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