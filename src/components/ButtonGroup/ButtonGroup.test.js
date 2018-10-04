import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import ButtonGroup from './ButtonGroup';
import Button from '../Button'

describe('<ButtonGroup />', () => {
  it('renders children when passed in', () => {
    const buttonGroup = shallow((
    <ButtonGroup>
        <Button />
    </ButtonGroup>));

    expect(buttonGroup.contains(<Button />)).to.equal(true);
  });

  it('has the buttons class', () => {
    const buttonGroupComponent = shallow((<ButtonGroup />));

    expect(buttonGroupComponent.hasClass('buttons')).to.be.true;
  });

  it('has the has-addons class', () => {
    const buttonGroupComponent = shallow((<ButtonGroup />));

    expect(buttonGroupComponent.hasClass('has-addons')).to.be.true;
  });
});