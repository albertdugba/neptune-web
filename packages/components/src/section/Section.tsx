import { ReactNode } from 'react';

type SectionProps = {
  children?: ReactNode;
};
/**
 * Section docs.
 *
 * @example <Section>Content</Section>
 */

const Section = ({ children }: SectionProps) => {
  return <div className="np-section">{children}</div>;
};

export default Section;
