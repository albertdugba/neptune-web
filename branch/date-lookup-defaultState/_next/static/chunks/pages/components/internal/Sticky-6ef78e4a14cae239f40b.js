_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[106],{"+wNj":function(n,t,e){"use strict";function r(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e.d(t,"a",(function(){return r}))},"7St7":function(n,t,e){var r=e("fVMg"),o=e("guiJ"),i=e("q9+l"),a=r("unscopables"),c=Array.prototype;void 0==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),n.exports=function(n){c[a][n]=!0}},"91IA":function(n,t,e){},DEeE:function(n,t,e){var r=e("yRya"),o=e("sX5C");n.exports=Object.keys||function(n){return r(n,o)}},GJtw:function(n,t,e){var r=e("ct80"),o=e("fVMg"),i=e("T+0C"),a=o("species");n.exports=function(n){return i>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},HbGN:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("+wNj");function o(n,t){if(null==n)return{};var e,o,i=Object(r.a)(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}},I5Kg:function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return d})),e.d(t,"default",(function(){return v}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),c=e("ZVZ0"),u=e("Qi1R"),l=e("sob3"),s=function(n){var t=n.open,e=n.position,r=n.children;return a.a.createElement(l.a,{open:t,position:e,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},r)};s.defaultProps={position:"bottom",children:null};var p=s,f=e("SP0Y"),d=(a.a.createElement,{name:"Sticky"}),y={meta:d};function v(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(c.a)("wrapper",Object(r.a)({},y,e,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This component is used inside other components, such as Drawer. Please do not use it directly."),Object(c.a)("div",null,Object(c.a)(u.b,{code:"() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",scope:{Sticky:p,Button:f.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})))}v.isMDXComponent=!0},"KEM+":function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},N9G2:function(n,t,e){var r=e("cww3");n.exports=function(n){return Object(r(n))}},O94r:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&n.push(a)}else if("object"===i)for(var c in r)e.call(r,c)&&r[c]&&n.push(c)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(n.exports=r)}()},PjJO:function(n,t,e){var r=e("fVMg")("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(e){try{return t[r]=!1,"/./"[n](t)}catch(o){}}return!1}},SP0Y:function(n,t,e){"use strict";var r,o,i=e("97Jx"),a=e.n(i),c=e("m3Bd"),u=e.n(c),l=e("ERkP"),s=e.n(l),p=e("O94r"),f=e.n(p),d=(e("j+zR"),e("91IA"),e("VMOe")),y=e("VehP"),v=(e("2G9S"),e("jQ3i"),e("+KXO"),e("x4t0"),e("KEM+")),b=e.n(v);(o=r||(r={})).PRIMARY="primary",o.PAY="pay",o.SECONDARY="secondary",o.DANGER="danger",o.LINK="link";var O,m,E,g=e("s+Iv"),h=(O={},b()(O,r.PRIMARY,d.a.ACCENT),b()(O,r.SECONDARY,d.a.ACCENT),b()(O,r.LINK,d.a.ACCENT),b()(O,r.PAY,d.a.POSITIVE),b()(O,r.DANGER,d.a.NEGATIVE),O),x=(m={},b()(m,r.DANGER,d.b.SECONDARY),b()(m,r.LINK,d.b.TERTIARY),b()(m,r.SECONDARY,d.b.SECONDARY),m),A=(E={},b()(E,r.DANGER,"Type.NEGATIVE"),b()(E,r.LINK,"ControlType.ACCENT with priority Priority.TERTIARY"),b()(E,r.PAY,"ControlType.POSITIVE"),b()(E,r.PRIMARY,"ControlType.ACCENT"),b()(E,r.SECONDARY,"ControlType.ACCENT with priority Priority.SECONDARY"),E),P=Object.keys(h),S=function(n){return h[n]||n},N=e("b2Zl"),R=function(n){var t=n.block,e=n.children,r=n.className,o=n.disabled,i=n.htmlType,c=n.loading,l=n.priority,p=n.size,v=n.type,b=u()(n,["block","children","className","disabled","htmlType","loading","priority","size","type"]);!function(n){var t=n.size,e=n.type;Object(g.b)("Button has deprecated the `Size.EXTRA_SMALL` value for the `size` prop. Please use Size.SMALL instead.",t===y.a.EXTRA_SMALL),Object(g.b)("Button has deprecated the ".concat(e," value for the `type` prop. Please update to ").concat(A[e],"."),P.includes(e))}(n);var O=S(v),m=function(n,t){var e=S(t);return x[t]?x[t]:n===d.b.TERTIARY&&e!==d.a.ACCENT?d.b.SECONDARY:n}(l,v),E=f()("btn btn-".concat(p),"np-btn np-btn-".concat(p),{"btn-loading":c,"btn-block np-btn-block":t},N.b[O],N.a[m],r);return s.a.createElement("button",a()({type:i,className:E,disabled:o||c},b),e,c&&s.a.createElement("span",{className:f()("btn-loader",{"m-l-2":!t})}))};R.defaultProps={block:!1,className:null,disabled:!1,htmlType:"button",loading:!1,priority:d.b.PRIMARY,size:y.a.MEDIUM,type:d.a.ACCENT};t.a=R},"T+0C":function(n,t,e){var r,o,i=e("9JhN"),a=e("ZORK"),c=i.process,u=c&&c.versions,l=u&&u.v8;l?o=(r=l.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o},VMOe:function(n,t,e){"use strict";var r,o,i;e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i})),(o=r||(r={})).ACCENT="accent",o.POSITIVE="positive",o.NEGATIVE="negative",function(n){n.PRIMARY="primary",n.SECONDARY="secondary",n.TERTIARY="tertiary"}(i||(i={}))},ZORK:function(n,t,e){var r=e("VCi3");n.exports=r("navigator","userAgent")||""},ZVZ0:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("ERkP"),o=e.n(r);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=o.a.createContext({}),s=function(n){var t=o.a.useContext(l),e=t;return n&&(e="function"===typeof n?n(t):c(c({},t),n)),e},p={inlineCode:"code",wrapper:function(n){var t=n.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,a=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),f=s(e),d=r,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return e?o.a.createElement(y,c(c({ref:t},l),{},{components:e})):o.a.createElement(y,c({ref:t},l))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"===typeof n||r){var i=e.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=n,c.mdxType="string"===typeof n?n:r,a[1]=c;for(var l=2;l<i;l++)a[l]=e[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,e)}f.displayName="MDXCreateElement"},"aoZ+":function(n,t,e){var r=e("dSaG"),o=e("xt6W"),i=e("fVMg")("species");n.exports=function(n,t){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},b2Zl:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return l}));var r,o,i=e("KEM+"),a=e.n(i),c=e("VMOe"),u=(r={},a()(r,c.a.ACCENT,"btn-accent"),a()(r,c.a.POSITIVE,"btn-positive"),a()(r,c.a.NEGATIVE,"btn-negative"),r),l=(o={},a()(o,c.b.PRIMARY,"btn-priority-1"),a()(o,c.b.SECONDARY,"btn-priority-2"),a()(o,c.b.TERTIARY,"btn-priority-3"),o)},cxan:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,"a",(function(){return r}))},f4p7:function(n,t,e){"use strict";var r=e("ct80");n.exports=function(n,t){var e=[][n];return!!e&&r((function(){e.call(null,t||function(){throw 1},1)}))}},guiJ:function(n,t,e){var r,o=e("FXyv"),i=e("uZvN"),a=e("sX5C"),c=e("1odi"),u=e("kySU"),l=e("8r/q"),s=e("MyxS"),p=s("IE_PROTO"),f=function(){},d=function(n){return"<script>"+n+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}y=r?function(n){n.write(d("")),n.close();var t=n.parentWindow.Object;return n=null,t}(r):function(){var n,t=l("iframe");return t.style.display="none",u.appendChild(t),t.src=String("javascript:"),(n=t.contentWindow.document).open(),n.write(d("document.F=Object")),n.close(),n.F}();for(var n=a.length;n--;)delete y.prototype[a[n]];return y()};c[p]=!0,n.exports=Object.create||function(n,t){var e;return null!==n?(f.prototype=o(n),e=new f,f.prototype=null,e[p]=n):e=y(),void 0===t?e:i(e,t)}},"j+zR":function(n,t){n.exports=function(n,t){return function(e,r,o){if("function"!==typeof n)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(e)?n.isRequired:n;return i.apply(this,arguments)}}},jQ3i:function(n,t,e){"use strict";var r=e("ax0f"),o=e("H17f").includes,i=e("7St7");r({target:"Array",proto:!0,forced:!e("znGZ")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}}),i("includes")},"jl0/":function(n,t,e){var r=e("dSaG"),o=e("amH4"),i=e("fVMg")("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[i])?!!t:"RegExp"==o(n))}},kySU:function(n,t,e){var r=e("VCi3");n.exports=r("document","documentElement")},nuol:function(n,t,e){var r=e("jl0/");n.exports=function(n){if(r(n))throw TypeError("The method doesn't accept regular expressions");return n}},"s+Iv":function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));e("vrRf");function r(t){var e,r;0<=["development","test"].indexOf(null===(e=n)||void 0===e||null===(r=e.env)||void 0===r?void 0:"production")&&console.warn(t)}function o(n,t){t&&r(n)}}).call(this,e("F63i"))},sob3:function(n,t,e){"use strict";var r=e("97Jx"),o=e.n(r),i=e("m3Bd"),a=e.n(i),c=e("ERkP"),u=e.n(c),l=e("O94r"),s=e.n(l),p=e("05Xt"),f=(e("yiBs"),Object(c.forwardRef)((function(n,t){var e=n.children,r=n.className,i=n.open,c=n.position,l=n.showSlidingPanelBorder,f=n.slidingPanelPositionFixed,d=a()(n,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return u.a.createElement(p.a,o()({},d,{in:i,timeout:{enter:0,exit:350},classNames:s()("sliding-panel--open-".concat(c),l&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":f},"sliding-panel"),appear:!0,unmountOnExit:!0}),u.a.createElement("div",{className:s()("sliding-panel",r),ref:t},e))})));f.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=f},uZvN:function(n,t,e){var r=e("1Mu/"),o=e("q9+l"),i=e("FXyv"),a=e("DEeE");n.exports=r?Object.defineProperties:function(n,t){i(n);for(var e,r=a(t),c=r.length,u=0;c>u;)o.f(n,e=r[u++],t[e]);return n}},vrRf:function(n,t,e){"use strict";var r=e("ax0f"),o=e("H17f").indexOf,i=e("f4p7"),a=e("znGZ"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!l||!s},{indexOf:function(n){return u?c.apply(this,arguments)||0:o(this,n,arguments.length>1?arguments[1]:void 0)}})},x4t0:function(n,t,e){"use strict";var r=e("ax0f"),o=e("nuol"),i=e("cww3");r({target:"String",proto:!0,forced:!e("PjJO")("includes")},{includes:function(n){return!!~String(i(this)).indexOf(o(n),arguments.length>1?arguments[1]:void 0)}})},xt6W:function(n,t,e){var r=e("amH4");n.exports=Array.isArray||function(n){return"Array"==r(n)}},yiBs:function(n,t,e){},yu9r:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/internal/Sticky",function(){return e("I5Kg")}])},znGZ:function(n,t,e){var r=e("1Mu/"),o=e("ct80"),i=e("8aeu"),a=Object.defineProperty,c={},u=function(n){throw n};n.exports=function(n,t){if(i(c,n))return c[n];t||(t={});var e=[][n],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,s=i(t,0)?t[0]:u,p=i(t,1)?t[1]:void 0;return c[n]=!!e&&!o((function(){if(l&&!r)return!0;var n={length:-1};l?a(n,1,{enumerable:!0,get:u}):n[1]=1,e.call(n,s,p)}))}}},[["yu9r",0,1,2,3,5,10,4]]]);