import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import JsonSchemaForm from './JsonSchemaForm';
import allOfSchema from './schemas/allOf.json';
import audRecipientSchema from './schemas/audRecipient.json';
import currencySchema from './schemas/currency.json';
import oneOfSchema from './schemas/oneOf.json';
import promotedOneOfSchema from './schemas/promotedOneOf.json';
import promotedOneOfCheckboxSchema from './schemas/promotedOneOfCheckbox.json';
import simpleSchema from './schemas/simple.json';
import fileUploadPersistAsyncSchema from './schemas/uploadPersistAsync.json';
import validationAsyncSchema from './schemas/validationAsync.json';

export default {
  component: JsonSchemaForm,
  title: 'JsonSchemaForm',
};

export const basic = () => {
  const schemas = {
    simple: simpleSchema,
    promotedOneOf: promotedOneOfSchema,
    promotedOneOfCheckbox: promotedOneOfCheckboxSchema,
    oneOf: oneOfSchema,
    allOf: allOfSchema,
    'AUD Recipient': audRecipientSchema,
    'File upload persist async': fileUploadPersistAsyncSchema,
    validationAsync: validationAsyncSchema,
    currency: currencySchema,
  };

  const schema = select('schema', schemas, simpleSchema);

  const model = {
    number: 3,
    string: 'hi',
  };

  const stringError = text('error from server', '');
  const errors = { string: stringError };
  const translationsFromProps = {};
  const submitted = boolean('submitted', false);
  const disabled = boolean('disabled', false);

  return (
    <JsonSchemaForm
      schema={schema}
      model={model}
      errors={errors}
      translations={translationsFromProps}
      submitted={submitted}
      disabled={disabled}
      baseUrl=""
      onChange={action('onChange')}
      onPersistAsync={() => {}}
    />
  );
};
