import { ChevronLeft, ChevronRight } from '@transferwise/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './Pagination.messages';
import PaginationLink from './paginationLink';

const Type = {
  NUMBERS_ONLY: 'numbersOnly',
  ARROWS_ONLY: 'arrowsOnly',
  FULL: 'full',
};

const Pagination = ({
  type,
  numberOfPages,
  currentPageIndex,
  onClick,
  canFetchMorePages,
  className,
}) => {
  const showArrows = type !== Type.NUMBERS_ONLY;
  const disableLeftArrow = currentPageIndex === 0;
  const disableRightArrow = !canFetchMorePages && currentPageIndex === numberOfPages - 1;

  const pages = [];
  if (type !== Type.ARROWS_ONLY) {
    switch (currentPageIndex) {
      case 0:
        pages.push({ index: 0, active: true });
        if (numberOfPages > 1) {
          pages.push({ index: 1 });
        }
        if (numberOfPages > 2) {
          pages.push({ index: 2 });
        }
        break;
      case numberOfPages - 1:
        if (numberOfPages > 2) {
          pages.push({ index: numberOfPages - 3 });
        }
        if (numberOfPages > 1) {
          pages.push({ index: numberOfPages - 2 });
        }
        pages.push({ index: numberOfPages - 1, active: true });
        break;
      default:
        pages.push(
          { index: currentPageIndex - 1 },
          { index: currentPageIndex, active: true },
          { index: currentPageIndex + 1 },
        );
        break;
    }

    const firstPageIndex = pages[0].index;
    if (firstPageIndex > 0) {
      if (firstPageIndex > 2) {
        pages.unshift({ label: '...', index: firstPageIndex - 1 });
      } else if (firstPageIndex === 2) {
        pages.unshift({ index: 1 });
      }
      pages.unshift({ index: 0 });
    }

    const lastPageIndex = pages[pages.length - 1].index;
    if (lastPageIndex < numberOfPages - 1) {
      if (lastPageIndex < numberOfPages - 3) {
        pages.push({ label: '...', index: lastPageIndex + 1 });
      } else if (lastPageIndex === numberOfPages - 3) {
        pages.push({ index: numberOfPages - 2 });
      }
      pages.push({ index: numberOfPages - 1 });
    }

    if (canFetchMorePages) {
      pages.push({ label: '...', index: numberOfPages });
    }
  }

  const intl = useIntl();
  return (
    <nav role="navigation" aria-label={intl.formatMessage(messages.ariaLabel)}>
      <ul className={classNames('tw-pagination', className)}>
        {showArrows && (
          <PaginationLink
            pageNumber={currentPageIndex - 1}
            disabled={disableLeftArrow}
            onClick={onClick}
          >
            <ChevronLeft />
          </PaginationLink>
        )}

        {pages.map((page) => {
          const label = page.label || page.index + 1;
          return (
            <PaginationLink
              key={page.index}
              pageNumber={page.index}
              active={page.active}
              onClick={onClick}
            >
              {label}
            </PaginationLink>
          );
        })}

        {showArrows && (
          <PaginationLink
            pageNumber={currentPageIndex + 1}
            disabled={disableRightArrow}
            onClick={onClick}
          >
            <ChevronRight />
          </PaginationLink>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  type: PropTypes.oneOf(['numbersOnly', 'arrowsOnly', 'full']),
  numberOfPages: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  canFetchMorePages: PropTypes.bool,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  type: Type.FULL,
  canFetchMorePages: false,
  className: undefined,
};

export { Type as PaginationType };
export default Pagination;
