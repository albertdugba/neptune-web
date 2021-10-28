import { render, screen } from '@testing-library/react';

import { StyleInjector } from './StyleInjector';

describe('StyleInjector', () => {
  it('appends provided className to children', () => {
    render(
      <StyleInjector className="injected class names">
        <div className="original child-1">child 1</div>
        <div className="original child-2">child 2</div>
      </StyleInjector>,
    );

    expect(screen.getByText('child 1')).toHaveClass('injected class names original child-1');
    expect(screen.getByText('child 2')).toHaveClass('injected class names original child-2');
  });

  it('only appends provided className to root', () => {
    render(
      <StyleInjector className="injected">
        <div>
          child
          <div>grandchild</div>
        </div>
      </StyleInjector>,
    );

    expect(screen.getByText('child')).toHaveClass('injected');
    expect(screen.getByText('grandchild')).not.toHaveClass('injected');
  });

  it('skips invalid children', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => jest.fn());

    render(
      <StyleInjector className="injected">
        <div>child 1</div>
        child 2
      </StyleInjector>,
    );

    expect(screen.getByText('child 1')).toHaveClass('injected');
    expect(screen.getByText('child 2')).not.toHaveClass('injected');
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledWith(
      'Trying to inject `className` to an invalid React element, this cannot be done and will be skipped!',
    );
  });

  it('renders children when provided className is undefined', () => {
    render(
      <StyleInjector className={undefined}>
        <div className="original class names">children</div>
      </StyleInjector>,
    );

    expect(screen.getByText('children')).toHaveClass('original class names');
  });
});
