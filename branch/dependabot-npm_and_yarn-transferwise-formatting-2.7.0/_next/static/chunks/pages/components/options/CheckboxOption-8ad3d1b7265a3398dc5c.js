_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"0C8B":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return y})),n.d(t,"default",(function(){return v}));var r=n("cxan"),o=n("HbGN"),c=n("ERkP"),a=n.n(c),i=n("ZVZ0"),l=n("Qi1R"),u=n("/Vl7"),s=(n("ho0z"),n("97Jx")),f=n.n(s),p=n("Lw4+"),d=n("bby/"),m=function(e){var t=e.media,n=e.title,r=e.content,o=e.name,c=e.checked,i=e.onChange,l=e.complex,u=e.disabled;return a.a.createElement(p.a,f()({},{media:t,title:n,content:r,name:o,complex:l,disabled:u},{button:a.a.createElement(d.a,{checked:c,disabled:u,onChange:function(){return i(!c)}})}))};m.defaultProps={checked:!1,complex:!1,content:null,disabled:!1,id:void 0,media:null};var b=m,y=(a.a.createElement,{name:"CheckboxOption"}),h={meta:y};function v(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:'() => {\n  const [checked, setChecked] = React.useState(false);\n  return (\n    <CheckboxOption\n      id="checkbox-option"\n      checked={checked}\n      name="checkbox-option"\n      title="Checkbox option"\n      content="Normally, the button and icon are vertically centered."\n      onChange={() => setChecked(!checked)}\n      media={<FastFlagIcon size={24} />}\n    />\n  );\n};\n',scope:{CheckboxOption:b,FastFlagIcon:u.o},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"CheckboxOption",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},"1Mu/":function(e,t,n){var r=n("ct80");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"7bnI":function(e,t,n){},"8r/q":function(e,t,n){var r=n("9JhN"),o=n("dSaG"),c=r.document,a=o(c)&&o(c.createElement);e.exports=function(e){return a?c.createElement(e):{}}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"9JhN":function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("lpmq"))},CD8Q:function(e,t,n){var r=n("dSaG");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},FXyv:function(e,t,n){var r=n("dSaG");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,c=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"Lw4+":function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),c=n("O94r"),a=n.n(c),i=(n("j+zR"),n("X+z2"),function(e){var t=e.as,n=e.href,r=e.media,c=e.title,i=e.content,l=e.onClick,u=e.htmlFor,s=e.disabled,f=e.button,p=e.decision,d=e.complex,m=e.className,b=e.inverseMediaCircle,y=e.showMediaAtAllSizes,h=e.showMediaCircle;return o.a.createElement(t,{className:a()(m,"media",{"decision-complex":d,decision:p,disabled:s,"tw-option__sm-media":y}),href:n,onClick:l,htmlFor:u,disabled:s&&"button"===t},r&&o.a.createElement("div",{className:"media-left"},h?o.a.createElement("div",{className:a()("circle circle-sm text-primary",{"circle-inverse":b})},r):o.a.createElement("div",{className:"tw-option__no-media-circle"},r)),o.a.createElement("div",{className:"media-body"},o.a.createElement("div",{className:"h5"},c),i&&o.a.createElement("div",{className:"decision__content"},i)),o.a.createElement("div",{className:"media-right"},f))});i.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},t.a=i},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"X+z2":function(e,t,n){},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},"bby/":function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),c=n("m3Bd"),a=n.n(c),i=n("ERkP"),l=n.n(i),u=n("O94r"),s=n.n(u),f=(n("7bnI"),function(e){var t=e.checked,n=e.className,r=e.disabled,c=e.onChange,i=a()(e,["checked","className","disabled","onChange"]);return l.a.createElement("span",{className:s()("np-checkbox-button",n)},l.a.createElement("input",o()({},i,{type:"checkbox",disabled:r,checked:t,onChange:c})),l.a.createElement("span",{className:"tw-checkbox-button"},l.a.createElement("span",{className:"tw-checkbox-check"})))});f.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},t.a=f},ckbz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/options/CheckboxOption",function(){return n("0C8B")}])},ct80:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},dSaG:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},fD9S:function(e,t,n){var r=n("1Mu/"),o=n("ct80"),c=n("8r/q");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},ho0z:function(e,t,n){var r=n("1Mu/"),o=n("q9+l").f,c=Function.prototype,a=c.toString,i=/^\s*function ([^ (]*)/;r&&!("name"in c)&&o(c,"name",{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(e){return""}}})},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var c=t(n)?e.isRequired:e;return c.apply(this,arguments)}}},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,o,c=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},"q9+l":function(e,t,n){var r=n("1Mu/"),o=n("fD9S"),c=n("FXyv"),a=n("CD8Q"),i=Object.defineProperty;t.f=r?i:function(e,t,n){if(c(e),t=a(t,!0),c(n),o)try{return i(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}}},[["ckbz",0,1,2,6,3,4]]]);