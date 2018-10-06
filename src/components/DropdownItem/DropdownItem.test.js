import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import DropdownItem from './DropdownItem';

describe('<DropdownItem />', () => {
  it('renders children when passed in', () => {
    const itemComponent = shallow((
    <DropdownItem>
        <p>Test</p>
    </DropdownItem>));

    expect(itemComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the dropdown-item class', () => {
    const itemComponent = shallow((<DropdownItem />));

    expect(itemComponent.hasClass('dropdown-item')).to.be.true;
  });
});