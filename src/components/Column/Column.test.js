import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import { Scrollbars } from 'react-custom-scrollbars'
import Column from './Column';

describe('<Column />', () => {
  it('renders children when passed in', () => {
    const columnComponent = shallow((
      <Column>
        <div>Test</div>
      </Column>));

    expect(columnComponent.contains(<div>Test</div>)).to.equal(true);
  });

  it('renders the Scrollbars component if the appropriate props is passed', () => {
    const columnComponent = shallow((
      <Column renderScrollbars>
        <div>Test</div>
      </Column>));

    expect(columnComponent.find(Scrollbars)).to.have.lengthOf(1);
  });

  it('has the column class', () => {
    const columnComponent = shallow((<Column />));

    expect(columnComponent.hasClass('column')).to.be.true;
  });
});