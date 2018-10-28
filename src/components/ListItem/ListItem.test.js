import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders children when passed in', () => {
    const listItemComponent = shallow((<ListItem><p>Test</p></ListItem>));

    expect(listItemComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the go-list-item class', () => {
    const listItemComponent = shallow((<ListItem />));

    expect(listItemComponent.hasClass('go-list-item')).to.be.true;
  });
});