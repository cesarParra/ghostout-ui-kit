import React, { Component } from 'react'
import { render } from 'react-dom'
import "../../src/index.css";

import {
  Alert, Button, ButtonGroup, Card, CardContent, 
  CardHeader, Columns, Column, Input, Hero
} from '../../src'

class Demo extends Component {
  render() {
    return <div className="container content">
      <h1>ghostout-ui-kit Demo</h1>
      <h2>Components</h2>
      <Card>
        <CardHeader title="Alert" />
        <CardContent>
          <Alert type="danger">Test</Alert>
          <Alert type="info">Test</Alert>
          <Alert type="warning">Test</Alert>
          <Alert type="success">Test</Alert>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Buttons" />
        <CardContent>
          <Button className="is-primary">Primary</Button>
          <Button className="is-secondary">Secondary</Button>
          <Button className="is-primary" loading>Loading</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Button Groups" />
        <CardContent>
          <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Cards" />
        <CardContent>
          <Card>
            <CardHeader title="Header" />
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Columns" />
        <CardContent>
        <Columns>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
          <Column>Column 4</Column>
        </Columns>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Input" />
        <CardContent>
          <Input type="text" label="Text Input" />
          <Input type="number" label="Number Input" />
          <Input type="password" label="Password" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Hero" />
        <Hero head={<div>Hero Head</div>} body={<div>Hero Body</div>} />
      </Card>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
