_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"+KRd":function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).NEGATIVE="negative",a.NEUTRAL="neutral",a.POSITIVE="positive",a.WARNING="warning",a.INFO="info",a.ERROR="error",a.SUCCESS="success"},"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),a=n("ct80"),o=n("xt6W"),i=n("dSaG"),c=n("N9G2"),l=n("tJVe"),s=n("2sZ7"),u=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),m=n("T+0C"),p=d("isConcatSpreadable"),b=m>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),O=f("concat"),y=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)};r({target:"Array",proto:!0,forced:!b||!O},{concat:function(e){var t,n,r,a,o,i=c(this),f=u(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(y(o=-1===t?i:arguments[t])){if(d+(a=l(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&s(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,d++,o)}return f.length=d,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),o=n("lhjL");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},"3g/d":function(e,t,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("KEM+"),i=n.n(o),c=(n("+KXO"),n("2G9S"),n("jQ3i"),n("x4t0"),n("ERkP")),l=n.n(c),s=n("O94r"),u=n.n(s),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),m=n("qGsU"),p=n("fO07"),b=n("97Jx"),O=n.n(b),y=n("UTRh"),v=[n("2//c").a.STRONG],h=function(e){return l.a.createElement(y.a,O()({},e,{as:"span",allowList:v,blockList:void 0}))};h.defaultProps={className:void 0};var j,g,w,T=h,E=n("s+Iv"),x=n("uIuh"),P=(j={},i()(j,d.a.SUCCESS,d.a.POSITIVE),i()(j,d.a.INFO,d.a.NEUTRAL),i()(j,d.a.ERROR,d.a.NEGATIVE),j),N=(g={},i()(g,d.a.POSITIVE,f.h),i()(g,d.a.NEUTRAL,f.u),i()(g,d.a.WARNING,f.a),i()(g,d.a.NEGATIVE,f.b),g),R=function e(t){var n=Object(c.useState)(!1),r=a()(n,2),o=r[0],i=r[1],s=t.arrow,f=t.action,d=t.children,b=t.className,O=t.icon,y=t.onDismiss,v=t.message,h=t.type,j=Object(c.useRef)(null),g=Object(x.a)().isRTL;if(s){var w=Object(p.a)(e,s);return l.a.createElement(w,t)}!function(e){var t=e.size,n=e.type;Object(E.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(E.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(S[n],"."),A.includes(n))}(t);var R=P[h]||h,k=N[R],L=O?Object(c.cloneElement)(O,{size:24}):l.a.createElement(k,{size:24});return l.a.createElement("div",{role:"alert",className:u()("alert d-flex","alert-".concat(R),b),onTouchStart:function(){return i(!0)},onTouchEnd:function(e){o&&f&&null!==j&&void 0!==j&&j.current&&!j.current.contains(e.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),i(!1)},onTouchMove:function(){return i(!1)}},L,l.a.createElement("div",{className:u()("alert__message flex-grow-1",{"p-l-2":!g,"p-r-2":g})},l.a.createElement("div",null,d||l.a.createElement(T,null,v)),f&&l.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),y&&l.a.createElement(m.a,{onClick:y,size:16,className:u()({"m-l-2":!g,"m-r-2":g}),ref:j}))},S=(w={},i()(w,d.a.SUCCESS,"Sentiment.POSITIVE"),i()(w,d.a.INFO,"Sentiment.NEUTRAL"),i()(w,d.a.ERROR,"Sentiment.NEGATIVE"),w),A=Object.keys(P);R.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:d.a.NEUTRAL};t.a=R},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,a,o=n("D57K"),i=n("ERkP"),c=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));function l(e){var t=function(t){var n=Object(c.a)(),r=t.value,a=t.children,i=Object(o.c)(t,["value","children"]),l="string"===typeof r?new Date(r||0):r;return a("formatDate"===e?n.formatDateToParts(l,i):n.formatTimeToParts(l,i))};return t.displayName=a[e],t}function s(e){var t=function(t){var n=Object(c.a)(),r=t.value,a=t.children,l=Object(o.c)(t,["value","children"]),s=n[e](r,l);if("function"===typeof a)return a(s);var u=n.textComponent||i.Fragment;return i.createElement(u,null,s)};return t.displayName=r[e],t}function u(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),l("formatDate"),l("formatTime")},"DZ+c":function(e,t,n){"use strict";var r=n("uLp7"),a=n("FXyv"),o=n("ct80"),i=n("q/0V"),c=RegExp.prototype,l=c.toString,s=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var e=a(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in c)?i.call(e):n)}),{unsafe:!0})},GJtw:function(e,t,n){var r=n("ct80"),a=n("fVMg"),o=n("T+0C"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HbAC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Alert",function(){return n("cZ+Q")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},KcoV:function(e,t,n){},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("ERkP"),a=n.n(r),o=n("AXuR"),i=a.a.createContext("ltr"),c=function(e){var t=e.locale,n=e.children;return a.a.createElement(i.Provider,{value:-1<o.b.indexOf(t)?"rtl":"ltr"},n)};c.defaultProps={children:null,locale:o.a}},XU0q:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).TOP_LEFT="up-left",a.TOP="up-center",a.TOP_RIGHT="up-right",a.BOTTOM_LEFT="down-left",a.BOTTOM="down-center",a.BOTTOM_RIGHT="down-right"},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(i,".").concat(m)]||d[m]||f[m]||o;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},aYGS:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("7x/C"),n("DZ+c");var r=n("kQwz"),a=n("mpwa");function o(){try{return Object(r.a)()}catch(e){return console.warn(e.toString(),'Falling back to "'.concat(a.a.locale,'".')),a.a}}},"cZ+Q":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),c=n("ZVZ0"),l=n("Qi1R"),s=n("3g/d"),u=n("+KRd"),f=n("/Vl7"),d=["components"],m=(i.a.createElement,{name:"Alert"}),p={meta:m};function b(e){var t=e.components,n=Object(a.a)(e,d);return Object(c.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Use Alert for contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(c.a)(l.b,{code:"() => {\n  const [dismissed, setDismissed] = React.useState(false);\n  return dismissed ? null : (\n    <Alert\n      action={{\n        'aria-label': 'Learn more about expected payment times',\n        text: 'Learn more',\n        href: 'https://www.wise.com',\n      }}\n      message=\"Payments sent to your bank details **today** might not arrive in time for the holidays.\"\n      onDismiss={() => setDismissed(true)}\n      type={Sentiment.POSITIVE}\n    />\n  );\n};\n",scope:{Alert:s.a,Sentiment:u.a,Star:f.A},mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Alert",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"types"},"Types"),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Name"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Neutral"),Object(c.a)("td",null,Object(c.a)(s.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Positive"),Object(c.a)("td",null,Object(c.a)(s.a,{type:"positive",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Warning"),Object(c.a)("td",null,Object(c.a)(s.a,{type:"warning",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Negative"),Object(c.a)("td",null,Object(c.a)(s.a,{type:"negative",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))))),Object(c.a)("h2",{id:"content-options"},"Content options"),Object(c.a)("p",null,"You can customise the message text style and the icon. Use the default icons where you can - only provide a custom icon if it helps give the user more context as to the contents of the message."),Object(c.a)("table",{className:"table docs-table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Description"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"The ",Object(c.a)("code",null,"message")," prop accepts both plain text and text with bolded elements. To bold words use the markdown style of ",Object(c.a)("code",null,"**two asterisks**"),"."),Object(c.a)("td",null,Object(c.a)(s.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("td",null,"Example of an Alert with icon = ",Object(c.a)("code",null,"<Star />")),Object(c.a)("td",null,Object(c.a)(s.a,{icon:Object(c.a)(f.A,{mdxType:"Star"}),message:"Thank you for your rating, your feedback is important to us.",mdxType:"Alert"}))))))}b.isMDXComponent=!0},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},fO07:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=(n("2G9S"),n("ERkP")),i=n.n(o),c=n("O94r"),l=n.n(c),s=n("XU0q");function u(e){if(e){var t=["arrow"],n=s.a.BOTTOM,r=s.a.BOTTOM_LEFT,a=s.a.BOTTOM_RIGHT,o=s.a.TOP,i=s.a.TOP_RIGHT,c=s.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case a:return t.concat("arrow-bottom","arrow-right");case o:return t.concat("arrow-center");case i:return t.concat("arrow-right");case c:default:return t}}return""}t.a=function(e,t){var n=function(n){return i.a.createElement(e,a()({},n,{className:l()(n.className,u(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),c=n("/Vl7"),l=n("aYGS"),s=n("BAoe"),u=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(e,t){var n=Object(l.a)(),r=e.onClick,o=e.className,s=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},o),"aria-label":n.formatMessage(u.ariaLabel),onClick:r},a.a.createElement(c.l,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n("X+oG"),o=function(){var e=Object(r.useContext)(a.a);return{direction:e,isRTL:"rtl"===e}}}},[["HbAC",0,1,2,6,3,5,7,8,11,4]]]);