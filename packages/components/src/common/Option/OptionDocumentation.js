import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { Checkbox } from '../..';

class OptionDocumentation extends Component {
  constructor() {
    super();
    this.state = {
      complex: false,
      disabled: false,
      hasMedia: true,
    };
  }

  createStateLink(name) {
    return (value) => this.setState({ [name]: value });
  }

  render() {
    const {
      type,
      Option,
      name,
      callbackName,
      callback,
      callbackString,
      propName,
      propValue,
      title,
      content,
      extra,
    } = this.props;
    const { complex, disabled, hasMedia } = this.state;

    const Code = () => (
      <>
        {/* eslint-disable react/jsx-indent */}
        <pre className="tw-docs-code">
          {`<${name}
  id="${type}-option"
  name="${type}-option"
  title="${title}"
  content="${getContentForComplexState(complex)}"${boolProperty(propName, propValue)}${boolProperty(
            'complex',
            complex,
          )}${boolProperty('disabled', disabled)}
  ${callbackName}={${callbackString}}${hasMedia ? '\n  media={<FastFlagIcon />}' : ''}
/>`}
        </pre>
        {/* eslint-enable react/jsx-indent */}
      </>
    );

    return (
      <div className="container" id={`${type}-option-docs`}>
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
            <div className="col-md-6">
              <Option
                id={`${type}-option`}
                name={`${type}-option`}
                title={title}
                content={getContentForComplexState(complex)}
                complex={complex}
                disabled={disabled}
                media={hasMedia ? <FastFlagIcon /> : undefined}
                {...{ [propName]: propValue, [callbackName]: callback }}
              />
            </div>
          </div>
          <div className="row m-t-5">
            <div className="col-md-6">
              <Code />
              {extra}
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Checkbox
                    id={`${type}-option-complex`}
                    label="Complex"
                    checked={complex}
                    onChange={this.createStateLink('complex')}
                  />
                </div>
                <div className="col-md-6 m-b-0">
                  <Checkbox
                    id={`${type}-option-disabled`}
                    label="Disabled"
                    checked={disabled}
                    onChange={this.createStateLink('disabled')}
                  />
                </div>
              </div>
              <div className="row m-t-2">
                <div className="col-md-6">
                  <Checkbox
                    id={`${type}-option-media`}
                    label="Has media"
                    checked={hasMedia}
                    onChange={this.createStateLink('hasMedia')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getContentForComplexState(complex) {
  return complex
    ? 'Complex items should be used for items with long descriptions. Their button and media will be aligned to the top.'
    : 'Normally, the button and icon are vertically centered.';
}

function boolProperty(name, value) {
  return value
    ? `
  ${name}`
    : '';
}

OptionDocumentation.propTypes = {
  type: PropTypes.string.isRequired,
  Option: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  callbackName: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  callbackString: PropTypes.string.isRequired,
  propName: PropTypes.string,
  propValue: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  extra: PropTypes.string,
};

OptionDocumentation.defaultProps = {
  propName: null,
  propValue: false,
  extra: '',
};

export default OptionDocumentation;
