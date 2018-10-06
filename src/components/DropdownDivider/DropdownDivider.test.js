import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import DropdownDivider from './DropdownDivider';

describe('<DropdownDivider />', () => {
  it('has the dropdown-divider class', () => {
    const divider = shallow((<DropdownDivider />));

    expect(divider.hasClass('dropdown-divider')).to.be.true;
  });
});