_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"+oxZ":function(t,e,n){var r=n("9JhN"),o=n("Ew2P"),i=n("6OVi"),a=n("WxKw");for(var u in o){var s=r[u],l=s&&s.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(c){l.forEach=i}}},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2gZs":function(t,e,n){var r=n("POz8"),o=n("amH4"),i=n("fVMg")("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),i=n("znGZ"),a=o("forEach"),u=i("forEach");t.exports=a&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"7x/C":function(t,e,n){var r=n("POz8"),o=n("uLp7"),i=n("UmhL");r||o(Object.prototype,"toString",i,{unsafe:!0})},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),i=n("N4z3"),a=n("f4p7"),u=[].join,s=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"9g06":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/InputWithDisplayFormat",function(){return n("BmOy")}])},"9yoW":function(t,e,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("ERkP"),a=n.n(i),u=n("q2vM");e.a=function(t){return a.a.createElement(u.a,o()({},t,{render:function(t){return a.a.createElement("input",t)}}))}},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BmOy:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),u=n("ZVZ0"),s=n("Qi1R"),l=n("9yoW"),c=(a.a.createElement,{name:"InputWithDisplayFormat"}),f={meta:c};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(u.a)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)(s.b,{code:'<InputWithDisplayFormat\n  placeholder="**-**-**"\n  displayPattern="**-**-**"\n  className="form-control"\n  onChange={v => console.log(v)}\n  onBlur={v => console.log(v)}\n  onFocus={v => console.log(v)}\n/>;\n',scope:{InputWithDisplayFormat:l.a},mdxType:"LiveEditorBlock"}),Object(u.a)(s.a,{componentName:"InputWithDisplayFormat",mdxType:"GeneratePropsTable"}))}p.isMDXComponent=!0},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),i=n("ct80"),a=n("q/0V"),u=RegExp.prototype,s=u.toString,l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),c="toString"!=s.name;(l||c)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},Ee2X:function(t,e,n){"use strict";var r=n("ax0f"),o=n("mg+6"),i=n("i7Kn"),a=n("tJVe"),u=n("N9G2"),s=n("aoZ+"),l=n("2sZ7"),c=n("GJtw"),f=n("znGZ"),p=c("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,e){var n,r,c,f,p,h,y=u(this),v=a(y.length),m=o(t,v),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=v-m):(n=x-2,r=g(d(i(e),0),v-m)),v+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=s(y,r),f=0;f<r;f++)(p=m+f)in y&&l(c,f,y[p]);if(c.length=r,n<r){for(f=m;f<v-r;f++)h=f+n,(p=f+r)in y?y[h]=y[p]:delete y[h];for(f=v;f>v-r+n;f--)delete y[f-1]}else if(n>r)for(f=v-r;f>m;f--)h=f+n-1,(p=f+r-1)in y?y[h]=y[p]:delete y[h];for(f=0;f<n;f++)y[f+m]=arguments[f+2];return y.length=v-r+n,c}})},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,i=n("GJtw"),a=n("znGZ"),u=i("filter"),s=a("filter");r({target:"Array",proto:!0,forced:!u||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},POz8:function(t,e,n){var r={};r[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(r)},Qzre:function(t,e,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},RhWx:function(t,e,n){var r=n("tGbD"),o=n("twbh"),i=n("peMk"),a=n("d8WC");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},UmhL:function(t,e,n){"use strict";var r=n("POz8"),o=n("2gZs");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},Ysgh:function(t,e,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),u=n("Qzre"),s=n("4/YM"),l=n("tJVe"),c=n("34wW"),f=n("QsUS"),p=n("ct80"),h=[].push,d=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var u,s,l,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,p+"g");(u=f.call(g,r))&&!((s=g.lastIndex)>d&&(c.push(r.slice(d,u.index)),u.length>1&&u.index<r.length&&h.apply(c,u.slice(1)),l=u[0].length,d=s,c.length>=i));)g.lastIndex===u.index&&g.lastIndex++;return d===r.length?!l&&g.test("")||c.push(""):c.push(r.slice(d)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var a=n(r,t,this,o,r!==e);if(a.done)return a.value;var f=i(t),p=String(this),h=u(f,RegExp),y=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),m=new h(g?f:"^(?:"+f.source+")",v),x=void 0===o?4294967295:o>>>0;if(0===x)return[];if(0===p.length)return null===c(m,p)?[p]:[];for(var b=0,S=0,O=[];S<p.length;){m.lastIndex=g?S:0;var P,E=c(m,g?p:p.slice(S));if(null===E||(P=d(l(m.lastIndex+(g?0:S)),p.length))===b)S=s(p,S,y);else{if(O.push(p.slice(b,S)),O.length===x)return O;for(var L=1;L<=E.length-1;L++)if(O.push(E[L]),O.length===x)return O;S=b=P}}return O.push(p.slice(b)),O}]}),!g)},d8WC:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ho0z:function(t,e,n){var r=n("1Mu/"),o=n("q9+l").f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},jwue:function(t,e,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},q2vM:function(t,e,n){"use strict";n("LW0h"),n("vrRf"),n("7xRU"),n("Ee2X"),n("ho0z"),n("KqXw"),n("Ysgh");var r=n("RhWx"),o=n.n(r),i=n("VrFO"),a=n.n(i),u=n("Y9Ll"),s=n.n(u),l=n("1Pcy"),c=n.n(l),f=n("5Yy7"),p=n.n(f),h=n("N+ot"),d=n.n(h),g=n("AuHH"),y=n.n(g),v=n("KEM+"),m=n.n(v),x=n("ERkP"),b=n.n(x),S=n("aWzz"),O=n.n(S),P=(n("7x/C"),n("DZ+c"),function(t){return t.split("").filter((function(t){return"*"!==t}))}),E=function(t,e){var n=[""];return t&&t.length&&(n=(n=t.toString().split("")).filter((function(t){return-1===P(e).indexOf(t)}))),n.join("")},L=(n("jwue"),n("+oxZ"),function(t){var e=[];return t.split("").forEach((function(t,n){"*"!==t&&e.push({index:n,symbol:t})})),e}),w=function(t,e){if(!t||""===t)return"";for(var n=t.toString().split(""),r=L(e),o=[],i=function(t){1===(o=r.filter((function(e){return e.index===t}))).length&&n.splice(t,0,o.pop().symbol)},a=0;a<n.length;a+=1)i(a);return n.join("")},C=function(t,e,n){return L(n).filter((function(n){return n.index>=t&&n.index<e})).length},T=(n("wFPu"),function(t,e){var n=L(e).filter((function(e){return e.index>=t}));return j(t,n,"left")}),R=function(t,e){var n=L(e).filter((function(e){return e.index<t})).reverse();return j(t,n,"right")},j=function(t,e,n){var r,o=t;for(r=0;r<e.length;r+=1){var i="left"===n?o:o-1;if(e[r].index!==i)break;o="left"===n?o+1:o-1}return r},D=function(t,e,n,r,o){var i=e;switch(t){case"Backspace":e===n&&(i=0<(i-=R(e,r))?i-1:0);break;case"Paste":i+=o+C(e,e+o,r)+T(e+o,r);break;case"Cut":case"Delete":break;default:i+=1+T(e,r)}return i},M=function t(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;a()(this,t),m()(this,"reset",(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[""],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;e.history=t,e.currIndex=0<t.length-1?t.length-1:0,e.historyLimit=n})),m()(this,"add",(function(t){!e.historyLimit||e.history.length<=e.historyLimit?(e.history.push(t),e.currIndex=e.history.length-1):e.currIndex=e.history.length-1})),m()(this,"redo",(function(){var t=e.history.length;return e.currIndex=e.currIndex+1<t?e.currIndex+1:t-1,e.history[e.currIndex]})),m()(this,"undo",(function(){return e.currIndex=0<e.currIndex-1?e.currIndex-1:0,e.history[e.currIndex]})),this.history=n&&n.length?n:[""],this.currIndex=this.history.length-1,this.historyLimit=r};function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var I=function(t){function e(t){var r;a()(this,e),r=n.call(this,t),m()(c()(r),"getUserAction",(function(t){var e=r.state,n=e.triggerEvent,o=e.triggerType,i=e.value,a=r.props.displayPattern,u=String.fromCharCode(n.which).toLowerCase();return"Paste"===o||"Cut"===o?o:(n.ctrlKey||n.metaKey)&&"z"===u?n.shiftKey?"Redo":"Undo":n.ctrlKey&&"d"===u?"Delete":"undefined"==typeof n.key&&t.length<=E(i,a).length?"Backspace":n.key})),m()(c()(r),"resetEvent",(function(){r.setState({triggerType:null,triggerEvent:null,pastedLength:0})})),m()(c()(r),"detectUndoRedo",(function(t){var e=String.fromCharCode(t.which).toLowerCase();return(t.ctrlKey||t.metaKey)&&"z"===e?t.shiftKey?"Redo":"Undo":null})),m()(c()(r),"handleOnKeyDown",(function(t){t.persist();var e=t.target,n=e.selectionStart,o=e.selectionEnd,i=r.state.historyNavigator,a=r.props.displayPattern,u="";"Undo"===r.detectUndoRedo(t)?(u=w(i.undo(),a),r.setState({value:u,triggerType:"Undo"})):"Redo"===r.detectUndoRedo(t)?(u=w(i.redo(),a),r.setState({value:u,triggerType:"Redo"})):r.setState({triggerEvent:t,triggerType:"KeyDown",selectionStart:n,selectionEnd:o})})),m()(c()(r),"handleOnPaste",(function(t){var e=r.props.displayPattern,n=E(t.clipboardData.getData("Text"),e).length;r.setState({triggerType:"Paste",pastedLength:n})})),m()(c()(r),"handleOnCut",(function(){r.setState({triggerType:"Cut"})})),m()(c()(r),"isKeyAllowed",(function(t){return-1===r.props.displayPattern.split("").filter((function(t){return"*"!==t})).indexOf(t)})),m()(c()(r),"handleOnChange",(function(t){var e=r.state,n=e.historyNavigator,o=e.triggerEvent,i=e.triggerType,a=r.props,u=a.displayPattern,s=a.onChange,l=t.target.value,c=E(l,u),f=null===o?"Paste":r.getUserAction(c);if(r.isKeyAllowed(f)&&"Undo"!==i&&"Redo"!==i){("Backspace"===f||"Delete"===f)&&(c=r.handleDelete(c,f));var p=w(c,u);n.add(c),r.handleCursorPositioning(f);var h=E(p,u);r.setState({value:p},r.resetEvent(),s(h))}})),m()(c()(r),"handleOnBlur",(function(t){var e=r.props,n=e.displayPattern,o=e.onBlur;o&&o(E(t.target.value,n))})),m()(c()(r),"handleOnFocus",(function(t){var e=r.props,n=e.displayPattern,o=e.onFocus;o&&o(E(t.target.value,n))})),m()(c()(r),"handleDelete",(function(t,e){var n=r.props.displayPattern,i=r.state,a=i.selectionStart,u=i.selectionEnd,s=o()(t);if(a===u){var l=a-C(0,a,n),c=0,f=T(a,n);"Backspace"===e&&(l-=1,f=R(a,n)),0<=l&&f&&(c=1),s.splice(l,c)}return s.join("")})),m()(c()(r),"handleCursorPositioning",(function(t){var e=r.props.displayPattern,n=r.state,o=n.triggerEvent,i=n.selectionStart,a=n.selectionEnd,u=n.pastedLength,s=D(t,i,a,e,u);setTimeout((function(){o&&o.target.setSelectionRange(s,s),r.setState({selectionStart:s,selectionEnd:s})}),0)}));var i=t.value,u=t.displayPattern,s=E(i,u);return r.state={value:w(s,u),historyNavigator:new M,prevDisplayPattern:t.displayPattern,triggerType:null,triggerEvent:null},r}p()(e,t);var n=A(e);return s()(e,[{key:"render",value:function(){var t=this.props,e={type:t.type,inputMode:t.inputMode,className:t.className,id:t.id,name:t.name,placeholder:t.placeholder,readOnly:t.readOnly,required:t.required,minLength:t.minLength,maxLength:t.maxLength,disabled:t.disabled,autoComplete:t.autoComplete,value:this.state.value,onFocus:this.handleOnFocus,onBlur:this.handleOnBlur,onPaste:this.handleOnPaste,onKeyDown:this.handleOnKeyDown,onChange:this.handleOnChange,onCut:this.handleOnCut};return this.props.render(e)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.displayPattern,r=e.prevDisplayPattern;if(e.prevDisplayPattern!==n){var o=e.value,i=e.historyNavigator,a=E(o,r);return i.reset(),{prevDisplayPattern:n,value:w(a,n),triggerType:null,triggerEvent:null,pastedLength:0}}return null}}]),e}(b.a.Component);I.propTypes={autoComplete:O.a.oneOf(["on","off","disabled"]),className:O.a.string,disabled:O.a.bool,id:O.a.string,maxLength:O.a.number,minLength:O.a.number,name:O.a.string,onFocus:O.a.func,onBlur:O.a.func,onChange:O.a.func.isRequired,placeholder:O.a.string,readOnly:O.a.bool,render:O.a.func.isRequired,required:O.a.bool,displayPattern:O.a.string,type:O.a.string,inputMode:O.a.string,value:O.a.string},I.defaultProps={autoComplete:"off",className:null,disabled:!1,id:null,maxLength:null,minLength:null,name:null,placeholder:null,readOnly:!1,required:!1,displayPattern:"",type:"text",inputMode:null,value:"",onFocus:null,onBlur:null};e.a=I},tGbD:function(t,e,n){var r=n("iQ7j");t.exports=function(t){if(Array.isArray(t))return r(t)}},twbh:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),u=[].indexOf,s=!!u&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),c=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!l||!c},{indexOf:function(t){return s?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},wFPu:function(t,e,n){"use strict";var r=n("ax0f"),o=n("xt6W"),i=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})}},[["9g06",0,1,2,3,5,7]]]);