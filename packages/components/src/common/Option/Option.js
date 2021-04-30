import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

import './Option.css';

const Option = ({
  as: Element,
  href,
  media,
  title,
  content,
  onClick,
  htmlFor,
  disabled,
  button,
  decision,
  complex,
  className,
  inverseMediaCircle,
  showMediaAtAllSizes,
  showMediaCircle,
}) => (
  <Element
    className={classNames(className, 'media', {
      'decision-complex': complex,
      decision,
      disabled,
      'tw-option__sm-media': showMediaAtAllSizes,
    })}
    href={href}
    onClick={onClick}
    htmlFor={htmlFor}
    disabled={disabled && Element === 'button'}
  >
    {media && (
      <div className="media-left">
        {showMediaCircle ? (
          <div
            className={classNames('circle circle-sm text-primary', {
              'circle-inverse': inverseMediaCircle,
            })}
          >
            {media}
          </div>
        ) : (
          <div className="tw-option__no-media-circle">{media}</div>
        )}
      </div>
    )}
    <div className="media-body">
      <div className="h5">{title}</div>
      {content && <div className="decision__content">{content}</div>}
    </div>
    <div className="media-right">{button}</div>
  </Element>
);

Option.propTypes = {
  media: PropTypes.node,
  htmlFor: PropTypes.string,
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  onClick: PropTypes.func,
  href: requiredIf(PropTypes.string, (props) => props.as === 'a'),
  as: PropTypes.string,
  disabled: PropTypes.bool,
  button: PropTypes.node,
  decision: PropTypes.bool,
  complex: PropTypes.bool,
  inverseMediaCircle: PropTypes.bool,
  className: PropTypes.string,
  showMediaAtAllSizes: PropTypes.bool,
  showMediaCircle: PropTypes.bool,
};

Option.defaultProps = {
  as: 'label',
  media: '',
  content: null,
  htmlFor: null,
  disabled: false,
  button: null,
  onClick: null,
  href: null,
  decision: true,
  complex: false,
  inverseMediaCircle: true,
  className: null,
  showMediaAtAllSizes: false,
  showMediaCircle: true,
};

export default Option;
