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

    fireEvent.click(screen.getByRole('button', { name: 'Click me!' }));

    expect(onSectionHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('can set aria-label property for section header action', () => {
    const onSectionHeaderActionClick = jest.fn();

    render(
      <Section
        header={{
          title: 'Section title',
          action: {
            'aria-label': 'Magic',
            title: 'Click me!',
            onClick: onSectionHeaderActionClick,
          },
        }}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Magic' }));

    expect(onSectionHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('can render header with specific heading tag', () => {
    render(
      <Section
        header={{
          as: 'h3',
          title: 'Section title',
        }}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Section title', level: 3 })).toBeInTheDocument();
  });
});
