import React from 'react';
import { Sentiment } from '../../common/propsValues/sentiment';

interface Args {
  blurred: boolean;
  changed: boolean;
  focused: boolean;
  messages: { error: string; help: string; validations: { message: string }[] };
  submitted: boolean;
}

interface Return {
  message: null | string | React.ReactElement;
  type: string | Sentiment.NEUTRAL | Sentiment.NEGATIVE;
}

const getAlertMessage = ({
  blurred,
  changed,
  focused,
  messages: { error, help, validations },
  submitted,
}: Args): Return => {
  let type = '';
  let message = null;

  const isErrorVisible = !changed && error;
  const isValidationVisible = (submitted || (changed && blurred)) && !!validations.length;
  const isHelpVisible = focused && help;

  if (isErrorVisible) {
    type = Sentiment.NEGATIVE;
    message = error;
  } else if (isValidationVisible) {
    type = Sentiment.NEGATIVE;
    message = (
      <ul className="list-unstyled">
        {validations.map((message, key) => (
          <li key={key}>{message}</li>
        ))}
      </ul>
    );
  } else if (isHelpVisible) {
    type = Sentiment.NEUTRAL;
    message = help;
  }

  return {
    message,
    type,
  };
};

export default getAlertMessage;
