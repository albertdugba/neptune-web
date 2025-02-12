// eslint-disable-next-line unicorn/no-unsafe-regex
const absoluteUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

export const getAsyncUrl = (url, baseUrl) => {
  return absoluteUrlRegex.test(url) ? url : baseUrl + url;
};
