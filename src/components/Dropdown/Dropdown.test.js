import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  it('renders children when passed in', () => {
    const dropdownComponent = shallow((<Dropdown><p>Test</p></Dropdown>));

    expect(dropdownComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the dropdown class', () => {
    const dropdownComponent = shallow((<Dropdown />));

    expect(dropdownComponent.hasClass('dropdown')).to.be.true;
  });
});