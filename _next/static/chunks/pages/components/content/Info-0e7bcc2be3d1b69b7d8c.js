_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"1IsZ":function(e,t,n){var o=n("ax0f"),r=n("YAkj").values;o({target:"Object",stat:!0},{values:function(e){return r(e)}})},"1Ix9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n("cxan"),r=n("HbGN"),i=n("ERkP"),a=n.n(i),l=n("ZVZ0"),c=n("e0j8"),s=n("Qi1R"),u=(a.a.createElement,{name:"Info",badge:{type:"new",expiryDate:"2021-03-31"}}),f={meta:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Opens a Popover or Modal based on presentation prop."),Object(l.a)("div",null,Object(l.a)(s.b,{code:"<Info\n  content={'Your address has been verified, no more actions are required.'}\n  presentation={Info.Presentation.POPOVER}\n  size={Info.Size.SMALL}\n  title={'You entered your address'}\n  aria-label=\"Click here for more details\"\n/>",scope:{Info:c.a},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"Info",mdxType:"GeneratePropsTable"})))}d.isMDXComponent=!0},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"2lU4":function(e,t,n){},"5BYb":function(e,t,n){"use strict";var o=n("ax0f"),r=n("0FSu").some,i=n("f4p7"),a=n("znGZ"),l=i("some"),c=a("some");o({target:"Array",proto:!0,forced:!l||!c},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5BfY":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"5Yy7":function(e,t,n){var o=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"695J":function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7yHk":function(e,t,n){},"99fE":function(e,t,n){"use strict";var o=n("ddV6"),r=n.n(o),i=n("ERkP"),a=n.n(i),l=n("7nmT");t.a=function(e){return function(t){var n=Object(i.useState)(!1),o=r()(n,2),c=o[0],s=o[1];return Object(i.useEffect)((function(){s(!0)}),[s]),c?Object(l.createPortal)(a.a.createElement(e,t),document.body):null}}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},DEeE:function(e,t,n){var o=n("yRya"),r=n("sX5C");e.exports=Object.keys||function(e){return o(e,r)}},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var o,r=n("97Jx"),i=n.n(r),a=n("m3Bd"),l=n.n(a),c=n("VrFO"),s=n.n(c),u=n("Y9Ll"),f=n.n(u),d=n("1Pcy"),p=n.n(d),m=n("5Yy7"),v=n.n(m),h=n("N+ot"),E=n.n(h),y=n("AuHH"),b=n.n(y),O=n("KEM+"),g=n.n(O),x=n("ERkP"),P=n.n(x),w=n("O94r"),S=n.n(w),C=n("05Xt"),T=n("/Vl7"),N=n("6gor"),k=(n("2lU4"),n("eKd8")),R=n("VehP"),A=n("P8nL");function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return E()(this,n)}}var j=function(e){function t(){var e;s()(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),g()(p()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===N.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),g()(p()(e),"handleOnClick",(function(t){var n=e.props,o=n.onClose,r=n.closeOnClick;t.target===t.currentTarget&&o&&r&&o(t)})),g()(p()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}v()(t,e);var n=L(t);return f()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,n=this.props,o=n.title,r=n.body,a=n.footer,c=n.onClose,s=n.className,u=n.open,f=(n.size,n.closeOnClick,n.scroll),d=n.position,p=l()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),m=this.checkSpecialClasses("compact"),v=this.checkSpecialClasses("no-divider");return P.a.createElement(A.a,{open:u,scrollable:f===t.Scroll.CONTENT},P.a.createElement(C.a,{appear:!0,in:u,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},P.a.createElement("div",i()({className:S()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":f===t.Scroll.CONTENT,"align-items-center":d===k.a.CENTER,"align-items-start":d===k.a.TOP},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},p),P.a.createElement("div",{className:S()("tw-modal-dialog","d-flex",g()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},P.a.createElement("div",{className:S()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":m,"tw-modal-no-title":!o})},P.a.createElement("div",{className:S()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!o||v})},P.a.createElement("h4",{className:"tw-modal-title"},o),P.a.createElement("button",{type:"button",onClick:c,className:"close","aria-label":"close"},P.a.createElement(T.k,{size:24}))),P.a.createElement("div",{className:"tw-modal-body"},r),a&&P.a.createElement("div",{className:S()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":v})},a))))))}}]),t}(x.Component);g()(j,"Size",R.a),g()(j,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),g()(j,"Position",(o={},g()(o,k.a.TOP.toUpperCase(),k.a.TOP),g()(o,k.a.CENTER.toUpperCase(),k.a.CENTER),o)),j.defaultProps={title:null,footer:null,size:j.Size.MEDIUM,className:"",closeOnClick:!0,scroll:j.Scroll.VIEWPORT,position:j.Position.CENTER},t.a=j},LW0h:function(e,t,n){"use strict";var o=n("ax0f"),r=n("0FSu").filter,i=n("GJtw"),a=n("znGZ"),l=i("filter"),c=a("filter");o({target:"Array",proto:!0,forced:!l||!c},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"N+ot":function(e,t,n){var o=n("T0aG"),r=n("1Pcy");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},P8nL:function(e,t,n){"use strict";var o=n("ERkP"),r=n.n(o),i=n("O94r"),a=n.n(i),l=n("05Xt"),c=n("99fE"),s=(n("7yHk"),n("6gor")),u=function(e){var t=e.open,n=e.children,o=e.scrollable,i=e.onClose,c=e.fadeContentOnExit,s=e.fadeContentOnEnter,u=function(e){i&&i(e)};return r.a.createElement(l.a,{in:t,appear:!0,timeout:{enter:0,exit:350},classNames:{enter:a()({"dimmer--enter-fade":s}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":s}),exit:a()("dimmer--exit",{"dimmer--exit-fade":c})},unmountOnExit:!0},r.a.createElement(f,{handleOnClose:u},r.a.createElement("div",{role:"presentation",className:a()("dimmer",{"dimmer--scrollable":o}),onClick:function(e){e.target===e.currentTarget&&u(e)}},n)))},f=function(e){var t=e.children,n=e.handleOnClose;return Object(o.useEffect)((function(){var e=function(e){e&&(e.keyCode===s.a.ESCAPE||"Escape"===e.key)&&n(e)};return document.body.classList.add("no-scroll"),document.addEventListener("keydown",e),function(){document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",e)}}),[]),t};u.defaultProps={scrollable:!1,open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1};t.a=Object(c.a)(u)},Qzre:function(e,t,n){var o=n("FXyv"),r=n("hpdy"),i=n("fVMg")("species");e.exports=function(e,t){var n,a=o(e).constructor;return void 0===a||void 0==(n=o(a)[i])?t:r(n)}},T0aG:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}}},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},YAkj:function(e,t,n){var o=n("1Mu/"),r=n("DEeE"),i=n("N4z3"),a=n("4Sk5").f,l=function(e){return function(t){for(var n,l=i(t),c=r(l),s=c.length,u=0,f=[];s>u;)n=c[u++],o&&!a.call(l,n)||f.push(e?[n,l[n]]:l[n]);return f}};e.exports={entries:l(!0),values:l(!1)}},"YF/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Info",function(){return n("1Ix9")}])},Ysgh:function(e,t,n){"use strict";var o=n("lbJE"),r=n("jl0/"),i=n("FXyv"),a=n("cww3"),l=n("Qzre"),c=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),d=n("ct80"),p=[].push,m=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));o("split",2,(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[o];if(!r(e))return t.call(o,e,i);for(var l,c,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,d+"g");(l=f.call(v,o))&&!((c=v.lastIndex)>m&&(u.push(o.slice(m,l.index)),l.length>1&&l.index<o.length&&p.apply(u,l.slice(1)),s=l[0].length,m=c,u.length>=i));)v.lastIndex===l.index&&v.lastIndex++;return m===o.length?!s&&v.test("")||u.push(""):u.push(o.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,r,n):o.call(String(r),t,n)},function(e,r){var a=n(o,e,this,r,o!==t);if(a.done)return a.value;var f=i(e),d=String(this),p=l(f,RegExp),h=f.unicode,E=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new p(v?f:"^(?:"+f.source+")",E),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===d.length)return null===u(y,d)?[d]:[];for(var O=0,g=0,x=[];g<d.length;){y.lastIndex=v?g:0;var P,w=u(y,v?d:d.slice(g));if(null===w||(P=m(s(y.lastIndex+(v?0:g)),d.length))===O)g=c(d,g,h);else{if(x.push(d.slice(O,g)),x.length===b)return x;for(var S=1;S<=w.length-1;S++)if(x.push(w[S]),x.length===b)return x;g=O=P}}return x.push(d.slice(O)),x}]}),!v)},ddV6:function(e,t,n){var o=n("qPgQ"),r=n("Ua7V"),i=n("peMk"),a=n("f2kJ");e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||a()}},e0j8:function(e,t,n){"use strict";var o=n("97Jx"),r=n.n(o),i=n("ddV6"),a=n.n(i),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("/Vl7"),d=n("b1ss"),p=n("GAp3"),m=n("VehP"),v=(n("v9dN"),function e(t){var n=t.className,o=t.content,i=t.presentation,s=t.size,m=t.title,v=Object(l.useState)(!1),h=a()(v,2),E=h[0],y=h[1],b=i===e.Presentation.MODAL,O=s===e.Size.SMALL,g={"aria-label":t["aria-label"],className:"btn-unstyled",children:c.a.createElement(f.q,{size:O?16:24})};return c.a.createElement("span",{className:u()(n,"np-info",{"np-info__small":O,"np-info__large":!O})},b?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",r()({type:"button",onClick:function(){return y(!E)}},g)),c.a.createElement(p.a,{body:o,onClose:function(){return y(!1)},open:E,title:m})):c.a.createElement(d.a,{content:o,preferredPlacement:d.a.Placement.BOTTOM,title:m},c.a.createElement("button",r()({type:"button"},g))))});v.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},v.Size={SMALL:m.a.SMALL,LARGE:m.a.LARGE},v.defaultProps={className:void 0,content:void 0,presentation:v.Presentation.POPOVER,size:v.Size.SMALL,title:void 0},t.a=v},eKd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},peMk:function(e,t,n){var o=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));n("vrRf");function o(t){var n,o;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(o=n.env)||void 0===o?void 0:"production")&&console.warn(t)}function r(e,t){t&&o(e)}}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var o=n("97Jx"),r=n.n(o),i=n("m3Bd"),a=n.n(i),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("05Xt"),d=(n("yiBs"),Object(l.forwardRef)((function(e,t){var n=e.children,o=e.className,i=e.open,l=e.position,s=e.showSlidingPanelBorder,d=e.slidingPanelPositionFixed,p=a()(e,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return c.a.createElement(f.a,r()({},p,{in:i,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(l),s&&"sliding-panel--border-".concat(l),{"sliding-panel--fixed":d},"sliding-panel"),appear:!0,unmountOnExit:!0}),c.a.createElement("div",{className:u()("sliding-panel",o),ref:t},n))})));d.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=d},v9dN:function(e,t,n){},vrRf:function(e,t,n){"use strict";var o=n("ax0f"),r=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),l=[].indexOf,c=!!l&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:c||!s||!u},{indexOf:function(e){return c?l.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},yiBs:function(e,t,n){},z84I:function(e,t,n){"use strict";var o=n("ax0f"),r=n("0FSu").map,i=n("GJtw"),a=n("znGZ"),l=i("map"),c=a("map");o({target:"Array",proto:!0,forced:!l||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["YF/V",0,1,2,6,3,5,8,9,16,4]]]);