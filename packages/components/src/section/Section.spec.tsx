import { fireEvent, render, screen } from '../test-utils';

import Section from '.';

describe('Section', () => {
  it('can render children', () => {
    render(<Section>Children here</Section>);

    expect(screen.getByText('Children here')).toBeInTheDocument();
  });

  it('can set header title', () => {
    render(<Section header={{ title: 'Section title' }} />);

    expect(screen.getByText('Section title')).toBeInTheDocument();
  });

  it('can trigger section header action', () => {
    const onSectionHeaderActionClick = jest.fn();

    render(
      <Section
        header={{
          title: 'Section title',
          action: {
            title: 'Click me!',
            onClick: onSectionHeaderActionClick,
          },
        }}
      />,
    );

    fireEvent.click(screen.getByText('Click me!'));

    expect(onSectionHeaderActionClick).toHaveBeenCalledTimes(1);
  });
});
