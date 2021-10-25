import * as icons from '@transferwise/icons';
import { Check, Cross } from '@transferwise/icons';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { CircularButton, ControlType, Loader, Priority, Size } from '@transferwise/components';

const DEBUG_MODE = false;

// import screenfull from 'screenfull'; // MIT@https://github.com/sindresorhus/screenfull.js

//   $onInit() {
//     this.guidelines = this.guidelines || {};
//
//     // Used to programatically size overlay and sensor.
//     this.overlaySquareLength = 0;
//     this.sensorWidth = 0;
//
//     // lock document scroll.
//     this.previousBodyOverflowStyle = this.$document[0].body.style.overflow;
//     this.$document[0].body.style.overflow = 'hidden'; // lock document scroll.
//
//     this.calculateWidthsResizeListener = this.calculateWidths.bind(this);
//     this.$window.addEventListener('resize', this.calculateWidthsResizeListener);
//
//     // TODO haoyuan : add change event listener to screenful,
//     //  existing full screen should quit capture instead of showing non full screen camera
//     this.startLiveCamFlow();
//   }
//
//   // Programatically update overlay/sensor widths, as it's not achievable through CSS.
//   calculateWidths() {
//     this.$timeout(() => { // helps ensure it's always in a digest cycle.
//       const container = this.findContainer();
//       const screenWidth = container.clientWidth;
//       const screenHeight = container.clientHeight;
//
//       const viewfinder = this.findViewfinder();
//       const cameraWidth = viewfinder.videoWidth;
//       const cameraHeight = viewfinder.videoHeight;
//
//       if (!cameraWidth || !cameraHeight) {
//         this.$timeout(this.calculateWidths.bind(this), 100); // Keep trying until video's ready.
//         return;
//       }
//
//       const scaleFactor = Math.min(screenWidth / cameraWidth, screenHeight / cameraHeight);
//
//       const sensorWidth = scaleFactor * cameraWidth;
//       const sensorHeight = scaleFactor * cameraHeight;
//
//       // Setting width is sufficient, height auto-scales to maintain aspect ratio.
//       this.sensorWidth = sensorWidth;
//
//       // 90% because we leave a 5% margin on each side,
//       // in order for overlay image to never touch screen edge.
//       this.overlaySquareLength = Math.min(sensorWidth, sensorHeight) * 0.9;
//     });
//   }
//
//   tryAcquireFullScreen() {
//     if (screenfull.isEnabled) {
//       if (!screenfull.isFullscreen) {
//         const deferred = this.$q.defer();
//         // screenfull isn't actually 100% reliable. Give it a 1.5s timeout.
//         this.$timeout(deferred.reject.bind(null, 'Fullscreen request timed out.'), 1500);
//         screenfull.on('error', deferred.reject); // screenfull rejecting a promise isn't always guaranteed.
//         screenfull.request(this.container).then(deferred.resolve, deferred.reject);
//
//         return deferred.promise;
//       }
//       return this.$q.resolve();
//     }
//     return this.$q.reject('Switching to full screen is not enabled.');
//   }

const MODE = {
  CAPTURE: 'CAPTURE',
  PREVIEW: 'PREVIEW',
};

const CAMERA_DIRECTION = {
  FRONT: 'FRONT',
  BACK: 'BACK',
};

const isSelfieCamera = (videoStream) => {
  const { facingMode } = videoStream.getVideoTracks()[0].getSettings();

  return facingMode === 'user' || facingMode === undefined;
};

const isSupported = () => 'mediaDevices' in navigator;

const getLayoutRenderer = (videoElement, layersElement, overlay, outline) => {
  const overlayImage = new Image();
  const outlineImage = new Image();

  const promise = Promise.all([
    new Promise((resolve) => {
      overlayImage.addEventListener('load', resolve);
      overlayImage.addEventListener('error', resolve);
    }),
    new Promise((resolve) => {
      outlineImage.addEventListener('load', resolve);
      outlineImage.addEventListener('error', resolve);
    }),
  ]).then(([overlayEvent, outlineEvent]) => {
    const overlayImg = overlayEvent.type === 'load' ? overlayImage : undefined;
    const outlineImg = outlineEvent.type === 'load' ? outlineImage : undefined;

    return () => {
      drawLayers(videoElement, layersElement, overlayImg, outlineImg);
    };
  });

  overlayImage.src = overlay;
  outlineImage.src = outline;

  return promise;
};

const getVideoStreamSize = (videoElement) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;
  const { videoWidth: streamOriginalWidth, videoHeight: streamOriginalHeight } = videoElement;

  const elementAspectRatio = elementWidth / elementHeight;
  const streamAspectRatio = streamOriginalWidth / streamOriginalHeight;

  let streamWidth, streamHeight;
  if (streamAspectRatio > elementAspectRatio) {
    streamWidth = elementWidth;
    streamHeight = (elementWidth / streamOriginalWidth) * streamOriginalHeight;
  } else {
    streamWidth = (elementHeight / streamOriginalHeight) * streamOriginalWidth;
    streamHeight = elementHeight;
  }

  return { width: streamWidth, height: streamHeight };
};

const drawLayers = (videoElement, canvas, overlayImage, outlineImage) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;

  // GLOBALS
  const paddingTop = 32;
  const paddingRight = 32;
  const paddingBottom = 32;
  const paddingLeft = 32;
  const marginBottom = 196;

  const outlinePadding = 10;

  canvas.width = elementWidth;
  canvas.height = elementHeight;

  const context = canvas.getContext('2d');

  if (overlayImage) {
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, elementWidth, elementHeight);

    const { width: streamWidth, height: streamHeight } = getVideoStreamSize(videoElement);
    const streamLeft = (elementWidth - streamWidth) / 2;
    const streamTop = (elementHeight - streamHeight) / 2;

    if (DEBUG_MODE) {
      context.fillStyle = 'rgba(255, 0, 0, 0.5)';
      context.fillRect(streamLeft, streamTop, streamWidth, streamHeight);
    }

    // USABLE SCREEN AREA
    // prettier-ignore
    const usableScreenAreaWidth = Math.min(elementWidth, streamWidth) - (paddingLeft + paddingRight);
    // prettier-ignore
    const usableScreenAreaHeight = Math.min(elementHeight - marginBottom, streamHeight - (Math.max(0, marginBottom - (elementHeight - streamHeight) / 2))) - (paddingTop + paddingBottom);
    const usableScreenAreaLeft = streamLeft + paddingLeft;
    const usableScreenAreaTop = streamTop + paddingTop;
    const usableScreenAreaAspectRatio = usableScreenAreaWidth / usableScreenAreaHeight;

    if (DEBUG_MODE) {
      context.fillStyle = 'rgba(0, 0, 255, 0.5)';
      // prettier-ignore
      context.fillRect(usableScreenAreaLeft, usableScreenAreaTop, usableScreenAreaWidth, usableScreenAreaHeight);
    }

    // OVERLAY
    const { width: overlayOriginalWidth, height: overlayOriginalHeight } = overlayImage;
    const overlayAspectRatio = overlayOriginalWidth / overlayOriginalHeight;

    let overlayLeft, overlayTop, overlayWidth, overlayHeight;
    if (overlayAspectRatio > usableScreenAreaAspectRatio) {
      overlayWidth = usableScreenAreaWidth;
      overlayHeight = (overlayWidth / overlayOriginalWidth) * overlayOriginalHeight;
      overlayLeft = usableScreenAreaLeft;
      overlayTop = usableScreenAreaTop + (usableScreenAreaHeight - overlayHeight) / 2;
    } else {
      overlayHeight = usableScreenAreaHeight;
      overlayWidth = (overlayHeight / overlayOriginalHeight) * overlayOriginalWidth;
      overlayLeft = usableScreenAreaLeft + (usableScreenAreaWidth - overlayWidth) / 2;
      overlayTop = usableScreenAreaTop;
    }

    context.globalCompositeOperation = 'destination-out';
    context.drawImage(overlayImage, overlayLeft, overlayTop, overlayWidth, overlayHeight);

    // OUTLINE
    if (outlineImage) {
      const outlineWidth = overlayWidth - outlinePadding * 2;
      const outlineHeight = overlayHeight - outlinePadding * 2;
      const outlineLeft = overlayLeft + outlinePadding;
      const outlineTop = overlayTop + outlinePadding;

      context.globalCompositeOperation = 'source-over';
      // prettier-ignore
      context.drawImage(outlineImage, outlineLeft, outlineTop, outlineWidth, outlineHeight);
    }
  }
};

const CameraCapture = (props) => {
  const {
    direction,
    overlay,
    outline,
    icon,
    title,
    instructions,
    showPreview,
    onError,
    onCancel,
    onCapture,
  } = props;

  const videoReference = useRef();
  const snapshotReference = useRef();
  const layersReference = useRef();

  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(MODE.CAPTURE);
  const [isVideoMirrored, setIsVideoMirrored] = useState(false);

  useEffect(() => {
    const cleanups = [() => closeVideoStream()];

    startCameraCapture().then((videoStream) => {
      setIsVideoMirrored(isSelfieCamera(videoStream));

      getLayoutRenderer(videoReference.current, layersReference.current, overlay, outline)
        .then((renderLayout) => {
          renderLayout();
          window.addEventListener('resize', renderLayout);
          cleanups.push(() => window.removeEventListener('resize', renderLayout));
        })
        .finally(() => setLoading(false));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  if (!isSupported()) {
    console.error('navigator.mediaDevices not accessible on this browser');
    onError();
    return null;
  }

  const startCameraCapture = async () => {
    return getMediaStream()
      .then((stream) => {
        return new Promise((resolve) => {
          videoReference.current.addEventListener('loadeddata', () => {
            resolve(stream);
          });
          videoReference.current.srcObject = stream;
        });
      })
      .catch((error) => {
        closeVideoStream();
        onError();
        throw error;
      });
  };

  const getMediaStream = () => {
    const constraints = {
      video: {
        // These are the largest resolutions mobile devices support at the time of implementation
        width: { ideal: 4032 },
        height: { ideal: 3024 },
        facingMode: {
          ideal: direction === CAMERA_DIRECTION.FRONT ? 'user' : 'environment',
        },
      },
      audio: false,
    };

    // eslint-disable-next-line compat/compat
    return navigator.mediaDevices.getUserMedia(constraints);
  };

  const closeVideoStream = () => {
    // if (screenfull.isEnabled) {
    //   screenfull.exit();
    // }
    if (videoReference.current && videoReference.current.srcObject) {
      videoReference.current.srcObject.getVideoTracks().forEach((track) => track.stop());
    }
  };

  const returnCapturedImage = () => {
    snapshotReference.current.toBlob(
      (blob) => {
        // if (screenfull.isEnabled) {
        //   screenfull.exit();
        // }
        closeVideoStream();
        onCapture({ file: blob });
      },
      'image/jpeg',
      0.92,
    );
  };

  const onCancelButtonClick = () => {
    closeVideoStream();
    onCancel();
  };

  const onCaptureButtonClick = () => {
    if (!showPreview) {
      return returnCapturedImage();
    }

    videoReference.current.pause();
    snapshotReference.current.width = videoReference.current.videoWidth;
    snapshotReference.current.height = videoReference.current.videoHeight;
    snapshotReference.current.getContext('2d').drawImage(videoReference.current, 0, 0);

    setMode(MODE.PREVIEW);
  };

  const onRecaptureButtonClick = () => {
    videoReference.current.play();

    setMode(MODE.CAPTURE);
  };

  const onUploadButtonClick = () => {
    returnCapturedImage();
  };

  const Icon = icons[icon] || (() => null);

  return (
    <>
      {loading && (
        <div id="cameraLoader">
          <Loader size={Size.MEDIUM} />
        </div>
      )}
      <div id="camera" className={`${isVideoMirrored ? 'mirrored' : ''}`}>
        <video ref={videoReference} id="cameraViewfinder" autoPlay playsInline />

        <canvas ref={layersReference} id="cameraViewfinderLayers" />

        <div id="cameraViewfinderSnapshot">
          <canvas ref={snapshotReference} hidden={mode !== MODE.PREVIEW} />
        </div>

        <div className="fixed-top camera-ctrl-bar-top">
          {onCancel && (
            <div className="fixed-top camera-ctrl-bar-top">
              <CircularButton
                icon={<Cross />}
                type={ControlType.ACCENT}
                priority={Priority.PRIMARY}
                onClick={onCancelButtonClick}
              />
            </div>
          )}
        </div>

        <div className="fixed-bottom camera-ctrl-bar-bottom">
          {mode === MODE.PREVIEW && (
            <span className="camera-ctrl-box-small">
              <CircularButton
                icon={<Cross />}
                type={ControlType.NEGATIVE}
                priority={Priority.PRIMARY}
                onClick={onRecaptureButtonClick}
              />
              <CircularButton
                icon={<Check />}
                type={ControlType.POSITIVE}
                priority={Priority.PRIMARY}
                onClick={onUploadButtonClick}
              />
            </span>
          )}
          {mode === MODE.CAPTURE && (
            <>
              <Icon size={24} className="camera-ctrl-icon m-b-1" />
              <h4 className="camera-ctrl-title m-b-1 p-x-3">{title}</h4>
              <small className="camera-ctrl-title m-b-2 p-x-3">{instructions}</small>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <span className="camera-ctrl-btn-big m-b-2" onClick={onCaptureButtonClick}>
                <span className="camera-ctrl-btn-big-inner" />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

CameraCapture.propTypes = {
  overlay: PropTypes.string,
  outline: PropTypes.string,
  direction: PropTypes.oneOf([CAMERA_DIRECTION.FRONT, CAMERA_DIRECTION.BACK]),

  icon: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.string,

  showPreview: PropTypes.bool,

  onCancel: PropTypes.func,
  onCapture: PropTypes.func.isRequired,
  onError: PropTypes.func,
};

CameraCapture.defaultProps = {
  direction: CAMERA_DIRECTION.BACK,
  showPreview: true,
  onError: () => {},
};

export default CameraCapture;
