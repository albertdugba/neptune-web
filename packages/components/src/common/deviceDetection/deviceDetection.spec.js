import { isIosDevice } from './deviceDetection';

describe('Device detection', () => {
  function fakeUserAgent(userAgent) {
    navigator.__defineGetter__('userAgent', () => userAgent);
    // need to use this instead of defineProperty, as it's blocked from overriding
  }

  beforeEach(() => {
    window.ontouchstart = undefined;
    fakeUserAgent('FAKE');
  });

  it('recognizes ios devices from device agent', () => {
    const touchUserAgents = [
      // iPhone X (iOS)
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
      // iPad (iOS)
      'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    ];
    touchUserAgents.forEach((userAgent) => {
      fakeUserAgent(userAgent);
      expect(isIosDevice()).toBe(true);
    });
  });

  it('does not recognize touch devices from device agent if they are not a touch device', () => {
    const nonTouchUserAgents = [
      // Internet explorer on Windows phone
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)',
      // nexus 5 (android)
      'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36',
      // chrome mac
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
      // edge windows
      'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
      // safari mac
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
    ];
    nonTouchUserAgents.forEach((userAgent) => {
      fakeUserAgent(userAgent);
      expect(isIosDevice()).toBe(false);
    });
  });
});
