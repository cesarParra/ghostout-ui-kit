
# ghostout-ui-kit

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coverage Status](https://coveralls.io/repos/github/cesarParra/ghostout-ui-kit/badge.svg?branch=master)](https://coveralls.io/github/cesarParra/ghostout-ui-kit?branch=master)

[build-badge]: https://travis-ci.org/cesarParra/ghostout-ui-kit.svg?branch=master
[build]: https://travis-ci.org/cesarParra/ghostout-ui-kit

[npm-badge]: https://badge.fury.io/js/ghostout-ui-kit.svg
[npm]: https://www.npmjs.org/package/ghostout-ui-kit

React UI Kit based on the [Bulma CSS framework](https://bulma.io/)

[npm package](https://www.npmjs.com/package/ghostout-ui-kit)

## Installation

    npm i ghostout-ui-kit

## Usage
This kit comes with a variety of components that can be individually used. Follow the code samples to use in your React code.

### Components
#### Alert
Use Alert blocks to notify the user of something.
##### Children Support? Yes

    import { Alert } from  'ghostout-ui-kit'
    ...
    <Alert>Test</Alert>
    <Alert type="danger">An error has occurred</Alert>
    <Alert type="info">Hey! Take a look at this.</Alert>
    <Alert type="warning">Beware</Alert>
    <Alert type="success">Success!</Alert>
  
  ##### Supported Props
  
|Name|Description  |
|--|--|
|type  |Optional alert type that drives the alert's color. Supported values are danger, info, warning, and success  |

#### Button
Button component for, you know, clicking on it.
##### Children Support? Yes
    import { Button } from  'ghostout-ui-kit'
    ...
    <Button className="my-class" onClick={() => console.log('Clicked')}>Click Me!</Button>
    <Button loading>Click Me!</Button>

  ##### Supported Props
  
|Name|Description  |
|--|--|
|className|Optional class name for styling.  |
|onClick|The onClick function.  |
|loading|Optional boolean to display the button in a loading state and disable clicking.  |

#### ButtonGroup
Displays a set of buttons together.
##### Children Support? Yes
    import { ButtonGroup, Button } from  'ghostout-ui-kit'
    ...
    <ButtonGroup>
	    <Button loading>Button 1</Button>
	    <Button loading>Button 2</Button>
	    <Button loading>Button 3</Button>
    </ButtonGroup>

#### Card
#### CardContent
#### CardHeader
#### Columns
#### Column
#### Input