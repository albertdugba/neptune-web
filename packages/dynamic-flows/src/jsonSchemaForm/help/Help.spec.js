import { Info } from '@transferwise/components';

import { mount, wait } from '../../test-utils';

import Help from './Help';

describe('Given a Help component renders from a help schema', () => {
  const help = {
    markdown: 'some markdown',
  };

  let component;

  beforeEach(async () => {
    component = mount(<Help help={help} />);
    await wait(0);
  });

  it('should render an info component', () => {
    expect(component.find(Info)).toHaveLength(1);
  });
});
