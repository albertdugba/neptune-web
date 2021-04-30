import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../../markdown';
import { MarkdownNodeType } from '../../common';

const allowList = [MarkdownNodeType.STRONG];

const InlineMarkdown = (props) => {
  return <Markdown {...props} as="span" allowList={allowList} blockList={undefined} />;
};

InlineMarkdown.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InlineMarkdown.defaultProps = {
  className: undefined,
};

export default InlineMarkdown;
