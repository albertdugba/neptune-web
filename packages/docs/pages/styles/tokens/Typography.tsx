/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */
// /* eslint-disable prettier/prettier */
import { ReactElement } from 'react';

import Heading from '../../../components/Heading';
import DeprecationNotice from '../../../utils/DeprecationNotice';
import { DocumentLink } from '../../../utils/pageUtils';
import { Meta } from '../../../utils/sections';

export const meta: Meta = {
  name: 'Typography',
  badge: {
    expiryDate: '2021-12-01',
    type: 'new',
  },
};

export default function PageContent(): ReactElement {
  return (
    <>
      <Heading as="h3">Tokens</Heading>
      <p>Available as LESS variables as CSS custom properties.</p>
      <ul>
        <li>
          <code>--font-size-12: 0.75rem;</code>
        </li>
        <li>
          <code>--font-size-14: 0.875rem;</code>
        </li>
        <li>
          <code>--font-size-16: 1rem;</code>
        </li>
        <li>
          <code>--font-size-20: 1.25rem;</code>
        </li>
        <li>
          <code>--font-size-26: 1.625rem;</code>
        </li>
        <li>
          <code>--font-size-32: 2rem;</code>
        </li>
        <li>
          <code>--line-height-title: 1.2;</code>
        </li>
        <li>
          <code>--line-height-body: 1.5;</code>
        </li>
        <li>
          <code>--line-height-control: 1.2;</code>
        </li>
        <li>
          <code>--font-weight-regular: 500;</code>
        </li>
        <li>
          <code>--font-weight-semi-bold: 600;</code>
        </li>
        <li>
          <code>--font-weight-bold: 800;</code>
        </li>
      </ul>
      <Heading as="h3">Old Tokens</Heading>
      <DeprecationNotice>
        This API is deprecated. Please use{' '}
        <DocumentLink href="styles/tokens/Typography#tokens">new types</DocumentLink>.
      </DeprecationNotice>
      <p>Available only as LESS variables.</p>
      <ul>
        <li>
          <code>@font-weight-base: 500;</code>
        </li>
        <li>
          <code>@font-weight-semi-bold: 600;</code>
        </li>
        <li>
          <code>@font-weight-bold: 800;</code>
        </li>
        <li>
          <code>@font-size-xx-large: 2.625rem; // 42px</code>
        </li>
        <li>
          <code>@font-size-x-large: 1.75rem; // 28px</code>
        </li>
        <li>
          <code>@font-size-large: 1.375rem; // 22px</code>
        </li>
        <li>
          <code>@font-size-medium: 1.125rem; // 18px</code>
        </li>
        <li>
          <code>@font-size-base: 1rem; // 16px</code>
        </li>
        <li>
          <code>@font-size-small: 0.875rem; // 14px</code>
        </li>
        <li>
          <code>@font-size-x-small: 0.75rem; // 12px</code>
        </li>
        <li>
          <code>@line-height-x-large: 1.1428571429; // 32/28</code>
        </li>
        <li>
          <code>@line-height-large: 1.3636363636; // 30/22</code>
        </li>
        <li>
          <code>@line-height-medium: 1.3333333333; // 24/18</code>
        </li>
        <li>
          <code>@line-height-base: 1.5; // 24/16</code>
        </li>
        <li>
          <code>@line-height-small: 1.7142857143; // 24/14</code>
        </li>
        <li>
          <code>@line-height-x-small: 2; // 24/12</code>
        </li>
      </ul>
    </>
  );
}
