import React from 'react';
import PropTypes from 'prop-types';

import { Button, Size, ControlType, Priority } from '@transferwise/components';
import { actionModel, sizeModel, alignModel, marginModel, contextModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicButton = (props) => {
  const { component, onAction } = props;

  const getActionClasses = (action) => {
    return getMarginBottom(action.margin || 'md') + (action.primary ? ' btn-primary' : '');
  };

  const getButtonSize = (size) => {
    switch (size) {
      case 'xs':
      case 'sm':
        return Size.SMALL;
      case 'lg':
      case 'xl':
        return Size.LARGE;
      case 'md':
      default:
        return Size.MEDIUM;
    }
  };

  const getButtonType = (context) => {
    switch (context) {
      case 'primary':
        return ControlType.ACCENT;
      case 'success':
        return ControlType.POSITIVE;
      case 'failure':
      case 'warning':
        return ControlType.NEGATIVE;
      default:
        return ControlType.ACCENT;
    }
  };

  const getButtonPriority = (context) => {
    switch (context) {
      case 'primary':
      case 'success':
        return Priority.PRIMARY;
      default:
        return Priority.SECONDARY;
    }
  };

  return (
    <Button
      size={getButtonSize(component.size)}
      type={getButtonType(component.context)}
      priority={getButtonPriority(component.context)}
      block
      className={getActionClasses(component.action)}
      onClick={() => onAction(component.action)}
      disabled={component.action.disabled}
    >
      {component.action.label}
    </Button>
  );
};

DynamicButton.propTypes = {
  onAction: PropTypes.func.isRequired,
  component: PropTypes.shape({
    action: actionModel.isRequired,
    size: sizeModel,
    align: alignModel,
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicButton;
