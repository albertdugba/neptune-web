import { BottomSheet, NavigationOption, Upload } from '@transferwise/components';
import Types from 'prop-types';
import { useEffect, useState } from 'react';

const ImageUpload = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.querySelector('.droppable-card-content .btn').addEventListener('click', (event) => {
      setOpen(true);
      event.preventDefault();
    });
  }, []);

  const openFilePicker = () => {
    setOpen(false);

    const clickEvent = new PointerEvent('click');
    clickEvent.preventDefault();

    document.querySelector('.droppable-card-content .btn input').dispatchEvent(clickEvent);
  };

  return (
    <>
      <Upload
        animationDelay={700}
        csButtonText="Select other file?"
        csFailureText="Upload failed.Please, try again"
        csSuccessText="Upload complete!"
        csTooLargeMessage="Please provide a file smaller than 5MB"
        csWrongTypeMessage="Please provide a supported format"
        maxSize={5000000}
        psButtonText="Cancel"
        psProcessingText="Uploading..."
        size="md"
        usAccept="image/*"
        usButtonText="Or Select File"
        usDisabled={false}
        usDropMessage="Drop file to start upload"
        usLabel="Front of your ID document"
        usPlaceholder="Drag and drop file less than 5MB"
        // usHelpImage={IMAGES[0].value}
        // httpOptions={{
        //   url: 'https://httpbin.org/post',
        // }}
        // onStart={(file) => console.log('onStart', file)}
        // onSuccess={(httpResponse, fileName) => console.log('onSuccess', httpResponse, fileName)}
        // onFailure={(httpResponse) => console.log('onFailure', httpResponse)}
        // onCancel={() => console.log('onCancel')}
        // size="md"
      />

      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <NavigationOption showMediaAtAllSizes title="Take a picture" className="p-l-2" />
        <NavigationOption
          showMediaAtAllSizes
          title="Upload a file"
          className="p-l-2"
          onClick={openFilePicker}
        />
      </BottomSheet>
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
};

export default ImageUpload;
