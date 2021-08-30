import '@testing-library/jest-dom';
import { Size, Position } from '../common';
import { render, screen } from '../test-utils';

import { testID } from './Chevron';

import Chevron from '.';

describe('Chevron', () => {
  describe('default props', () => {
    it('renders with data-testid', () => {
      render(<Chevron />);

      expect(screen.getByTestId(`${testID}-${Position.BOTTOM}`)).toBeInTheDocument();
    });
  });
  describe('test rotation', () => {
    it('top', () => {
      const { container } = render(<Chevron orientation={Position.TOP} />);

      expect(container.querySelector('.tw-icon-chevron-up.top')).not.toBeNull();
    });

    it('right', () => {
      const { container } = render(<Chevron orientation={Position.RIGHT} />);

      expect(container.querySelector('.tw-icon-chevron-up.right')).not.toBeNull();
    });

    it('left', () => {
      const { container } = render(<Chevron orientation={Position.LEFT} />);

      expect(container.querySelector('.tw-icon-chevron-up.left')).not.toBeNull();
    });

    it('down (default)', () => {
      const { container } = render(<Chevron />);

      expect(container.querySelector('.tw-icon-chevron-up.bottom')).not.toBeNull();
    });
  });

  describe('disabled / enabled states', () => {
    it('enabled (by default)', () => {
      const { container } = render(<Chevron />);

      expect(container.querySelector('.tw-icon-chevron-up')).toHaveClass('chevron-color');
    });

    it('disabled', () => {
      const { container } = render(<Chevron disabled />);

      expect(container.querySelector('.tw-icon-chevron-up')).not.toHaveClass('chevron-color');
    });
  });

  describe('custom xs icon', () => {
    it('renders', () => {
      const { container } = render(<Chevron size={Size.EXTRA_SMALL} />);
      expect(container).toMatchSnapshot();
    });
  });
});
