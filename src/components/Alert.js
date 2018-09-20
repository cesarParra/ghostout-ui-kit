import React, { Component } from 'react'

class Alert extends Component {
  render() {
    let notificationType = `is-${this.props.type}`;
    return (
      <div className={"notification " + notificationType}>
        {this.props.children}
      </div>
    )
  }
}

export default Alert