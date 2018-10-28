import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import List from './List';

describe('<List />', () => {
  it('renders children when passed in', () => {
    const listComponent = shallow((<List><p>Test</p></List>));

    expect(listComponent.contains(<p>Test</p>)).to.equal(true);
  });
});