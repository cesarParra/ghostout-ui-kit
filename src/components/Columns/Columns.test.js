import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Columns from './Columns';

describe('<Columns />', () => {
  it('renders children when passed in', () => {
    const columnsComponent = shallow((
    <Columns>
        <div>Test</div>
    </Columns>));

    expect(columnsComponent.contains(<div>Test</div>)).to.equal(true);
  });

  it('has the columns class', () => {
    const columnsComponent = shallow((<Columns />));

    expect(columnsComponent.hasClass('columns')).to.be.true;
  });

  it('has the is-multiline class', () => {
    const columnsComponent = shallow((<Columns />));

    expect(columnsComponent.hasClass('is-multiline')).to.be.true;
  });
});