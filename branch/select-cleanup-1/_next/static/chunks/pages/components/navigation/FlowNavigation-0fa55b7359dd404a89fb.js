_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[104],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(t){return a(o(t))}})},"1IsZ":function(t,e,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),i=n("dSaG"),c=n("N9G2"),u=n("tJVe"),l=n("2sZ7"),s=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),v=n("T+0C"),d=p("isConcatSpreadable"),m=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=f("concat"),h=function(t){if(!i(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var e,n,r,o,a,i=c(this),f=s(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(h(a=-1===e?i:arguments[e])){if(p+(o=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in a&&l(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,a)}return f.length=p,f}})},"2gZs":function(t,e,n){var r=n("POz8"),o=n("amH4"),a=n("fVMg")("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),a))?n:i?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),a=n("lhjL");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},"34wW":function(t,e,n){var r=n("amH4"),o=n("QsUS");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"4/YM":function(t,e,n){"use strict";var r=n("t/tF").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"5BfY":function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={}))[o.EXTRA_SMALL=480]="EXTRA_SMALL",o[o.SMALL=576]="SMALL",o[o.MEDIUM=768]="MEDIUM",o[o.LARGE=992]="LARGE",o[o.EXTRA_LARGE=1200]="EXTRA_LARGE"},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"7CQW":function(t,e,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var r=n("VrFO"),o=n.n(r),a=n("Y9Ll"),i=n.n(a),c=n("1Pcy"),u=n.n(c),l=n("5Yy7"),s=n.n(l),f=n("N+ot"),p=n.n(f),v=n("AuHH"),d=n.n(v),m=n("KEM+"),g=n.n(m),h=n("ERkP"),b=n.n(h),E=n("eKd8");n("7gtC");function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var O=function(t){function e(){var t;return o()(this,e),t=n.call(this),g()(u()(t),"ensureHidden",(function(e){t.state.show||(e.stopPropagation(),t.hide())})),t.state={show:!1,tooltipId:null},t}s()(e,t);var n=y(e);return i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,r=n.position,o=n.children,a=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,r){return n===E.a.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===E.a.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-r,"px")}:n===E.a.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+r,"px")}:n===E.a.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,r,i):{};return b.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},b.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(r," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},b.a.createElement("div",{className:"tooltip-arrow"}),b.a.createElement("div",{className:"tooltip-inner"},a)),o)}}]),e}(h.Component);O.defaultProps={position:E.a.TOP,offset:0};var x=O;e.a=x},"7J1Q":function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).VERTICAL="VERTICAL",o.VERTICAL_TWO_COLUMN="VERTICAL_TWO_COLUMN",o.VERTICAL_ONE_COLUMN="VERTICAL_ONE_COLUMN",o.HORIZONTAL="HORIZONTAL",o.HORIZONTAL_JUSTIFIED="HORIZONTAL_JUSTIFIED",o.HORIZONTAL_LEFT_ALIGNED="HORIZONTAL_LEFT_ALIGNED",o.HORIZONTAL_RIGHT_ALIGNED="HORIZONTAL_RIGHT_ALIGNED"},"7x/C":function(t,e,n){var r=n("POz8"),o=n("uLp7"),a=n("UmhL");r||o(Object.prototype,"toString",a,{unsafe:!0})},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),a=n("N4z3"),i=n("f4p7"),c=[].join,u=o!=Object,l=i("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"9YZu":function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("h9gP"),u=n("VehP"),l=n("EUyq"),s=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,r=t.className,a=t.outlined,c=t.size,u=t.theme,l=t.type;return o.a.createElement("div",{className:i()("tw-avatar",r,"tw-avatar--".concat(c),"tw-avatar--".concat(l),"tw-avatar--".concat(u),{"tw-avatar--outlined":a})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:u.a.MEDIUM,theme:l.a.LIGHT,type:c.a.THUMBNAIL},e.a=s},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,o,a=n("DIbr"),i=n("ERkP"),c=n("kQwz");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(o||(o={}));function u(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,i=Object(a.c)(e,["value","children"]),u="string"===typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(u,i):n.formatTimeToParts(u,i))};return e.displayName=o[t],e}function l(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,u=Object(a.c)(e,["value","children"]),l=n[t](r,u);if("function"===typeof o)return o(l);var s=n.textComponent||i.Fragment;return i.createElement(s,null,l)};return e.displayName=r[t],e}function s(t){return t}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),u("formatDate"),u("formatTime")},Bk02:function(t,e,n){"use strict";var r=n("KEM+"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("O94r"),u=n.n(c),l=n("VehP"),s=n("EUyq");n("FkPD");e.a=function(t){var e,n=t.badge,r=t.className,a=void 0===r?void 0:r,c=t.size,f=void 0===c?l.a.SMALL:c,p=t.border,v=void 0===p?s.a.LIGHT:p,d=t.children,m=u()("tw-badge",(e={},o()(e,"tw-badge-border-".concat(v),v),o()(e,"tw-badge-".concat(f),f),e),a);return i.a.createElement("div",{className:m},i.a.createElement("div",{className:"tw-badge__children"},d),i.a.createElement("div",{className:"tw-badge__content"},n))}},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),a=n("fVMg"),i=n("1Mu/"),c=a("species");t.exports=function(t){var e=r(t),n=o.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},DEeE:function(t,e,n){var r=n("yRya"),o=n("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),a=n("ct80"),i=n("q/0V"),c=RegExp.prototype,u=c.toString,l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),s="toString"!=u.name;(l||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?i.call(t):n)}),{unsafe:!0})},EUyq:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).LIGHT="light",o.DARK="dark"},FYta:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return P})),n.d(e,"default",(function(){return M}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),u=n("Qi1R"),l=(n("LW0h"),n("z84I"),n("+KXO"),n("ddV6")),s=n.n(l),f=n("O94r"),p=n.n(f),v=n("Fr7r"),d=n("ToGa"),m=(n("aDaW"),function(t){var e=t.activeLabel,n=t.className,r=t.labels,o=r.length-1;return i.a.createElement("div",{className:p()("np-animated-label",n)},r.map((function(t,n){var r=n-1;return i.a.createElement("div",{key:n,className:p()("text-xs-left",{"np-animated-label--in":n===e,"np-animated-label--out":r===e&&r!==o})},t)})))});m.defaultProps={className:void 0};var g=m,h=n("/Vl7"),b=(n("ePcE"),function(t){var e=t.label,n=t.className,r=t.onClick;return i.a.createElement("button",{type:"button",className:p()("np-back-button","align-items-center","btn-unstyled",n),onClick:r},i.a.createElement(h.c,{size:24}),e)});b.defaultProps={className:void 0,label:void 0};var E=b,y=n("qGsU"),O=n("5BfY"),x=n("7J1Q"),w=n("Tz8v"),S=(n("7ndt"),n("jGnQ")),N={"np-flow-navigation--sm":O.a.SMALL,"np-flow-navigation--lg":O.a.LARGE},T=function(t){var e=t.activeStep,n=t.avatar,r=t.logo,o=t.onClose,c=t.onGoBack,u=t.done,l=t.steps,f=Object(a.useRef)(null),m=Object(w.a)({ref:f}),h=s()(m,1)[0],b=o&&i.a.createElement(y.a,{onClick:o}),S=h<O.a.SMALL,T=u?null:n;return i.a.createElement("div",{ref:f,className:p()("np-flow-navigation d-flex align-items-center justify-content-center p-y-3",{"np-flow-navigation--border-bottom":!u})},i.a.createElement(v.a,{className:p()("np-flow-navigation__content p-x-3",{"np-flow-navigation--hidden":!h,"np-flow-navigation--xs-max":S},Object.keys(N).filter((function(t){return h>=N[t]}))),leftContent:S?function(){var t=c&&0<e;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(E,{label:i.a.createElement(g,{className:"m-x-1",labels:l.map((function(t){return t.label})),activeLabel:e-1}),onClick:c}),i.a.createElement("div",{className:p()("np-flow-navigation--flag",{"np-flow-navigation--flag__hidden":t,"np-flow-navigation--flag__display":!t})}))}():r,rightContent:i.a.createElement(i.a.Fragment,null,T,T&&b&&i.a.createElement("span",{className:"separator"}),b),bottomContent:!u&&i.a.createElement(d.a,{activeStep:e,steps:l,className:p()("np-flow-navigation__stepper")}),layout:h<O.a.LARGE?x.a.VERTICAL:x.a.HORIZONTAL}))};T.defaultProps={activeStep:0,avatar:void 0,logo:i.a.createElement(S.a,null),onGoBack:void 0,onClose:void 0,done:!1};var L=T,_=n("9YZu"),R=n("XE1s"),A=n("Te6E"),I=n("GW4H"),P=(i.a.createElement,{name:"FlowNavigation"}),j={meta:P};function M(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      done={false}\n      avatar={\n        <AvatarWrapper url=\"http://placekitten.com/100/100\" profileType={ProfileType.PERSONAL} />\n      }\n      logo={<Logo />}\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: () => setActiveStep(0),\n        },\n        {\n          label: 'You',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Elena Durante</strong>\n              </div>\n              elenadurante@test.com\n            </>\n          ),\n          onClick: () => setActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        {\n          label: 'Pay',\n          hoverLabel: 'Enrico Gusso II',\n          onClick: () => setActiveStep(4),\n        },\n      ]}\n      activeStep={activeStep}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:L,Avatar:_.a,BriefcaseIcon:h.e,ProfileIcon:h.x,AvatarWrapper:R.a,Logo:S.a,LogoType:A.a,ProfileType:I.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)("p",null,"Use FlowNavigation to help a user navigate through a flow. If a Stepper does not need to be included please use ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead.\nThe current and recommended size for logo is height=24px."),Object(c.a)(u.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}M.isMDXComponent=!0},Fr7r:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("7J1Q"),u=o.a.forwardRef((function(t,e){var n=t.bottomContent,r=t.className,a=t.layout,u=t.leftContent,l=t.rightContent,s=a===c.a.VERTICAL;return o.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",r),ref:e},o.a.createElement("div",{className:i()("align-items-center","np-header__left","d-flex",{"flex__item--8":s})},u),o.a.createElement("div",{className:i()("align-items-center","d-flex","np-header__right","justify-content-end",{"flex__item--4 ":s,"order-2":!s})},l),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":s,"order-1 flex-grow-1":!s})},n))}));u.defaultProps={bottomContent:void 0,className:void 0,layout:c.a.HORIZONTAL,leftContent:void 0,rightContent:void 0},e.a=u},GW4H:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).BUSINESS="BUSINESS",o.PERSONAL="PERSONAL"},KcoV:function(t,e,n){},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,a=n("GJtw"),i=n("znGZ"),c=a("filter"),u=i("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},"M+/F":function(t,e,n){"use strict";var r=n("ax0f"),o=n("dSaG"),a=n("xt6W"),i=n("mg+6"),c=n("tJVe"),u=n("N4z3"),l=n("2sZ7"),s=n("fVMg"),f=n("GJtw"),p=n("znGZ"),v=f("slice"),d=p("slice",{ACCESSORS:!0,0:0,1:2}),m=s("species"),g=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,e){var n,r,s,f=u(this),p=c(f.length),v=i(t,p),d=i(void 0===e?p:e,p);if(a(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!a(n.prototype)?o(n)&&null===(n=n[m])&&(n=void 0):n=void 0,n===Array||void 0===n))return g.call(f,v,d);for(r=new(void 0===n?Array:n)(h(d-v,0)),s=0;v<d;v++,s++)v in f&&l(r,s,f[v]);return r.length=s,r}})},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},POz8:function(t,e,n){var r={};r[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(r)},PpDY:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("7xRU"),n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function r(){return function(){var t=void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch,r=window.matchMedia&&!!window.matchMedia("(pointer: coarse)").matches;return!!(t||e||n||r)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}},Qzre:function(t,e,n){var r=n("FXyv"),o=n("hpdy"),a=n("fVMg")("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[a])?e:o(n)}},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},Te6E:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).WISE="WISE",o.WISE_BUSINESS="WISE_BUSINESS"},ToGa:function(t,e,n){"use strict";n("2G9S"),n("z84I");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=(n("//SO"),n("7CQW")),u=n("PpDY"),l=n("eKd8");var s=function(t){var e=t.steps,n=t.activeStep,r=t.className;if(0===e.length)return null;var a=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),s=1/(e.length-1),f=a/(e.length-1),p=Math.max(f-s,0),v=Math.min(a,1)*s;return o.a.createElement("div",{className:i()("tw-stepper",r)},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*p,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*v,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===a,r=t.onClick&&!n,i=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!r,onClick:function(){return r&&t.onClick()}},o.a.createElement("small",null,t.label));return o.a.createElement("li",{key:e,style:{left:"".concat(e*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(r?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!Object(u.a)()?o.a.createElement(c.a,{position:l.a.BOTTOM,label:t.hoverLabel},i):i)}))))};s.defaultProps={activeStep:0,className:void 0};var f=s;e.a=f},Tz8v:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n("XORh"),c=n.n(i),u=a.useLayoutEffect,l=function(t){var e=t.ref,n=t.throttleMs,r=void 0===n?100:n,i=Object(a.useState)(null),l=o()(i,2),s=l[0],f=l[1];return u((function(){var t=function(){e&&(e.innerWidth?f(e.innerWidth):e.current&&f(e.current.clientWidth))},n=c()(t,r);return window.addEventListener("resize",n,!0),window.requestAnimationFrame(t),function(){return window.removeEventListener("resize",n,!0)}}),[]),[s]};l.THROTTLE_MS=100},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},UmhL:function(t,e,n){"use strict";var r=n("POz8"),o=n("2gZs");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},VehP:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl"},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),a=n("tJVe"),i=n("cww3"),c=n("4/YM"),u=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),l=String(this);if(!i.global)return u(i,l);var s=i.unicode;i.lastIndex=0;for(var f,p=[],v=0;null!==(f=u(i,l));){var d=String(f[0]);p[v]=d,""===d&&(i.lastIndex=c(l,a(i.lastIndex),s)),v++}return 0===v?null:p}]}))},XE1s:function(t,e,n){"use strict";n("7xRU"),n("z84I"),n("M+/F"),n("ho0z"),n("KqXw"),n("Ysgh");var r=n("KEM+"),o=n.n(r),a=n("ddV6"),i=n.n(a),c=n("97Jx"),u=n.n(c),l=n("m3Bd"),s=n.n(l),f=n("ERkP"),p=n.n(f),v=n("/Vl7"),d=n("9YZu"),m=n("h9gP"),g=n("Bk02"),h=n("GW4H"),b=n("VehP");function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?E(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}var O=function(t){var e=t.url,n=t.children,r=s()(t,["url","children"]);return e?p.a.createElement(g.a,u()({badge:p.a.createElement("img",{src:e,alt:""})},r),n):n};O.defaultProps={url:void 0};var x=function(t){var e=t.url,n=t.profileType,r=t.badgeUrl,o=t.name,a=t.avatarProps,c=t.badgeProps,l=Object(f.useState)(!1),s=i()(l,2),g=s[0],E=s[1],x=n===h.a.BUSINESS;return Object(f.useEffect)((function(){return E(!1)}),[e]),p.a.createElement(O,u()({url:r},c),p.a.createElement(d.a,u()({size:b.a.MEDIUM},y(e&&!g?{type:m.a.THUMBNAIL,children:p.a.createElement("img",{src:e,alt:"avatar",onError:function(){return E(!0)}})}:n?{type:m.a.ICON,children:x?p.a.createElement(v.e,null):p.a.createElement(v.x,null)}:o?{type:m.a.INITIALS,children:p.a.createElement("small",null,w(o))}:{type:m.a.ICON,children:p.a.createElement(v.x,null)},a))))};function w(t){var e=t.split(" ").map((function(t){return t[0]})).join("").toUpperCase();return 1===e.length?e[0]:e[0]+e.slice(-1)}x.defaultProps={url:void 0,profileType:void 0,badgeUrl:void 0,name:void 0,avatarProps:{},badgeProps:{}};var S=x;e.a=S},XORh:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),s=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return l.Date.now()};function d(t,e,n){var r,o,a,i,c,u,l=0,s=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,a=o;return r=o=void 0,l=e,i=t.apply(a,n)}function E(t){return l=t,c=setTimeout(O,e),s?b(t):i}function y(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-l>=a}function O(){var t=v();if(y(t))return x(t);c=setTimeout(O,function(t){var n=e-(t-u);return d?p(n,a-(t-l)):n}(t))}function x(t){return c=void 0,h&&r?b(t):(r=o=void 0,i)}function w(){var t=v(),n=y(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return E(u);if(d)return c=setTimeout(O,e),b(u)}return void 0===c&&(c=setTimeout(O,e)),i}return e=g(e)||0,m(n)&&(s=!!n.leading,a=(d="maxWait"in n)?f(g(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=o=c=void 0},w.flush=function(){return void 0===c?i:x(v())},w}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=o.test(t);return c||a.test(t)?i(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),d(t,e,{leading:r,maxWait:e,trailing:o})}}).call(this,n("lpmq"))},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},YAkj:function(t,e,n){var r=n("1Mu/"),o=n("DEeE"),a=n("N4z3"),i=n("4Sk5").f,c=function(t){return function(e){for(var n,c=a(e),u=o(c),l=u.length,s=0,f=[];l>s;)n=u[s++],r&&!i.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},Ysgh:function(t,e,n){"use strict";var r=n("lbJE"),o=n("jl0/"),a=n("FXyv"),i=n("cww3"),c=n("Qzre"),u=n("4/YM"),l=n("tJVe"),s=n("34wW"),f=n("QsUS"),p=n("ct80"),v=[].push,d=Math.min,m=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,a);for(var c,u,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=new RegExp(t.source,p+"g");(c=f.call(m,r))&&!((u=m.lastIndex)>d&&(s.push(r.slice(d,c.index)),c.length>1&&c.index<r.length&&v.apply(s,c.slice(1)),l=c[0].length,d=u,s.length>=a));)m.lastIndex===c.index&&m.lastIndex++;return d===r.length?!l&&m.test("")||s.push(""):s.push(r.slice(d)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var f=a(t),p=String(this),v=c(f,RegExp),g=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),b=new v(m?f:"^(?:"+f.source+")",h),E=void 0===o?4294967295:o>>>0;if(0===E)return[];if(0===p.length)return null===s(b,p)?[p]:[];for(var y=0,O=0,x=[];O<p.length;){b.lastIndex=m?O:0;var w,S=s(b,m?p:p.slice(O));if(null===S||(w=d(l(b.lastIndex+(m?0:O)),p.length))===y)O=u(p,O,g);else{if(x.push(p.slice(y,O)),x.length===E)return x;for(var N=1;N<=S.length-1;N++)if(x.push(S[N]),x.length===E)return x;O=y=w}}return x.push(p.slice(y)),x}]}),!m)},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},eKd8:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},gxsa:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/FlowNavigation",function(){return n("FYta")}])},h9gP:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).THUMBNAIL="thumbnail",o.ICON="icon",o.EMOJI="emoji",o.INITIALS="initials"},ho0z:function(t,e,n){var r=n("1Mu/"),o=n("q9+l").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/;r&&!("name"in a)&&o(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),a=n("66wQ"),i=n("j6nH"),c=n("q9+l").f,u=n("ZdBB").f,l=n("jl0/"),s=n("q/0V"),f=n("L2rT"),p=n("uLp7"),v=n("ct80"),d=n("zc29").set,m=n("Ch6y"),g=n("fVMg")("match"),h=o.RegExp,b=h.prototype,E=/a/g,y=/a/g,O=new h(E)!==E,x=f.UNSUPPORTED_Y;if(r&&a("RegExp",!O||x||v((function(){return y[g]=!1,h(E)!=E||h(y)==y||"/a/i"!=h(E,"i")})))){for(var w=function(t,e){var n,r=this instanceof w,o=l(t),a=void 0===e;if(!r&&o&&t.constructor===w&&a)return t;O?o&&!a&&(t=t.source):t instanceof w&&(a&&(e=s.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=i(O?new h(t,e):h(t,e),r?this:b,w);return x&&n&&d(c,{sticky:n}),c},S=function(t){t in w||c(w,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},N=u(h),T=0;N.length>T;)S(N[T++]);b.constructor=w,w.prototype=b,p(o,"RegExp",w)}m("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(t,i),t}},jGnQ:function(t,e,n){"use strict";n("2G9S");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("Te6E"),u=(n("tXN1"),{WISE:"brand_logo.svg",WISE_BUSINESS:"brand_logo_business.svg",WISE_INVERSE:"brand_logo_inverse.svg",WISE_BUSINESS_INVERSE:"brand_logo_business_inverse.svg"}),l=function(t){var e=t.className,n=t.inverse,r=t.type,a=u["".concat(r).concat(n?"_INVERSE":"")];return o.a.createElement("img",{className:i()("np-logo",e),alt:r===c.a.WISE?"Wise":"Wise business",src:"".concat("https://wise.com/public-resources/assets/logos/wise/").concat(a)})};l.defaultProps={className:void 0,inverse:!1,type:c.a.WISE},e.a=l},lbJE:function(t,e,n){"use strict";n("KqXw");var r=n("uLp7"),o=n("ct80"),a=n("fVMg"),i=n("QsUS"),c=n("WxKw"),u=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=a("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=a(t),m=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=m&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!m||!g||"replace"===t&&(!l||!s||p)||"split"===t&&!v){var h=/./[d],b=n(d,""[t],(function(t,e,n,r,o){return e.exec===i?m&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=b[0],y=b[1];r(String.prototype,t,E),r(RegExp.prototype,d,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,a=r(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qGsU:function(t,e,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("kQwz"),u=n("/Vl7"),l=n("BAoe"),s=Object(l.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(t,e){var n=Object(c.a)(),r=t.onClick,a=t.className,l=t.size;return o.a.createElement("button",{ref:e,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":l===f.Size.LARGE},a),"aria-label":n.formatMessage(s.ariaLabel),onClick:r},o.a.createElement(u.k,{size:l}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};e.a=f},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"t/tF":function(t,e,n){var r=n("i7Kn"),o=n("cww3"),a=function(t){return function(e,n){var a,i,c=String(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(a=c.charCodeAt(u))<55296||a>56319||u+1===l||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):a:t?c.slice(u,u+2):i-56320+(a-55296<<10)+65536}};t.exports={codeAt:a(!1),charAt:a(!0)}},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(a){}return function(n,a){return r(n),o(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,a=n("GJtw"),i=n("znGZ"),c=a("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["gxsa",0,1,2,6,3,5,7,8,4]]]);