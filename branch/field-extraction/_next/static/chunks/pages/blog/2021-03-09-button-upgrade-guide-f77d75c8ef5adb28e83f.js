_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[59],{"+KRd":function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).NEGATIVE="negative",o.NEUTRAL="neutral",o.POSITIVE="positive",o.WARNING="warning",o.INFO="info",o.ERROR="error",o.SUCCESS="success"},"+KXO":function(e,t,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(e){return a(o(e))}})},"+hYS":function(e,t){e.exports="/neptune-web/branch/field-extraction/_next/static/images/button-release-mar-2021_1-8bff36698c2882c7995ea31775a1e951.png"},"+oxZ":function(e,t,n){var r=n("9JhN"),o=n("Ew2P"),a=n("6OVi"),i=n("WxKw");for(var u in o){var s=r[u],l=s&&s.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(c){l.forEach=a}}},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),i=n("tJVe"),u=n("aoZ+"),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,c=4==e,f=6==e,d=7==e,p=5==e||f;return function(m,h,y,v){for(var g,b,w=a(m),E=o(w),T=r(h,y,3),N=i(E.length),x=0,A=v||u,R=t?A(m,N):n||d?A(m,0):void 0;N>x;x++)if((p||x in E)&&(b=T(g=E[x],x,w),e))if(t)R[x]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return x;case 2:s.call(R,g)}else switch(e){case 4:return!1;case 7:s.call(R,g)}return f?-1:l||c?c:R}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),i=n("dSaG"),u=n("N9G2"),s=n("tJVe"),l=n("2sZ7"),c=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),p=n("T+0C"),m=d("isConcatSpreadable"),h=p>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=f("concat"),v=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(e){var t,n,r,o,a,i=u(this),f=c(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(v(a=-1===t?i:arguments[t])){if(d+(o=s(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in a&&l(f,d,a[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,d++,a)}return f.length=d,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),a=n("lhjL");e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},"3g/d":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("KEM+"),i=n.n(a),u=(n("+KXO"),n("2G9S"),n("jQ3i"),n("x4t0"),n("ERkP")),s=n.n(u),l=n("O94r"),c=n.n(l),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),p=n("qGsU"),m=n("fO07"),h=n("97Jx"),y=n.n(h),v=n("UTRh"),g=[n("2//c").a.STRONG],b=function(e){return s.a.createElement(v.a,y()({},e,{as:"span",allowList:g,blockList:void 0}))};b.defaultProps={className:void 0};var w,E,T,N=b,x=n("s+Iv"),A=n("uIuh"),R=(w={},i()(w,d.a.SUCCESS,d.a.POSITIVE),i()(w,d.a.INFO,d.a.NEUTRAL),i()(w,d.a.ERROR,d.a.NEGATIVE),w),O=(E={},i()(E,d.a.POSITIVE,f.h),i()(E,d.a.NEUTRAL,f.u),i()(E,d.a.WARNING,f.a),i()(E,d.a.NEGATIVE,f.b),E),S=function e(t){var n=Object(u.useState)(!1),r=o()(n,2),a=r[0],i=r[1],l=t.arrow,f=t.action,d=t.children,h=t.className,y=t.icon,v=t.onDismiss,g=t.message,b=t.type,w=Object(u.useRef)(null),E=Object(A.a)().isRTL;if(l){var T=Object(m.a)(e,l);return s.a.createElement(T,t)}!function(e){var t=e.size,n=e.type;Object(x.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(x.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(I[n],"."),L.includes(n))}(t);var S=R[b]||b,P=O[S],C=y?Object(u.cloneElement)(y,{size:24}):s.a.createElement(P,{size:24});return s.a.createElement("div",{role:"alert",className:c()("alert d-flex","alert-".concat(S),h),onTouchStart:function(){return i(!0)},onTouchEnd:function(e){a&&f&&null!==w&&void 0!==w&&w.current&&!w.current.contains(e.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),i(!1)},onTouchMove:function(){return i(!1)}},C,s.a.createElement("div",{className:c()("alert__message flex-grow-1",{"p-l-2":!E,"p-r-2":E})},s.a.createElement("div",null,d||s.a.createElement(N,null,g)),f&&s.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),v&&s.a.createElement(p.a,{onClick:v,size:16,className:"m-l-2",ref:w}))},I=(T={},i()(T,d.a.SUCCESS,"Sentiment.POSITIVE"),i()(T,d.a.INFO,"Sentiment.NEUTRAL"),i()(T,d.a.ERROR,"Sentiment.NEGATIVE"),T),L=Object.keys(R);S.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:d.a.NEUTRAL};t.a=S},"6OVi":function(e,t,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7")("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return s}));n("tVqn"),n("KqXw"),n("MvUL"),n("jQ3i");var r="en-GB",o=["he-IL"],a=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function i(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function u(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return a.includes(n)?n:null}catch(e){return console.error(e),null}}var s=function(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o,a=n("D57K"),i=n("ERkP"),u=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));function s(e){var t=function(t){var n=Object(u.a)(),r=t.value,o=t.children,i=Object(a.c)(t,["value","children"]),s="string"===typeof r?new Date(r||0):r;return o("formatDate"===e?n.formatDateToParts(s,i):n.formatTimeToParts(s,i))};return t.displayName=o[e],t}function l(e){var t=function(t){var n=Object(u.a)(),r=t.value,o=t.children,s=Object(a.c)(t,["value","children"]),l=n[e](r,s);if("function"===typeof o)return o(l);var c=n.textComponent||i.Fragment;return i.createElement(c,null,l)};return t.displayName=r[e],t}function c(e){return e}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),s("formatDate"),s("formatTime")},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},F63i:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,l=[],c=!1,f=-1;function d(){c&&s&&(c=!1,s.length?l=s.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=u(d);c=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GJtw:function(e,t,n){var r=n("ct80"),o=n("fVMg"),a=n("T+0C"),i=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HFyK:function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n.n(a),u=n("O94r"),s=n.n(u),l=(n("+oxZ"),{threshold:.1}),c=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var n=Object(a.useState)(!1),r=o()(n,2),i=r[0],u=r[1],s=function(e,n){e.forEach((function(e){e.isIntersecting&&(u(!0),n.unobserve(t.current))}))};return Object(a.useEffect)((function(){var e,n=!1;return window.IntersectionObserver&&t&&t.current?!n&&(e=new IntersectionObserver(s,l)).observe(t.current):u(!0),function(){n=!0,e&&e.unobserve(t.current)}}),[t]),[i]},f=(n("PkpH"),function(e){var t=e.id,n=e.src,r=e.alt,u=e.onLoad,l=e.onError,f=e.className,d=e.loading,p=e.stretch,m=e.shrink,h=Object(a.useRef)(),y=c({elRef:h,loading:d}),v=o()(y,1)[0],g=n,b=u;return"lazy"!==d||v||(g="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",b=null),i.a.createElement("img",{id:t,alt:r,src:g,className:s()(["tw-image",{"tw-image__stretch":p,"tw-image__shrink":m},f]),ref:h,onLoad:b,onError:l})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},HvbW:function(e,t){e.exports="/neptune-web/branch/field-extraction/_next/static/images/button-release-mar-2021_2-f33716f87a41c76315aabf3eed7195c4.png"},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},KcoV:function(e,t,n){},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Qq5L:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n("ERkP"),o=n.n(r),a=n("3g/d"),i=n("HFyK"),u=n("+KRd"),s=n("+hYS"),l=n.n(s),c=n("HvbW"),f=n.n(c),d=o.a.createElement,p={name:"Button Upgrade Guide",date:"2021-03-09",authors:[{name:"Helen Durrant",githubUsername:"helendurranttw"}],hidden:!0};function m(){return d("div",{className:"d-flex flex-column"},d(a.a,{className:"m-y-2",message:"These changes will be released in components **v35**. See the Button designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@31.4.2-beta.48"}),d("p",null,"We have made some changes to our buttons to address inconsistencies across platforms, and to update our types to reflect our new standard of using semantic colours. This guide will provide the necessary steps to upgrade to the latest version."),d("p",null,d("strong",null,"Note:")," For most people your buttons will continue to work without any changes - however you will see deprecation warnings asking you to update prop usage."),d("p",null,d("a",{href:"#steps-to-upgrade"},"Skip to the upgrade steps.")),d("h2",null,"Changes"),d("h3",{className:"m-t-4 m-b-1"},"Type has been split into Type + Priority"),d("p",null,"Our old types:",d("ul",{className:"m-t-1"},d("li",null,"PRIMARY"),d("li",null,"SECONDARY"),d("li",null,"PAY"),d("li",null,"DANGER"),d("li",null,"LINK")),"were a mix of colours and weights. We have deprecated these and introduced two props: TYPE and PRIORITY.",d("br",null)," These are the possible options:",d("ul",{className:"m-t-1"},d("li",null,d("strong",null,"TYPE:")," ACCENT, POSITIVE and NEGATIVE"),d("li",null,d("strong",null,"PRIORITY:")," PRIMARY, SECONDARY and TERTIARY")),d("br",null),"TYPE maps to different colours and semantic use cases. PRIORITY varies the weight or impact of the component. PRIMARY buttons are filled to draw the user\u2019s attention, SECONDARY are outlined, and TERTIARY are text only (currently only supported with type ACCENT)."),d("br",null),d("div",{style:{maxWidth:"500px"},className:"align-self-center m-y-2"},d(i.a,{src:l.a,loading:"lazy",stretch:!1,alt:"button types"})),d("h3",{className:"m-t-4 m-b-1"},"Negative (a.k.a danger) buttons are now always red"),d(a.a,{className:"m-y-2",type:"warning",message:"**VISUAL CHANGE**"}),d("p",null,"We have updated the secondary negative button (previously the danger button) to have a red outline, not grey. This rectifies a longstanding inconsistency across platforms, and gives users a clearer indication that this button will produce a destructive action. See the before and after:"),d("div",{style:{maxWidth:"300px"},className:"align-self-center m-y-2"},d(i.a,{src:f.a,loading:"lazy",stretch:!1,alt:"secondary negative button"})),d("h3",{className:"m-t-4 m-b-1"},"Moved social media button classes out of the Neptune CSS bundle"),d(a.a,{className:"m-y-2",type:u.a.NEGATIVE,message:"Breaking change"}),d("p",null,"Neptune CSS contains the Google and Facebook logos. These are used very rarely, and add unnecessary weight to most people\u2019s bundles. We have separated these into a new, optional file: ",d("code",null,"neptune-social-media.css"),"."),d("h3",{className:"m-t-4 m-b-1"},"Removed the .btn-download class from Neptune CSS"),d(a.a,{className:"m-y-2",type:u.a.NEGATIVE,message:"Breaking change"}),"We have removed styling for an unused button type - the download button",d("code",null,".btn-download"),d("br",null)," ",d("strong",null,"We don\u2019t believe anyone is using this"),".",d("h2",{className:"m-t-4 m-b-1",id:"steps-to-upgrade"},"Steps to upgrade"),d("h3",{className:"m-t-4 m-b-1"},"1: Import social-media css if required"),d(a.a,{className:"m-y-2",message:"Most people will not need to follow this step."}),"If you have social media buttons that use either of the"," ",d("ul",null,d("li",null,d("code",null,".btn-google")),d("li",null,d("code",null,".btn-facebook"))),"classes, you will now need to import ",d("code",{className:"m-y-2"},"neptune-social-media.css")," ","after ",d("code",{className:"m-t-2"},"neptune.css"),d("pre",null,"import '@transferwise/neptune-css/dist/css/neptune.css';",d("br",null),"import '@transferwise/neptune-css/dist/css/neptune-social-media.css';"),d("h3",{className:"m-t-4 m-b-1"},"2: Update prop usage for Buttons"),d("strong",null,"Note:")," Buttons will continue to work without this step, but you will see deprecation warnings being logged if you are still using old types. If you are using any of the old types listed below, you will need to update the type and add the new priority. Buttons without a type can be left alone (the defaults will still work).",d(a.a,{className:"m-y-2",type:u.a.POSITIVE,message:"**We have created a tool that will perform these mappings for you.** Simply update to the latest version of components and run yarn run neptune-upgrade-util. Choose the upgrade script 2021-02-v34-35.js and follow the instructions to run the script on your source folder."}),d("p",null,"If you prefer to do these manually, you can update as per the table below:"),d("table",{className:"docs-table table m-t-1"},d("thead",null,d("tr",null,d("th",null,"Type (old)"),d("th",null,"Type (new)"),d("th",null,"Priority (new)"))),d("tbody",null,d("tr",null,d("td",null,"PRIMARY"),d("td",null,"ACCENT"),d("td",null,"PRIMARY (can be left off, as PRIMARY is the default)")),d("tr",null,d("td",null,"PAY"),d("td",null,"POSITIVE"),d("td",null,"PRIMARY (can be left off, as PRIMARY is the default)")),d("tr",null,d("td",null,"SECONDARY"),d("td",null,"ACCENT"),d("td",null,"SECONDARY")),d("tr",null,d("td",null,"DANGER"),d("td",null,"NEGATIVE"),d("td",null,"SECONDARY")),d("tr",null,d("td",null,"LINK"),d("td",null,"ACCENT"),d("td",null,"TERTIARY")))),d("p",null,"For example:"),d("pre",null,"<Button type={Button.Type.SECONDARY}>Secondary</Button>",d("br",null),"<Button type={Button.Type.PAY}>Pay</Button>"),"Becomes:",d("pre",null,"<Button type={Button.Type.ACCENT} priority={Button.Priority.SECONDARY}>Secondary</Button>",d("br",null),"<Button type={Button.Type.POSITIVE}>Pay</Button>"),d("h2",null,"Dependency requirements"),d("pre",null,"@transferwise/components >= 35.x.x",d("br",null),"@transferwise/neptune-css >= 9.x.x"))}},Ua7V:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("ERkP"),o=n.n(r),a=n("AXuR"),i=o.a.createContext("ltr"),u=function(e){var t=e.locale,n=e.children;return o.a.createElement(i.Provider,{value:-1<a.b.indexOf(t)?"rtl":"ltr"},n)};u.defaultProps={children:null,locale:a.a}},XU0q:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).TOP_LEFT="up-left",o.TOP="up-center",o.TOP_RIGHT="up-right",o.BOTTOM_LEFT="down-left",o.BOTTOM="down-center",o.BOTTOM_RIGHT="down-right"},YAkj:function(e,t,n){var r=n("1Mu/"),o=n("DEeE"),a=n("N4z3"),i=n("4Sk5").f,u=function(e){return function(t){for(var n,u=a(t),s=o(u),l=s.length,c=0,f=[];l>c;)n=s[c++],r&&!i.call(u,n)||f.push(e?[n,u[n]]:u[n]);return f}};e.exports={entries:u(!0),values:u(!1)}},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},f4p7:function(e,t,n){"use strict";var r=n("ct80");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},fO07:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=(n("2G9S"),n("ERkP")),i=n.n(a),u=n("O94r"),s=n.n(u),l=n("XU0q");function c(e){if(e){var t=["arrow"],n=l.a.BOTTOM,r=l.a.BOTTOM_LEFT,o=l.a.BOTTOM_RIGHT,a=l.a.TOP,i=l.a.TOP_RIGHT,u=l.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case o:return t.concat("arrow-bottom","arrow-right");case a:return t.concat("arrow-center");case i:return t.concat("arrow-right");case u:default:return t}}return""}t.a=function(e,t){var n=function(n){return i.a.createElement(e,o()({},n,{className:s()(n.className,c(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=t(n)?e.isRequired:e;return a.apply(this,arguments)}}},"jl0/":function(e,t,n){var r=n("dSaG"),o=n("amH4"),a=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},lpmq:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},mVF9:function(e,t,n){var r=n("ct80"),o=n("+/eK");e.exports=function(e){return r((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),u=n("kQwz"),s=n("/Vl7"),l=n("BAoe"),c=Object(l.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(e,t){var n=Object(u.a)(),r=e.onClick,a=e.className,l=e.size;return o.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":l===f.Size.LARGE},a),"aria-label":n.formatMessage(c.ariaLabel),onClick:r},o.a.createElement(s.l,{size:l}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},rdLm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-03-09-button-upgrade-guide",function(){return n("Qq5L")}])},tVqn:function(e,t,n){"use strict";var r=n("ax0f"),o=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return o(this)}})},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP"),o=n("X+oG"),a=function(){var e=Object(r.useContext)(o.a);return{direction:e,isRTL:"rtl"===e}}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}}},[["rdLm",0,1,6,5,7,9,12,4]]]);