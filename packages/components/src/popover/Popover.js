import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useRef, useState, cloneElement } from 'react';

import { Position } from '../common';
import ResponsivePanel from '../common/responsivePanel';
import { logActionRequiredIf } from '../utilities';

const Popover = ({ children, className, content, preferredPlacement, title }) => {
  logActionRequired({ preferredPlacement });
  const anchorReference = useRef(null);
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <span className={classnames('np-popover', className)}>
      <span ref={anchorReference} className="d-inline-block">
        {cloneElement(children, {
          onClick: () => {
            if (children?.props?.onClick) {
              children.props.onClick();
            }
            setOpen(!open);
          },
        })}
      </span>
      <ResponsivePanel
        open={open}
        anchorRef={anchorReference}
        position={deprecatedPlacements[preferredPlacement] || preferredPlacement}
        arrow
        className="np-popover__container"
        onClose={onClose}
      >
        <div className="np-popover__content" aria-hidden={!open} role="tooltip">
          {title && (
            <div role="heading" aria-level={1} className="np-popover__title m-b-1">
              {title}
            </div>
          )}
          {content}
        </div>
      </ResponsivePanel>
    </span>
  );
};

const logActionRequired = ({ preferredPlacement }) => {
  logActionRequiredIf(
    `Popover has deprecated ${preferredPlacement} value for the 'preferredPlacement' prop. Please use ${deprecatedPlacements[preferredPlacement]} instead.`,
    deprecatedPlacements[preferredPlacement],
  );
};

Popover.defaultProps = {
  className: undefined,
  preferredPlacement: Position.RIGHT,
  title: undefined,
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  /**
   * `'left-top'` / `'right-top'` are deprecated use `Position.TOP` / `'top'` instead,
   * `'bottom-right'` / `'bottom-left'` are deprecated use `Position.BOTTOM` / `'bottom'` instead
   */
  preferredPlacement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'left-top',
    'right-top',
    'bottom-right',
    'bottom-left',
  ]),
  title: PropTypes.node,
};

const deprecatedPlacements = {
  [Position.BOTTOM_LEFT]: Position.BOTTOM,
  [Position.BOTTOM_RIGHT]: Position.BOTTOM,
  [Position.LEFT_TOP]: Position.TOP,
  [Position.RIGHT_TOP]: Position.TOP,
};

export default Popover;
