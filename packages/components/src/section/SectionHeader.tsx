import Button from '../button';
import { Priority } from '../common';

export type SectionHeaderProps = {
  action?: {
    title: string;
    onClick: () => void;
  };
  title: string;
};

/**
 * Section docs.
 *
 * @example <SectionHeader title="Invite your friends" />
 */

export const SectionHeader = ({ action, title }: SectionHeaderProps) => {
  return (
    <div className="np-section-header--container">
      <span className="h5 np-section-header--title">{title}</span>
      {action && (
        <Button
          className="np-section-header--action"
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
