import React, { Component } from 'react'
import '../../../css/components/Input/Input.css'

class Input extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.current.focus();
  }

  render() {
    let { label, ...rest } = this.props;
    return (
      <div className="group">
        <input required {...rest} ref={this.textInput} />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{label}</label>
      </div>
    )
  }
}

export default Input