_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[59],{"+KRd":function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).NEGATIVE="negative",a.NEUTRAL="neutral",a.POSITIVE="positive",a.WARNING="warning",a.INFO="info",a.ERROR="error",a.SUCCESS="success"},"+KXO":function(e,t,n){var r=n("ax0f"),a=n("N9G2"),o=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){o(1)}))},{keys:function(e){return o(a(e))}})},"+hYS":function(e,t){e.exports="/neptune-web/branch/date-lookup-defaultState/_next/static/images/button-release-mar-2021_1-8bff36698c2882c7995ea31775a1e951.png"},"+oxZ":function(e,t,n){var r=n("9JhN"),a=n("Ew2P"),o=n("6OVi"),i=n("WxKw");for(var u in a){var l=r[u],s=l&&l.prototype;if(s&&s.forEach!==o)try{i(s,"forEach",o)}catch(c){s.forEach=o}}},"0FSu":function(e,t,n){var r=n("IRf+"),a=n("g6a+"),o=n("N9G2"),i=n("tJVe"),u=n("aoZ+"),l=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,c=4==e,f=6==e,d=7==e,p=5==e||f;return function(m,h,v,y){for(var g,b,w=o(m),E=a(w),T=r(h,v,3),N=i(E.length),A=0,R=y||u,O=t?R(m,N):n||d?R(m,0):void 0;N>A;A++)if((p||A in E)&&(b=T(g=E[A],A,w),e))if(t)O[A]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return A;case 2:l.call(O,g)}else switch(e){case 4:return!1;case 7:l.call(O,g)}return f?-1:s||c?c:O}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),a=n("ct80"),o=n("xt6W"),i=n("dSaG"),u=n("N9G2"),l=n("tJVe"),s=n("2sZ7"),c=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),p=n("T+0C"),m=d("isConcatSpreadable"),h=p>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=f("concat"),y=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(e){var t,n,r,a,o,i=u(this),f=c(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(y(o=-1===t?i:arguments[t])){if(d+(a=l(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&s(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,d++,o)}return f.length=d,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),o=n("lhjL");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},"3g/d":function(e,t,n){"use strict";n("2G9S"),n("jQ3i"),n("+KXO"),n("x4t0");var r=n("ddV6"),a=n.n(r),o=n("KEM+"),i=n.n(o),u=n("ERkP"),l=n.n(u),s=n("O94r"),c=n.n(s),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),p=n("qGsU"),m=n("fO07"),h=n("97Jx"),v=n.n(h),y=n("UTRh"),g=[n("2//c").a.STRONG],b=function(e){return l.a.createElement(y.a,v()({},e,{as:"span",allowList:g,blockList:void 0}))};b.defaultProps={className:void 0};var w,E,T,N=b,A=n("s+Iv"),R=n("uIuh"),O=(w={},i()(w,d.a.SUCCESS,d.a.POSITIVE),i()(w,d.a.INFO,d.a.NEUTRAL),i()(w,d.a.ERROR,d.a.NEGATIVE),w),S=(E={},i()(E,d.a.POSITIVE,f.h),i()(E,d.a.NEUTRAL,f.u),i()(E,d.a.WARNING,f.a),i()(E,d.a.NEGATIVE,f.b),E),x=function e(t){var n=Object(u.useState)(!1),r=a()(n,2),o=r[0],i=r[1],s=t.arrow,f=t.action,d=t.children,h=t.className,v=t.icon,y=t.onDismiss,g=t.message,b=t.type,w=Object(u.useRef)(null),E=Object(R.a)().isRTL;if(s){var T=Object(m.a)(e,s);return l.a.createElement(T,t)}!function(e){var t=e.size,n=e.type;Object(A.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(A.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(I[n],"."),L.includes(n))}(t);var x=O[b]||b,P=S[x],C=v?Object(u.cloneElement)(v,{size:24}):l.a.createElement(P,{size:24});return l.a.createElement("div",{role:"alert",className:c()("alert d-flex","alert-".concat(x),h),onTouchStart:function(){return i(!0)},onTouchEnd:function(e){o&&f&&null!==w&&void 0!==w&&w.current&&!w.current.contains(e.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),i(!1)},onTouchMove:function(){return i(!1)}},C,l.a.createElement("div",{className:c()("alert__message flex-grow-1",{"p-l-2":!E,"p-r-2":E})},l.a.createElement("div",null,d||l.a.createElement(N,null,g)),f&&l.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),y&&l.a.createElement(p.a,{onClick:y,size:16,className:"m-l-2",ref:w}))},I=(T={},i()(T,d.a.SUCCESS,"Sentiment.POSITIVE"),i()(T,d.a.INFO,"Sentiment.NEUTRAL"),i()(T,d.a.ERROR,"Sentiment.NEGATIVE"),T),L=Object.keys(O);x.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:d.a.NEUTRAL};t.a=x},"6OVi":function(e,t,n){"use strict";var r=n("0FSu").forEach,a=n("f4p7"),o=n("znGZ"),i=a("forEach"),u=o("forEach");e.exports=i&&u?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l}));n("jQ3i"),n("KqXw"),n("MvUL"),n("tVqn");var r="en-GB",a=["he-IL"],o=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function i(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function u(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return o.includes(n)?n:null}catch(e){return console.error(e),null}}var l=function(e){var t=i(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,a,o=n("DIbr"),i=n("ERkP"),u=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));function l(e){var t=function(t){var n=Object(u.a)(),r=t.value,a=t.children,i=Object(o.c)(t,["value","children"]),l="string"===typeof r?new Date(r||0):r;return a("formatDate"===e?n.formatDateToParts(l,i):n.formatTimeToParts(l,i))};return t.displayName=a[e],t}function s(e){var t=function(t){var n=Object(u.a)(),r=t.value,a=t.children,l=Object(o.c)(t,["value","children"]),s=n[e](r,l);if("function"===typeof a)return a(s);var c=n.textComponent||i.Fragment;return i.createElement(c,null,s)};return t.displayName=r[e],t}function c(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),l("formatDate"),l("formatTime")},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},F63i:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],c=!1,f=-1;function d(){c&&l&&(c=!1,l.length?s=l.concat(s):f=-1,s.length&&p())}function p(){if(!c){var e=u(d);c=!0;for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run();f=-1,t=s.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},GJtw:function(e,t,n){var r=n("ct80"),a=n("fVMg"),o=n("T+0C"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HFyK:function(e,t,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),i=n.n(o),u=n("O94r"),l=n.n(u),s=(n("jwue"),n("+oxZ"),{threshold:.1}),c=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var n=Object(o.useState)(!1),r=a()(n,2),i=r[0],u=r[1],l=function(e,n){e.forEach((function(e){e.isIntersecting&&(u(!0),n.unobserve(t.current))}))};return Object(o.useEffect)((function(){var e,n=!1;return window.IntersectionObserver&&t&&t.current?!n&&(e=new IntersectionObserver(l,s)).observe(t.current):u(!0),function(){n=!0,e&&e.unobserve(t.current)}}),[t]),[i]},f=(n("PkpH"),function(e){var t=e.id,n=e.src,r=e.alt,u=e.onLoad,s=e.onError,f=e.className,d=e.loading,p=e.stretch,m=e.shrink,h=Object(o.useRef)(),v=c({elRef:h,loading:d}),y=a()(v,1)[0],g=n,b=u;return"lazy"!==d||y||(g="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",b=null),i.a.createElement("img",{id:t,alt:r,src:g,className:l()(["tw-image",{"tw-image__stretch":p,"tw-image__shrink":m},f]),ref:h,onLoad:b,onError:s})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},HvbW:function(e,t){e.exports="/neptune-web/branch/date-lookup-defaultState/_next/static/images/button-release-mar-2021_2-f33716f87a41c76315aabf3eed7195c4.png"},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},KcoV:function(e,t,n){},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Qq5L:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n("ERkP"),a=n.n(r),o=n("3g/d"),i=n("HFyK"),u=n("+KRd"),l=n("+hYS"),s=n.n(l),c=n("HvbW"),f=n.n(c),d=a.a.createElement,p={name:"Button Upgrade Guide",date:"2021-03-09",authors:[{name:"Helen Durrant",githubUsername:"helendurranttw"}],hidden:!0};function m(){return d("div",{className:"d-flex flex-column"},d(o.a,{className:"m-y-2",message:"These changes will be released in components **v35**. See the Button designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@31.4.2-beta.48"}),d("p",null,"We have made some changes to our buttons to address inconsistencies across platforms, and to update our types to reflect our new standard of using semantic colours. This guide will provide the necessary steps to upgrade to the latest version."),d("p",null,d("strong",null,"Note:")," For most people your buttons will continue to work without any changes - however you will see deprecation warnings asking you to update prop usage."),d("p",null,d("a",{href:"#steps-to-upgrade"},"Skip to the upgrade steps.")),d("h2",null,"Changes"),d("h3",{className:"m-t-4 m-b-1"},"Type has been split into Type + Priority"),d("p",null,"Our old types:",d("ul",{className:"m-t-1"},d("li",null,"PRIMARY"),d("li",null,"SECONDARY"),d("li",null,"PAY"),d("li",null,"DANGER"),d("li",null,"LINK")),"were a mix of colours and weights. We have deprecated these and introduced two props: TYPE and PRIORITY.",d("br",null)," These are the possible options:",d("ul",{className:"m-t-1"},d("li",null,d("strong",null,"TYPE:")," ACCENT, POSITIVE and NEGATIVE"),d("li",null,d("strong",null,"PRIORITY:")," PRIMARY, SECONDARY and TERTIARY")),d("br",null),"TYPE maps to different colours and semantic use cases. PRIORITY varies the weight or impact of the component. PRIMARY buttons are filled to draw the user\u2019s attention, SECONDARY are outlined, and TERTIARY are text only (currently only supported with type ACCENT)."),d("br",null),d("div",{style:{maxWidth:"500px"},className:"align-self-center m-y-2"},d(i.a,{src:s.a,loading:"lazy",stretch:!1,alt:"button types"})),d("h3",{className:"m-t-4 m-b-1"},"Negative (a.k.a danger) buttons are now always red"),d(o.a,{className:"m-y-2",type:"warning",message:"**VISUAL CHANGE**"}),d("p",null,"We have updated the secondary negative button (previously the danger button) to have a red outline, not grey. This rectifies a longstanding inconsistency across platforms, and gives users a clearer indication that this button will produce a destructive action. See the before and after:"),d("div",{style:{maxWidth:"300px"},className:"align-self-center m-y-2"},d(i.a,{src:f.a,loading:"lazy",stretch:!1,alt:"secondary negative button"})),d("h3",{className:"m-t-4 m-b-1"},"Moved social media button classes out of the Neptune CSS bundle"),d(o.a,{className:"m-y-2",type:u.a.NEGATIVE,message:"Breaking change"}),d("p",null,"Neptune CSS contains the Google and Facebook logos. These are used very rarely, and add unnecessary weight to most people\u2019s bundles. We have separated these into a new, optional file: ",d("code",null,"neptune-social-media.css"),"."),d("h3",{className:"m-t-4 m-b-1"},"Removed the .btn-download class from Neptune CSS"),d(o.a,{className:"m-y-2",type:u.a.NEGATIVE,message:"Breaking change"}),"We have removed styling for an unused button type - the download button",d("code",null,".btn-download"),d("br",null)," ",d("strong",null,"We don\u2019t believe anyone is using this"),".",d("h2",{className:"m-t-4 m-b-1",id:"steps-to-upgrade"},"Steps to upgrade"),d("h3",{className:"m-t-4 m-b-1"},"1: Import social-media css if required"),d(o.a,{className:"m-y-2",message:"Most people will not need to follow this step."}),"If you have social media buttons that use either of the"," ",d("ul",null,d("li",null,d("code",null,".btn-google")),d("li",null,d("code",null,".btn-facebook"))),"classes, you will now need to import ",d("code",{className:"m-y-2"},"neptune-social-media.css")," ","after ",d("code",{className:"m-t-2"},"neptune.css"),d("pre",null,"import '@transferwise/neptune-css/dist/css/neptune.css';",d("br",null),"import '@transferwise/neptune-css/dist/css/neptune-social-media.css';"),d("h3",{className:"m-t-4 m-b-1"},"2: Update prop usage for Buttons"),d("strong",null,"Note:")," Buttons will continue to work without this step, but you will see deprecation warnings being logged if you are still using old types. If you are using any of the old types listed below, you will need to update the type and add the new priority. Buttons without a type can be left alone (the defaults will still work).",d(o.a,{className:"m-y-2",type:u.a.POSITIVE,message:"**We have created a tool that will perform these mappings for you.** Simply update to the latest version of components and run yarn run neptune-upgrade-util. Choose the upgrade script 2021-02-v34-35.js and follow the instructions to run the script on your source folder."}),d("p",null,"If you prefer to do these manually, you can update as per the table below:"),d("table",{className:"docs-table table m-t-1"},d("thead",null,d("tr",null,d("th",null,"Type (old)"),d("th",null,"Type (new)"),d("th",null,"Priority (new)"))),d("tbody",null,d("tr",null,d("td",null,"PRIMARY"),d("td",null,"ACCENT"),d("td",null,"PRIMARY (can be left off, as PRIMARY is the default)")),d("tr",null,d("td",null,"PAY"),d("td",null,"POSITIVE"),d("td",null,"PRIMARY (can be left off, as PRIMARY is the default)")),d("tr",null,d("td",null,"SECONDARY"),d("td",null,"ACCENT"),d("td",null,"SECONDARY")),d("tr",null,d("td",null,"DANGER"),d("td",null,"NEGATIVE"),d("td",null,"SECONDARY")),d("tr",null,d("td",null,"LINK"),d("td",null,"ACCENT"),d("td",null,"TERTIARY")))),d("p",null,"For example:"),d("pre",null,"<Button type={Button.Type.SECONDARY}>Secondary</Button>",d("br",null),"<Button type={Button.Type.PAY}>Pay</Button>"),"Becomes:",d("pre",null,"<Button type={Button.Type.ACCENT} priority={Button.Priority.SECONDARY}>Secondary</Button>",d("br",null),"<Button type={Button.Type.POSITIVE}>Pay</Button>"),d("h2",null,"Dependency requirements"),d("pre",null,"@transferwise/components >= 35.x.x",d("br",null),"@transferwise/neptune-css >= 9.x.x"))}},"T+0C":function(e,t,n){var r,a,o=n("9JhN"),i=n("ZORK"),u=o.process,l=u&&u.versions,s=l&&l.v8;s?a=(r=s.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));n("vrRf");var r=n("ERkP"),a=n.n(r),o=n("AXuR"),i=a.a.createContext("ltr"),u=function(e){var t=e.locale,n=e.children;return a.a.createElement(i.Provider,{value:-1<o.b.indexOf(t)?"rtl":"ltr"},n)};u.defaultProps={children:null,locale:o.a}},XU0q:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).TOP_LEFT="up-left",a.TOP="up-center",a.TOP_RIGHT="up-right",a.BOTTOM_LEFT="down-left",a.BOTTOM="down-center",a.BOTTOM_RIGHT="down-right"},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,t,n){var r=n("dSaG"),a=n("xt6W"),o=n("fVMg")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},fO07:function(e,t,n){"use strict";n("2G9S");var r=n("97Jx"),a=n.n(r),o=n("ERkP"),i=n.n(o),u=n("O94r"),l=n.n(u),s=n("XU0q");function c(e){if(e){var t=["arrow"],n=s.a.BOTTOM,r=s.a.BOTTOM_LEFT,a=s.a.BOTTOM_RIGHT,o=s.a.TOP,i=s.a.TOP_RIGHT,u=s.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case a:return t.concat("arrow-bottom","arrow-right");case o:return t.concat("arrow-center");case i:return t.concat("arrow-right");case u:default:return t}}return""}t.a=function(e,t){var n=function(n){return i.a.createElement(e,a()({},n,{className:l()(n.className,c(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},"jl0/":function(e,t,n){var r=n("dSaG"),a=n("amH4"),o=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},jwue:function(e,t,n){"use strict";var r=n("ax0f"),a=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},lpmq:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},mVF9:function(e,t,n){var r=n("ct80"),a=n("+/eK");e.exports=function(e){return r((function(){return!!a[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||a[e].name!==e}))}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),u=n("kQwz"),l=n("/Vl7"),s=n("BAoe"),c=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(e,t){var n=Object(u.a)(),r=e.onClick,o=e.className,s=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},o),"aria-label":n.formatMessage(c.ariaLabel),onClick:r},a.a.createElement(l.l,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},rdLm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-03-09-button-upgrade-guide",function(){return n("Qq5L")}])},tVqn:function(e,t,n){"use strict";var r=n("ax0f"),a=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return a(this)}})},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n("X+oG"),o=function(){var e=Object(r.useContext)(a.a);return{direction:e,isRTL:"rtl"===e}}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}}},[["rdLm",0,1,6,5,7,8,11,4]]]);