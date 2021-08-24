import { PropsWithChildren } from 'react';

import { SectionHeader, SectionHeaderProps } from './SectionHeader';

type SectionProps = PropsWithChildren<{
  header?: SectionHeaderProps;
}>;

/**
 * Section docs.
 *
 * @example <Section header={{ title: 'Invite your friends' action: { title: 'Copy link' action: () => copy() } }}>...</Section>
 */

const Section = ({ children, header }: SectionProps) => {
  return (
    <div className="np-section--container">
      {header && <SectionHeader {...header} />}
      {children}
    </div>
  );
};

export default Section;
