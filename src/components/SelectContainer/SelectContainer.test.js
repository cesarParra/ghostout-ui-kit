import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import SelectContainer from './SelectContainer';

describe('<SelectContainer />', () => {
  it('renders children when passed in', () => {
    const selectComponent = shallow((<SelectContainer><p>Test</p></SelectContainer>));

    expect(selectComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the select class', () => {
    const selectComponent = shallow((<SelectContainer />));

    expect(selectComponent.hasClass('select')).to.be.true;
  });
});