import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CardHeader from './CardHeader';

describe('<CardHeader />', () => {
  it('throws an error if title is not passed in', () => {
    console.error = jest.fn();

    shallow(<CardHeader />);

    expect(console.error.mock.calls.length).to.equal(1);
  });

  it('renders render the title appropriately', () => {
    const cardHeader = shallow(<CardHeader title="Test Title" />);
    expect(cardHeader.find('.card-header-title')).to.have.lengthOf(1);
  });
});