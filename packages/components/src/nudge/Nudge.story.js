import React from 'react';
import { Image } from '@transferwise/components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Nudge from '.';

export default {
  component: Nudge,
  title: 'Nudge',
};

export const basic = () => {
  const title = text('title', 'Get special rewards when you spend from a new balance');
  const link = text('link', 'Start saving');
  const giftImage = `data:image/png;base64,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`;

  return (
    <Nudge
      media={<Image src={giftImage} alt="" />}
      title={title}
      link={link}
      href="#"
      onDismiss={action('dismissed')}
    />
  );
};
