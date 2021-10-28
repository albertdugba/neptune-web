import Types from 'prop-types';

import CameraCapture from './cameraCapture';

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

const ImageUpload = (props) => {
  const { onChange, schema, model } = props;

  const handleCapture = async (result) => {
    const lastModel = model;
    const newModel = await blobToBase64(result.file);

    onChange(newModel, schema, newModel, lastModel);

    document.querySelector('.btn-block').click();
  };

  return (
    <>
      <CameraCapture
        // overlay="https://live.staticflickr.com/65535/51614393739_b334ddcbf5_z.jpg"
        overlay="https://wise.com/public-resources/assets/camera-guidelines/passport-overlay.png"
        outline="https://wise.com/public-resources/assets/camera-guidelines/passport-outline.png"
        title="Front side of your ID"
        icon="Id"
        instructions="Please make sure that all the details are clear and the whole ID fits in the box above"
        showPreview={false}
        // onCancel={() => this.setState({ openCamera: false })}
        // onError={() => this.setState({ openCamera: false })}
        onCapture={handleCapture}
      />
    </>
  );
};

ImageUpload.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string']),
    format: Types.string,
    title: Types.string,
    description: Types.string,
    allows: Types.arrayOf(Types.string),
    source: Types.oneOf(['file', 'camera']),
    image: Types.shape({
      url: Types.string,
    }),
    cameraConfig: Types.shape({
      assets: Types.shape({
        overlay: Types.string,
        outline: Types.string,
        mesh: Types.string,
      }),
      direction: Types.oneOf(['front', 'back']),
      instructions: Types.string,
    }),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  disabled: Types.bool,
  onAction: Types.func.isRequired,
};

export default ImageUpload;
