_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"+oxZ":function(e,t,r){var n=r("9JhN"),o=r("Ew2P"),a=r("6OVi"),i=r("WxKw");for(var c in o){var s=n[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},"+wNj":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},"0FSu":function(e,t,r){var n=r("IRf+"),o=r("g6a+"),a=r("N9G2"),i=r("tJVe"),c=r("aoZ+"),s=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,f=6==e,p=7==e,d=5==e||f;return function(m,y,b,h){for(var g,v,O=a(m),w=o(O),j=n(y,b,3),x=i(w.length),E=0,S=h||c,A=t?S(m,x):r||p?S(m,0):void 0;x>E;E++)if((d||E in w)&&(v=j(g=w[E],E,O),e))if(t)A[E]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return E;case 2:s.call(A,g)}else switch(e){case 4:return!1;case 7:s.call(A,g)}return f?-1:l||u?u:A}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"56Cj":function(e,t,r){var n=r("ct80");e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},"6OVi":function(e,t,r){"use strict";var n=r("0FSu").forEach,o=r("f4p7"),a=r("znGZ"),i=o("forEach"),c=a("forEach");e.exports=i&&c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},HFyK:function(e,t,r){"use strict";var n=r("ddV6"),o=r.n(n),a=r("ERkP"),i=r.n(a),c=r("O94r"),s=r.n(c),l=(r("jwue"),r("+oxZ"),{threshold:.1}),u=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var r=Object(a.useState)(!1),n=o()(r,2),i=n[0],c=n[1],s=function(e,r){e.forEach((function(e){e.isIntersecting&&(c(!0),r.unobserve(t.current))}))};return Object(a.useEffect)((function(){var e,r=!1;return window.IntersectionObserver&&t&&t.current?!r&&(e=new IntersectionObserver(s,l)).observe(t.current):c(!0),function(){r=!0,e&&e.unobserve(t.current)}}),[t]),[i]},f=(r("PkpH"),function(e){var t=e.id,r=e.src,n=e.alt,c=e.onLoad,l=e.onError,f=e.className,p=e.loading,d=e.stretch,m=e.shrink,y=Object(a.useRef)(),b=u({elRef:y,loading:p}),h=o()(b,1)[0],g=r,v=c;return"lazy"!==p||h||(g="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v=null),i.a.createElement("img",{id:t,alt:n,src:g,className:s()(["tw-image",{"tw-image__stretch":d,"tw-image__shrink":m},f]),ref:y,onLoad:v,onError:l})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},HbGN:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("+wNj");function o(e,t){if(null==e)return{};var r,o,a=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},"IRf+":function(e,t,r){var n=r("hpdy");e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},N9G2:function(e,t,r){var n=r("cww3");e.exports=function(e){return Object(n(e))}},O94r:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},PkpH:function(e,t,r){},TbR9:function(e,t,r){var n=r("56Cj");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},ZVZ0:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("ERkP"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):c(c({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},"aoZ+":function(e,t,r){var n=r("dSaG"),o=r("xt6W"),a=r("fVMg")("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},cIrB:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Image",function(){return r("qb6L")}])},cxan:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},ddV6:function(e,t,r){var n=r("qPgQ"),o=r("Ua7V"),a=r("peMk"),i=r("f2kJ");e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(e,t,r){"use strict";var n=r("ct80");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},fVMg:function(e,t,r){var n=r("9JhN"),o=r("TN3B"),a=r("8aeu"),i=r("HYrn"),c=r("56Cj"),s=r("TbR9"),l=o("wks"),u=n.Symbol,f=s?u:u&&u.withoutSetter||i;e.exports=function(e){return a(l,e)||(c&&a(u,e)?l[e]=u[e]:l[e]=f("Symbol."+e)),l[e]}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},jwue:function(e,t,r){"use strict";var n=r("ax0f"),o=r("6OVi");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},peMk:function(e,t,r){var n=r("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},qb6L:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r("cxan"),o=r("HbGN"),a=r("ERkP"),i=r.n(a),c=r("ZVZ0"),s=r("Qi1R"),l=r("HFyK"),u=(i.a.createElement,{name:"Image"}),f={meta:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,'Image component renders an img tag with some optional lazy load feature. "alt" and "src" props are required to enforce accessibility good practices.\nLazy loading functionality is currently not supported on IE11. If you are need this kind of functionality to be supported you\'ll need to add a polyfill for Observer window object.'),Object(c.a)(s.b,{code:'<Image\n  alt="test"\n  id="id1"\n  className="a-class-name"\n  src="https://placeholder.pics/svg/200/00b9ff/FFFFFF"\n  loading="lazy"\n  onLoad={() => console.log(\'image loaded\')}\n  onError={(errorEvent) => console.log(errorEvent)}\n  stretch={false}\n  shrink={true}\n/>;\n',scope:{Image:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Image",mdxType:"GeneratePropsTable"}),Object(c.a)("p",null,"Image component provides an image which is ",Object(c.a)("strong",{parentName:"p"},"responsive by default"),". Responsive behaviours can be controlled by two props: ",Object(c.a)("inlineCode",{parentName:"p"},"shrink")," and ",Object(c.a)("inlineCode",{parentName:"p"},"stretch"),". When both of them are set to true the image will adapt to the parent whether the dimensions of the parent are bigger or smaller than native image sizes.\nWhen shrink or strecth are set to false the smallest/biggest dimensions will be set by the native original images sizes."),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image shrink on smaller containers (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id2",className:"m-t-5",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(e){return console.log(e)},stretch:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image strecth on bigger containers (width:"400px").',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id2",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(e){return console.log(e)},stretch:!0,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t shrink (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id3",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(e){return console.log(e)},stretch:!0,shrink:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t stretch (width:"400px")',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id4",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(e){return console.log(e)},stretch:!1,shrink:!1,mdxType:"Image"})))))}p.isMDXComponent=!0},xt6W:function(e,t,r){var n=r("amH4");e.exports=Array.isArray||function(e){return"Array"==n(e)}},znGZ:function(e,t,r){var n=r("1Mu/"),o=r("ct80"),a=r("8aeu"),i=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(a(c,e))return c[e];t||(t={});var r=[][e],l=!!a(t,"ACCESSORS")&&t.ACCESSORS,u=a(t,0)?t[0]:s,f=a(t,1)?t[1]:void 0;return c[e]=!!r&&!o((function(){if(l&&!n)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:s}):e[1]=1,r.call(e,u,f)}))}}},[["cIrB",0,1,2,3,5,4]]]);