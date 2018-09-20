import React, {Component} from 'react'
import {render} from 'react-dom'

import {Alert} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>ghostout-ui-kit Demo</h1>
      <Alert type="danger">Test</Alert>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
