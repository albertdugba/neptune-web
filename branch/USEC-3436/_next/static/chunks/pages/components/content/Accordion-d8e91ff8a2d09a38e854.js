_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"+KXO":function(e,t,n){var r=n("ax0f"),a=n("N9G2"),o=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){o(1)}))},{keys:function(e){return o(a(e))}})},"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),o=n("lhjL");e.exports=function(e,t,n){var c=r(t);c in e?a.f(e,c,o(0,n)):e[c]=n}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u}));n("tVqn"),n("KqXw"),n("MvUL"),n("jQ3i");var r="en-GB",a=["he-IL"],o=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function c(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function i(e){var t=c(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return o.includes(n)?n:null}catch(e){return console.error(e),null}}var u=function(e){var t=c(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Hi8P:function(e,t,n){"use strict";var r,a=n("KEM+"),o=n.n(a),c=(n("J/fC"),n("ERkP")),i=n.n(c),u=n("O94r"),l=n.n(u),s=n("/Vl7"),f=n("VehP"),p=n("eKd8"),d=(r={},o()(r,f.a.EXTRA_SMALL,10),o()(r,f.a.SMALL,16),o()(r,f.a.MEDIUM,24),r),m=function(e){var t=e.className;return i.a.createElement("span",{className:l()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},i.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},i.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};m.defaultProps={className:null};var v=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=l()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),c=d[n];return n===f.a.EXTRA_SMALL?i.a.createElement(m,{className:o}):i.a.createElement(s.k,{className:o,size:c})};v.defaultProps={orientation:p.a.BOTTOM,size:f.a.SMALL,disabled:!1,className:null},t.a=v},"J/fC":function(e,t,n){},VehP:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).EXTRA_SMALL="xs",a.SMALL="sm",a.MEDIUM="md",a.LARGE="lg",a.EXTRA_LARGE="xl"},VrRy:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return L})),n.d(t,"default",(function(){return R}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),i=n("ZVZ0"),u=n("Qi1R"),l=n("97Jx"),s=n.n(l),f=n("RhWx"),p=n.n(f),d=n("ddV6"),m=n.n(d),v=(n("z84I"),n("O94r")),b=n.n(v),O=n("v1+v"),y=n("Hi8P"),E=n("eKd8"),h=n("uIuh"),x=function(e){var t=e.id,n=e.title,r=e.content,a=e.onClick,i=e.open,u=e.icon,l=u?Object(o.cloneElement)(u,{size:24}):null,s=Object(h.a)().isRTL;return c.a.createElement("div",{id:t,className:b()("tw-accordion-item decision p-a-0",{closed:!i})},c.a.createElement("button",{type:"button","aria-expanded":i,onClick:a,className:b()("tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3",{"p-b-3":!i,"p-b-2":i})},c.a.createElement("div",{className:"media"},u&&c.a.createElement("div",{className:b()("hidden-xs hidden-sm",{"media-left":!s,"media-right":s,"p-r-2":!s,"p-l-2":s})},l),c.a.createElement("div",{className:b()("media-body title",{"text-xs-left":!s,"text-xs-right":s})},Object(O.h)(n)?c.a.createElement("span",{className:"h5"},n):n),c.a.createElement("div",{className:b()("d-flex align-items-center",{"media-right":!s,"media-left":s})},c.a.createElement(y.a,{orientation:i?E.a.TOP:E.a.BOTTOM})))),c.a.createElement("div",{className:"accordion-content media"},c.a.createElement("div",{className:b()("media-body p-b-3",{"m-l-5":u||s,"m-r-5":u}),"aria-hidden":!i},r)))};x.defaultProps={icon:null,id:null};var g=x,w=(n("cnZ1"),function(e){var t=e.items,n=e.onClick,r=e.indexOpen,a=Object(o.useState)((function(){return t.map((function(e,t){return t===r}))})),i=m()(a,2),u=i[0],l=i[1];return t.map((function(e,t){return c.a.createElement(g,s()({key:e.id||t,onClick:function(){return function(e){n&&n(e);var t=p()(u);t[e]=!u[e],l(t)}(t)},open:u[t]},e))}))});w.defaultProps={indexOpen:-1,onClick:null};var j=w,T=n("/Vl7"),P=["components"],L=(c.a.createElement,{name:"Accordion"}),N={meta:L};function R(e){var t=e.components,n=Object(a.a)(e,P);return Object(i.a)("wrapper",Object(r.a)({},N,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(u.b,{code:"<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n      icon: <Freeze size={24} />,\n    },\n    {\n      title: 'Item 2 with icon',\n      content: <span>I can be a node</span>,\n      icon: <Emoji size={24} />,\n    },\n    {\n      title: 'Item 3',\n      content: 'I can be text',\n      icon: <New size={24} />,\n    },\n  ]}\n/>;\n",scope:{Accordion:j,New:T.v,Emoji:T.o,Freeze:T.q},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}R.isMDXComponent=!0},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("ERkP"),a=n.n(r),o=n("AXuR"),c=a.a.createContext("ltr"),i=function(e){var t=e.locale,n=e.children;return a.a.createElement(c.Provider,{value:-1<o.b.indexOf(t)?"rtl":"ltr"},n)};i.defaultProps={children:null,locale:o.a}},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},eKd8:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).BOTTOM="bottom",a.BOTTOM_LEFT="bottom-left",a.BOTTOM_RIGHT="bottom-right",a.CENTER="center",a.LEFT="left",a.LEFT_TOP="left-top",a.RIGHT="right",a.RIGHT_TOP="right-top",a.TOP="top"},"jl0/":function(e,t,n){var r=n("dSaG"),a=n("amH4"),o=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},mVF9:function(e,t,n){var r=n("ct80"),a=n("+/eK");e.exports=function(e){return r((function(){return!!a[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||a[e].name!==e}))}},t1Iz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Accordion",function(){return n("VrRy")}])},tVqn:function(e,t,n){"use strict";var r=n("ax0f"),a=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return a(this)}})},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n("X+oG"),o=function(){var e=Object(r.useContext)(a.a);return{direction:e,isRTL:"rtl"===e}}}},[["t1Iz",0,1,2,6,3,5,7,8,11,4]]]);