import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Button from './Button';

describe('<Button />', () => {
  it('renders children when passed in', () => {
    const buttonComponent = shallow((
    <Button>
        <div className="test" />
    </Button>));

    expect(buttonComponent.contains(<div className="test" />)).to.equal(true);
  });

  it('has the is-loading class name when loading', () => {
    const buttonComponent = shallow((
    <Button loading>
      Click Here
    </Button>));

    expect(buttonComponent.hasClass('is-loading')).to.be.true;
  });

  it('has the button class', () => {
    const buttonComponent = shallow((
    <Button>
      Click Here
    </Button>));

    expect(buttonComponent.hasClass('button')).to.be.true;
  });

  it('is disabled when loading', () => {
    const buttonComponent = shallow((
    <Button loading>
      Click Here
    </Button>));

    console.log(buttonComponent.className);
    expect(buttonComponent.props().disabled).to.be.true;
  });
});