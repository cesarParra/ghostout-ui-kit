import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import DropdownContent from './DropdownContent';

describe('<DropdownContent />', () => {
  it('renders children when passed in', () => {
    const itemComponent = shallow((
    <DropdownContent>
        <p>Test</p>
    </DropdownContent>));

    expect(itemComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the dropdown-item class', () => {
    const itemComponent = shallow((<DropdownContent />));

    expect(itemComponent.hasClass('dropdown-item')).to.be.true;
  });
});