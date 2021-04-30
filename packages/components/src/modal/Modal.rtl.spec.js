import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import Modal from './Modal';
import { Position, Scroll } from '../common';

describe('Modal', () => {
  const props = {
    onClose: jest.fn(),
    body: 'Some body',
    position: Position.TOP,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct positioning class', () => {
    const { rerender } = render(<Modal {...props} open />);
    expect(getContainer()).toHaveClass('align-items-start');
    expect(getContainer()).not.toHaveClass('align-items-center');

    rerender(<Modal {...props} open position={Position.CENTER} />);
    expect(getContainer()).toHaveClass('align-items-center');
    expect(getContainer()).not.toHaveClass('align-items-start');
  });

  it('with correct scroll class', () => {
    const { rerender } = render(<Modal {...props} open />);
    expect(getModal()).not.toHaveClass('tw-modal--content');

    rerender(<Modal {...props} open scroll={Scroll.CONTENT} />);
    expect(getModal()).toHaveClass('tw-modal--content');
  });

  it(`doesn't calls onClose when click is inside modal`, () => {
    render(<Modal {...props} open />);

    fireEvent.click(getDialog());
    expect(props.onClose).not.toHaveBeenCalled();
  });

  it(`doesn't calls onClose if click outside the content and closeOnClick is false`, () => {
    render(<Modal {...props} open closeOnClick={false} />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.click(document);
    expect(props.onClose).not.toHaveBeenCalled();
  });

  it('calls onClose if click outside the content and closeOnClick is true', () => {
    render(<Modal {...props} open closeOnClick />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.click(document);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('calls onClose when Escape is pressed on Modal', () => {
    render(<Modal {...props} open />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.keyDown(getDialog(), { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalled();
  });

  it('calls onClose when Escape is pressed on document', () => {
    render(<Modal {...props} open />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalled();
  });

  const getDialog = () => screen.getByRole('dialog');
  const getModal = () => document.querySelector('.tw-modal');
  const getContainer = () => screen.getByRole('presentation');
});
