import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Alert from './Alert';

describe('<Alert />', () => {
  it('renders children when passed in', () => {
    const alertComponent = shallow((
    <Alert>
        <div className="test" />
    </Alert>));

    expect(alertComponent.contains(<div className="test" />)).to.equal(true);
  });

  it('has the notification class name', () => {
    const alertComponent = shallow((
    <Alert type="danger">
      Danger
    </Alert>));

    console.log(alertComponent.className);
    expect(alertComponent.hasClass('notification')).to.be.true;
  });

  it('property assigns class names based on the passed type', () => {
    const alertComponent = shallow((
    <Alert type="danger">
      Danger
    </Alert>));

    console.log(alertComponent.className);
    expect(alertComponent.hasClass('is-danger')).to.be.true;
  });
});