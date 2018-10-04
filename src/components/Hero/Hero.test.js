import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Hero from './Hero';

describe('<Hero />', () => {
  it('renders head', () => {
    const heroComponent = shallow((<Hero head={<div className="testHead" />} />));

    expect(heroComponent.contains(<div className="testHead" />)).to.equal(true);
  });

  it('renders body', () => {
    const heroComponent = shallow((<Hero body={<div className="testHead" />} />));

    expect(heroComponent.contains(<div className="testHead" />)).to.equal(true);
  });

  it('has the hero class', () => {
    const heroComponent = shallow((<Hero />));

    expect(heroComponent.hasClass('hero')).to.be.true;
  });
});