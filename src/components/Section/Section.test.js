import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Section from './Section';

describe('<Section />', () => {
  it('renders children when passed in', () => {
    const sectionComponent = shallow((
    <Section>
        <p>Test</p>
    </Section>));

    expect(sectionComponent.contains(<p>Test</p>)).to.equal(true);
  });

  it('has the section class', () => {
    const sectionComponent = shallow((<Section />));

    expect(sectionComponent.hasClass('section')).to.be.true;
  });
});