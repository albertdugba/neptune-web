import { render } from '../../test-utils';

import MobileNav from './MobileNav';
// eslint-disable-next-line jest/no-mocks-import
import { Items } from './__mocks__/items';

describe('MobileNav', () => {
  it('renders', () => {
    expect(() => render(<MobileNav items={Items} activeItemPath={Items[0].path} />)).not.toThrow();
  });
});
