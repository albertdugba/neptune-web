import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';

import { Size, MonthFormat, Breakpoint } from '../common';
import BottomSheet from '../common/bottomSheet';
import { isWithinRange, moveToWithinRange } from '../common/dateUtils';
import KeyCodes from '../common/keyCodes';

import DateTrigger from './dateTrigger';
import DayCalendar from './dayCalendar';
import { getStartOfDay } from './getStartOfDay';
import MonthCalendar from './monthCalendar';
import YearCalendar from './yearCalendar';

const MODE = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
};

class DateLookup extends PureComponent {
  element = createRef();

  dropdown = createRef();

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: getStartOfDay(props.value),
      min: getStartOfDay(props.min),
      max: getStartOfDay(props.max),
      viewMonth: (props.value || new Date()).getMonth(),
      viewYear: (props.value || new Date()).getFullYear(),
      open: false,
      mode: MODE.DAY,
      isMobile: false,
    };
  }

  getWindowSize = () =>
    (typeof window !== 'undefined' && window.innerWidth) ||
    (typeof document !== 'undefined' && document.documentElement.clientWidth);

  static getDerivedStateFromProps(props, state) {
    const propsSelected = getStartOfDay(props.value);
    const propsMin = getStartOfDay(props.min);
    const propsMax = getStartOfDay(props.max);
    const hasSelectedChanged = +state.selectedDate !== +propsSelected;
    const hasMinChanged = +state.min !== +propsMin;
    const hasMaxChanged = +state.max !== +propsMax;
    if (hasSelectedChanged || hasMinChanged || hasMaxChanged) {
      const selectedDate = hasSelectedChanged ? propsSelected : state.selectedDate;
      const min = hasMinChanged ? propsMin : state.min;
      const max = hasMaxChanged ? propsMax : state.max;
      // make sure that selected date is within allowed range
      if (!isWithinRange(selectedDate, min, max)) {
        props.onChange(moveToWithinRange(selectedDate, min, max));
        return null;
      }
      const viewMonth = (selectedDate || new Date()).getMonth();
      const viewYear = (selectedDate || new Date()).getFullYear();
      return { selectedDate, min, max, viewMonth, viewYear };
    }
    return null;
  }

  componentDidUpdate(previousProps) {
    if (+this.props.value !== +previousProps.value && this.state.open) {
      this.focusOn('.active');
    }
  }

  componentWillUnmount() {
    // Prevents memory leak by cleaning state.
    this.setState = () => {};
  }

  open = () => {
    const { onFocus } = this.props;

    this.setState(
      { open: true, mode: MODE.DAY, isMobile: this.getWindowSize() <= Breakpoint.SMALL },
      () => {
        this.adjustIfOffscreen();
        this.focusOn('.tw-date-lookup-header-current');
      },
    );
    if (onFocus) {
      onFocus();
    }

    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('click', this.handleOutsideClick, true);
  };

  resizeHandler = () =>
    this.setState({ isMobile: this.getWindowSize() <= Breakpoint.SMALL }, this.adjustIfOffscreen());

  adjustIfOffscreen = () => {
    if (!this.state.isMobile && this.open && this.dropdown && this.dropdown.current) {
      const dropdown = this.dropdown.current;
      const bounding = dropdown.getBoundingClientRect();

      const rightSideOffscreen = bounding.right > this.getWindowSize();
      const leftSideOffscreen = bounding.left < 0;

      if (rightSideOffscreen) {
        // It is very unlikely that both sides are offscreen because we are rendering as full width on mobile
        dropdown.classList[leftSideOffscreen ? 'remove' : 'add']('dropdown-menu-xs-right');
      }
    }
  };

  close = () => {
    const { onBlur } = this.props;
    this.setState({ open: false });
    if (onBlur) {
      onBlur();
    }
    window.removeEventListener('resize', this.adjustIfOffscreen);
    document.removeEventListener('click', this.handleOutsideClick, true);
  };

  handleOutsideClick = (event) => {
    const { isMobile } = this.state;
    if (!this.state.open || isMobile) {
      return;
    }

    const dropdown = this.element.current.querySelector('.dropdown-menu');
    if (dropdown && !dropdown.contains(event.target)) {
      this.close();
    }
  };

  handleKeyDown = (event) => {
    const { open } = this.state;
    switch (event.keyCode) {
      case KeyCodes.LEFT:
        if (open) {
          this.adjustDate(-1, -1, -1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.UP:
        if (open) {
          this.adjustDate(-7, -4, -4);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.RIGHT:
        if (open) {
          this.adjustDate(1, 1, 1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          this.adjustDate(7, 4, 4);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        this.close();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  adjustDate = (daysToAdd, monthsToAdd, yearsToAdd) => {
    const { selectedDate, min, max, mode } = this.state;
    let date;
    if (selectedDate) {
      date = new Date(
        mode === MODE.YEAR ? selectedDate.getFullYear() + yearsToAdd : selectedDate.getFullYear(),
        mode === MODE.MONTH ? selectedDate.getMonth() + monthsToAdd : selectedDate.getMonth(),
        mode === MODE.DAY ? selectedDate.getDate() + daysToAdd : selectedDate.getDate(),
      );
    } else {
      date = getStartOfDay(new Date());
    }
    date = moveToWithinRange(date, min, max);
    if (+date !== +selectedDate) {
      this.props.onChange(date);
    }
  };

  focusOn = (preferredElement, fallbackElement) => {
    const element = this.element.current.querySelector(preferredElement);
    if (element) {
      element.focus();
    } else if (fallbackElement) {
      this.focusOn(fallbackElement);
    }
  };

  switchMode = (mode) => {
    this.setState({ mode }, () => {
      this.focusOn('.active', '.today');
    });
  };

  switchToDays = () => this.switchMode(MODE.DAY);

  switchToMonths = () => this.switchMode(MODE.MONTH);

  switchToYears = () => this.switchMode(MODE.YEAR);

  handleSelectedDateUpdate = (selectedDate) => {
    this.setState({ selectedDate }, () => {
      this.props.onChange(selectedDate);
      this.close();
      this.focusOn('.btn');
    });
  };

  handleViewDateUpdate = ({ month = this.state.viewMonth, year = this.state.viewYear }) => {
    this.setState({ viewMonth: month, viewYear: year });
  };

  getCalendar = () => {
    const { selectedDate, min, max, viewMonth, viewYear, mode } = this.state;
    const { placeholder, monthFormat } = this.props;
    return (
      <>
        {mode === MODE.DAY && (
          <DayCalendar
            {...{ selectedDate, min, max, viewMonth, viewYear, monthFormat }}
            onSelect={this.handleSelectedDateUpdate}
            onLabelClick={this.switchToYears}
            onViewDateUpdate={this.handleViewDateUpdate}
          />
        )}
        {mode === MODE.MONTH && (
          <MonthCalendar
            {...{ selectedDate, min, max, viewYear, placeholder }}
            onSelect={this.switchToDays}
            onLabelClick={this.switchToYears}
            onViewDateUpdate={this.handleViewDateUpdate}
          />
        )}
        {mode === MODE.YEAR && (
          <YearCalendar
            {...{ selectedDate, min, max, viewYear, placeholder }}
            onSelect={this.switchToMonths}
            onViewDateUpdate={this.handleViewDateUpdate}
          />
        )}
      </>
    );
  };

  handleClear = () => {
    this.props.onChange(null);
    this.focusOn('.np-date-trigger');
  };

  render() {
    const { selectedDate, open, isMobile } = this.state;

    const { size, placeholder, label, monthFormat, disabled, clearable, value } = this.props;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={this.element}
        className={`btn-group btn-block dropdown ${open ? 'open' : ''}`}
        onKeyDown={this.handleKeyDown}
      >
        <DateTrigger
          {...{ selectedDate, size, placeholder, label, monthFormat, disabled }}
          onClick={this.open}
          onClear={!disabled && clearable && value ? this.handleClear : null}
        />
        {isMobile ? (
          <BottomSheet open={open} onClose={this.close}>
            {this.getCalendar()}
          </BottomSheet>
        ) : (
          open && (
            <div ref={this.dropdown} className="dropdown-menu tw-date-lookup-menu">
              {this.getCalendar()}
            </div>
          )
        )}
      </div>
    );
  }
}

DateLookup.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  monthFormat: PropTypes.oneOf(['long', 'short']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  clearable: PropTypes.bool,
};

DateLookup.defaultProps = {
  min: null,
  max: null,
  size: Size.MEDIUM,
  placeholder: '',
  label: '',
  monthFormat: MonthFormat.LONG,
  disabled: false,
  onFocus: null,
  onBlur: null,
  clearable: false,
};

export default DateLookup;
