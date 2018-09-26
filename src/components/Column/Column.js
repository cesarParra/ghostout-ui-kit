import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import '../../../css/components/Column/Column.css'

class Column extends Component {
  render() {
    return (
      <div className={"column " + this.props.modifiers}>
        {this.renderChildren()}
      </div>
    )
  }

  renderChildren() {
    if (this.props.renderScrollbars) {
      return (
        <Scrollbars autoHide renderView={props => <div {...props} className="scrollbar-container"/>}>
          {this.props.children}
        </Scrollbars>
      );
    }

    return this.props.children;
  }
}

export default Column
