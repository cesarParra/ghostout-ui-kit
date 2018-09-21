import React, { Component } from 'react'
import '../../../css/components/Button/Button.css'

class Button extends Component {
  render() {
    let { className, onClick, serverStatus, loading } = this.props;
    let classes = `button ${className}`;
    if (loading) {
      classes += ' is-loading';
    }
    return (
      <button type="button" className={classes} onClick={onClick} 
        disabled={loading || this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
