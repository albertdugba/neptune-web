// import { Alert, Link, Sentiment } from '@transferwise/components';
import { ReactElement } from 'react';

// import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'September Release',
  date: '2021-09-30',
  authors: [],
  version: {
    components: '38.0.0',
    css: '11.0.0',
  },
  tags: ['Updated Typography', 'New and Accessible Colors'],
};

const PageContent = (): ReactElement => {
  return <>This time we made changes to our typography and colors we have in Neptune</>;
};
