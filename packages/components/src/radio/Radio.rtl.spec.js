import React from 'react';
import { render } from '../test-utils';

import Radio from '.';
import { useDirection } from '../common/hooks';
import Avatar, { AvatarType } from '../avatar';

jest.mock('../common/hooks');

describe('Radio', () => {
  const props = {
    label: 'This is a label',
    name: 'name',
    onChange: jest.fn(),
    checked: false,
    disabled: false,
    secondary: '',
  };

  beforeEach(() => {
    useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
  });

  it('shows the avatar when supplied', () => {
    expect(
      render(<Radio {...props} avatar={<Avatar type={AvatarType.INITIALS}>HD</Avatar>} />)
        .container,
    ).toMatchSnapshot();
  });
});
