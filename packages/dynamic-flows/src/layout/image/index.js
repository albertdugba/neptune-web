import { Image } from '@transferwise/components';
import Types from 'prop-types';

import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const getImageClasses = (component) => {
  const margin = getMarginBottom(component.margin);
  return `img-responsive ${margin}`;
};

const DynamicImage = (props) => {
  const image = props.component;

  const imageProps = {
    alt: image.text,
    src: image.url,
    stretch: true,
    shrink: true,
  };

  return <Image className={getImageClasses(image)} {...imageProps} />;
};

DynamicImage.propTypes = {
  component: Types.shape({
    text: Types.string,
    url: Types.string,
    margin: marginModel,
  }).isRequired,
};

export default DynamicImage;
