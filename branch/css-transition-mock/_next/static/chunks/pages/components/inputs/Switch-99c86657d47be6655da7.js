_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[96],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},"6gor":function(e,n,t){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,c=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),f=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=f(t),d=r,b=p["".concat(o,".").concat(d)]||p[d]||s[d]||c;return t?a.a.createElement(b,i(i({ref:n},u),{},{components:t})):a.a.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},cGSD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Switch",function(){return t("cjIA")}])},cjIA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return h})),t.d(n,"default",(function(){return m}));var r=t("cxan"),a=t("HbGN"),c=t("ERkP"),o=t.n(c),i=t("ZVZ0"),l=t("Qi1R"),u=t("O94r"),f=t.n(u),s=t("/Vl7"),p=(t("5s8o"),t("s+Iv")),d=t("6gor"),b=function(e){var n=e.checked,t=e.className,r=e.id,a=e.onClick,c=e["aria-label"],i=c?null:e["aria-labelledby"];return Object(p.b)("Switch now expects either `aria-label` or `aria-labelledby`, and will soon make these props required. Please update your usage to provide one or the other.",!c&&!i),o.a.createElement("span",{className:f()("np-switch",{"np-switch--unchecked":!n,"np-switch--checked":n},t),onClick:a,onKeyDown:function(e){(32===e.code||e.keyCode===d.a.SPACE)&&(e.preventDefault(),a())},tabIndex:0,role:"switch","aria-checked":n,"aria-label":c,"aria-labelledby":i,id:r},o.a.createElement("span",{className:"np-switch--thumb"},n?o.a.createElement(s.g,{filled:!0,size:24}):o.a.createElement(s.l,{filled:!0,size:24})),o.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};b.defaultProps={"aria-label":null,"aria-labelledby":null,checked:!1,className:null,id:null};var y=b,h=(o.a.createElement,{name:"Switch"}),O={meta:h};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:'() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return (\n    <>\n      <label id="labelID" htmlFor="switchId">\n        A switch with a label\n      </label>\n      <Switch\n        checked={checked}\n        className="a-class-name"\n        onClick={() => setCheck(!checked)}\n        aria-labelledby="labelID"\n        id="switchId"\n      />\n    </>\n  );\n};\n',scope:{Switch:y},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}m.isMDXComponent=!0},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},f4p7:function(e,n,t){"use strict";var r=t("ct80");e.exports=function(e,n){var t=[][e];return!!t&&r((function(){t.call(null,n||function(){throw 1},1)}))}},"s+Iv":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));t("vrRf");function r(n){var t,r;0<=["development","test"].indexOf(null===(t=e)||void 0===t||null===(r=t.env)||void 0===r?void 0:"production")&&console.warn(n)}function a(e,n){n&&r(e)}}).call(this,t("F63i"))},vrRf:function(e,n,t){"use strict";var r=t("ax0f"),a=t("H17f").indexOf,c=t("f4p7"),o=t("znGZ"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,u=c("indexOf"),f=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!u||!f},{indexOf:function(e){return l?i.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(e,n,t){var r=t("1Mu/"),a=t("ct80"),c=t("8aeu"),o=Object.defineProperty,i={},l=function(e){throw e};e.exports=function(e,n){if(c(i,e))return i[e];n||(n={});var t=[][e],u=!!c(n,"ACCESSORS")&&n.ACCESSORS,f=c(n,0)?n[0]:l,s=c(n,1)?n[1]:void 0;return i[e]=!!t&&!a((function(){if(u&&!r)return!0;var e={length:-1};u?o(e,1,{enumerable:!0,get:l}):e[1]=1,t.call(e,f,s)}))}}},[["cGSD",0,1,2,6,3,5,4]]]);