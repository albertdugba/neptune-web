_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"+wNj":function(e,s,n){"use strict";function t(e,s){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],s.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(s,"a",(function(){return t}))},"/uL9":function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/Versioning",function(){return n("0Fcp")}])},"0Fcp":function(e,s,n){"use strict";n.r(s),n.d(s,"meta",(function(){return b})),n.d(s,"default",(function(){return m}));var t=n("cxan"),r=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),a=n("zEEr"),c=n("VEKf"),p=n("wSpH"),u=n("Qi1R"),d=["components"],b=(i.a.createElement,{name:"Versioning policy"}),f={meta:b};function m(e){var s=e.components,n=Object(r.a)(e,d);return Object(l.a)("wrapper",Object(t.a)({},f,n,{components:s,mdxType:"MDXLayout"}),Object(l.a)("p",null,"The current version of Components is ",Object(l.a)(u.c,{version:a.version,mdxType:"PackageVersion"}),". CSS is at ",Object(l.a)(u.c,{version:c.version,mdxType:"PackageVersion"}),". Dynamic Flows is at ",Object(l.a)(u.c,{version:p.version,mdxType:"PackageVersion"}),"."),Object(l.a)("p",null,"Our goal is to ensure all our consumers understand when and how new features are added, and to be well-prepared when we remove features or make breaking changes."),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"We understand you need stability from Neptune Web, and are working towards less and less frequent breaking changes.")," We appreciate your patience while we get there."),Object(l.a)("h2",{id:"versioning"},"Versioning"),Object(l.a)("p",null,"We follow ",Object(l.a)("a",{parentName:"p",href:"https://semver.org"},"SemVer"),". Please note that we do not bump versions for changes to the internal implementation of components."),Object(l.a)("p",null,"We only support the latest version of Neptune Web, and do not backport any changes to older versions."),Object(l.a)("h2",{id:"deprecation"},"Deprecation"),Object(l.a)("p",null,"In the event of a planned breaking change, we will add warnings in the console (in development only) to indicate that a feature in use is scheduled for deprecation, and will provide migration instructions."),Object(l.a)("p",null,"In general, the feature will be removed in the next major version, but we will provide advice if the time period is known to be different from this."),Object(l.a)("h2",{id:"release-schedule"},"Release schedule"),Object(l.a)("p",null,"Currently we release at most one major release per month. We hope to reduce the frequency of major releases further over the coming months, as the library stabilises."),Object(l.a)("p",null,"The core team will generally release a minor release once per fortnight, with patch releases when required."),Object(l.a)("p",null,"Because we accept contributions at all times, extra minor releases may happen when new features are contributed."),Object(l.a)("h2",{id:"relationship-between-packages"},"Relationship between packages"),Object(l.a)("p",null,"We have some inter-package dependencies that cause one version to be bumped when its dependency is updated. Because Components depends on CSS, when we release a new CSS build, we will update the dependency and release a new Components build. The same goes for Dynamic Flows, which has a dependency on Components."))}m.isMDXComponent=!0},HbGN:function(e,s,n){"use strict";n.d(s,"a",(function(){return r}));var t=n("+wNj");function r(e,s){if(null==e)return{};var n,r,o=Object(t.a)(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},VEKf:function(e){e.exports=JSON.parse('{"name":"@transferwise/neptune-css","description":"Neptune CSS library","version":"9.2.1","license":"MIT","repository":{"type":"git","fullname":"transferwise/neptune-web","url":"git+https://github.com/transferwise/neptune-web.git"},"keywords":[],"author":{"name":"Wise","url":"https://wise.com/"},"bugs":{"url":"https://github.com/transferwise/neptune-web/issues"},"homepage":"https://transferwise.github.io/neptune-web","files":["dist","src"],"scripts":{"build":"npm-run-all build:*","build:clean":"rm -rf dist","build:copy-assets":"npm-run-all --parallel copy:*","build:compile-less":"gulp compileLess --src=\'src/less\'","build:copy-props":"gulp copyPropsAndVars --src=\'src/props\' --dest=\'dist/props\'","build:copy-vars":"gulp copyPropsAndVars --src=\'src/variables\' --dest=\'dist/less\'","dev":"npm-run-all --parallel dev:*","dev:less":"gulp watchLess --src=\'src/less/**\'","dev:props":"gulp watchPropsAndVars --src=\'src/props\'","dev:vars":"gulp watchPropsAndVars --src=\'src/variables\'","docs":"yarn build","copy:images":"cpx \'src/img/**\' dist/img","copy:fonts":"cpx \'src/fonts/*\' dist/fonts","prettier":"prettier --write src/less/*.less","lint":"yarn lintless","lintless":"stylelint \'./src/(less|props|variables)/**\' \'!**/bootstrap-forms.less\'","lintless:fix":"yarn lintless --fix"},"dependencies":{"@transferwise/neptune-tokens":"^1.0.0","bootstrap":"github:transferwise/bootstrap#semver:^5.20.0","svgo":"1.3.2"},"devDependencies":{"@mdx-js/loader":"^1.5.8","@next/mdx":"^9.0.5","@transferwise/less-config":"^3.0.2","@zeit/next-css":"^1.0.1","next":"^9.5.5","prop-types":"^15.7.2","react":"16.13.1","react-dom":"16.13.1","yargs":"^15.3.1"},"resolutions":{"svgo":"1.3.2","next/**/kind-of":"^6.0.3"}}')},ZVZ0:function(e,s,n){"use strict";n.d(s,"a",(function(){return b}));var t=n("ERkP"),r=n.n(t);function o(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function i(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?i(Object(n),!0).forEach((function(s){o(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function a(e,s){if(null==e)return{};var n,t,r=function(e,s){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var s=r.a.useContext(c),n=s;return e&&(n="function"===typeof e?e(s):l(l({},s),e)),n},u={inlineCode:"code",wrapper:function(e){var s=e.children;return r.a.createElement(r.a.Fragment,{},s)}},d=r.a.forwardRef((function(e,s){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=t,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(f,l(l({ref:s},c),{},{components:n})):r.a.createElement(f,l({ref:s},c))}));function b(e,s){var n=arguments,t=s&&s.mdxType;if("string"===typeof e||t){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var a in s)hasOwnProperty.call(s,a)&&(l[a]=s[a]);l.originalType=e,l.mdxType="string"===typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},cxan:function(e,s,n){"use strict";function t(){return(t=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}n.d(s,"a",(function(){return t}))},wSpH:function(e){e.exports=JSON.parse('{"name":"@transferwise/dynamic-flows","version":"13.6.2","description":"Wise Dynamic Flows and Forms","license":"Apache-2.0","main":"./build/es/polyfill/index.js","module":"./build/es/polyfill/index.js","style":"./build/main.css","sideEffects":["*.css"],"files":["build"],"repository":{"type":"git","fullname":"transferwise/neptune-web","url":"git+https://github.com/transferwise/neptune-web.git"},"scripts":{"dev":"npm-run-all --parallel dev:*","dev:watch-less":"gulp watchLess --dest=src","dev:storybook":"start-storybook","docs":"yarn build","build":"npm-run-all build:*","build:clean":"rm -rf lib build","build:crowdin-source-file":"formatjs extract \'src/**/*.messages.js\' --out-file i18n/en.json --format i18n/formatter.js && prettier --find-config-path --write i18n/*.json","build:compile-less":"gulp compileLess --dest=src","build:es":"NODE_ENV=es babel src -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/spec.js\'","build:es-nopolyfill":"NODE_ENV=es-nopolyfill babel src -d build/es/no-polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/spec.js\'","build:copy-files":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/polyfill","build:copy-files2":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/no-polyfill","build:copy-lang":"cpx \'i18n/*.json\' build/i18n && cpx \'i18n/index.js\' build/i18n","test":"jest --env=jsdom --maxWorkers=4 --config=../../node_modules/@transferwise/test-config/jest.config.js","test:watch":"jest --watch --env=jsdom --config=../../node_modules/@transferwise/test-config/jest.config.js","lint":"jest --maxWorkers=4 --config ../../node_modules/@transferwise/test-config/test/jest.lint.js && yarn lintless","lint:fix":"eslint \'src/**/*.js\' --fix","lintless":"stylelint --allow-empty-input \'./src/**/*.less\'","lintless:fix":"yarn lintless --fix"},"devDependencies":{"@babel/cli":"^7.12.8","@babel/core":"7.12.9","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/plugin-transform-react-jsx":"^7.12.7","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.7","@formatjs/cli":"^2.13.13","@storybook/addon-a11y":"^6.2.9","@storybook/addon-actions":"^6.2.9","@storybook/addon-docs":"^6.2.9","@storybook/addon-knobs":"^6.2.9","@storybook/react":"^6.2.9","@transferwise/components":"^36.5.3","@transferwise/icons":"^2.6.0","@transferwise/less-config":"^3.0.2","@transferwise/neptune-css":"^9.2.1","@transferwise/neptune-tokens":"^1.0.0","@transferwise/test-config":"^3.0.7","babel-loader":"^8.1.0","babel-preset-minify":"^0.5.1","react-intl":"^5.10.0"},"peerDependencies":{"@transferwise/components":"^36.4.1","@transferwise/icons":"^2.6.0","@transferwise/neptune-css":"^9.2.0","prop-types":"^15.7.2","react":"^16","react-dom":"^16","react-intl":"^5.10.0"},"dependencies":{"@babel/plugin-proposal-optional-chaining":"^7.14.2","@babel/runtime":"^7.12.5","classnames":"^2.2.6","core-js":"^3.8.0","lodash.isequal":"^4.5.0"}}')},zEEr:function(e){e.exports=JSON.parse('{"name":"@transferwise/components","version":"36.5.3","description":"Neptune React components","license":"Apache-2.0","main":"./build/umd/polyfill/main.js","module":"./build/es/polyfill/index.js","types":"./build/types/index.d.ts","style":"./build/main.css","sideEffects":["*.css"],"files":["build","bin","upgrades"],"repository":{"type":"git","fullname":"transferwise/neptune","url":"git+https://github.com/transferwise/neptune-web.git"},"scripts":{"dev":"npm-run-all --parallel dev:*","dev:watch-less":"gulp watchLess --dest=src","dev:storybook":"start-storybook -p 3001","dev:translations":"npx npm-watch","build":"npm-run-all build:*","build:clean":"rm -rf lib build","build:crowdin-source-file":"formatjs extract \'src/**/*.messages.js\' --out-file src/i18n/en.json --format src/i18n/formatter.js && prettier --find-config-path --write src/i18n/*.json","build:compile-css":"gulp compileLess --dest=src","build:umd":"NODE_ENV=umd rollup -c","build:umd-nopolyfill":"NODE_ENV=umd-nopolyfill rollup -c","build:es":"NODE_ENV=es babel src --extensions \'.tsx,.js,.ts\' -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/__mocks__\',\'**/test-utils\'","build:es-nopolyfill":"NODE_ENV=es-nopolyfill babel src --extensions \'.tsx,.js,.ts\' -d build/es/no-polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\',\'**/__mocks__\',\'**/test-utils\'","build:generate-types":"tsc && node ./scripts/generate-type-declarations.js","build:copy-files":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/polyfill & cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/no-polyfill","build:copy-lang":"cpx \'src/i18n/*.json\' build/i18n && cpx \'src/i18n/index.js\' build/i18n","docs":"yarn build","test":"jest --env=jsdom --maxWorkers=4 --config=../../node_modules/@transferwise/test-config/jest.config.js","test:watch":"jest --watch --env=jsdom --config=../../node_modules/@transferwise/test-config/jest.config.js","lint":"jest --maxWorkers=4 --config ../../node_modules/@transferwise/test-config/test/jest.lint.js && yarn lintless","test:visual":"build-storybook && percy-storybook --widths=1280","lint:fix":"eslint \'src/**/*.js\' --fix","lintless":"stylelint --allow-empty-input \'./src/**/*.less\'","lintless:fix":"yarn lintless --fix"},"bin":{"neptune-upgrade-util":"bin/neptune-upgrader.js"},"devDependencies":{"@babel/cli":"^7.12.8","@babel/core":"7.12.9","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/plugin-proposal-optional-chaining":"^7.12.1","@babel/plugin-transform-react-jsx":"^7.12.7","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.7","@babel/preset-typescript":"^7.12.7","@formatjs/cli":"^2.13.13","@percy/storybook":"^3.3.1","@pxblue/storybook-rtl-addon":"^1.0.0","@rollup/plugin-babel":"^5.2.2","@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.3","@rollup/plugin-node-resolve":"^7.1.3","@storybook/addon-a11y":"^6.2.9","@storybook/addon-actions":"^6.2.9","@storybook/addon-docs":"^6.2.9","@storybook/addon-knobs":"^6.2.9","@storybook/addon-viewport":"^6.2.9","@storybook/react":"^6.2.9","@transferwise/icons":"^2.6.0","@transferwise/less-config":"^3.0.2","@transferwise/neptune-css":"^9.2.1","@transferwise/neptune-tokens":"^1.0.0","@transferwise/test-config":"^3.0.7","@types/jest":"^26.0.20","@types/jscodeshift":"^0.11.0","@types/node":"^14.14.31","@types/react":"^17.0.2","@types/react-dom":"^17.0.1","babel-loader":"^8.1.0","babel-plugin-react-intl":"^8.2.16","babel-preset-minify":"^0.5.1","html-loader":"^1.3.2","lodash.times":"^4.3.2","npm-watch":"^0.9.0","react-intl":"^5.10.0","react-to-typescript-definitions":"~3.0.1","rollup":"^2.34.0","rollup-plugin-postcss":"^2.8.2","rollup-plugin-uglify":"^6.0.4","typescript":"^4.2.3"},"peerDependencies":{"@transferwise/icons":"^2.6.0","@transferwise/neptune-css":"^9.2.0","currency-flags":"^2.1.1","prop-types":"^15.7.2","react":"^16","react-dom":"^16","react-intl":"^5.10.0"},"dependencies":{"@babel/runtime":"^7.12.5","@formatjs/intl-locale":"^2.4.14","@popperjs/core":"^2.6.0","@transferwise/formatting":"^2.1.0","@transferwise/neptune-validation":"^2.1.2","classnames":"^2.2.6","commonmark":"0.29.1","core-js":"^3.8.0","inquirer":"^7.3.3","inquirer-file-tree-selection-prompt":"^1.0.7","jscodeshift":"^0.11.0","lodash.clamp":"^4.0.3","lodash.debounce":"^4.0.8","lodash.difference":"^4.5.0","lodash.throttle":"^4.1.1","lodash.topairs":"^4.3.0","react-popper":"^2.2.4","react-required-if":"^1.0.3","react-spring":"^8.0.27","react-transition-group":"^4.2.1"},"watch":{"build:crowdin-source-file":"src/**/*.messages.js"},"resolutions":{"@storybook/**/kind-of":"^6.0.3"}}')}},[["/uL9",0,1,2,3]]]);