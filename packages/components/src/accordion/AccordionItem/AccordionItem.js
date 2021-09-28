import { isString } from '@transferwise/neptune-validation';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import Chevron from '../../chevron';
import { Position, Theme } from '../../common';

const AccordionItem = ({ id, title, content, onClick, open, icon, theme }) => {
  const iconElement = icon ? cloneElement(icon, { size: 24 }) : null;

  return (
    <div
      id={id}
      className={classNames('tw-accordion-item decision p-a-0', `tw-accordion-item--${theme}`, {
        closed: !open,
      })}
    >
      <button
        type="button"
        aria-expanded={open}
        className={classNames('tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3', {
          'p-b-3': !open,
          'p-b-2': open,
        })}
        onClick={onClick}
      >
        <div className="media">
          {icon && (
            <div className={classNames('hidden-xs hidden-sm media-left p-r-2')}>{iconElement}</div>
          )}
          <div className={classNames('media-body title text-xs-left')}>
            {isString(title) ? (
              <span className="title-4 tw-accordion-item__title">{title}</span>
            ) : (
              title
            )}
          </div>
          <div className={classNames('d-flex align-items-center media-right')}>
            <Chevron orientation={open ? Position.TOP : Position.BOTTOM} />
          </div>
        </div>
      </button>
      <div className="accordion-content media">
        <div
          className={classNames('media-body m-r-5 p-b-3', { 'm-l-5': icon })}
          aria-hidden={!open}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  content: PropTypes.node.isRequired,
  icon: PropTypes.node,
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

AccordionItem.defaultProps = {
  icon: null,
  id: null,
  theme: Theme.LIGHT,
};

export default AccordionItem;
