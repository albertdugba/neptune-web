const minifyPreset = ['minify', { builtIns: false, mangle: { exclude: { separators: true } } }];
const tsPreset = ['@babel/preset-typescript', { isTSX: true, allExtensions: true }];

const umdConfig = {
  presets: [
    [
      // @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which
      // syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
      '@babel/preset-env',
      {
        // This option configures how @babel/preset-env handles polyfills.
        // useBuiltIns: 'usage' Adds specific imports for polyfills when they are used in each file.
        // We take advantage of the fact that a bundler will load the same polyfill only once.
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        // targets: {
        //   browsers: please check browserlistrc.
        // },
        // Do not transform ES6 module syntax to another module type.
        // Rollup requires that your Babel configuration keeps ES6 module syntax intact
        modules: false,
      },
    ],
    tsPreset,
  ],
};

const umdConfigNoPolyfill = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Don't add polyfills automatically per file, and don't transform import "core-js" or import "@babel/polyfill" to individual polyfills.
        useBuiltIns: false,
        modules: false,
      },
    ],
    tsPreset,
  ],
};

const esConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        // targets: {
        //   browsers: please check browserlistrc
        // },
        modules: false,
      },
    ],
    tsPreset,
    minifyPreset,
  ],
};

const esConfigNoPolyfill = {
  presets: [['@babel/preset-env', { useBuiltIns: false, modules: false }], tsPreset, minifyPreset],
};

const testConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current',
        },
      },
    ],
    tsPreset,
  ],
};

module.exports = {
  // "unambiguous" - Consider the file a "module" if import/export statements are present, or else consider it a "script".
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    ['react-intl', { removeDefaultMessage: true }],
  ],
  env: {
    test: testConfig,
    umd: umdConfig,
    'umd-nopolyfill': umdConfigNoPolyfill,
    es: esConfig,
    'es-nopolyfill': esConfigNoPolyfill,
  },
};
