_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{"+oxZ":function(t,e,n){var r=n("9JhN"),o=n("Ew2P"),a=n("6OVi"),u=n("WxKw");for(var c in o){var i=r[c],l=i&&i.prototype;if(l&&l.forEach!==a)try{u(l,"forEach",a)}catch(s){l.forEach=a}}},"/d7r":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return z})),n.d(e,"default",(function(){return $}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),u=n.n(a),c=n("ZVZ0"),i=n("Qi1R"),l=(n("LW0h"),n("jwue"),n("jQ3i"),n("vrRf"),n("tQbP"),n("x4t0"),n("+oxZ"),n("RhWx")),s=n.n(l),f=n("VrFO"),p=n.n(f),m=n("Y9Ll"),h=n.n(m),d=n("1Pcy"),y=n.n(d),v=n("5Yy7"),g=n.n(v),b=n("N+ot"),C=n.n(b),O=n("AuHH"),E=n.n(O),F=n("KEM+"),N=n.n(F),S=n("ymT0"),P=n("O94r"),w=n.n(P),A=n("v1+v"),D=n("RmhF"),L=(n("y0C3"),n("VehP")),I=n("6gor"),T=n("0wIC"),M=n("BAoe"),x=Object(M.a)({selectPlaceholder:{id:"neptune.MoneyInput.Select.placeholder"}}),R=n("b0Hy"),j=(n("Ef13"),n("iKE+"),n("KqXw"),n("DZ+c"),n("MvUL"),n("AXuR")),G={BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3};function _(){return"1,234"===(1234..toLocaleString&&1234..toLocaleString(j.a))}function B(t,e,n){var r=function(t){try{var e=t.replace(/_/,"-");return Intl.NumberFormat(e),e}catch(t){return"en-GB"}}(n),o=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").toUpperCase();return Object.prototype.hasOwnProperty.call(G,t)?G[t]:2}(e),a=_()?1e4.toLocaleString(r)[2]:",",u=function(t){return _()?1.1.toLocaleString(t)[1]:"."}(r),c=(t?"".concat(t):"").replace(new RegExp("\\".concat(a),"g"),"").replace(new RegExp("\\".concat(u),"g"),".").replace(/[^0-9.]/g,""),i=parseFloat(parseFloat(c).toFixed(o));return Math.abs(i)}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?U(Object(e),!0).forEach((function(n){N()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E()(t);if(e){var o=E()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C()(this,n)}}var k=function(t){return Object(A.g)(t)||Object(A.f)(t)},X=function(t,e,n){return"number"==typeof t?Object(R.a)(t,e,n):""},W=[I.a.BACKSPACE,I.a.COMMA,I.a.PERIOD,I.a.DOWN,I.a.UP,I.a.LEFT,I.a.RIGHT,I.a.ENTER,I.a.ESCAPE,I.a.TAB],H=[T.a.PERIOD,T.a.COMMA],J=function(t){function e(t){var r;p()(this,e),r=n.call(this,t),N()(y()(r),"isInputAllowedForKeyEvent",(function(t){var e=t.keyCode,n=t.metaKey,r=t.key,o=t.ctrlKey;return Object(A.g)(parseInt(r,10))||n||o||W.includes(e)||H.includes(r)})),N()(y()(r),"handleKeyDown",(function(t){r.isInputAllowedForKeyEvent(t)||t.preventDefault()})),N()(y()(r),"handlePaste",(function(t){var e=(t.clipboardData||window.clipboardData).getData("text"),n=Object(A.c)(e)?null:B(e,r.props.selectedCurrency.currency,r.state.locale);k(n)&&(r.setState({formattedAmount:n}),r.props.onAmountChange(n)),t.preventDefault()})),N()(y()(r),"onAmountChange",(function(t){var e=t.target.value;r.setState({formattedAmount:e});var n=Object(A.c)(e)?null:B(e,r.props.selectedCurrency.currency,r.state.locale);k(n)&&r.props.onAmountChange(n)})),N()(y()(r),"onAmountBlur",(function(){r.amountFocused=!1,r.setAmount()})),N()(y()(r),"onAmountFocus",(function(){r.amountFocused=!0})),N()(y()(r),"handleSelectChange",(function(t){r.handleSearchChange(""),r.props.onCustomAction&&"CUSTOM_ACTION"===t.value?r.props.onCustomAction():r.props.onCurrencyChange(t)})),N()(y()(r),"handleSearchChange",(function(t){r.setState({searchQuery:t}),r.props.onSearchChange&&r.props.onSearchChange({searchQuery:t,filteredOptions:Y(r.props.currencies,t)})})),N()(y()(r),"style",(function(t){return r.props.classNames[t]||t}));var o=r.props.intl.locale;return r.formatMessage=r.props.intl.formatMessage,r.state={searchQuery:"",formattedAmount:X(t.amount,t.selectedCurrency.currency,o),locale:o},r}g()(e,t);var n=K(e);return h()(e,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){var e,n;(this.setState({locale:null===t||void 0===t||null===(e=t.intl)||void 0===e?void 0:e.locale}),this.amountFocused)||this.setState({formattedAmount:X(t.amount,t.selectedCurrency.currency,null===t||void 0===t||null===(n=t.intl)||void 0===n?void 0:n.locale)})}},{key:"getSelectOptions",value:function(){var t=s()(Y(this.props.currencies,this.state.searchQuery));return this.props.onCustomAction&&t.push({value:"CUSTOM_ACTION",label:this.props.customActionLabel}),t}},{key:"setAmount",value:function(){var t=this;this.setState((function(e){var n=B(e.formattedAmount,t.props.selectedCurrency.currency,t.state.locale);return k(n)?{formattedAmount:X(n,t.props.selectedCurrency.currency,e.locale)}:{formattedAmount:e.formattedAmount}}))}},{key:"render",value:function(){var t=this.props,e=t.selectedCurrency,n=t.onCurrencyChange,r=t.size,o=t.addon,a=this.getSelectOptions(),c=!this.state.searchQuery&&(1===a.length&&a[0].currency===e.currency||!n),i=!this.props.onAmountChange;return u.a.createElement("div",{className:w()(this.style("tw-money-input"),this.style("input-group"),this.style("input-group-".concat(r)))},u.a.createElement("input",{id:this.props.id,value:this.state.formattedAmount,type:"text",inputMode:"decimal",className:w()(this.style("form-control")),onKeyDown:this.handleKeyDown,onChange:this.onAmountChange,onFocus:this.onAmountFocus,onBlur:this.onAmountBlur,onPaste:this.handlePaste,disabled:i,placeholder:X(this.props.placeholder,this.props.selectedCurrency.currency,this.state.locale),autoComplete:"off"}),o&&u.a.createElement("span",{className:w()(this.style("input-group-addon"),this.style("input-".concat(r)),i?this.style("tw-money-input--disabled"):"")},o),c?u.a.createElement("div",{className:w()(this.style("input-group-addon"),this.style("input-".concat(r)),this.style("tw-money-input__fixed-currency"),i?this.style("tw-money-input--disabled"):"")},"lg"===r&&u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:w()(this.style("tw-money-input__keyline"))}),u.a.createElement("i",{className:w()(this.style("currency-flag"),this.style("currency-flag-".concat(e.currency.toLowerCase())),this.style("hidden-xs"),this.style("m-r-2"))})),u.a.createElement("span",{className:"lg"===r?this.style("m-r-1"):""},e.currency.toUpperCase())):u.a.createElement("div",{className:w()(this.style("input-group-btn"),this.style("amount-currency-select-btn"))},u.a.createElement(D.a,{classNames:this.props.classNames,options:a,selected:V(V({},e),{},{note:null}),onChange:this.handleSelectChange,placeholder:this.formatMessage(x.selectPlaceholder),searchPlaceholder:this.props.searchPlaceholder,onSearchChange:this.handleSearchChange,searchValue:this.state.searchQuery,size:r,required:!0,dropdownRight:"xs",dropdownWidth:"lg",inverse:!0})))}}]),e}(a.Component);function Y(t,e){return e?function(t,e){return t.sort((function(t,n){var r=Q(t.label,e),o=Q(n.label,e);return r&&o?0:r?-1:o?1:0}))}(function(t){var e=[],n=[];return t.forEach((function(t){t.value&&-1===n.indexOf(t.value)&&(e.push(t),n.push(t.value))})),e}(t).filter((function(t){return function(t,e){return!!t.value&&(Q(t.label,e)||Q(t.searchable,e)||Q(t.note,e))}(t,e)})),e):t}function Q(t,e){return t&&-1!==t.toLowerCase().indexOf(e.toLowerCase())}J.defaultProps={id:null,size:L.a.LARGE,addon:null,searchPlaceholder:"",onSearchChange:void 0,onCurrencyChange:null,placeholder:null,amount:null,onAmountChange:null,customActionLabel:"",onCustomAction:null,classNames:{}};var Z=Object(S.c)(J),z=(u.a.createElement,{name:"MoneyInput"}),q={meta:z};function $(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},q,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(i.b,{code:"<>\n  <label htmlFor=\"money-input\">Money input label</label>\n  <MoneyInput\n    id=\"money-input\"\n    amount={1000}\n    size=\"lg\"\n    onAmountChange={value => console.log('amount changed', value)}\n    onCurrencyChange={() => alert('currency changed')}\n    addon={null}\n    searchPlaceholder=\"Type a currency or country\"\n    onCustomAction={() => alert('Custom action')}\n    customActionLabel=\"Custom action label\"\n    currencies={[\n      {\n        header: 'Popular currencies',\n      },\n      {\n        value: 'EUR',\n        label: 'EUR',\n        note: 'Euro',\n        currency: 'eur',\n        searchable: 'Spain, Germany, France, Austria',\n      },\n      {\n        value: 'GBP',\n        label: 'GBP',\n        note: 'British pound',\n        currency: 'gbp',\n        searchable: 'England, Scotland, Wales',\n      },\n    ]}\n    selectedCurrency={{\n      value: 'EUR',\n      label: 'EUR',\n      note: 'Euro',\n      currency: 'eur',\n      searchable: 'Spain, Germany, France, Austria',\n    }}\n  />\n</>;\n",scope:{MoneyInput:Z},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"MoneyInput",mdxType:"GeneratePropsTable"}))}$.isMDXComponent=!0},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),a=n("znGZ"),u=o("forEach"),c=a("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},AXuR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return i}));n("jQ3i"),n("KqXw"),n("MvUL"),n("tVqn");var r="en-GB",o=["he-IL"],a=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function u(t){if(!t||0===t.trim().length)return null;try{return new Intl.Locale(t.trim().replace("_","-")).baseName}catch(t){return console.error(t),null}}function c(t){var e=u(t);if(null===e)return null;try{var n=new Intl.Locale(e).language;return a.includes(n)?n:null}catch(t){return console.error(t),null}}var i=function(t){var e=u(t);if(null===e)return null;try{var n=new Intl.Locale(e).region;return null!==n&&void 0!==n?n:null}catch(t){return console.error(t),null}}},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,o,a=n("DIbr"),u=n("ERkP"),c=n("kQwz");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(o||(o={}));function i(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,u=Object(a.c)(e,["value","children"]),i="string"===typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(i,u):n.formatTimeToParts(i,u))};return e.displayName=o[t],e}function l(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,i=Object(a.c)(e,["value","children"]),l=n[t](r,i);if("function"===typeof o)return o(l);var s=n.textComponent||u.Fragment;return u.createElement(s,null,l)};return e.displayName=r[t],e}function s(t){return t}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),i("formatDate"),i("formatTime")},Ef13:function(t,e,n){"use strict";var r=n("ax0f"),o=n("i7Kn"),a=n("W6AI"),u=n("ovzZ"),c=n("ct80"),i=1..toFixed,l=Math.floor,s=function(t,e,n){return 0===e?n:e%2===1?s(t,e-1,n*t):s(t*t,e/2,n)};r({target:"Number",proto:!0,forced:i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){i.call({})}))},{toFixed:function(t){var e,n,r,c,i=a(this),f=o(t),p=[0,0,0,0,0,0],m="",h="0",d=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*p[n],p[n]=r%1e7,r=l(r/1e7)},y=function(t){for(var e=6,n=0;--e>=0;)n+=p[e],p[e]=l(n/t),n=n%t*1e7},v=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var n=String(p[t]);e=""===e?n:e+u.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(m="-",i=-i),i>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(i*s(2,69,1))-69)<0?i*s(2,-e,1):i/s(2,e,1),n*=4503599627370496,(e=52-e)>0){for(d(0,n),r=f;r>=7;)d(1e7,0),r-=7;for(d(s(10,r,1),0),r=e-1;r>=23;)y(1<<23),r-=23;y(1<<r),d(1,1),y(2),h=v()}else d(0,n),d(1<<-e,0),h=v()+u.call("0",f);return h=f>0?m+((c=h.length)<=f?"0."+u.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f)):m+h}})},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},IA75:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/MoneyInput",function(){return n("/d7r")}])},PjJO:function(t,e,n){var r=n("fVMg")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(o){}}return!1}},W6AI:function(t,e,n){var r=n("amH4");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},b0Hy:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return i}));var r,o={TYPE:"SignificantDigits",MIN_PRECISION:1,MAX_PRECISION:21},a={TYPE:"FractionDigits",MIN_PRECISION:0,MAX_PRECISION:20},u={};function c(t,e){var n=e?""+t+Object.entries(e):t;return u[n]||(u[n]=e?new Intl.NumberFormat(t,e):new Intl.NumberFormat(t)),u[n]}function i(t,e,n,u){if(void 0===e&&(e="en-GB"),void 0===u&&(u="FractionDigits"),!t&&0!==t)return"";"string"==typeof t&&Number(t)&&(t=Number(t));var i=u===o.TYPE?o:a,l=null!=n&&"number"==typeof n&&n>=i.MIN_PRECISION&&n<=i.MAX_PRECISION,s=function(t){try{var e=t.replace(/_/,"-");return Intl.NumberFormat(e),e}catch(t){return"en-GB"}}(e);return function(t){return void 0===r&&(r="object"==typeof Intl&&void 0!==Intl&&"function"==typeof Intl.NumberFormat&&Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.supportedLocalesOf&&Intl.NumberFormat.supportedLocalesOf&&1===Intl.NumberFormat.supportedLocalesOf(t).length),r}(s)?(l?c(s,function(t,e){var n;return(n={})["minimum"+e]=t,n["maximum"+e]=t,n}(n,u)):c(s)).format(t):l?function(t,e,n){return n===o.TYPE?t.toPrecision(e):t.toFixed(e)}(t,n,u):""+t}var l={BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,UGX:0,KES:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3};function s(t,e,n,r){void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1});var o=function(t,e,n){return function(t){return t%1==0}(t)&&!n?0:function(t){void 0===t&&(t="");var e=t.toUpperCase();return Object.prototype.hasOwnProperty.call(l,e)?l[e]:2}(e)}(t,e,r.alwaysShowDecimals),a=t<0,u=i(Math.abs(t),n,o);return a?"- "+u:u}function f(t,e,n,r){return void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1}),s(t,e,n,r)+" "+(e||"").toUpperCase()}var p;var m={},h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y={};function v(t,e,n){return void 0===e&&(e="en-GB"),void 0===p&&(p=function(){try{var t=new Date(2018,11,1);return"01/12/2018"===new Intl.DateTimeFormat("en-GB").format(t)}catch(t){return!1}}()),p?function(t,e){return y[t]||(y[t]=new Map),y[t].has(e)||y[t].set(e,new Intl.DateTimeFormat(t,e)),y[t].get(e)}(function(t){return function(t){return void 0===m[t]&&(m[t]=function(t){try{return Intl.DateTimeFormat.supportedLocalesOf([t]).length>0}catch(t){return!1}}(t)),m[t]}(t)?t:"en-GB"}(e),n).format(t):function t(e,n){void 0===n&&(n={});var r="UTC"===n.timeZone,o=[];if(n.day&&o.push(r?e.getUTCDate():e.getDate()),n.month){var a=function(t,e,n){return"short"===t.month?d[e?n.getUTCMonth():n.getMonth()]:(e?n.getUTCMonth():n.getMonth())+1}(n,r,e);!function(t){return"short"===t.month}(n)?o.push(a):o.unshift(a)}n.year&&o.push(e.getUTCFullYear());var u=function(t){return"short"===t.month?" ":"/"}(n),c=o.join(u);if(n.weekday){var i=h[r?e.getUTCDay():e.getDay()];c=c?i+", "+c:i}return c||t(e,{timeZone:n.timeZone,day:"true",month:"true",year:"true"})}(t,n)}var g;!function(t){t.SECOND="second",t.MINUTE="minute",t.HOUR="hour"}(g||(g={}))},jwue:function(t,e,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},mVF9:function(t,e,n){var r=n("ct80"),o=n("+/eK");t.exports=function(t){return r((function(){return!!o[t]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[t]()||o[t].name!==t}))}},nuol:function(t,e,n){var r=n("jl0/");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},ovzZ:function(t,e,n){"use strict";var r=n("i7Kn"),o=n("cww3");t.exports="".repeat||function(t){var e=String(o(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},tQbP:function(t,e,n){"use strict";var r=n("ax0f"),o=n("hpdy"),a=n("N9G2"),u=n("ct80"),c=n("f4p7"),i=[],l=i.sort,s=u((function(){i.sort(void 0)})),f=u((function(){i.sort(null)})),p=c("sort");r({target:"Array",proto:!0,forced:s||!f||!p},{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),o(t))}})},tVqn:function(t,e,n){"use strict";var r=n("ax0f"),o=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return o(this)}})},x4t0:function(t,e,n){"use strict";var r=n("ax0f"),o=n("nuol"),a=n("cww3");r({target:"String",proto:!0,forced:!n("PjJO")("includes")},{includes:function(t){return!!~String(a(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})}},[["IA75",0,1,2,6,3,5,7,8,9,10,12,4]]]);