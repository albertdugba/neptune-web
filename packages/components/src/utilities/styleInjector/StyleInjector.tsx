import { Children, cloneElement, isValidElement } from 'react';

export const StyleInjector: React.FC<{ className?: string }> = ({ children, className }) => {
  const styledChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          'Trying to inject `className` to an invalid React element, this cannot be done and will be skipped!',
        );
      }
      return child;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const classNames = [className, child?.props?.className].filter(Boolean).join(' ');

    return cloneElement(child, {
      className: classNames,
    });
  });

  return <>{styledChildren}</>;
};
