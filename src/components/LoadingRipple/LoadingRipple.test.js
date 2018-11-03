import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import LoadingRipple from './LoadingRipple';

describe('<LoadingRipple />', () => {
  it('has the overlay-box class', () => {
    const loadingRippleComponent = shallow((<LoadingRipple />));

    expect(loadingRippleComponent.hasClass('overlay-box')).to.be.true;
  });
});