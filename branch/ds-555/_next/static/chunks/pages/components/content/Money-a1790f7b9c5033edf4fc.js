_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[76],{"+wNj":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("+wNj");function o(t,e){if(null==t)return{};var n,o,a=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)n=u[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},LnrJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Money",function(){return n("yeO4")}])},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("ERkP"),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=o.a.createContext({}),p=function(t){var e=o.a.useContext(f),n=e;return t&&(n="function"===typeof t?t(e):c(c({},e),t)),n},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},s=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,f=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,y=s["".concat(u,".").concat(m)]||s[m]||l[m]||a;return n?o.a.createElement(y,c(c({ref:e},f),{},{components:n})):o.a.createElement(y,c({ref:e},f))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var a=n.length,u=new Array(a);u[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"===typeof t?t:r,u[1]=c;for(var f=2;f<a;f++)u[f]=n[f];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},b0Hy:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return i}));var r,o={TYPE:"SignificantDigits",MIN_PRECISION:1,MAX_PRECISION:21},a={TYPE:"FractionDigits",MIN_PRECISION:0,MAX_PRECISION:20},u={};function c(t,e){var n=e?""+t+Object.entries(e):t;return u[n]||(u[n]=e?new Intl.NumberFormat(t,e):new Intl.NumberFormat(t)),u[n]}function i(t,e,n,u){if(void 0===e&&(e="en-GB"),void 0===u&&(u="FractionDigits"),!t&&0!==t)return"";"string"==typeof t&&Number(t)&&(t=Number(t));var i=u===o.TYPE?o:a,f=null!=n&&"number"==typeof n&&n>=i.MIN_PRECISION&&n<=i.MAX_PRECISION,p=function(t){try{var e=t.replace(/_/,"-");return Intl.NumberFormat(e),e}catch(t){return"en-GB"}}(e);return function(t){return void 0===r&&(r="object"==typeof Intl&&void 0!==Intl&&"function"==typeof Intl.NumberFormat&&Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.supportedLocalesOf&&Intl.NumberFormat.supportedLocalesOf&&1===Intl.NumberFormat.supportedLocalesOf(t).length),r}(p)?(f?c(p,function(t,e){var n;return(n={})["minimum"+e]=t,n["maximum"+e]=t,n}(n,u)):c(p)).format(t):f?function(t,e,n){return n===o.TYPE?t.toPrecision(e):t.toFixed(e)}(t,n,u):""+t}var f={BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,UGX:0,KES:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3};function p(t,e,n,r){void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1});var o=function(t,e,n){return function(t){return t%1==0}(t)&&!n?0:function(t){void 0===t&&(t="");var e=t.toUpperCase();return Object.prototype.hasOwnProperty.call(f,e)?f[e]:2}(e)}(t,e,r.alwaysShowDecimals),a=t<0,u=i(Math.abs(t),n,o);return a?"- "+u:u}function l(t,e,n,r){return void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1}),p(t,e,n,r)+" "+(e||"").toUpperCase()}var s;var m={},y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],O={};function d(t,e,n){return void 0===e&&(e="en-GB"),void 0===s&&(s=function(){try{var t=new Date(2018,11,1);return"01/12/2018"===new Intl.DateTimeFormat("en-GB").format(t)}catch(t){return!1}}()),s?function(t,e){return O[t]||(O[t]=new Map),O[t].has(e)||O[t].set(e,new Intl.DateTimeFormat(t,e)),O[t].get(e)}(function(t){return function(t){return void 0===m[t]&&(m[t]=function(t){try{return Intl.DateTimeFormat.supportedLocalesOf([t]).length>0}catch(t){return!1}}(t)),m[t]}(t)?t:"en-GB"}(e),n).format(t):function t(e,n){void 0===n&&(n={});var r="UTC"===n.timeZone,o=[];if(n.day&&o.push(r?e.getUTCDate():e.getDate()),n.month){var a=function(t,e,n){return"short"===t.month?b[e?n.getUTCMonth():n.getMonth()]:(e?n.getUTCMonth():n.getMonth())+1}(n,r,e);!function(t){return"short"===t.month}(n)?o.push(a):o.unshift(a)}n.year&&o.push(e.getUTCFullYear());var u=function(t){return"short"===t.month?" ":"/"}(n),c=o.join(u);if(n.weekday){var i=y[r?e.getUTCDay():e.getDay()];c=c?i+", "+c:i}return c||t(e,{timeZone:n.timeZone,day:"true",month:"true",year:"true"})}(t,n)}var v;!function(t){t.SECOND="second",t.MINUTE="minute",t.HOUR="hour"}(v||(v={}))},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},sdb8:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("kQwz"),u=n("b0Hy");e.a=function(t){var e=t.amount,n=t.currency,r=Object(a.a)().locale;return o.a.createElement(o.a.Fragment,null,Object(u.c)(e,n,r))}},yeO4:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return s}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),u=n.n(a),c=n("ZVZ0"),i=n("Qi1R"),f=n("sdb8"),p=(u.a.createElement,{name:"Money"}),l={meta:p};function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(i.b,{code:'<Money amount={1234.5678} currency="GBP" />;\n',scope:{Money:f.a},mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"Money",mdxType:"GeneratePropsTable"}))}s.isMDXComponent=!0}},[["LnrJ",0,1,2,3,8]]]);