_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{"+/eK":function(e,n){e.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6gor":function(e,n,t){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7St7":function(e,n,t){var r=t("fVMg"),i=t("guiJ"),c=t("q9+l"),a=r("unscopables"),o=Array.prototype;void 0==o[a]&&c.f(o,a,{configurable:!0,value:i(null)}),e.exports=function(e){o[a][e]=!0}},AXuR:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"d",(function(){return u}));t("jQ3i"),t("M+/F"),t("KqXw"),t("MvUL"),t("tVqn");var r="en-GB",i=["he-IL"],c=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","zh"];function a(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.replace("_","-")).baseName}catch(e){return console.error(e),null}}function o(e){var n=a(e);if(null===n)return null;try{var t=new Intl.Locale(n).language;return c.includes(t)?t:null}catch(e){return console.error(e),null}}var u=function(e){var n=a(e);return null===n?null:n.slice(0,2)}},DEeE:function(e,n,t){var r=t("yRya"),i=t("sX5C");e.exports=Object.keys||function(e){return r(e,i)}},"M+/F":function(e,n,t){"use strict";var r=t("ax0f"),i=t("dSaG"),c=t("xt6W"),a=t("mg+6"),o=t("tJVe"),u=t("N4z3"),l=t("2sZ7"),s=t("fVMg"),f=t("GJtw"),d=t("znGZ"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),b=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(e,n){var t,r,s,f=u(this),d=o(f.length),p=a(e,d),v=a(void 0===n?d:n,d);if(c(f)&&("function"!=typeof(t=f.constructor)||t!==Array&&!c(t.prototype)?i(t)&&null===(t=t[h])&&(t=void 0):t=void 0,t===Array||void 0===t))return b.call(f,p,v);for(r=new(void 0===t?Array:t)(m(v-p,0)),s=0;p<v;p++,s++)p in f&&l(r,s,f[p]);return r.length=s,r}})},MvUL:function(e,n,t){"use strict";var r=t("lbJE"),i=t("FXyv"),c=t("N9G2"),a=t("tJVe"),o=t("i7Kn"),u=t("cww3"),l=t("4/YM"),s=t("34wW"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,n,t,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,y=b?"$":"$0";return[function(t,r){var i=u(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,i,r):n.call(String(i),t,r)},function(e,r){if(!b&&m||"string"===typeof r&&-1===r.indexOf(y)){var c=t(n,e,this,r);if(c.done)return c.value}var u=i(e),p=String(this),v="function"===typeof r;v||(r=String(r));var h=u.global;if(h){var w=u.unicode;u.lastIndex=0}for(var E=[];;){var x=s(u,p);if(null===x)break;if(E.push(x),!h)break;""===String(x[0])&&(u.lastIndex=l(p,a(u.lastIndex),w))}for(var S,O="",k=0,A=0;A<E.length;A++){x=E[A];for(var C=String(x[0]),R=f(d(o(x.index),p.length),0),P=[],j=1;j<x.length;j++)P.push(void 0===(S=x[j])?S:String(S));var I=x.groups;if(v){var N=[C].concat(P,R,p);void 0!==I&&N.push(I);var _=String(r.apply(void 0,N))}else _=g(C,p,R,P,I,r);R>=k&&(O+=p.slice(k,R)+_,k=R+C.length)}return O+p.slice(k)}];function g(e,t,r,i,a,o){var u=r+e.length,l=i.length,s=h;return void 0!==a&&(a=c(a),s=v),n.call(o,s,(function(n,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(u);case"<":o=a[c.slice(1,-1)];break;default:var s=+c;if(0===s)return n;if(s>l){var f=p(s/10);return 0===f?n:f<=l?void 0===i[f-1]?c.charAt(1):i[f-1]+c.charAt(1):n}o=i[s-1]}return void 0===o?"":o}))}}))},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===c)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},"X+oG":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o}));t("vrRf");var r=t("ERkP"),i=t.n(r),c=t("AXuR"),a=i.a.createContext("ltr"),o=function(e){var n=e.locale,t=e.children;return i.a.createElement(a.Provider,{value:-1<c.b.indexOf(n)?"rtl":"ltr"},t)};o.defaultProps={children:null,locale:c.a}},Ya2h:function(e,n,t){var r=t("cww3"),i="["+t("+/eK")+"]",c=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),o=function(e){return function(n){var t=String(r(n));return 1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(a,"")),t}};e.exports={start:o(1),end:o(2),trim:o(3)}},cGSD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Switch",function(){return t("cjIA")}])},cjIA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return m})),t.d(n,"default",(function(){return g}));var r=t("cxan"),i=t("HbGN"),c=t("ERkP"),a=t.n(c),o=t("ZVZ0"),u=t("Qi1R"),l=t("O94r"),s=t.n(l),f=t("/Vl7"),d=(t("5s8o"),t("s+Iv")),p=t("6gor"),v=t("uIuh"),h=function(e){var n=Object(v.a)().isRTL,t=e.checked,r=e.className,i=e.id,c=e.onClick,o=e["aria-label"],u=o?null:e["aria-labelledby"];return Object(d.b)("Switch now expects either `aria-label` or `aria-labelledby`, and will soon make these props required. Please update your usage to provide one or the other.",!o&&!u),a.a.createElement("span",{className:s()("np-switch",{"np-switch--unchecked":!t,"np-switch--checked":t&&!n,"np-switch--checked--rtl":t&&n},r),onClick:c,onKeyDown:function(e){(32===e.code||e.keyCode===p.a.SPACE)&&(e.preventDefault(),c())},tabIndex:0,role:"switch","aria-checked":t,"aria-label":o,"aria-labelledby":u,id:i},a.a.createElement("span",{className:"np-switch--thumb"},t?a.a.createElement(f.g,{filled:!0,size:24}):a.a.createElement(f.l,{filled:!0,size:24})),a.a.createElement("input",{type:"checkbox",checked:t,readOnly:!0}))};h.defaultProps={"aria-label":null,"aria-labelledby":null,checked:!1,className:null,id:null};var b=h,m=(a.a.createElement,{name:"Switch"}),y={meta:m};function g(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)(u.b,{code:'() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return (\n    <>\n      <label id="labelID" htmlFor="switchId">\n        A switch with a label\n      </label>\n      <Switch\n        checked={checked}\n        className="a-class-name"\n        onClick={() => setCheck(!checked)}\n        aria-labelledby="labelID"\n        id="switchId"\n      />\n    </>\n  );\n};\n',scope:{Switch:b},mdxType:"LiveEditorBlock"}),Object(o.a)(u.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}g.isMDXComponent=!0},guiJ:function(e,n,t){var r,i=t("FXyv"),c=t("uZvN"),a=t("sX5C"),o=t("1odi"),u=t("kySU"),l=t("8r/q"),s=t("MyxS"),f=s("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}v=r?function(e){e.write(p("")),e.close();var n=e.parentWindow.Object;return e=null,n}(r):function(){var e,n=l("iframe");return n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F}();for(var e=a.length;e--;)delete v.prototype[a[e]];return v()};o[f]=!0,e.exports=Object.create||function(e,n){var t;return null!==e?(d.prototype=i(e),t=new d,d.prototype=null,t[f]=e):t=v(),void 0===n?t:c(t,n)}},jQ3i:function(e,n,t){"use strict";var r=t("ax0f"),i=t("H17f").includes,c=t("7St7");r({target:"Array",proto:!0,forced:!t("znGZ")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},kySU:function(e,n,t){var r=t("VCi3");e.exports=r("document","documentElement")},mVF9:function(e,n,t){var r=t("ct80"),i=t("+/eK");e.exports=function(e){return r((function(){return!!i[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||i[e].name!==e}))}},"s+Iv":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));t("vrRf");function r(n){var t,r;0<=["development","test"].indexOf(null===(t=e)||void 0===t||null===(r=t.env)||void 0===r?void 0:"production")&&console.warn(n)}function i(e,n){n&&r(e)}}).call(this,t("F63i"))},tVqn:function(e,n,t){"use strict";var r=t("ax0f"),i=t("Ya2h").trim;r({target:"String",proto:!0,forced:t("mVF9")("trim")},{trim:function(){return i(this)}})},uIuh:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("ERkP"),i=t("X+oG"),c=function(){var e=Object(r.useContext)(i.a);return{direction:e,isRTL:"rtl"===e}}},uZvN:function(e,n,t){var r=t("1Mu/"),i=t("q9+l"),c=t("FXyv"),a=t("DEeE");e.exports=r?Object.defineProperties:function(e,n){c(e);for(var t,r=a(n),o=r.length,u=0;o>u;)i.f(e,t=r[u++],n[t]);return e}},vrRf:function(e,n,t){"use strict";var r=t("ax0f"),i=t("H17f").indexOf,c=t("f4p7"),a=t("znGZ"),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0,l=c("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!l||!s},{indexOf:function(e){return u?o.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["cGSD",0,1,2,6,3,5,7,4]]]);