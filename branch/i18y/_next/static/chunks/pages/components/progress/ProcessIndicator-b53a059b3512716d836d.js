_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[102],{"0Q6q":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={PROCESSING:"processing",FAILED:"failed",SUCCEEDED:"succeeded",HIDDEN:"hidden",DONE:"done",PENDING:"pending"}},"1KZv":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress/ProcessIndicator",function(){return n("ttSX")}])},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"4aUP":function(t,e,n){"use strict";var o=n("VrFO"),r=n.n(o),s=n("Y9Ll"),c=n.n(s),a=n("1Pcy"),i=n.n(a),u=n("5Yy7"),p=n.n(u),l=n("N+ot"),f=n.n(l),m=n("AuHH"),y=n.n(m),d=n("KEM+"),v=n.n(d),E=n("ERkP"),b=n.n(E),h=n("O94r"),P=n.n(h),S=n("0Q6q"),x=n("VehP");function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y()(t);if(e){var r=y()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var w={xs:11,sm:22,xl:61},_=function(t){function e(t){var o;return r()(this,e),o=n.call(this,t),v()(i()(o),"runCallBack",(function(t){var e=o.props.onAnimationCompleted;e&&(o.timeouts=setTimeout((function(){e(t)}),1500))})),o.state={status:t.status,size:t.size},o.interval=null,o.timeout=null,o}p()(e,t);var n=O(e);return c()(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=t.state.status,n=t.state.size,o=t.props.status,r=t.props.size;e!==o&&t.setState({status:o},t.runCallBack(o)),n!==r&&t.setState({size:r})}),1500)}},{key:"shouldComponentUpdate",value:function(t,e){var n=t.status===e.status,o=t.size===e.size;return n&&o}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearTimeout(this.timeout)}},{key:"render",value:function(){var t,n=this.state,o=n.size,r=n.status,s=P()("process process-".concat(o),(t={},v()(t,"process-danger",r===e.Status.FAILED),v()(t,"process-stopped",r===e.Status.HIDDEN),v()(t,"process-success",r===e.Status.SUCCEEDED),t));return b.a.createElement("span",{className:s},b.a.createElement("span",{className:"process-icon-container"},b.a.createElement("span",{className:"process-icon-horizontal"}),b.a.createElement("span",{className:"process-icon-vertical"})),b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("circle",{className:"process-circle",cx:"50%",cy:"50%",r:w[this.state.size],fillOpacity:"0.0"})))}}]),e}(E.Component);v()(_,"Status",S.a),v()(_,"Size",x.a),_.defaultProps={status:_.Status.PROCESSING,size:_.Size.SMALL,onAnimationCompleted:null},e.a=_},"5Yy7":function(t,e,n){var o=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"695J":function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"N+ot":function(t,e,n){var o=n("T0aG"),r=n("1Pcy");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},O94r:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var s=typeof o;if("string"===s||"number"===s)t.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&t.push(c)}else if("object"===s)for(var a in o)n.call(o,a)&&o[a]&&t.push(a)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},ttSX:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return f}));var o=n("cxan"),r=n("HbGN"),s=n("ERkP"),c=n.n(s),a=n("ZVZ0"),i=n("Qi1R"),u=n("4aUP"),p=(c.a.createElement,{name:"ProcessIndicator"}),l={meta:p};function f(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(a.a)("wrapper",Object(o.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.a)(i.b,{code:"<ProcessIndicator\n  status={ProcessIndicator.Status.PROCESSING}\n  size={ProcessIndicator.Size.EXTRA_SMALL}\n  onAnimationCompleted={s => console.log(s)}\n/>;\n",scope:{ProcessIndicator:u.a},mdxType:"LiveEditorBlock"}),Object(a.a)(i.a,{componentName:"ProcessIndicator",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0}},[["1KZv",0,1,2,3]]]);