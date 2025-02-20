import { shallow, mount } from 'enzyme';

import { ANIMATION_DURATION_IN_MS } from '../processIndicator';

import { CompleteStep, UploadImageStep, MediaUploadStep, ProcessingStep } from './steps';

import Upload from '.';

jest.useFakeTimers();
jest.mock('./utils/postData', () => ({
  postData: () => new Promise((resolve) => resolve('ServerResponse')),
}));

jest.mock('./utils/asyncFileRead');
const { asyncFileRead } = require('./utils/asyncFileRead');

const defaultLocale = 'en-GB';
jest.mock('react-intl', () => ({
  injectIntl: (Component) =>
    function (props) {
      return (
        <Component {...props} intl={{ locale: defaultLocale, formatMessage: (id) => `${id}` }} />
      );
    },
  defineMessages: (translations) => translations,
}));

const TEST_FILE = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
const ANIMATION_DELAY = ANIMATION_DURATION_IN_MS * 2;

const props = {
  animationDelay: 1000,
  csButtonText: 'csButtonText',
  csFailureText: 'csFailureText',
  csSuccessText: 'csSuccessText',
  csTooLargeMessage: 'csTooLargeMessage',
  maxSize: 5000000,
  onCancel: jest.fn(),
  onChange: jest.fn(),
  onFailure: jest.fn(),
  onStart: jest.fn(),
  onSuccess: jest.fn(),
  psButtonText: 'psButtonText',
  psProcessingText: 'psProcessingText',
  usAccept: 'image/*',
  usButtonText: 'Or Select File',
  usDropMessage: 'Drop file to start upload',
  usPlaceholder: 'Drag and drop a file less than 5MB',
};

const UPLOADIMAGE_STEP_PROPS = {
  fileDropped: expect.any(Function),
  isComplete: false,
  usAccept: props.usAccept,
  usButtonText: props.usButtonText,
  usDisabled: false,
  usHelpImage: '',
  usLabel: '',
  usPlaceholder: props.usPlaceholder,
};

const PROCESSING_STEP_PROPS = {
  isComplete: false,
  isError: false,
  isSuccess: false,
  onAnimationCompleted: expect.any(Function),
  onClear: expect.any(Function),
  psButtonText: props.psButtonText,
  psProcessingText: props.psProcessingText,
};

const COMPLETED_STEP_PROPS = {
  csButtonText: props.csButtonText,
  csFailureText: props.csFailureText,
  csSuccessText: props.csSuccessText,
  fileName: TEST_FILE.name,
  isComplete: true,
  isError: false,
  isImage: true,
  onClear: expect.any(Function),
  uploadedImage: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
};

describe('Upload', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Upload {...props} />).dive();
    asyncFileRead.mockImplementation(() => new Promise((resolve) => resolve('a value')));
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('renders container', () => {
    expect(component.find('.droppable-md')).toHaveLength(1);
  });

  it('renders the UploadImageStep by default', () => {
    expect(component.find(UploadImageStep)).toHaveLength(1);
    expect(component.find(MediaUploadStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(0);
    expect(component.find(CompleteStep)).toHaveLength(0);
    expect(component.find('.droppable-dropping-card')).toHaveLength(1);
  });

  it(`renders the MediaUploadStep by default is it's the uploadStep in props`, () => {
    component.setProps({ uploadStep: 'mediaUploadStep' });

    expect(component.find(MediaUploadStep)).toHaveLength(1);
    expect(component.find(UploadImageStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(0);
    expect(component.find(CompleteStep)).toHaveLength(0);
    expect(component.find('.droppable-dropping-card')).toHaveLength(1);
  });

  it('renders the ProcessingStep when state is processing', () => {
    component.setState({ isProcessing: true });

    expect(component.find(UploadImageStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(1);
    expect(component.find(CompleteStep)).toHaveLength(0);
    expect(component.find('.droppable-dropping-card')).toHaveLength(0);
  });

  it('renders the CompleteStep when state is completed', () => {
    component.setState({ isComplete: true });

    expect(component.find(UploadImageStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(0);
    expect(component.find(CompleteStep)).toHaveLength(1);
    expect(component.find('.droppable-dropping-card')).toHaveLength(1);
  });

  describe('before file is dropped', () => {
    it('renders the UploadImageStep with right props', () => {
      expect(component.find(UploadImageStep).props()).toStrictEqual(UPLOADIMAGE_STEP_PROPS);
    });
  });

  describe('when file is dropped', () => {
    it('onStart is called with file', async () => {
      await component.instance().fileDropped(TEST_FILE);

      expect(props.onStart).toHaveBeenCalledWith(TEST_FILE);
    });

    it('step changes from UploadImageStep to ProcessingStep', async () => {
      expect(component.find(UploadImageStep)).toHaveLength(1);
      expect(component.find(ProcessingStep)).toHaveLength(0);
      expect(component.find(CompleteStep)).toHaveLength(0);

      await component.instance().fileDropped(TEST_FILE);
      component.update();

      expect(component.find(UploadImageStep)).toHaveLength(0);
      expect(component.find(ProcessingStep)).toHaveLength(1);
      expect(component.find(CompleteStep)).toHaveLength(0);
    });

    it('step changes from UploadImageStep to ProcessingStep with right props', async () => {
      await component.instance().fileDropped(TEST_FILE);
      component.update();

      expect(component.find(ProcessingStep).props()).toStrictEqual(PROCESSING_STEP_PROPS);
    });
  });

  describe('when file is being processed', () => {
    it('step ProcessingStep is called with success props', async () => {
      await component.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay);
      component.update();

      expect(component.find(ProcessingStep).props()).toStrictEqual({
        ...PROCESSING_STEP_PROPS,
        isSuccess: true,
      });
    });

    it('step ProcessingStep is called with error props', async () => {
      asyncFileRead.mockImplementation(() => new Promise((resolve, reject) => reject('An error')));

      await component.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay);
      component.update();

      expect(component.find(ProcessingStep).props()).toStrictEqual({
        ...PROCESSING_STEP_PROPS,
        isError: true,
      });
    });
  });

  describe('when file is processed', () => {
    it('step changes from UploadImageStep to CompleteStep', async () => {
      component = mount(<Upload {...props} />);
      const upload = component.children();
      expect(upload.find(UploadImageStep)).toHaveLength(1);
      expect(upload.find(ProcessingStep)).toHaveLength(0);
      expect(upload.find(CompleteStep)).toHaveLength(0);

      await upload.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay + ANIMATION_DELAY);
      component.update();

      expect(component.find(UploadImageStep)).toHaveLength(0);
      expect(component.find(ProcessingStep)).toHaveLength(0);
      expect(component.find(CompleteStep)).toHaveLength(1);
    });

    it('step CompleteStep is called with error props', async () => {
      component = mount(<Upload {...props} />);
      const upload = component.children();
      asyncFileRead.mockImplementation(() => new Promise((resolve, reject) => reject('An error')));

      await upload.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay + ANIMATION_DELAY);
      component.update();

      expect(component.find(CompleteStep).props()).toStrictEqual({
        ...COMPLETED_STEP_PROPS,
        isImage: false,
        isComplete: true,
        isError: true,
        uploadedImage: null,
      });
    });

    it('onSuccess is called with response when httpOptions are provided', async () => {
      component = mount(<Upload {...props} httpOptions={{ url: 'a-url' }} />).children();

      await component.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay + ANIMATION_DELAY);

      expect(props.onSuccess).toHaveBeenCalledWith('ServerResponse', TEST_FILE.name);
    });

    it('wont process new file while current process is in progress', async () => {
      component = mount(<Upload {...props} httpOptions={{ url: 'a-url' }} />).children();

      await component.instance().fileDropped(TEST_FILE);
      const result = await component.instance().fileDropped(TEST_FILE);
      jest.advanceTimersByTime(props.animationDelay + ANIMATION_DELAY);

      expect(result).toBe(false);
      expect(props.onSuccess).toHaveBeenCalledTimes(1);
    });
  });
});
