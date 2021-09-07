import { render, screen, userEvent } from '../test-utils';

import Header from '.';

describe('Header', () => {
  it('can set header title', () => {
    render(<Header title="Header title" />);

    expect(screen.getByText('Header title')).toBeInTheDocument();
  });

  it('can trigger header action', () => {
    const onHeaderActionClick = jest.fn();

    render(
      <Header
        title="Header title"
        action={{
          text: 'Click me!',
          onClick: onHeaderActionClick,
        }}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: 'Click me!' }));

    expect(onHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('can set aria-label property for header action', () => {
    const onHeaderActionClick = jest.fn();

    render(
      <Header
        title="Header title"
        action={{
          'aria-label': 'Magic',
          text: 'Click me!',
          onClick: onHeaderActionClick,
        }}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: 'Magic' }));

    expect(onHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('can render header with specific heading tag', () => {
    render(<Header as="h3" title="Header title" />);

    expect(screen.getByRole('heading', { name: 'Header title', level: 3 })).toBeInTheDocument();
  });
});
