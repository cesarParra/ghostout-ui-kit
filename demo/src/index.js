import React, { Component } from 'react'
import { render } from 'react-dom'
import "../../src/index.css";

import { 
  Alert, Button, ButtonGroup, Card, CardContent, CardHeader, Columns, Column
} from '../../src'

class Demo extends Component {
  render() {
    return <div className="content">
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

      <div>
        <h3>Cards</h3>
        <Card>
          <CardHeader title="Header" />
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <div>Columns</div>
        <Columns>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
          <Column>Column 4</Column>
        </Columns>
      </div>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
