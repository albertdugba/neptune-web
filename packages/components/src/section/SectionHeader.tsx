import Button from '../button';
import { AriaLabelProperty, Heading, Priority } from '../common';

export type SectionHeaderProps = {
  action?: AriaLabelProperty & {
    title: string;
    onClick: () => void;
  };
  /**
   * Override the heading element rendered for the title, useful to specify the semantics of your section header.
   *
   * @default "span"
   */
  as?: Heading | 'span';
  title: string;
};

/**
 * SectionHeader docs.
 *
 * @example <SectionHeader title="Invite your friends" action={{ title: 'Copy link' action: () => copy() }} />
 */

export const SectionHeader = ({ action, as: Element = 'span', title }: SectionHeaderProps) => {
  return (
    <div className="np-section-header__container">
      <Element className="h5 np-section-header__title">{title}</Element>
      {action && (
        <Button
          aria-label={action['aria-label']}
          className="np-section-header__action"
          priority={Priority.TERTIARY}
          onClick={action.onClick}
        >
          {action.title}
        </Button>
      )}
    </div>
  );
};

export default SectionHeader;
