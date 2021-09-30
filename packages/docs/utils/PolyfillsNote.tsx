import { ReactElement } from 'react';

import Heading from '../components/Heading';

import { DocumentLink } from './pageUtils';

const PolyfillsNote = (): ReactElement => {
  return (
    <>
      <Heading as="h2">Polyfills</Heading>
      This component requires some polyfills for Web API in order for it work properly in all
      browsers. See this{' '}
      <DocumentLink href="about/Setup#polyfills-for-web-/-browser-api">table</DocumentLink>.
    </>
  );
};

export default PolyfillsNote;
