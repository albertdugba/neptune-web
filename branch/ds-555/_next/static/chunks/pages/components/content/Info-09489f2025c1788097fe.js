_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"1IsZ":function(e,t,n){var r=n("ax0f"),a=n("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return a(e)}})},"1Ix9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),c=n("e0j8"),s=n("Qi1R"),u=(i.a.createElement,{name:"Info"}),f={meta:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Opens a Popover or Modal based on presentation prop."),Object(l.a)("div",null,Object(l.a)(s.b,{code:"<Info\n  content={'Your address has been verified, no more actions are required.'}\n  presentation={Info.Presentation.POPOVER}\n  size={Info.Size.SMALL}\n  title={'You entered your address'}\n  aria-label=\"Click here for more details\"\n/>",scope:{Info:c.a},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"Info",mdxType:"GeneratePropsTable"})))}d.isMDXComponent=!0},"34wW":function(e,t,n){var r=n("amH4"),a=n("QsUS");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"4/YM":function(e,t,n){"use strict";var r=n("t/tF").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"5BYb":function(e,t,n){"use strict";var r=n("ax0f"),a=n("0FSu").some,o=n("f4p7"),i=n("znGZ"),l=o("some"),c=i("some");r({target:"Array",proto:!0,forced:!l||!c},{some:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"5BfY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8,COMMA:188,PERIOD:190}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,a,o=n("D57K"),i=n("ERkP"),l=n("yGPN"),c=n("ymT0");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));function s(e){var t=function(t){return i.createElement(c.a.Consumer,null,(function(n){Object(l.c)(n);var r=t.value,a=t.children,i=Object(o.c)(t,["value","children"]),c="string"===typeof r?new Date(r||0):r;return a("formatDate"===e?n.formatDateToParts(c,i):n.formatTimeToParts(c,i))}))};return t.displayName=a[e],t}function u(e){var t=function(t){return i.createElement(c.a.Consumer,null,(function(n){Object(l.c)(n);var r=t.value,a=t.children,c=Object(o.c)(t,["value","children"]),s=n[e](r,c);if("function"===typeof a)return a(s);var u=n.textComponent||i.Fragment;return i.createElement(u,null,s)}))};return t.displayName=r[e],t}function f(e){return e}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),s("formatDate"),s("formatTime")},GAp3:function(e,t,n){"use strict";n("vrRf"),n("KqXw"),n("Ysgh");var r,a=n("97Jx"),o=n.n(a),i=n("KEM+"),l=n.n(i),c=n("m3Bd"),s=n.n(c),u=n("ERkP"),f=n.n(u),d=n("O94r"),m=n.n(d),p=n("05Xt"),E=(n("2lU4"),n("eKd8")),v=n("VehP"),h=n("P8nL"),g=n("qGsU"),b=function e(t){var n=t.title,r=t.body,a=t.footer,i=t.onClose,c=t.className,u=t.open,d=t.size,v=t.closeOnClick,b=t.scroll,P=t.position,x=s()(t,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),O=function(e){return-1!==c.split(" ").indexOf(e)},T=O("compact"),N=O("no-divider");return f.a.createElement(h.a,{open:u,scrollable:b===e.Scroll.CONTENT,onClick:function(e){("click"===e.type&&v||"click"!==e.type)&&i(e)},className:m()("d-flex","justify-content-center",{"align-items-center":P===E.a.CENTER,"align-items-start":P===E.a.TOP})},f.a.createElement(p.a,{appear:!0,in:u,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},f.a.createElement("div",o()({className:m()("tw-modal",{"tw-modal--content":b===e.Scroll.CONTENT},"fade","outline-none",c)},x),f.a.createElement("div",{className:m()("tw-modal-dialog","d-flex",l()({},"tw-modal-".concat(d),d)),"aria-modal":!0,role:"dialog"},f.a.createElement("div",{className:m()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":T,"tw-modal-no-title":!n})},f.a.createElement("div",{className:m()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!n||N})},f.a.createElement("h4",{className:"tw-modal-title"},n),f.a.createElement(g.a,{onClick:i})),f.a.createElement("div",{className:"tw-modal-body"},r),a&&f.a.createElement("div",{className:m()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":N})},a))))))};b.Size=v.a,b.Scroll={CONTENT:"content",VIEWPORT:"viewport"},b.Position=(r={},l()(r,E.a.TOP.toUpperCase(),E.a.TOP),l()(r,E.a.CENTER.toUpperCase(),E.a.CENTER),r),b.defaultProps={title:null,footer:null,size:b.Size.MEDIUM,className:"",closeOnClick:!0,scroll:b.Scroll.VIEWPORT,position:b.Position.CENTER},t.a=b},KcoV:function(e,t,n){},Qzre:function(e,t,n){var r=n("FXyv"),a=n("hpdy"),o=n("fVMg")("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[o])?t:a(n)}},YAkj:function(e,t,n){var r=n("1Mu/"),a=n("DEeE"),o=n("N4z3"),i=n("4Sk5").f,l=function(e){return function(t){for(var n,l=o(t),c=a(l),s=c.length,u=0,f=[];s>u;)n=c[u++],r&&!i.call(l,n)||f.push(e?[n,l[n]]:l[n]);return f}};e.exports={entries:l(!0),values:l(!1)}},"YF/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Info",function(){return n("1Ix9")}])},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),a=n("jl0/"),o=n("FXyv"),i=n("cww3"),l=n("Qzre"),c=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),d=n("ct80"),m=[].push,p=Math.min,E=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);for(var l,c,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,E=new RegExp(e.source,d+"g");(l=f.call(E,r))&&!((c=E.lastIndex)>p&&(u.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&m.apply(u,l.slice(1)),s=l[0].length,p=c,u.length>=o));)E.lastIndex===l.index&&E.lastIndex++;return p===r.length?!s&&E.test("")||u.push(""):u.push(r.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var f=o(e),d=String(this),m=l(f,RegExp),v=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(E?"y":"g"),g=new m(E?f:"^(?:"+f.source+")",h),b=void 0===a?4294967295:a>>>0;if(0===b)return[];if(0===d.length)return null===u(g,d)?[d]:[];for(var P=0,x=0,O=[];x<d.length;){g.lastIndex=E?x:0;var T,N=u(g,E?d:d.slice(x));if(null===N||(T=p(s(g.lastIndex+(E?0:x)),d.length))===P)x=c(d,x,v);else{if(O.push(d.slice(P,x)),O.length===b)return O;for(var w=1;w<=N.length-1;w++)if(O.push(N[w]),O.length===b)return O;x=P=T}}return O.push(d.slice(P)),O}]}),!E)},e0j8:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("ddV6"),i=n.n(o),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("/Vl7"),d=n("b1ss"),m=n("GAp3"),p=n("VehP"),E=(n("v9dN"),function e(t){var n=t.className,r=t.content,o=t.presentation,s=t.size,p=t.title,E=Object(l.useState)(!1),v=i()(E,2),h=v[0],g=v[1],b=o===e.Presentation.MODAL,P=s===e.Size.SMALL,x={"aria-label":t["aria-label"],className:"btn-unstyled",children:c.a.createElement(f.r,{size:P?16:24})};return c.a.createElement("span",{className:u()(n,"np-info",{"np-info__small":P,"np-info__large":!P})},b?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",a()({type:"button",onClick:function(){return g(!h)}},x)),c.a.createElement(m.a,{body:r,onClose:function(){return g(!1)},open:h,title:p})):c.a.createElement(d.a,{content:r,preferredPlacement:d.a.Placement.BOTTOM,title:p},c.a.createElement("button",a()({type:"button"},x))))});E.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},E.Size={SMALL:p.a.SMALL,LARGE:p.a.LARGE},E.defaultProps={className:void 0,content:void 0,presentation:E.Presentation.POPOVER,size:E.Size.SMALL,title:void 0},t.a=E},eKd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},kQwz:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ERkP"),a=n("ymT0"),o=n("yGPN");function i(){var e=r.useContext(a.a);return Object(o.c)(e),e}},lbJE:function(e,t,n){"use strict";n("KqXw");var r=n("uLp7"),a=n("ct80"),o=n("fVMg"),i=n("QsUS"),l=n("WxKw"),c=o("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=o("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),m=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=o(e),E=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),v=E&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!E||!v||"replace"===e&&(!s||!u||d)||"split"===e&&!m){var h=/./[p],g=n(p,""[e],(function(e,t,n,r,a){return t.exec===i?E&&!a?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=g[0],P=g[1];r(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return P.call(e,this,t)}:function(e){return P.call(e,this)})}f&&l(RegExp.prototype[p],"sham",!0)}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),l=n("kQwz"),c=n("/Vl7"),s=n("BAoe"),u=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(e,t){var n=Object(l.a)(),r=e.onClick,o=e.className,s=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},o),"aria-label":n.formatMessage(u.ariaLabel),onClick:r},a.a.createElement(c.k,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n("vrRf");function r(t){var n,r;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(t)}function a(e,t){t&&r(e)}}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("m3Bd"),i=n.n(o),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("05Xt"),d=(n("yiBs"),Object(l.forwardRef)((function(e,t){var n=e.children,r=e.className,o=e.open,l=e.position,s=e.showSlidingPanelBorder,d=e.slidingPanelPositionFixed,m=i()(e,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return c.a.createElement(f.a,a()({},m,{in:o,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(l),s&&"sliding-panel--border-".concat(l),{"sliding-panel--fixed":d},"sliding-panel"),appear:!0,unmountOnExit:!0}),c.a.createElement("div",{className:u()("sliding-panel",r),ref:t},n))})));d.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=d},"t/tF":function(e,t,n){var r=n("i7Kn"),a=n("cww3"),o=function(e){return function(t,n){var o,i,l=String(a(t)),c=r(n),s=l.length;return c<0||c>=s?e?"":void 0:(o=l.charCodeAt(c))<55296||o>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?e?l.charAt(c):o:e?l.slice(c,c+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},yiBs:function(e,t,n){},z84I:function(e,t,n){"use strict";var r=n("ax0f"),a=n("0FSu").map,o=n("GJtw"),i=n("znGZ"),l=o("map"),c=i("map");r({target:"Array",proto:!0,forced:!l||!c},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["YF/V",0,1,2,6,3,5,7,8,9,10,17,4]]]);