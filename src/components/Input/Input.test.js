import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as chaiExpect } from 'chai'

import Input from './Input';

describe('<Input />', () => {
  it('is contained by the group class', () => {
    const inputComponent = shallow((<Input />));

    chaiExpect(inputComponent.hasClass('group')).to.be.true;
  });

  it('has contains the correct elements', () => {
    const inputComponent = shallow((<Input label='Test Label' />));

    chaiExpect(inputComponent.containsAllMatchingElements([
      <span className="highlight"></span>,
      <span className="bar"></span>,
      <label>Test Label</label>
    ])).to.equal(true);
  });

  it('can be focused', () => {
    let reference = React.createRef();
    const inputComponent = mount(<Input ref={reference} />);

    chaiExpect(inputComponent.instance().focus instanceof Function).to.be.true;

    const spy = jest.spyOn(inputComponent.instance(), 'focus');
    inputComponent.instance().focus();
    expect(spy).toHaveBeenCalled();
  });
});