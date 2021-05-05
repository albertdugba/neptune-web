import React from 'react';
import Types from 'prop-types';

import { Markdown, Info, InfoPresentation, Size } from '@transferwise/components';
import { useIntl } from 'react-intl';
import messages from './Help.messages';

const Help = (props) => {
  const intl = useIntl();

  return (
    <Info
      className="m-l-1"
      content={<Markdown>{props.help.markdown}</Markdown>}
      presentation={InfoPresentation.POPOVER}
      size={Size.SMALL}
      aria-label={intl.formatMessage(messages.helpAria)}
    />
  );
};

Help.propTypes = {
  help: Types.shape({ markdown: Types.string }).isRequired,
};

export default Help;
