_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"+/eK":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"0wIC":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={ENTER:"Enter",ESCAPE:"Escape",SPACE:[" ","Spacebar"],TAB:"Tab",PERIOD:".",COMMA:","}},"1IsZ":function(e,t,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"56Cj":function(e,t,n){var r=n("T+0C"),o=n("ct80");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"5BfY":function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={}))[o.EXTRA_SMALL=480]="EXTRA_SMALL",o[o.SMALL=576]="SMALL",o[o.MEDIUM=768]="MEDIUM",o[o.LARGE=992]="LARGE",o[o.EXTRA_LARGE=1200]="EXTRA_LARGE"},"7St7":function(e,t,n){var r=n("fVMg"),o=n("guiJ"),i=n("q9+l"),a=r("unscopables"),c=Array.prototype;void 0==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},"7yHk":function(e,t,n){},"91IA":function(e,t,n){},"99fE":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");t.a=function(e){return function(t){var n=Object(i.useState)(!1),r=o()(n,2),u=r[0],s=r[1];return Object(i.useEffect)((function(){s(!0)}),[s]),u?Object(c.createPortal)(a.a.createElement(e,t),document.body):null}}},DEeE:function(e,t,n){var r=n("yRya"),o=n("sX5C");e.exports=Object.keys||function(e){return r(e,o)}},Ee2X:function(e,t,n){"use strict";var r=n("ax0f"),o=n("mg+6"),i=n("i7Kn"),a=n("tJVe"),c=n("N9G2"),u=n("aoZ+"),s=n("2sZ7"),l=n("GJtw")("splice"),f=Math.max,d=Math.min;r({target:"Array",proto:!0,forced:!l},{splice:function(e,t){var n,r,l,p,v,m,E=c(this),b=a(E.length),y=o(e,b),h=arguments.length;if(0===h?n=r=0:1===h?(n=0,r=b-y):(n=h-2,r=d(f(i(t),0),b-y)),b+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=u(E,r),p=0;p<r;p++)(v=y+p)in E&&s(l,p,E[v]);if(l.length=r,n<r){for(p=y;p<b-r;p++)m=p+n,(v=p+r)in E?E[m]=E[v]:delete E[m];for(p=b;p>b-r+n;p--)delete E[p-1]}else if(n>r)for(p=b-r;p>y;p--)m=p+n-1,(v=p+r-1)in E?E[m]=E[v]:delete E[m];for(p=0;p<n;p++)E[p+y]=arguments[p+2];return E.length=b-r+n,l}})},HRvm:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),u=n("Qi1R"),s=n("b1ss"),l=n("SP0Y"),f=n("eKd8"),d=["components"],p=(a.a.createElement,{name:"Popover"}),v={meta:p};function m(e){var t=e.components,n=Object(o.a)(e,d);return Object(c.a)("wrapper",Object(r.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:'<Popover\n  content="You\u2019ll get this rate as long as we receive your 10 EUR within the next 51 hours."\n  preferredPlacement={Position.BOTTOM}\n  title="Guaranteed rate"\n>\n  <Button onClick={() => console.log(`I\'m also triggered`)}>Click here to Open Popover!</Button>\n</Popover>;\n',scope:{Popover:s.a,Button:l.a,Position:f.a},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}m.isMDXComponent=!0},KqXw:function(e,t,n){"use strict";var r=n("ax0f"),o=n("QsUS");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},L2rT:function(e,t,n){"use strict";var r=n("ct80");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},P8nL:function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("05Xt"),u=n("99fE"),s=(n("7yHk"),n("v1+v")),l=n("ddV6"),f=n.n(l),d=n("RhWx"),p=n.n(d),v=(n("LW0h"),n("0wIC").a.TAB),m=function(e){var t=e.children,n=Object(r.useRef)(),i=Object(s.j)(document)?void 0:document,a={};return Object(r.useEffect)((function(){n.current.focus(),a=function(e){var t={first:e,last:e};if(null!==e&&void 0!==e&&e.querySelectorAll){var n=p()(e.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")}));if(n.length){var r=f()(n,1);t.first=r[0],t.last=n[n.length-1]}}return t}(n.current)}),[]),function(e){var t=e.attachListener,n=e.callback,o=e.eventType,i=e.parent;Object(r.useEffect)((function(){return t&&!Object(s.j)(i)&&i.addEventListener(o,n,!0),function(){Object(s.j)(i)||i.removeEventListener(o,n,!0)}}),[t])}({eventType:"keydown",callback:function(e){return Object(s.f)({keyType:v,event:e})&&function(e){var t=e.focusableEls,n=t.first,r=t.last,o=e.event,i=document.activeElement;o.shiftKey&&i===n&&(r&&r.focus(),o.preventDefault()),o.shiftKey||i!==r||(n&&n.focus(),o.preventDefault())}({event:e,focusableEls:a})},attachListener:!0,parent:i}),o.a.createElement("span",{ref:n,tabIndex:-1,className:"np-focus-boundary d-inline-flex outline-none"},t)},E=n("VrFO"),b=n.n(E),y=n("Y9Ll"),h=n.n(y),x=n("KEM+"),T=n.n(x),O=(n("Ee2X"),new(function(){function e(){b()(this,e),T()(this,"dimmers",void 0),this.dimmers=[]}return h()(e,[{key:"add",value:function(e){var t=this.dimmers.indexOf(e);return-1===t?(t=this.dimmers.length,this.dimmers.push(e),t):t}},{key:"remove",value:function(e){var t=this.dimmers.indexOf(e);return-1!==t&&this.dimmers.splice(t,1),t}},{key:"isTop",value:function(e){return 0<this.dimmers.length&&this.dimmers[this.dimmers.length-1]===e}}]),e}())),g=function(e){var t=e.children,n=e.className,i=e.disableClickToClose,u=e.fadeContentOnEnter,s=e.fadeContentOnExit,l=e.transparent,f=e.onClose,d=e.open,p=e.scrollable,v=Object(r.useRef)(),E=!i&&f?function(e){e.target===v.current&&f(e)}:void 0,b=function(e){"Escape"!==e.key||(e.stopPropagation(),f&&O.isTop(v)&&f(e))};return Object(r.useEffect)((function(){return document.addEventListener("keydown",b),function(){document.removeEventListener("keydown",b)}}),[]),o.a.createElement(c.a,{in:d,appear:!0,timeout:{enter:0,exit:350},classNames:{enter:a()({"dimmer--enter-fade":u}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":u}),exit:a()("dimmer--exit",{"dimmer--exit-fade":s})},onEnter:function(){return O.add(v)},onExited:function(){return O.remove(v)},unmountOnExit:!0},o.a.createElement(R,null,o.a.createElement("div",{className:a()("dimmer",{"dimmer--scrollable":p,"dimmer--transparent":l},n),onClick:E,ref:v,role:"presentation"},o.a.createElement(m,null,t))))},R=function(e){var t=e.children;return Object(r.useEffect)((function(){return document.body.classList.add("no-scroll"),function(){document.body.classList.remove("no-scroll")}}),[]),t};g.defaultProps={children:null,className:void 0,disableClickToClose:!1,fadeContentOnEnter:!1,fadeContentOnExit:!1,transparent:!1,onClose:void 0,open:!1,scrollable:!1};t.a=Object(u.a)(g)},PjJO:function(e,t,n){var r=n("fVMg")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},QsUS:function(e,t,n){"use strict";var r=n("q/0V"),o=n("L2rT"),i=n("TN3B"),a=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),u=a,s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(s||f||l)&&(u=function(e){var t,n,o,i,u=this,d=l&&u.sticky,p=r.call(u),v=u.source,m=0,E=e;return d&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),E=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(v="(?: "+v+")",E=" "+E,m++),n=new RegExp("^(?:"+v+")",p)),f&&(n=new RegExp("^"+v+"$(?!\\s)",p)),s&&(t=u.lastIndex),o=a.call(d?n:u,E),d?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:s&&o&&(u.lastIndex=u.global?o.index+o[0].length:t),f&&o&&o.length>1&&c.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),e.exports=u},SP0Y:function(e,t,n){"use strict";var r,o,i=n("97Jx"),a=n.n(i),c=n("m3Bd"),u=n.n(c),s=n("ERkP"),l=n.n(s),f=n("O94r"),d=n.n(f),p=(n("j+zR"),n("91IA"),n("VMOe")),v=n("VehP"),m=n("KEM+"),E=n.n(m);n("+KXO"),n("2G9S"),n("jQ3i"),n("x4t0");(o=r||(r={})).PRIMARY="primary",o.PAY="pay",o.SECONDARY="secondary",o.DANGER="danger",o.LINK="link";var b,y,h,x=n("s+Iv"),T=(b={},E()(b,r.PRIMARY,p.a.ACCENT),E()(b,r.SECONDARY,p.a.ACCENT),E()(b,r.LINK,p.a.ACCENT),E()(b,r.PAY,p.a.POSITIVE),E()(b,r.DANGER,p.a.NEGATIVE),b),O=(y={},E()(y,r.DANGER,p.b.SECONDARY),E()(y,r.LINK,p.b.TERTIARY),E()(y,r.SECONDARY,p.b.SECONDARY),y),g=(h={},E()(h,r.DANGER,"Type.NEGATIVE"),E()(h,r.LINK,"ControlType.ACCENT with priority Priority.TERTIARY"),E()(h,r.PAY,"ControlType.POSITIVE"),E()(h,r.PRIMARY,"ControlType.ACCENT"),E()(h,r.SECONDARY,"ControlType.ACCENT with priority Priority.SECONDARY"),h),R=Object.keys(T),A=function(e){return T[e]||e},P=n("b2Zl"),C=["block","children","className","disabled","htmlType","loading","priority","size","type"],N=function(e){var t=e.block,n=e.children,r=e.className,o=e.disabled,i=e.htmlType,c=e.loading,s=e.priority,f=e.size,m=e.type,E=u()(e,C);!function(e){var t=e.size,n=e.type;Object(x.b)("Button has deprecated the `Size.EXTRA_SMALL` value for the `size` prop. Please use Size.SMALL instead.",t===v.a.EXTRA_SMALL),Object(x.b)("Button has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(g[n],"."),R.includes(n))}(e);var b=A(m),y=function(e,t){var n=A(t);return O[t]?O[t]:e===p.b.TERTIARY&&n!==p.a.ACCENT?p.b.SECONDARY:e}(s,m),h=d()("btn btn-".concat(f),"np-btn np-btn-".concat(f),{"btn-loading":c,"btn-block np-btn-block":t},P.b[b],P.a[y],r);return l.a.createElement("button",a()({type:i,className:h,disabled:o||c},E),n,c&&l.a.createElement("span",{className:d()("btn-loader",{"m-l-2":!t})}))};N.defaultProps={block:!1,className:null,disabled:!1,htmlType:"button",loading:!1,priority:p.b.PRIMARY,size:v.a.MEDIUM,type:p.a.ACCENT};t.a=N},"T+0C":function(e,t,n){var r,o,i=n("9JhN"),a=n("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},TbR9:function(e,t,n){var r=n("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},VMOe:function(e,t,n){"use strict";var r,o,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),(o=r||(r={})).ACCENT="accent",o.POSITIVE="positive",o.NEGATIVE="negative",function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary"}(i||(i={}))},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},Ya2h:function(e,t,n){var r=n("cww3"),o="["+n("+/eK")+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},b2Zl:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r,o,i=n("KEM+"),a=n.n(i),c=n("VMOe"),u=(r={},a()(r,c.a.ACCENT,"btn-accent"),a()(r,c.a.POSITIVE,"btn-positive"),a()(r,c.a.NEGATIVE,"btn-negative"),r),s=(o={},a()(o,c.b.PRIMARY,"btn-priority-1"),a()(o,c.b.SECONDARY,"btn-priority-2"),a()(o,c.b.TERTIARY,"btn-priority-3"),o)},eKd8:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},fVMg:function(e,t,n){var r=n("9JhN"),o=n("TN3B"),i=n("8aeu"),a=n("HYrn"),c=n("56Cj"),u=n("TbR9"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;e.exports=function(e){return i(s,e)&&(c||"string"==typeof s[e])||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},guiJ:function(e,t,n){var r,o=n("FXyv"),i=n("uZvN"),a=n("sX5C"),c=n("1odi"),u=n("kySU"),s=n("8r/q"),l=n("MyxS"),f=l("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}v=r?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):function(){var e,t=s("iframe");return t.style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F}();for(var e=a.length;e--;)delete v.prototype[a[e]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=o(e),n=new d,d.prototype=null,n[f]=e):n=v(),void 0===t?n:i(n,t)}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},jQ3i:function(e,t,n){"use strict";var r=n("ax0f"),o=n("H17f").includes,i=n("7St7");r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},kySU:function(e,t,n){var r=n("VCi3");e.exports=r("document","documentElement")},nuol:function(e,t,n){var r=n("jl0/");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"q/0V":function(e,t,n){"use strict";var r=n("FXyv");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},qh8L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Popover",function(){return n("HRvm")}])},"s+Iv":function(e,t,n){"use strict";(function(e){function r(t){var n,r;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(t)}function o(e,t){t&&r(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),a=n.n(i),c=n("ERkP"),u=n.n(c),s=n("O94r"),l=n.n(s),f=n("05Xt"),d=(n("yiBs"),["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]),p=Object(c.forwardRef)((function(e,t){var n=e.children,r=e.className,i=e.open,c=e.position,s=e.showSlidingPanelBorder,p=e.slidingPanelPositionFixed,v=a()(e,d);return u.a.createElement(f.a,o()({},v,{in:i,timeout:{enter:0,exit:350},classNames:l()("sliding-panel--open-".concat(c),s&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":p},"sliding-panel"),appear:!0,unmountOnExit:!0}),u.a.createElement("div",{className:l()("sliding-panel",r),ref:t},n))}));p.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=p},uZvN:function(e,t,n){var r=n("1Mu/"),o=n("q9+l"),i=n("FXyv"),a=n("DEeE");e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=a(t),c=r.length,u=0;c>u;)o.f(e,n=r[u++],t[n]);return e}},x4t0:function(e,t,n){"use strict";var r=n("ax0f"),o=n("nuol"),i=n("cww3");r({target:"String",proto:!0,forced:!n("PjJO")("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},yiBs:function(e,t,n){}},[["qh8L",0,1,2,3,5,8,10,11,17,4]]]);