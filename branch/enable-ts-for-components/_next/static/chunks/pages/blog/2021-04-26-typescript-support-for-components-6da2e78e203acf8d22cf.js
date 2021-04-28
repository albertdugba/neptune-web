_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{Km8e:function(e,o,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},YTUo:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-04-26-typescript-support-for-components",function(){return t("e/QV")}])},"e/QV":function(e,o,t){"use strict";t.r(o),t.d(o,"meta",(function(){return s})),t.d(o,"default",(function(){return r}));var n=t("ERkP"),l=t.n(n).a.createElement,s={name:"TypeScript Support for Components",date:"2021-04-26",authors:[{name:"Anton Dozortsev",githubUsername:"dozortsev"}]};function r(){return l("div",null,l("br",null),"First release with TypeScript setup for ",l("code",null,"@transferwise/components")," package.",l("br",null),l("br",null),l("h2",null,"Features"),l("p",null),l("b",null,"Types"),l("p",null,"The package now provides it is own types for almost all components (see a couple exceptions at the bottom). Even though all components written on JavaScript we have found a way to provide pretty accurate (~90%) types already now, by using ",l("a",{href:"https://www.npmjs.com/package/react-to-typescript-definitions"},"react-to-typescript-definitions"),", the tool generates ",l("a",{href:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html"},"type declarations")," based of ",l("a",{href:"https://reactjs.org/docs/typechecking-with-proptypes.html"},"PropTypes"),"."),l("b",null,"JSDoc"),l("p",null,"Types support enables ",l("a",{href:"https://jsdoc.app/"},"JSDoc")," support.",l("br",null),"You would be able see documentation by hovering over component or its props."),l("b",null,"TypeScript Support"),l("p",null,"We enable ability write code on TypeScript in",l("code",null,"@transferwise/components")," package.",l("br",null),"TS code will be transpiled by Babel (via ",l("a",{href:"https://babeljs.io/docs/en/babel-preset-typescript"},"@babel/preset-typescript"),"), type declarations for TS files will be generated by ",l("code",null,"tsc")," and ",l("code",null,"react-to-typescript-definitions")," for JS files. So next time you contribute please consider to rewrite component(s) to TypeScript otherwise please follow these"," ",l("a",{href:"https://github.com/transferwise/neptune-web/blob/main/packages/components/CONTRIBUTING.md#js-component-rules"},"rules for JS components and their props-types")," ","to help ",l("code",null,"react-to-typescript-definitions")," generate accurate types."),l("h2",{id:"breaking-changes"},"Breaking Changes"),l("p",null),l("b",null,"Detached Enums"),l("p",null,"Removed support for constructions like you see below, instead we provide those enums separately from the package.",l("br",null),l("br",null),l("b",null,"Note:")," this is very big breaking change what affect loads of packages, we provide codemod script to automatic the conversion (see migration checklist).",l("br",null),l("br",null),"Before",l("pre",null,"import { Alert, Popover, Button } from '@transferwise/components';",l("br",null),l("br",null),"<Alert size={Alert.Size.SMALL} />",l("br",null),"<Popover preferredPlacement={Popover.Placement.TOP} />",l("br",null),"<Button type={Button.Type.POSITIVE} />",l("br",null)),"After",l("pre",null,"import { Alert, Popover, Button, Size, Position, Sentiment } from '@transferwise/components';",l("br",null),l("br",null),"<Alert size={Size.SMALL} />",l("br",null),"<Popover preferredPlacement={Position.TOP} />",l("br",null),"<Button type={Sentiment.POSITIVE} />",l("br",null)),"You still can pass raw value into props:",l("pre",null,'<Alert size="sm" />',l("br",null),'<Popover preferredPlacement="top" />',l("br",null),'<Logo type="positive" />',l("br",null)),l("b",{id:"reasons-for-enums"}," But we encourage you use enums exposed from the package, a couple reasons why:"),l("ul",null,l("li",null,"those enums are not only for ",l("code",null,"@transferwise/components")," you can and should use them for your own custom components without the need of create almost exactly the same enums/types in your codebase"),l("li",null,"this way we will have better consistency in code, as some people call them",l("code",null,"small")," | ",l("code",null,"medium")," instead ",l("code",null,"sm")," | ",l("code",null,"md")," in their apps, or ",l("code",null,"top_left")," | ",l("code",null,"top_right")," vs ",l("code",null,"left-up")," | ",l("code",null,"right-up"),", some of enums more valuable for consistency e.g ",l("code",null,"Breakpoint")," - thresholds for switching between mobile view and desktop,",l("code",null,"Sentiment")," (",l("code",null,"NEGATIVE")," - red, ",l("code",null,"NEUTRAL")," - blue, ",l("code",null,"POSITIVE")," - green) consistency of naming"),l("li",null,"TS enables JSDoc, so we can add documentation to them for a better/guided usage"))),l("h2",{id:"migration-checklist"},"Migration Checklist"),l("ul",null,l("li",null,"Make sure all your dependencies migrated to this version or higher version of the package."),l("li",null,"Delete custom types declaration for ",l("code",null,"@transferwise/components")," from"," ",l("code",null,"global.d.ts")," / ",l("code",null,"declarations.d.ts")," and alike files as now package provides types."),l("li",null,"Adjust usage of enums, you can do that manualy or you can run codemod:",l("pre",null,"$ yarn run neptune-upgrade-util",l("br",null),"? \u2728 Which upgrade would you like to run?",l("br",null),"...",l("br",null),"\u25b6 2021-04-v35-36-typescript-support.js",l("br",null))),l("li",null,"If you have ESLint enabled for TypeScript files make sure to search for ",l("code",null,"eslint-disable-*"),"comments with following rules in your code and delete them as now its should not an issue anymore.",l("ul",null,l("li",null,l("a",{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md"},l("code",null,"@typescript-eslint/no-unsafe-assignment"))),l("li",null,l("a",{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md"},l("code",null,"@typescript-eslint/no-unsafe-member-access")))))),"Mostly only applicable for TypeScript projects:",l("ul",null,l("li",null,"Translations and utils are now can be exported from the package.",l("br",null),"Before",l("pre",null,"import componentTranslations from '@transferwise/components/build/i18n';",l("br",null),"import { getLangFromLocale } from '@transferwise/components/build/es/polyfill/common/locale';"),"After",l("pre",null,"import { translations, getLangFromLocale } from '@transferwise/components';"),"You can still use old way but TypeScript complier would complain about that."),l("li",null,"Most likely you would find instances of TypeScript compaining about wrong type passing into props of some of component, please consider to adjust types in such cases, you actually might find some edge case bugs. Otherwise ignore some of them via ",l("code",null,"// @ts-expect-error"),"."),l("li",null,"You probably would find some redundant props that have been deleted in previous releases of some of components that you still use (very often case would be a ",l("code",null,"locale")," prop), delete them as they dead code by now.")),l("h2",null,"Misc"),l("p",null,"Components that are missing support of types are:",l("code",null,"Upload"),", ",l("code",null,"MoneyInput"),", ",l("code",null,"Dimmer")," and ",l("code",null,"Snackbar"),". This is because they wrapped into HoC right at ",l("code",null,"export"),"statement which react-to-typescript-definitions does not resolve and kinda skips generating types for them. But I guess we would improve/fix that any time soon in next releases."))}}},[["YTUo",0,1]]]);