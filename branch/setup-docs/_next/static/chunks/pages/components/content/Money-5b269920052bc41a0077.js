_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{LnrJ:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Money",function(){return e("yeO4")}])},b0Hy:function(n,t,e){"use strict";e.d(t,"a",(function(){return f})),e.d(t,"b",(function(){return b})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return c}));var r,o={TYPE:"SignificantDigits",MIN_PRECISION:1,MAX_PRECISION:21},u={TYPE:"FractionDigits",MIN_PRECISION:0,MAX_PRECISION:20},a={};function i(n,t){var e=t?""+n+Object.entries(t):n;return a[e]||(a[e]=t?new Intl.NumberFormat(n,t):new Intl.NumberFormat(n)),a[e]}function c(n,t,e,a){if(void 0===t&&(t="en-GB"),void 0===a&&(a="FractionDigits"),!n&&0!==n)return"";"string"==typeof n&&Number(n)&&(n=Number(n));var c=a===o.TYPE?o:u,m=null!=e&&"number"==typeof e&&e>=c.MIN_PRECISION&&e<=c.MAX_PRECISION,f=function(n){try{var t=n.replace(/_/,"-");return Intl.NumberFormat(t),t}catch(n){return"en-GB"}}(t);return function(n){return void 0===r&&(r="object"==typeof Intl&&void 0!==Intl&&"function"==typeof Intl.NumberFormat&&Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.supportedLocalesOf&&Intl.NumberFormat.supportedLocalesOf&&1===Intl.NumberFormat.supportedLocalesOf(n).length),r}(f)?(m?i(f,function(n,t){var e;return(e={})["minimum"+t]=n,e["maximum"+t]=n,e}(e,a)):i(f)).format(n):m?function(n,t,e){return e===o.TYPE?n.toPrecision(t):n.toFixed(t)}(n,e,a):""+n}var m={BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,UGX:0,KES:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3};function f(n,t,e,r){void 0===e&&(e="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1});var o=function(n,t,e){return function(n){return n%1==0}(n)&&!e?0:function(n){void 0===n&&(n="");var t=n.toUpperCase();return Object.prototype.hasOwnProperty.call(m,t)?m[t]:2}(t)}(n,t,r.alwaysShowDecimals),u=n<0,a=c(Math.abs(n),e,o);return u?"- "+a:a}function s(n,t,e,r){return void 0===e&&(e="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1}),f(n,t,e,r)+" "+(t||"").toUpperCase()}var p;var d={},l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v={};function b(n,t,e){return void 0===t&&(t="en-GB"),void 0===p&&(p=function(){try{var n=new Date(2018,11,1);return"01/12/2018"===new Intl.DateTimeFormat("en-GB").format(n)}catch(n){return!1}}()),p?function(n,t){return v[n]||(v[n]=new Map),v[n].has(t)||v[n].set(t,new Intl.DateTimeFormat(n,t)),v[n].get(t)}(function(n){return function(n){return void 0===d[n]&&(d[n]=function(n){try{return Intl.DateTimeFormat.supportedLocalesOf([n]).length>0}catch(n){return!1}}(n)),d[n]}(n)?n:"en-GB"}(t),e).format(n):function n(t,e){void 0===e&&(e={});var r="UTC"===e.timeZone,o=[];if(e.day&&o.push(r?t.getUTCDate():t.getDate()),e.month){var u=function(n,t,e){return"short"===n.month?y[t?e.getUTCMonth():e.getMonth()]:(t?e.getUTCMonth():e.getMonth())+1}(e,r,t);!function(n){return"short"===n.month}(e)?o.push(u):o.unshift(u)}e.year&&o.push(t.getUTCFullYear());var a=function(n){return"short"===n.month?" ":"/"}(e),i=o.join(a);if(e.weekday){var c=l[r?t.getUTCDay():t.getDay()];i=i?c+", "+i:c}return i||n(t,{timeZone:e.timeZone,day:"true",month:"true",year:"true"})}(n,e)}var N;!function(n){n.SECOND="second",n.MINUTE="minute",n.HOUR="hour"}(N||(N={}))},kQwz:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("ERkP"),o=e("ymT0"),u=e("yGPN");function a(){var n=r.useContext(o.a);return Object(u.c)(n),n}},sdb8:function(n,t,e){"use strict";var r=e("ERkP"),o=e.n(r),u=e("kQwz"),a=e("b0Hy");t.a=function(n){var t=n.amount,e=n.currency,r=Object(u.a)().locale;return o.a.createElement(o.a.Fragment,null,Object(a.c)(t,e,r))}},yeO4:function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return f})),e.d(t,"default",(function(){return p}));var r=e("cxan"),o=e("HbGN"),u=e("ERkP"),a=e.n(u),i=e("ZVZ0"),c=e("Qi1R"),m=e("sdb8"),f=(a.a.createElement,{name:"Money"}),s={meta:f};function p(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(i.a)("wrapper",Object(r.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(i.a)(c.b,{code:'<Money amount={1234.5678} currency="GBP" />;\n',scope:{Money:m.a},mdxType:"LiveEditorBlock"}),Object(i.a)(c.a,{componentName:"Money",mdxType:"GeneratePropsTable"}))}p.isMDXComponent=!0}},[["LnrJ",0,1,2,3,9]]]);