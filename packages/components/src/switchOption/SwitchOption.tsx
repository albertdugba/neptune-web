import React, { MouseEvent, ReactChild, ReactElement } from 'react';

import Option from '../common/Option';
import Switch from '../switch';

type Props = {
  checked?: boolean;
  complex?: boolean;
  content?: ReactChild;
  disabled?: boolean;
  id?: string;
  media?: ReactChild;
  onChange: (newValue: boolean) => void;
  title: ReactChild;
};

const SwitchOption = ({
  checked,
  complex,
  content,
  disabled,
  id,
  media,
  onChange,
  title,
}: Props): ReactElement => {
  const sharedProps = { media, title, content, complex, disabled };

  const stopPropagation = (event?: MouseEvent<HTMLSpanElement>) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
      if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
        event.nativeEvent.stopImmediatePropagation();
      }
    }
  };

  const toggle = (event?: MouseEvent<HTMLSpanElement>) => {
    stopPropagation(event);
    if (disabled) {
      return;
    }

    onChange(!checked);
  };

  return (
    <Option
      {...sharedProps}
      onClick={toggle}
      button={<Switch id={id} checked={checked} onClick={toggle} disabled={disabled} />}
    />
  );
};

export default SwitchOption;
