_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{"+wNj":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},"0FSu":function(t,e,n){var r=n("IRf+"),o=n("g6a+"),i=n("N9G2"),a=n("tJVe"),c=n("aoZ+"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,p=7==t,v=5==t||f;return function(g,d,y,x){for(var h,m,b=i(g),E=o(b),w=r(d,y,3),O=a(E.length),S=0,R=x||c,T=e?R(g,O):n||p?R(g,0):void 0;O>S;S++)if((v||S in E)&&(m=w(h=E[S],S,b),t))if(e)T[S]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:u.call(T,h)}else switch(t){case 4:return!1;case 7:u.call(T,h)}return f?-1:s||l?l:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"0FnR":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return m})),n.d(e,"default",(function(){return E}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),u=n("Qi1R"),s=n("VrFO"),l=n.n(s),f=n("Y9Ll"),p=n.n(f),v=n("KEM+"),g=n.n(v),d=(n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("2G9S"),n("MvUL"),n("KOtZ"),function(){function t(e){l()(this,t),g()(this,"tags",void 0),this.tags=(e||[]).map((function(t){return{transformed:{opening:'<span class="emphasis emphasis--'.concat(t,'">'),closing:"</span>"},escapedRegex:{opening:new RegExp("".concat("&lt;").concat(t).concat("&gt;"),"g"),closing:new RegExp("".concat("&lt;","/").concat(t).concat("&gt;"),"g")}}}))}return p()(t,[{key:"transform",value:function(t){if(!t)return null;var e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return this.tags.reduce((function(t,e){return t.replace(e.escapedRegex.opening,e.transformed.opening).replace(e.escapedRegex.closing,e.transformed.closing)}),e).replace(/\\n/g,"<br />")}}]),t}()),y=(n("Ypgq"),new d(["important","positive","negative","warning"])),x=function(t){var e=t.text,n=void 0===e?void 0:e;if(!n)return null;var r=y.transform(n);return r?a.a.createElement("span",{dangerouslySetInnerHTML:{__html:r}}):null},h=["components"],m=(a.a.createElement,{name:"Emphasis",badge:{type:"new",expiryDate:"2021-09-30"}}),b={meta:m};function E(t){var e=t.components,n=Object(o.a)(t,h);return Object(c.a)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Applies emphasis styling to text."),Object(c.a)("p",null,"Whilst it can be used for hard coded text, it is typically used for styled copy sourced from either translations or a BFF service."),Object(c.a)(u.b,{code:"<div>\n  <p>\n    <Emphasis\n      text={\n        'This is <important>important</important>.\\\\n' +\n        'This is <positive>positive</positive>.\\\\n' +\n        'This is <negative>negative</negative>.\\\\n' +\n        'This is a <warning>warning</warning>.'\n      }\n    />\n  </p>\n  <p>\n    This text is also very <Emphasis text=\"<important>important</important>\" />!\n  </p>\n</div>;\n",scope:{Emphasis:x},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Emphasis",mdxType:"GeneratePropsTable"}))}E.isMDXComponent=!0},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),i=n("xt6W"),a=n("dSaG"),c=n("N9G2"),u=n("tJVe"),s=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),v=n("T+0C"),g=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),y=f("concat"),x=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!d||!y},{concat:function(t){var e,n,r,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(x(i=-1===e?a:arguments[e])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),i=n("lhjL");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"34wW":function(t,e,n){var r=n("amH4"),o=n("QsUS");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"4/YM":function(t,e,n){"use strict";var r=n("t/tF").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"56Cj":function(t,e,n){var r=n("T+0C"),o=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"8Rd0":function(t,e,n){var r=n("amH4"),o=n("9JhN");t.exports="process"==r(o.process)},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),i=n("fVMg"),a=n("1Mu/"),c=i("species");t.exports=function(t){var e=r(t),n=o.f;a&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),i=n("ct80"),a=n("q/0V"),c=RegExp.prototype,u=c.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},GJtw:function(t,e,n){var r=n("ct80"),o=n("fVMg"),i=n("T+0C"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("+wNj");function o(t,e){if(null==t)return{};var n,o,i=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},"IRf+":function(t,e,n){var r=n("hpdy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},KOtZ:function(t,e,n){"use strict";var r=n("ax0f"),o=n("mPOS").left,i=n("f4p7"),a=n("T+0C"),c=n("8Rd0");r({target:"Array",proto:!0,forced:!i("reduce")||!c&&a>79&&a<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},KqXw:function(t,e,n){"use strict";var r=n("ax0f"),o=n("QsUS");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},L2rT:function(t,e,n){"use strict";var r=n("ct80");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},MvUL:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),i=n("tJVe"),a=n("i7Kn"),c=n("cww3"),u=n("4/YM"),s=n("ebRk"),l=n("34wW"),f=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,d=v?"$":"$0";return[function(n,r){var o=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!v&&g||"string"===typeof r&&-1===r.indexOf(d)){var c=n(e,t,this,r);if(c.done)return c.value}var y=o(t),x=String(this),h="function"===typeof r;h||(r=String(r));var m=y.global;if(m){var b=y.unicode;y.lastIndex=0}for(var E=[];;){var w=l(y,x);if(null===w)break;if(E.push(w),!m)break;""===String(w[0])&&(y.lastIndex=u(x,i(y.lastIndex),b))}for(var O,S="",R=0,T=0;T<E.length;T++){w=E[T];for(var j=String(w[0]),_=f(p(a(w.index),x.length),0),P=[],N=1;N<w.length;N++)P.push(void 0===(O=w[N])?O:String(O));var C=w.groups;if(h){var A=[j].concat(P,_,x);void 0!==C&&A.push(C);var M=String(r.apply(void 0,A))}else M=s(j,x,_,P,C,r);_>=R&&(S+=x.slice(R,_)+M,R=_+j.length)}return S+x.slice(R)}]}))},NoVM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Emphasis",function(){return n("0FnR")}])},QsUS:function(t,e,n){"use strict";var r=n("q/0V"),o=n("L2rT"),i=n("TN3B"),a=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),u=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(s||f||l)&&(u=function(t){var e,n,o,i,u=this,p=l&&u.sticky,v=r.call(u),g=u.source,d=0,y=t;return p&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),y=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(g="(?: "+g+")",y=" "+y,d++),n=new RegExp("^(?:"+g+")",v)),f&&(n=new RegExp("^"+g+"$(?!\\s)",v)),s&&(e=u.lastIndex),o=a.call(p?n:u,y),p?o?(o.input=o.input.slice(d),o[0]=o[0].slice(d),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:s&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),f&&o&&o.length>1&&c.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=u},"T+0C":function(t,e,n){var r,o,i=n("9JhN"),a=n("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t},t.exports.default=t.exports,t.exports.__esModule=!0},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("ERkP"),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"===typeof t?t(e):c(c({},e),t)),n},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(n),v=r,g=p["".concat(a,".").concat(v)]||p[v]||f[v]||i;return n?o.a.createElement(g,c(c({ref:e},s),{},{components:n})):o.a.createElement(g,c({ref:e},s))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"===typeof t?t:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},"aoZ+":function(t,e,n){var r=n("dSaG"),o=n("xt6W"),i=n("fVMg")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},ebRk:function(t,e,n){var r=n("N9G2"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,l){var f=n+t.length,p=u.length,v=c;return void 0!==s&&(s=r(s),v=a),i.call(l,v,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":a=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>p){var l=o(c/10);return 0===l?r:l<=p?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):r}a=u[c-1]}return void 0===a?"":a}))}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},fVMg:function(t,e,n){var r=n("9JhN"),o=n("TN3B"),i=n("8aeu"),a=n("HYrn"),c=n("56Cj"),u=n("TbR9"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)&&(c||"string"==typeof s[t])||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),i=n("66wQ"),a=n("j6nH"),c=n("q9+l").f,u=n("ZdBB").f,s=n("jl0/"),l=n("q/0V"),f=n("L2rT"),p=n("uLp7"),v=n("ct80"),g=n("zc29").enforce,d=n("Ch6y"),y=n("fVMg")("match"),x=o.RegExp,h=x.prototype,m=/a/g,b=/a/g,E=new x(m)!==m,w=f.UNSUPPORTED_Y;if(r&&i("RegExp",!E||w||v((function(){return b[y]=!1,x(m)!=m||x(b)==b||"/a/i"!=x(m,"i")})))){for(var O=function(t,e){var n,r=this instanceof O,o=s(t),i=void 0===e;if(!r&&o&&t.constructor===O&&i)return t;E?o&&!i&&(t=t.source):t instanceof O&&(i&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=a(E?new x(t,e):x(t,e),r?this:h,O);w&&n&&(g(c).sticky=!0);return c},S=function(t){t in O||c(O,t,{configurable:!0,get:function(){return x[t]},set:function(e){x[t]=e}})},R=u(x),T=0;R.length>T;)S(R[T++]);h.constructor=O,O.prototype=h,p(o,"RegExp",O)}d("RegExp")},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},"jl0/":function(t,e,n){var r=n("dSaG"),o=n("amH4"),i=n("fVMg")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},lbJE:function(t,e,n){"use strict";n("KqXw");var r=n("uLp7"),o=n("QsUS"),i=n("ct80"),a=n("fVMg"),c=n("WxKw"),u=a("species"),s=RegExp.prototype,l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),p=a("replace"),v=!!/./[p]&&""===/./[p]("a","$0"),g=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var d=a(t),y=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),x=y&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!y||!x||"replace"===t&&(!l||!f||v)||"split"===t&&!g){var h=/./[d],m=n(d,""[t],(function(t,e,n,r,i){var a=e.exec;return a===o||a===s.exec?y&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=m[0],E=m[1];r(String.prototype,t,b),r(s,d,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}p&&c(s[d],"sham",!0)}},mPOS:function(t,e,n){var r=n("hpdy"),o=n("N9G2"),i=n("g6a+"),a=n("tJVe"),c=function(t){return function(e,n,c,u){r(n);var s=o(e),l=i(s),f=a(s.length),p=t?f-1:0,v=t?-1:1;if(c<2)for(;;){if(p in l){u=l[p],p+=v;break}if(p+=v,t?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:f>p;p+=v)p in l&&(u=n(u,l[p],p,s));return u}};t.exports={left:c(!1),right:c(!0)}},"q/0V":function(t,e,n){"use strict";var r=n("FXyv");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"t/tF":function(t,e,n){var r=n("i7Kn"),o=n("cww3"),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map;r({target:"Array",proto:!0,forced:!n("GJtw")("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["NoVM",0,1,2,3,5,4]]]);