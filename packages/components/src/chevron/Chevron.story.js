import React from 'react';
import Chevron from './Chevron';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  component: Chevron,
  title: 'Chevron',
};

export const basic = () => {
  const orientation = select(
    'orientation',
    Object.values(Chevron.Orientation),
    Chevron.Orientation.TOP,
  );
  const size = select('size', Object.values(Chevron.Size), Chevron.Orientation.MEDIUM);
  const disabled = boolean('disabled', false);
  const className = text('className', undefined);
  return (
    <Chevron orientation={orientation} size={size} disabled={disabled} className={className} />
  );
};
