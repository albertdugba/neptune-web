_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"+/eK":function(t,n){t.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"+KXO":function(t,n,e){var r=e("ax0f"),o=e("N9G2"),i=e("DEeE");r({target:"Object",stat:!0,forced:e("ct80")((function(){i(1)}))},{keys:function(t){return i(o(t))}})},"6U7i":function(t,n,e){"use strict";var r=e("1Mu/"),o=e("9JhN"),i=e("66wQ"),a=e("uLp7"),c=e("8aeu"),u=e("amH4"),f=e("j6nH"),s=e("CD8Q"),l=e("ct80"),p=e("guiJ"),d=e("ZdBB").f,m=e("GFpt").f,v=e("q9+l").f,y=e("Ya2h").trim,b=o.Number,h=b.prototype,E="Number"==u(p(h)),g=function(t){var n,e,r,o,i,a,c,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=y(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(a=(i=f.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>o)return NaN;return parseInt(i,r)}return+f};if(i("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,O=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof O&&(E?l((function(){h.valueOf.call(e)})):"Number"!=u(e))?f(new b(g(n)),e,O):g(n)},N=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)c(b,x=N[w])&&!c(O,x)&&v(O,x,m(b,x));O.prototype=h,h.constructor=O,a(o,"Number",O)}},"8+RD":function(t,n,e){var r=e("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"97Jx":function(t,n){function e(){return t.exports=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}t.exports=e},Ch6y:function(t,n,e){"use strict";var r=e("VCi3"),o=e("q9+l"),i=e("fVMg"),a=e("1Mu/"),c=i("species");t.exports=function(t){var n=r(t),e=o.f;a&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},DEeE:function(t,n,e){var r=e("yRya"),o=e("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},"DZ+c":function(t,n,e){"use strict";var r=e("uLp7"),o=e("FXyv"),i=e("ct80"),a=e("q/0V"),c=RegExp.prototype,u=c.toString,f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),s="toString"!=u.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?a.call(t):e)}),{unsafe:!0})},Hi8P:function(t,n,e){"use strict";var r,o=e("KEM+"),i=e.n(o),a=(e("J/fC"),e("ERkP")),c=e.n(a),u=e("O94r"),f=e.n(u),s=e("/Vl7"),l=e("VehP"),p=e("eKd8"),d=(r={},i()(r,l.a.EXTRA_SMALL,10),i()(r,l.a.SMALL,16),i()(r,l.a.MEDIUM,24),r),m=function(t){var n=t.className;return c.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",n),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};m.defaultProps={className:null};var v=function(t){var n=t.orientation,e=t.size,r=t.disabled,o=t.className,i=f()("tw-chevron",{"chevron-color":!r},"".concat([n]).toLowerCase(),o),a=d[e];return e===l.a.EXTRA_SMALL?c.a.createElement(m,{className:i}):c.a.createElement(s.j,{className:i,size:a})};v.Orientation=p.a,v.Size=l.a,v.defaultProps={orientation:v.Orientation.BOTTOM,size:v.Size.SMALL,disabled:!1,className:null},n.a=v},"J/fC":function(t,n,e){},O94r:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)e.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},RhWx:function(t,n,e){var r=e("tGbD"),o=e("twbh"),i=e("peMk"),a=e("d8WC");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},Ua7V:function(t,n){t.exports=function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}}},VehP:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrRy:function(t,n,e){"use strict";e.r(n),e.d(n,"meta",(function(){return w})),e.d(n,"default",(function(){return T}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),c=e("ZVZ0"),u=e("Qi1R"),f=(e("z84I"),e("97Jx")),s=e.n(f),l=e("RhWx"),p=e.n(l),d=e("ddV6"),m=e.n(d),v=e("O94r"),y=e.n(v),b=e("v1+v"),h=e("Hi8P"),E=function(t){var n=t.id,e=t.title,r=t.content,o=t.onClick,c=t.open,u=t.icon,f=u?Object(i.cloneElement)(u,{size:24}):null;return a.a.createElement("div",{id:n,className:y()("tw-accordion-item decision p-a-0",{closed:!c})},a.a.createElement("button",{type:"button","aria-expanded":c,onClick:o,className:y()("tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3",{"p-b-3":!c,"p-b-2":c})},a.a.createElement("div",{className:"media"},u&&a.a.createElement("div",{className:"media-left hidden-xs hidden-sm p-r-2"},f),a.a.createElement("div",{className:"media-body text-xs-left title"},Object(b.i)(e)?a.a.createElement("span",{className:"h5"},e):e),a.a.createElement("div",{className:"media-right d-flex align-items-center"},a.a.createElement(h.a,{orientation:c?h.a.Orientation.TOP:h.a.Orientation.BOTTOM})))),a.a.createElement("div",{className:"accordion-content media "},a.a.createElement("div",{className:y()("media-body m-r-5 p-b-3",{"m-l-5":u}),"aria-hidden":!c},r)))};E.defaultProps={icon:null,id:null};var g=E,x=(e("cnZ1"),function(t){var n=t.items,e=t.onClick,r=t.indexOpen,o=Object(i.useState)((function(){return n.map((function(t,n){return n===r}))})),c=m()(o,2),u=c[0],f=c[1];return n.map((function(t,n){return a.a.createElement(g,s()({key:t.id||n,onClick:function(){return function(t){e&&e(t);var n=p()(u);n[t]=!u[t],f(n)}(n)},open:u[n]},t))}))});x.defaultProps={indexOpen:-1,onClick:null};var O=x,N=e("/Vl7"),w=(a.a.createElement,{name:"Accordion"}),A={meta:w};function T(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},A,e,{components:n,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n      icon: <Freeze size={24} />,\n    },\n    {\n      title: 'Item 2 with icon',\n      content: <span>I can be a node</span>,\n      icon: <Emoji size={24} />,\n    },\n    {\n      title: 'Item 3',\n      content: 'I can be text',\n      icon: <New size={24} />,\n    },\n  ]}\n/>;\n",scope:{Accordion:O,New:N.u,Emoji:N.n,Freeze:N.p},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}T.isMDXComponent=!0},Ya2h:function(t,n,e){var r=e("cww3"),o="["+e("+/eK")+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},d8WC:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ddV6:function(t,n,e){var r=e("qPgQ"),o=e("Ua7V"),i=e("peMk"),a=e("f2kJ");t.exports=function(t,n){return r(t)||o(t,n)||i(t,n)||a()}},eKd8:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},f2kJ:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},guiJ:function(t,n,e){var r,o=e("FXyv"),i=e("uZvN"),a=e("sX5C"),c=e("1odi"),u=e("kySU"),f=e("8r/q"),s=e("MyxS"),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}m=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):function(){var t,n=f("iframe");return n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}();for(var t=a.length;t--;)delete m.prototype[a[t]];return m()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=m(),void 0===n?e:i(e,n)}},"iKE+":function(t,n,e){var r=e("1Mu/"),o=e("9JhN"),i=e("66wQ"),a=e("j6nH"),c=e("q9+l").f,u=e("ZdBB").f,f=e("jl0/"),s=e("q/0V"),l=e("L2rT"),p=e("uLp7"),d=e("ct80"),m=e("zc29").set,v=e("Ch6y"),y=e("fVMg")("match"),b=o.RegExp,h=b.prototype,E=/a/g,g=/a/g,x=new b(E)!==E,O=l.UNSUPPORTED_Y;if(r&&i("RegExp",!x||O||d((function(){return g[y]=!1,b(E)!=E||b(g)==g||"/a/i"!=b(E,"i")})))){for(var N=function(t,n){var e,r=this instanceof N,o=f(t),i=void 0===n;if(!r&&o&&t.constructor===N&&i)return t;x?o&&!i&&(t=t.source):t instanceof N&&(i&&(n=s.call(t)),t=t.source),O&&(e=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var c=a(x?new b(t,n):b(t,n),r?this:h,N);return O&&e&&m(c,{sticky:e}),c},w=function(t){t in N||c(N,t,{configurable:!0,get:function(){return b[t]},set:function(n){b[t]=n}})},A=u(b),T=0;A.length>T;)w(A[T++]);h.constructor=N,N.prototype=h,p(o,"RegExp",N)}v("RegExp")},iQ7j:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},j6nH:function(t,n,e){var r=e("dSaG"),o=e("waID");t.exports=function(t,n,e){var i,a;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(a=i.prototype)&&a!==e.prototype&&o(t,a),t}},kySU:function(t,n,e){var r=e("VCi3");t.exports=r("document","documentElement")},peMk:function(t,n,e){var r=e("iQ7j");t.exports=function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},qPgQ:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},ssvU:function(t,n,e){e("ax0f")({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},t1Iz:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Accordion",function(){return e("VrRy")}])},tGbD:function(t,n,e){var r=e("iQ7j");t.exports=function(t){if(Array.isArray(t))return r(t)}},twbh:function(t,n){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},uZvN:function(t,n,e){var r=e("1Mu/"),o=e("q9+l"),i=e("FXyv"),a=e("DEeE");t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=a(n),c=r.length,u=0;c>u;)o.f(t,e=r[u++],n[e]);return t}},"v1+v":function(t,n,e){"use strict";e.d(n,"r",(function(){return l})),e.d(n,"o",(function(){return p})),e.d(n,"l",(function(){return d})),e.d(n,"q",(function(){return m})),e.d(n,"m",(function(){return v})),e.d(n,"p",(function(){return y})),e.d(n,"n",(function(){return b})),e.d(n,"k",(function(){return h})),e.d(n,"i",(function(){return r})),e.d(n,"g",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"h",(function(){return c})),e.d(n,"a",(function(){return u})),e.d(n,"f",(function(){return f})),e.d(n,"j",(function(){return s})),e.d(n,"c",(function(){return E})),e.d(n,"e",(function(){return x}));e("iKE+"),e("KqXw"),e("DZ+c"),e("6U7i"),e("ssvU");var r=function(t){return"string"==typeof t},o=function(t){return"number"==typeof t&&!Number.isNaN(t)},i=function(t){return o(t)&&Math.floor(t)===t},a=function(t){return"boolean"==typeof t},c=function(t){return!f(t)&&!s(t)&&t.constructor===Object},u=function(t){return Array.isArray(t)},f=function(t){return null===t},s=function(t){return"undefined"==typeof t};function l(t,n){return!n||!s(t)}function p(t,n){return!o(n)||r(t)&&t.length>=n}function d(t,n){return!o(n)||r(t)&&t.length<=n}function m(t,n){try{var e=new RegExp(n);return"undefined"!=typeof t&&!!e.test(t)}catch(t){return!0}}function v(t,n){return!o(n)&&!r(n)||(o(t)||r(t))&&t<=n}function y(t,n){return!o(n)&&!r(n)||(o(t)||r(t))&&t>=n}function b(t,n){return!o(n)||u(t)&&t.length>=n}function h(t,n){return!o(n)||u(t)&&t.length<=n}e("+KXO");var E=function(t){return r(t)&&0===t.length||(c(t)||u(t))&&0===Object.keys(t).length},g=(e("vrRf"),{SPACE:{key:[" ","Spacebar"],keyCode:32},ENTER:{key:"Enter",keyCode:13},TAB:{key:"Tab",keyCode:9},ESCAPE:{key:"Escape",keyCode:27}}),x=function(t){var n=t.keyType,e=t.event;if(!n||!e)return!1;var r=n.toUpperCase(),o=g[r];if(!o)return!1;var i=e.key,a=e.keyCode;return i?u(o.key)?-1<o.key.indexOf(i):i===o.key:a===o.keyCode}},vrRf:function(t,n,e){"use strict";var r=e("ax0f"),o=e("H17f").indexOf,i=e("f4p7"),a=e("znGZ"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!f||!s},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},waID:function(t,n,e){var r=e("FXyv"),o=e("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(i){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},z84I:function(t,n,e){"use strict";var r=e("ax0f"),o=e("0FSu").map,i=e("GJtw"),a=e("znGZ"),c=i("map"),u=a("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["t1Iz",0,1,2,6,3,5,7,4]]]);