import NavigationOption from '../navigationOption';
import { render } from '../test-utils';

import NavigationOptionsList from '.';

describe('NavigationOptionsList', () => {
  it('renders the children in a list', () => {
    const { container } = render(
      <NavigationOptionsList>
        <NavigationOption title="1" />
        <NavigationOption title="2" />
      </NavigationOptionsList>,
    );

    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
