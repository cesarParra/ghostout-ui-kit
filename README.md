
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

### Building Layouts
Columns allow you to build responsive layouts.

To build a layout, use as many Column components as desired inside of a Columns container.

    import { Columns, Column } from  'ghostout-ui-kit'
    ...
    <Columns>
	    <Column>Column 1</Column>
	    <Column>Column 2</Column>
	    <Column>Column 3</Column>
	    <Column>Column 4</Column>
    </Columns>
   
 #### Columns
 ##### Children Support? Yes
 ##### Supported Props
  
|Name|Description  |
|--|--|
|className|Optional class name for styling.  |

 #### Column
A single Column can be used to individually change the column size.
 ##### Children Support? Yes
 ##### Supported Props
  
|Name|Description  |
|--|--|
|modifiers|Class name to represent the size of the column, for example:    `is-three-quarters`, `is-two-thirds`, `is-half`. For a full reference of all supported class names refer to [Bulma's column documentation](https://bulma.io/documentation/columns/sizes/)|
|renderScrollbars|Optional Boolean that let's you control if a single column should display its own scrollbar. Use to create page layouts powered by columns. |

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
Card component that act as a data container. Better used alongside the CardContent and CardHeader components.

##### Children Support? Yes

    import { Card, CardHeader, CardContent } from  'ghostout-ui-kit'
    ...
    <Card>
	    <CardHeader title="This is a card" />
	    <CardContent>
		    This is the card content.
	    </CardContent>
    </Card>
    
  ##### Supported Props
  
|Name|Description  |
|--|--|
|className|Optional class name for styling.  |

#### Hero
A hero banner that can be used to showcase something.
##### Children Support? No

    import { Hero } from  'ghostout-ui-kit'
    ...
    <Hero  head={<div>Hero Head</div>}  body={<div>Hero Body</div>}  />

  ##### Supported Props
|Name|Description  |
|--|--|
|head|React component to be placed on the hero's header area.  |
|body|React component to be placed on the hero's body area.  |

#### Dropdown
Dropdown to display a list of content.
##### Children Support? Yes*
*Children should be a list of DropdownItem components.

    import { Dropdown, DropdownItem } from  'ghostout-ui-kit'
    ...
    <Dropdown triggerContent={<span>Hover Over Me! <i  className="fas fa-caret-down"></i></span>}>
	    <DropdownItem>Item 1</DropdownItem>
	    <DropdownItem>Item 2</DropdownItem>
    </Dropdown>
 
##### Supported Props
|Name|Description  |
|--|--|
|className|Optional class name for styling.  |
|triggerContent|React component to be displayed as the visible portion of this component. |