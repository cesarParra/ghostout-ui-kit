import React from 'react';
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Card from './Card'

global.console = { error: jest.fn() }

describe('<Card />', () => {
  it('renders children when passed in', () => {
    const cardComponent = shallow((
      <Card>
        <div>Test Content</div>
      </Card>));

    expect(cardComponent.contains(<div>Test Content</div>)).to.equal(true);
  });

  it('has the card class', () => {
    const cardComponent = shallow((<Card />));

    expect(cardComponent.hasClass('card')).to.be.true;
  });

  it('throws an error if children are not passed', () => {
    shallow((<Card></Card>));

    expect(console.error.mock.calls.length).to.equal(1);
  });
});