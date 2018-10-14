import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Tag from './Tag';

describe('<Tag />', () => {
  it('renders children when passed in', () => {
    const tagComponent = shallow((
    <Tag>
        <p>Test</p>
    </Tag>));

    expect(tagComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the tag class', () => {
    const tagComponent = shallow((<Tag />));

    expect(tagComponent.hasClass('tag')).to.be.true;
  });
});