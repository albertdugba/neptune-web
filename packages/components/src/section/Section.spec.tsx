import { render, screen } from '../test-utils';

import Section from '.';

describe('Section', () => {
  it('can render children', () => {
    render(<Section>Children here</Section>);
    expect(screen.getByText('Children here')).toBeInTheDocument();
  });

  it('can set custom title', () => {
    render(<Section header={{ title: 'Section title' }} />);
    expect(screen.getByText('Section title')).toBeInTheDocument();
  });
});
