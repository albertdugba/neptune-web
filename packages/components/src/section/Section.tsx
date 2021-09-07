import { PropsWithChildren } from 'react';

import { CommonProps } from '../common';

type SectionProps = PropsWithChildren<CommonProps>;

/**
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/content/Section
 *
 */
const Section = ({ children }: SectionProps) => {
  return <div className="np-section">{children}</div>;
};

export default Section;
