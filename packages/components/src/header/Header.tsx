import Button from '../button';
import { AriaLabelProperty, Heading, Priority } from '../common';

export type HeaderProps = {
  action?: AriaLabelProperty & {
    title: string;
    onClick: () => void;
  };
  /**
   * Override the heading element rendered for the title, useful to specify the semantics of your header.
   *
   * @default "span"
   */
  as?: Heading | 'span';
  title: string;
};

/**
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/content/Header
 *
 */
export const Header = ({ action, as: Element = 'span', title }: HeaderProps) => {
  return (
    <div className="np-header">
      <Element className="h5 np-header__title">{title}</Element>
      {action && (
        <Button
          aria-label={action['aria-label']}
          className="np-header__button"
          priority={Priority.TERTIARY}
          onClick={action.onClick}
        >
          {action.title}
        </Button>
      )}
    </div>
  );
};

export default Header;
