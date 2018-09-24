import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import CardContent from './CardContent';

describe('<CardContent />', () => {
  it('renders children when passed in', () => {
    const cardContentComponent = shallow((
    <CardContent>
        <p>Test</p>
    </CardContent>));

    expect(cardContentComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the card-content class', () => {
    const cardContentComponent = shallow((<CardContent />));

    expect(cardContentComponent.hasClass('card-content')).to.be.true;
  });
});