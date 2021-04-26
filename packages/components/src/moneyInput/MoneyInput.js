import React, { Component, forwardRef } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmpty } from '@transferwise/neptune-validation';
import Select from '../select';
import './MoneyInput.css';
import { Size } from '../common/propsValues/size';
import keyCodes from '../common/keyCodes';

import messages from './MoneyInput.messages';
import { formatAmount, parseAmount } from './currencyFormatting';

const Currency = PropTypes.shape({
  header: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  currency: PropTypes.string,
  note: PropTypes.string,
  searchable: PropTypes.string,
});
const CUSTOM_ACTION = 'CUSTOM_ACTION';

const formatAmountIfSet = (amount, currency, locale) => {
  return typeof amount === 'number' ? formatAmount(amount, currency, locale) : '';
};

class MoneyInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = this.props.inputRef;
    this.locale = this.props.intl.locale;
    this.formatMessage = this.props.intl.formatMessage;
    this.state = {
      searchQuery: '',
      formattedAmount: formatAmountIfSet(
        props.amount,
        props.selectedCurrency.currency,
        this.locale,
      ),
    };
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.amountFocused) {
      this.setState({
        formattedAmount: formatAmountIfSet(
          nextProps.amount,
          nextProps.selectedCurrency.currency,
          this.locale,
        ),
      });
    }
  }

  isInputAllowedForKeyEvent = (event) => {
    const { keyCode, metaKey, key } = event;
    const isNumberKey = !Number.isNaN(parseInt(key, 10));

    return (
      isNumberKey ||
      metaKey ||
      keyCode === keyCodes.BACKSPACE ||
      keyCode === keyCodes.COMMA ||
      keyCode === keyCodes.PERIOD ||
      keyCode === keyCodes.DOWN ||
      keyCode === keyCodes.UP ||
      keyCode === keyCodes.LEFT ||
      keyCode === keyCodes.RIGHT ||
      keyCode === keyCodes.ENTER ||
      keyCode === keyCodes.ESCAPE ||
      keyCode === keyCodes.TAB
    );
  };

  handleKeyDown = (event) => {
    if (!this.isInputAllowedForKeyEvent(event)) {
      event.preventDefault();
    }
  };

  handlePaste = (event) => {
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    if (!Number.isNaN(parseFloat(paste))) {
      this.setState({
        formattedAmount: formatAmount(paste, this.props.selectedCurrency.currency, this.locale),
      });
      this.onAmountChange(paste);
    }

    event.preventDefault();
  };

  onAmountChange = (value) => {
    this.setState({
      formattedAmount: value,
    });
    const parsed = isEmpty(value)
      ? null
      : parseAmount(value, this.props.selectedCurrency.currency, this.locale);
    this.props.onAmountChange(parsed);
  };

  onAmountBlur = () => {
    this.amountFocused = false;
    this.setAmount();
  };

  onAmountFocus = () => {
    this.amountFocused = true;
  };

  getSelectOptions() {
    const selectOptions = [...filterOptionsForQuery(this.props.currencies, this.state.searchQuery)];

    if (this.props.onCustomAction) {
      selectOptions.push({ value: CUSTOM_ACTION, label: this.props.customActionLabel });
    }

    return selectOptions;
  }

  setAmount() {
    this.setState((previousState) => {
      const parsed = parseAmount(
        previousState.formattedAmount,
        this.props.selectedCurrency.currency,
        this.locale,
      );
      if (Number.isNaN(parsed)) {
        return {
          formattedAmount: previousState.formattedAmount,
        };
      }
      return {
        formattedAmount: formatAmountIfSet(
          parsed,
          this.props.selectedCurrency.currency,
          this.locale,
        ),
      };
    });
  }

  handleSelectChange = (value) => {
    this.handleSearchChange('');

    if (this.props.onCustomAction && value.value === CUSTOM_ACTION) {
      this.props.onCustomAction();
    } else {
      this.props.onCurrencyChange(value);
    }
  };

  handleSearchChange = (searchQuery) => {
    this.setState({ searchQuery });
    if (this.props.onSearchChange) {
      this.props.onSearchChange({
        searchQuery,
        filteredOptions: filterOptionsForQuery(this.props.currencies, searchQuery),
      });
    }
  };

  style = (className) => this.props.classNames[className] || className;

  render() {
    const { selectedCurrency, onCurrencyChange, size, addon } = this.props;
    const selectOptions = this.getSelectOptions();
    const isFixedCurrency =
      !this.state.searchQuery &&
      ((selectOptions.length === 1 && selectOptions[0].currency === selectedCurrency.currency) ||
        !onCurrencyChange);

    const disabled = !this.props.onAmountChange;
    return (
      <div
        className={classNames(
          this.style('tw-money-input'),
          this.style('input-group'),
          this.style(`input-group-${size}`),
        )}
      >
        <input
          id={this.props.id}
          ref={this.props.inputRef}
          value={this.state.formattedAmount}
          type="text"
          inputMode="decimal"
          className={classNames(this.style('form-control'))}
          onKeyDown={this.handleKeyDown}
          onChange={(event) => this.onAmountChange(event.target.value)}
          onFocus={this.onAmountFocus}
          onBlur={this.onAmountBlur}
          onPaste={this.handlePaste}
          disabled={disabled}
          placeholder={formatAmountIfSet(
            this.props.placeholder,
            this.props.selectedCurrency.currency,
            this.locale,
          )}
          autoComplete="off"
        />
        {addon && (
          <span
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              disabled ? this.style('tw-money-input--disabled') : '',
            )}
          >
            {addon}
          </span>
        )}
        {isFixedCurrency ? (
          <div
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              this.style('tw-money-input__fixed-currency'),
              disabled ? this.style('tw-money-input--disabled') : '',
            )}
          >
            {size === 'lg' && (
              <>
                <i className={classNames(this.style('tw-money-input__keyline'))} />
                <i
                  className={classNames(
                    this.style('currency-flag'),
                    this.style(`currency-flag-${selectedCurrency.currency.toLowerCase()}`),
                    this.style('hidden-xs'),
                    this.style('m-r-2'),
                  )}
                />
              </>
            )}
            <span className={size === 'lg' ? this.style('m-r-1') : ''}>
              {selectedCurrency.currency.toUpperCase()}
            </span>
          </div>
        ) : (
          <div
            className={classNames(
              this.style('input-group-btn'),
              this.style('amount-currency-select-btn'),
            )}
          >
            <Select
              classNames={this.props.classNames}
              options={selectOptions}
              selected={{ ...selectedCurrency, note: null }}
              onChange={this.handleSelectChange}
              placeholder={this.formatMessage(messages.selectPlaceholder)}
              searchPlaceholder={this.props.searchPlaceholder}
              onSearchChange={this.handleSearchChange}
              searchValue={this.state.searchQuery}
              size={size}
              required
              dropdownRight="xs"
              dropdownWidth="lg"
              inverse
            />
          </div>
        )}
      </div>
    );
  }
}

function filterOptionsForQuery(options, query) {
  if (!query) {
    return options;
  }

  const filteredOptions = removeDuplicateValueOptions(options).filter((option) =>
    isCurrencyOptionAndFitsQuery(option, query),
  );

  return sortOptionsLabelsToFirst(filteredOptions, query);
}

function removeDuplicateValueOptions(options) {
  const result = [];
  const resultValues = [];

  options.forEach((option) => {
    if (option.value && resultValues.indexOf(option.value) === -1) {
      result.push(option);
      resultValues.push(option.value);
    }
  });

  return result;
}

function isCurrencyOptionAndFitsQuery(option, query) {
  if (!option.value) {
    return false;
  }

  return (
    contains(option.label, query) ||
    contains(option.searchable, query) ||
    contains(option.note, query)
  );
}

function contains(property, query) {
  return property && property.toLowerCase().indexOf(query.toLowerCase()) !== -1;
}

function sortOptionsLabelsToFirst(options, query) {
  return options.sort((first, second) => {
    const firstContains = contains(first.label, query);
    const secondContains = contains(second.label, query);

    if (firstContains && secondContains) {
      return 0;
    }
    if (firstContains) {
      return -1;
    }
    if (secondContains) {
      return 1;
    }
    return 0;
  });
}

MoneyInput.Size = { SMALL: Size.SMALL, MEDIUM: Size.MEDIUM, LARGE: Size.LARGE };

MoneyInput.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  currencies: PropTypes.arrayOf(Currency).isRequired,
  selectedCurrency: Currency.isRequired,
  onCurrencyChange: PropTypes.func,
  placeholder: PropTypes.number,
  amount: PropTypes.number,
  size: PropTypes.oneOf([MoneyInput.Size.SMALL, MoneyInput.Size.MEDIUM, MoneyInput.Size.LARGE]),
  onAmountChange: PropTypes.func,
  addon: PropTypes.node,
  searchPlaceholder: PropTypes.string,
  /**
   * Allows the consumer to react to searching, while the search itself is handled internally. Called with `{ searchQuery: string, filteredOptions: Currency[]  }`
   */
  onSearchChange: PropTypes.func,
  customActionLabel: PropTypes.node,
  onCustomAction: PropTypes.func,
  classNames: PropTypes.objectOf(PropTypes.string),
};

MoneyInput.defaultProps = {
  id: null,
  inputRef: null,
  size: MoneyInput.Size.LARGE,
  addon: null,
  searchPlaceholder: '',
  onSearchChange: undefined,
  onCurrencyChange: null,
  placeholder: null,
  amount: null,
  onAmountChange: null,
  customActionLabel: '',
  onCustomAction: null,
  classNames: {},
};

const MoneyInputWithIntl = injectIntl(MoneyInput);

const MoneyInputWithRef = forwardRef((props, ref) => (
  <MoneyInputWithIntl inputRef={ref} {...props} />
));

MoneyInputWithRef.Size = MoneyInput.Size;

export default MoneyInputWithRef;
