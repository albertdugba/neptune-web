_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"+KXO":function(e,t,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(e){return a(o(e))}})},"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),i=n("tJVe"),c=n("aoZ+"),u=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,s=4==e,f=6==e,p=7==e,d=5==e||f;return function(m,y,v,b){for(var x,h,O=a(m),E=o(O),g=r(y,v,3),w=i(E.length),_=0,N=b||c,j=t?N(m,w):n||p?N(m,0):void 0;w>_;_++)if((d||_ in E)&&(h=g(x=E[_],_,O),e))if(t)j[_]=h;else if(h)switch(e){case 3:return!0;case 5:return x;case 6:return _;case 2:u.call(j,x)}else switch(e){case 4:return!1;case 7:u.call(j,x)}return f?-1:l||s?s:j}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"6U7i":function(e,t,n){"use strict";var r=n("1Mu/"),o=n("9JhN"),a=n("66wQ"),i=n("uLp7"),c=n("8aeu"),u=n("amH4"),l=n("j6nH"),s=n("CD8Q"),f=n("ct80"),p=n("guiJ"),d=n("ZdBB").f,m=n("GFpt").f,y=n("q9+l").f,v=n("Ya2h").trim,b=o.Number,x=b.prototype,h="Number"==u(p(x)),O=function(e){var t,n,r,o,a,i,c,u,l=s(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=v(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(i=(a=l.slice(2)).length,c=0;c<i;c++)if((u=a.charCodeAt(c))<48||u>o)return NaN;return parseInt(a,r)}return+l};if(a("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(h?f((function(){x.valueOf.call(n)})):"Number"!=u(n))?l(new b(O(t)),n,g):O(t)},w=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;w.length>_;_++)c(b,E=w[_])&&!c(g,E)&&y(g,E,m(b,E));g.prototype=x,x.constructor=g,i(o,"Number",g)}},"8+RD":function(e,t,n){var r=n("dSaG");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));n("tVqn"),n("KqXw"),n("MvUL"),n("jQ3i");var r="en-GB",o=["he-IL"],a=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function i(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function c(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return a.includes(n)?n:null}catch(e){return console.error(e),null}}var u=function(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},GJtw:function(e,t,n){var r=n("ct80"),o=n("fVMg"),a=n("T+0C"),i=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Hi8P:function(e,t,n){"use strict";var r,o=n("KEM+"),a=n.n(o),i=(n("J/fC"),n("ERkP")),c=n.n(i),u=n("O94r"),l=n.n(u),s=n("/Vl7"),f=n("VehP"),p=n("eKd8"),d=(r={},a()(r,f.a.EXTRA_SMALL,10),a()(r,f.a.SMALL,16),a()(r,f.a.MEDIUM,24),r),m=function(e){var t=e.className;return c.a.createElement("span",{className:l()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};m.defaultProps={className:null};var y=function(e){var t=e.orientation,n=e.size,r=e.disabled,o=e.className,a=l()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),o),i=d[n];return n===f.a.EXTRA_SMALL?c.a.createElement(m,{className:a}):c.a.createElement(s.k,{className:a,size:i})};y.defaultProps={orientation:p.a.BOTTOM,size:f.a.SMALL,disabled:!1,className:null},t.a=y},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"J/fC":function(e,t,n){},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},RhWx:function(e,t,n){var r=n("tGbD"),o=n("twbh"),a=n("peMk"),i=n("d8WC");e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},Ua7V:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},VehP:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl"},VrRy:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return I}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),u=n("Qi1R"),l=n("97Jx"),s=n.n(l),f=n("RhWx"),p=n.n(f),d=n("ddV6"),m=n.n(d),y=(n("z84I"),n("O94r")),v=n.n(y),b=n("v1+v"),x=n("Hi8P"),h=n("eKd8"),O=n("uIuh"),E=function(e){var t=e.id,n=e.title,r=e.content,o=e.onClick,c=e.open,u=e.icon,l=u?Object(a.cloneElement)(u,{size:24}):null,s=Object(O.a)().isRTL;return i.a.createElement("div",{id:t,className:v()("tw-accordion-item decision p-a-0",{closed:!c})},i.a.createElement("button",{type:"button","aria-expanded":c,onClick:o,className:v()("tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3",{"p-b-3":!c,"p-b-2":c})},i.a.createElement("div",{className:"media"},u&&i.a.createElement("div",{className:v()("hidden-xs hidden-sm",{"media-left":!s,"media-right":s,"p-r-2":!s,"p-l-2":s})},l),i.a.createElement("div",{className:v()("media-body title",{"text-xs-left":!s,"text-xs-right":s})},Object(b.i)(n)?i.a.createElement("span",{className:"h5"},n):n),i.a.createElement("div",{className:v()("d-flex align-items-center",{"media-right":!s,"media-left":s})},i.a.createElement(x.a,{orientation:c?h.a.TOP:h.a.BOTTOM})))),i.a.createElement("div",{className:"accordion-content media"},i.a.createElement("div",{className:v()("media-body p-b-3",{"m-l-5":u||s,"m-r-5":u}),"aria-hidden":!c},r)))};E.defaultProps={icon:null,id:null};var g=E,w=(n("cnZ1"),function(e){var t=e.items,n=e.onClick,r=e.indexOpen,o=Object(a.useState)((function(){return t.map((function(e,t){return t===r}))})),c=m()(o,2),u=c[0],l=c[1];return t.map((function(e,t){return i.a.createElement(g,s()({key:e.id||t,onClick:function(){return function(e){n&&n(e);var t=p()(u);t[e]=!u[e],l(t)}(t)},open:u[t]},e))}))});w.defaultProps={indexOpen:-1,onClick:null};var _=w,N=n("/Vl7"),j=["components"],T=(i.a.createElement,{name:"Accordion"}),A={meta:T};function I(e){var t=e.components,n=Object(o.a)(e,j);return Object(c.a)("wrapper",Object(r.a)({},A,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n      icon: <Freeze size={24} />,\n    },\n    {\n      title: 'Item 2 with icon',\n      content: <span>I can be a node</span>,\n      icon: <Emoji size={24} />,\n    },\n    {\n      title: 'Item 3',\n      content: 'I can be text',\n      icon: <New size={24} />,\n    },\n  ]}\n/>;\n",scope:{Accordion:_,New:N.v,Emoji:N.o,Freeze:N.q},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}I.isMDXComponent=!0},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("ERkP"),o=n.n(r),a=n("AXuR"),i=o.a.createContext("ltr"),c=function(e){var t=e.locale,n=e.children;return o.a.createElement(i.Provider,{value:-1<a.b.indexOf(t)?"rtl":"ltr"},n)};c.defaultProps={children:null,locale:a.a}},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},d8WC:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},eKd8:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},j6nH:function(e,t,n){var r=n("dSaG"),o=n("waID");e.exports=function(e,t,n){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(e,i),e}},mVF9:function(e,t,n){var r=n("ct80"),o=n("+/eK");e.exports=function(e){return r((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},ssvU:function(e,t,n){n("ax0f")({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},t1Iz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Accordion",function(){return n("VrRy")}])},tGbD:function(e,t,n){var r=n("iQ7j");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},tVqn:function(e,t,n){"use strict";var r=n("ax0f"),o=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return o(this)}})},twbh:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP"),o=n("X+oG"),a=function(){var e=Object(r.useContext)(o.a);return{direction:e,isRTL:"rtl"===e}}},"v1+v":function(e,t,n){"use strict";n.d(t,"i",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return d}));n("ssvU"),n("6U7i");var r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e&&!Number.isNaN(e)},a=function(e){return o(e)&&Math.floor(e)===e},i=function(e){return"boolean"==typeof e},c=function(e){return!l(e)&&!s(e)&&e.constructor===Object},u=function(e){return Array.isArray(e)},l=function(e){return null===e},s=function(e){return"undefined"==typeof e},f=(n("+KXO"),function(e){return r(e)&&0===e.length||(c(e)||u(e))&&0===Object.keys(e).length}),p={SPACE:{key:[" ","Spacebar"],keyCode:32},ENTER:{key:"Enter",keyCode:13},TAB:{key:"Tab",keyCode:9},ESCAPE:{key:"Escape",keyCode:27}},d=function(e){var t=e.keyType,n=e.event;if(!t||!n)return!1;var r=t.toUpperCase(),o=p[r];if(!o)return!1;var a=n.key,i=n.keyCode;return a?u(o.key)?-1<o.key.indexOf(a):a===o.key:i===o.keyCode}},waID:function(e,t,n){var r=n("FXyv"),o=n("8+RD");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(a){}return function(n,a){return r(n),o(a),t?e.call(n,a):n.__proto__=a,n}}():void 0)},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},z84I:function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").map;r({target:"Array",proto:!0,forced:!n("GJtw")("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["t1Iz",0,1,2,6,3,5,7,4]]]);