import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import { isIosDevice } from '../common/deviceDetection';
import FocusBoundary from '../common/focusBoundary';
import withNextPortal from '../withNextPortal/withNextPortal';

import DimmerManager from './dimmerManager';

export const EXIT_ANIMATION = 350;

const dimmerManager = new DimmerManager();

export const handleTouchMove = (event) => {
  const isTouchedElementDimmer = event.target.classList.contains('dimmer');

  // disable scroll on iOS devices for Dimmer area
  // this is because of bug in WebKit https://bugs.webkit.org/show_bug.cgi?id=220908
  // note: scrolling still works for children(s) as expected
  if (isIosDevice() && isTouchedElementDimmer) {
    event.stopPropagation();
    event.preventDefault();
  }
};

const Dimmer = ({
  children,
  className,
  disableClickToClose,
  fadeContentOnEnter,
  fadeContentOnExit,
  transparent,
  onClose,
  open,
  scrollable,
}) => {
  const dimmerReference = useRef();
  const closeOnClick = (event) => {
    if (event.target === dimmerReference.current) {
      onClose(event);
    }
  };
  const handleClick = !disableClickToClose && onClose ? closeOnClick : undefined;

  const handleKeyDown = (event) => {
    if (event.key !== 'Escape') {
      return;
    }
    event.stopPropagation();

    if (onClose && dimmerManager.isTop(dimmerReference)) {
      onClose(event);
    }
  };

  const onEnter = () => dimmerManager.add(dimmerReference);
  const onExited = () => dimmerManager.remove(dimmerReference);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      if (dimmerReference.current) {
        dimmerReference.current.addEventListener('touchmove', handleTouchMove);
      }
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (dimmerReference.current) {
        dimmerReference.current.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [open]);

  return (
    <CSSTransition
      in={open}
      appear
      // Wait for animation to finish before unmount.
      timeout={{ enter: 0, exit: EXIT_ANIMATION }}
      classNames={{
        enter: classNames({ 'dimmer--enter-fade': fadeContentOnEnter }),
        enterDone: classNames('dimmer--enter-done', { 'dimmer--enter-fade': fadeContentOnEnter }),
        exit: classNames('dimmer--exit', { 'dimmer--exit-fade': fadeContentOnExit }),
      }}
      unmountOnExit
      onEnter={onEnter}
      onExited={onExited}
    >
      <DimmerContentWrapper scrollBody={!transparent}>
        <div
          ref={dimmerReference}
          className={classNames(
            'dimmer',
            { 'dimmer--scrollable': scrollable, 'dimmer--transparent': transparent },
            className,
          )}
          role="presentation"
          onClick={handleClick}
        >
          <FocusBoundary>{children}</FocusBoundary>
        </div>
      </DimmerContentWrapper>
    </CSSTransition>
  );
};

export const DimmerContentWrapper = ({ children, scrollBody }) => {
  useEffect(() => {
    if (scrollBody) {
      addNoScrollBodyClass();
    }

    return () => {
      if (scrollBody) {
        removeNoScrollBodyClass();
      }
    };
  }, []);

  return children;
};

Dimmer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disableClickToClose: PropTypes.bool,
  fadeContentOnEnter: PropTypes.bool,
  fadeContentOnExit: PropTypes.bool,
  /** Sets the background to transparent and prevents body scroll locking */
  transparent: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  scrollable: PropTypes.bool,
};

Dimmer.defaultProps = {
  children: null,
  className: undefined,
  disableClickToClose: false,
  fadeContentOnEnter: false,
  fadeContentOnExit: false,
  transparent: false,
  onClose: undefined,
  open: false,
  scrollable: false,
};

export { Dimmer };

export default withNextPortal(Dimmer);
