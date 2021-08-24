export type SectionHeaderProps = {
  title: string;
};

/**
 * Section docs.
 *
 * @example <SectionHeader title="Invite your friends" />
 */

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="np-section-header--container">
      <span className="h5 np-section-header--title">{title}</span>
    </div>
  );
};

export default SectionHeader;
