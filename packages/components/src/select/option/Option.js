import { Globe as GlobeIcon } from '@transferwise/icons';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

const Option = ({ currency, label, note, secondary, icon, classNames, selected, global }) => {
  const style = (classes) =>
    classes.map((className) => classNames[className] || className).join(' ');
  const currencyClassNames = currency
    ? `${style([
        'currency-flag',
        `currency-flag-${currency.toLowerCase()}`,
        `${selected ? 'hidden-xs' : ''}`,
      ])}`
    : null;
  const currencyIcon = global ? (
    <GlobeIcon size={24} filled data-testid="globe-icon" />
  ) : (
    <i className={currencyClassNames} />
  );

  return (
    <span>
      {currency
        ? currencyIcon
        : icon && cloneElement(icon, { size: 24, className: `${style(['tw-icon'])}` })}
      {label}
      {note && <span className="small m-l-1">{note}</span>}
      {secondary && <span className="small text-ellipsis">{secondary}</span>}
    </span>
  );
};

Option.propTypes = {
  label: PropTypes.node.isRequired,
  currency: PropTypes.string,
  note: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  classNames: PropTypes.objectOf(PropTypes.string),
  selected: PropTypes.bool,
  global: PropTypes.bool,
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: null,
  classNames: {},
  selected: false,
  global: false,
};

export default Option;
