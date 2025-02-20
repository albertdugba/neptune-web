import { Profile as ProfileIcon, Bank as BankIcon } from '@transferwise/icons';
import Types from 'prop-types';

const DynamicIcon = (props) => {
  const getIcon = (type) => {
    // TODO more icons!
    switch (type) {
      case 'bank':
        return <BankIcon />;
      case 'profile':
      default:
        return <ProfileIcon />;
    }
  };

  return getIcon(props.type);
};

DynamicIcon.propTypes = {
  type: Types.string.isRequired,
};

DynamicIcon.defaultProps = {
  type: 'transferwise',
};

export default DynamicIcon;
