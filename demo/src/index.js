import React, {Component} from 'react'
import {render} from 'react-dom'

import {Alert} from '../../src'
import {Button} from '../../src'
import {ButtonGroup} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>ghostout-ui-kit Demo</h1>
      <h2>Components</h2>
      <div>
        <h3>Alert</h3>
        <Alert type="danger">Test</Alert>
      </div>

      <div>
        <h3>Buttons</h3>
        <Button className="is-primary">Primary</Button>
        <Button className="is-secondary">Secondary</Button>
        <Button className="is-primary" loading>Loading</Button>
      </div>

      <div>
        <h3>Button Groups</h3>
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </div>
      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
