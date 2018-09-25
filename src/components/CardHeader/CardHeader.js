import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CardHeader extends Component {
  render() {
    return (
      <div className="card-header">
        <p className="card-header-title">{this.props.title}</p>
      </div>
    )
  }
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default CardHeader;