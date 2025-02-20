import { HelpCircle as HelpCircleIcon } from '@transferwise/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Size, Position } from '../common';
import Modal from '../modal';
import Popover from '../popover';

import { InfoPresentation } from './infoPresentations';

const Info = (props) => {
  const { className, content, onClick, presentation, size, title } = props;
  const [open, setOpen] = useState(false);

  const isModal = presentation === InfoPresentation.MODAL;
  const isSmall = size === Size.SMALL;

  const buttonProps = {
    'aria-label': props['aria-label'],
    className: 'btn-unstyled',
    children: <HelpCircleIcon size={isSmall ? 16 : 24} />,
  };

  return (
    <span
      className={classNames(className, 'np-info', {
        'np-info__small': isSmall,
        'np-info__large': !isSmall,
      })}
    >
      {isModal ? (
        <>
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
              if (onClick) {
                onClick();
              }
            }}
            {...buttonProps}
          />
          <Modal body={content} open={open} title={title} onClose={() => setOpen(false)} />
        </>
      ) : (
        <Popover content={content} preferredPlacement={Position.BOTTOM} title={title}>
          <button
            type="button"
            {...buttonProps}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
          />
        </Popover>
      )}
    </span>
  );
};

Info.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  /** Extra classes applied to Info */
  className: PropTypes.string,
  /** Content displayed inside a Popover a Modal */
  content: PropTypes.node,
  onClick: PropTypes.func,
  /** Decides whether to display content in a Popover or a Modal */
  presentation: PropTypes.oneOf(['MODAL', 'POPOVER']),
  /** Decides the size of help Icon */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** Title displayed inside a Popover a Modal */
  title: PropTypes.node,
};

Info.defaultProps = {
  className: undefined,
  content: undefined,
  onClick: undefined,
  presentation: InfoPresentation.POPOVER,
  size: Size.SMALL,
  title: undefined,
};

export default Info;
