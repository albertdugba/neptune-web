(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"3ZQK":function(e,a,t){"use strict";t.r(a),t.d(a,"defaultLocale",(function(){return b})),t.d(a,"localeOptions",(function(){return d})),t.d(a,"meta",(function(){return v})),t.d(a,"default",(function(){return O}));var n=t("cxan"),r=t("HbGN"),i=t("ERkP"),o=t.n(i),l=t("ZVZ0"),u=t("6sB8"),s=t("Qi1R"),c=t("mqq0"),p=t("RmhF"),m={en:t("p7AC"),de:t("l6dk"),es:t("I+G5"),fr:t("BAW9"),hu:t("RC/W"),id:t("vQkq"),it:t("PlQb"),ja:t("fiUL"),pl:t("elIb"),pt:t("LdYE"),ro:t("GLGp"),ru:t("cPsM"),tr:t("trZC"),"zh-HK":t("On6t")},g=t("BAoe"),f=Object(g.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),b=(o.a.createElement,"en"),d=Object.keys(m).map((function(e){return{value:e,label:e}})),v={name:"Provider"},L={defaultLocale:b,meta:v};function O(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},L,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Provides contextual data such as translations to components. See the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/branch/i18y/about/Setup#usage"}),"usage guide")," for more."),Object(l.a)(s.b,{code:'() => {\n  const [i18n, setI18n] = React.useState({\n    locale: defaultLocale,\n    messages: supportedLanguages[defaultLocale],\n  });\n  const [selectedLocale, setSelectedLocale] = React.useState(localeOptions[0]);\n\n  return (\n    <Provider i18n={i18n}>\n      <label htmlFor="locales">\n        Supported locales:\n      </label>\n      <Select\n        id="locales"\n        selected={selectedLocale}\n        onChange={(item) => {\n          setI18n({ locale: item.value, messages: supportedLanguages[item.value] });\n          setSelectedLocale(item);\n        }}\n        options={localeOptions}\n      />\n      <br /><br />\n      Translated message: <FormattedMessage {...messages.ariaLabel} />\n    </Provider>\n  );\n}\n',scope:{Provider:c.a,Select:p.a,FormattedMessage:u.a,messages:f,supportedLanguages:m,localeOptions:d,defaultLocale:b},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"Provider",mdxType:"GeneratePropsTable"}))}O.isMDXComponent=!0},"6sB8":function(e,a,t){"use strict";var n=t("D57K"),r=t("ERkP"),i=t("ymT0"),o=t("yGPN"),l=t("nChe"),u=t.n(l).a||l,s=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return Object(n.b)(a,e),a.prototype.shouldComponentUpdate=function(e){var a=this.props,t=a.values,r=Object(n.c)(a,["values"]),i=e.values,o=Object(n.c)(e,["values"]);return!u(i,t)||!u(r,o)},a.prototype.render=function(){var e=this;return r.createElement(i.a.Consumer,null,(function(a){Object(o.c)(a);var t=a.formatMessage,i=a.textComponent,l=void 0===i?r.Fragment:i,u=e.props,s=u.id,c=u.description,p=u.defaultMessage,m=u.values,g=u.children,f=u.tagName,b=void 0===f?l:f,d=t({id:s,description:c,defaultMessage:p},m);return Array.isArray(d)||(d=[d]),"function"===typeof g?g(d):b?r.createElement.apply(r,Object(n.d)([b,null],d)):d}))},a.displayName="FormattedMessage",a}(r.Component);a.a=s},BAW9:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},GLGp:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},"I+G5":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},LdYE:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},On6t:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"\u524d\u5f80\u7b2c{pageNumber} \u9801","neptune.PaginationLink.ariaLabel.inactive":"\u7576\u524d\u9801\u9762\uff0c\u7b2c{pageNumber} \u9801"}')},PlQb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},"RC/W":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},cPsM:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},elIb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},fiUL:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},l6dk:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},mqq0:function(e,a,t){"use strict";t("jQ3i"),t("M+/F");var n=t("ERkP"),r=t.n(n),i=t("qiww"),o=t("ueEL"),l=t("ymT0"),u=t("rw2m"),s=["de","en","es","fr","hu","id","it","ja","pl","pt","ro","ru","tr","zh-HK"];function c(e){var a,t=e.i18n,n=e.children,c=Object(i.c)(),p=t.locale,m=t.messages;if(s.includes(p))a={locale:p,messages:m};else{var g=p.slice(0,2);s.includes(g)?a={locale:g,messages:m}:(console.warn("Unsupported locale value was provided: '".concat(p,"', use English by default")),a={locale:"en",messages:u})}var f=Object(o.a)(a,c);return r.a.createElement(l.b,{value:f},n)}c.defaultProps={children:void 0},a.a=c},nChe:function(e,a,t){"use strict";e.exports=function(e,a){if(e===a)return!0;if(!e||!a)return!1;var t=Object.keys(e),n=Object.keys(a),r=t.length;if(n.length!==r)return!1;for(var i=0;i<r;i++){var o=t[i];if(e[o]!==a[o]||!Object.prototype.hasOwnProperty.call(a,o))return!1}return!0}},p7AC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},rw2m:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},trZC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},ueEL:function(e,a,t){"use strict";t.d(a,"a",(function(){return Q}));var n=t("D57K"),r=t("ERkP"),i=t("ymT0"),o=t("yGPN"),l=t("mUED"),u=t("mjvE"),s=t("LYaP"),c=t("PAjK");function p(e,a){return Object.keys(e).reduce((function(t,r){return t[r]=Object(n.a)({timeZone:a},e[r]),t}),{})}function m(e,a){return Object.keys(Object(n.a)(Object(n.a)({},e),a)).reduce((function(t,r){return t[r]=Object(n.a)(Object(n.a)({},e[r]||{}),a[r]||{}),t}),{})}function g(e,a){if(!a)return e;var t=u.a.formats;return Object(n.a)(Object(n.a)(Object(n.a)({},t),e),{date:m(p(t.date,a),p(e.date||{},a)),time:m(p(t.time,a),p(e.time||{},a))})}function f(e,a,t,r){var i=e.locale,o=e.formats,u=e.messages,p=e.defaultLocale,m=e.defaultFormats,f=e.onError,b=e.timeZone,d=e.defaultRichTextElements;void 0===t&&(t={id:""});var v=t.id,L=t.defaultMessage;Object(l.a)(!!v,"[@formatjs/intl] An `id` must be provided to format a message.");var O=String(v),h=u&&Object.prototype.hasOwnProperty.call(u,O)&&u[O];if(Array.isArray(h)&&1===h.length&&h[0].type===c.a.literal)return h[0].value;if(!r&&h&&"string"===typeof h&&!d)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=Object(n.a)(Object(n.a)({},d),r||{}),o=g(o,b),m=g(m,b),!h){if((!L||i&&i.toLowerCase()!==p.toLowerCase())&&f(new s.e(t,i)),L)try{return a.getMessageFormat(L,p,m).format(r)}catch(y){return f(new s.c('Error formatting default message for: "'+O+'", rendering default message verbatim',i,t,y)),"string"===typeof L?L:O}return O}try{return a.getMessageFormat(h,i,o,{formatters:a}).format(r)}catch(y){f(new s.c('Error formatting message: "'+O+'", using '+(L?"default message":"id")+" as fallback.",i,t,y))}if(L)try{return a.getMessageFormat(L,p,m).format(r)}catch(y){f(new s.c('Error formatting the default message for: "'+O+'", rendering message verbatim',i,t,y))}return"string"===typeof h?h:"string"===typeof L?L:O}var b=t("qiww"),d=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function v(e,a,t){var n=e.locale,r=e.formats,i=e.onError;void 0===t&&(t={});var o=t.format,l=o&&Object(b.e)(r,"number",o,i)||{};return a(n,Object(b.d)(t,d,l))}function L(e,a,t,n){void 0===n&&(n={});try{return v(e,a,n).format(t)}catch(r){e.onError(new s.a("FORMAT_ERROR","Error formatting number.",r))}return String(t)}function O(e,a,t,n){void 0===n&&(n={});try{return v(e,a,n).formatToParts(t)}catch(r){e.onError(new s.a("FORMAT_ERROR","Error formatting number.",r))}return[]}var h=t("EOOJ"),y=["numeric","style"];function P(e,a,t,n,r){void 0===r&&(r={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new h.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,a,t){var n=e.locale,r=e.formats,i=e.onError;void 0===t&&(t={});var o=t.format,l=!!o&&Object(b.e)(r,"relative",o,i)||{};return a(n,Object(b.d)(t,y,l))}(e,a,r).format(t,n)}catch(i){e.onError(new s.c("Error formatting relative time.",i))}return String(t)}var j=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function N(e,a,t,r){var i=e.locale,o=e.formats,l=e.onError,u=e.timeZone;void 0===r&&(r={});var s=r.format,c=Object(n.a)(Object(n.a)({},u&&{timeZone:u}),s&&Object(b.e)(o,a,s,l)),p=Object(b.d)(r,j,c);return"time"!==a||p.hour||p.minute||p.second||(p=Object(n.a)(Object(n.a)({},p),{hour:"numeric",minute:"numeric"})),t(i,p)}function E(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"date",a,o).format(l)}catch(u){e.onError(new s.a("FORMAT_ERROR","Error formatting date.",u))}return String(l)}function C(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"time",a,o).format(l)}catch(u){e.onError(new s.a("FORMAT_ERROR","Error formatting time.",u))}return String(l)}function R(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=t[2],l=void 0===o?{}:o,u=e.timeZone,c=e.locale,p=e.onError,m=Object(b.d)(l,j,u?{timeZone:u}:{});try{return a(c,m).formatRange(r,i)}catch(g){p(new s.a("FORMAT_ERROR","Error formatting date time range.",g))}return String(r)}function k(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"date",a,o).formatToParts(l)}catch(u){e.onError(new s.a("FORMAT_ERROR","Error formatting date.",u))}return[]}function T(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"time",a,o).formatToParts(l)}catch(u){e.onError(new s.a("FORMAT_ERROR","Error formatting time.",u))}return[]}var w=["localeMatcher","type"];function S(e,a,t,n){var r=e.locale,i=e.onError;void 0===n&&(n={}),Intl.PluralRules||i(new h.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,w);try{return a(r,o).select(t)}catch(l){i(new s.c("Error formatting plural.",l))}return"other"}var F=["localeMatcher","type","style"],I=Date.now();function M(e,a,t,n){var r=e.locale,i=e.onError;void 0===n&&(n={}),Intl.ListFormat||i(new h.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,F);try{var l={},u=t.map((function(e,a){if("object"===typeof e){var t=function(e){return I+"_"+e+"_"+I}(a);return l[t]=e,t}return String(e)}));return Object.keys(l).length?a(r,o).formatToParts(u).reduce((function(e,a){var t=a.value;return l[t]?e.push(l[t]):"string"===typeof e[e.length-1]?e[e.length-1]+=t:e.push(t),e}),[]):a(r,o).format(u)}catch(c){i(new s.a("FORMAT_ERROR","Error formatting list.",c))}return t}var x=["localeMatcher","style","type","fallback"];function D(e,a,t,n){var r=e.locale,i=e.onError;Intl.DisplayNames||i(new h.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,x);try{return a(r,o).of(t)}catch(l){i(new s.a("FORMAT_ERROR","Error formatting display name.",l))}}var G=t("nChe"),A=t.n(G),_=t("9AS4"),B=A.a||G;function J(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function Z(e){return e?Object.keys(e).reduce((function(a,t){var n=e[t];return a[t]=Object(_.b)(n)?Object(o.b)(n):n,a}),{}):e}var q=function(e,a,t,n){var i=f(e,a,t,Z(n));return Array.isArray(i)?r.Children.toArray(i):i},Q=function(e,a){var t=e.defaultRichTextElements,r=Object(n.c)(e,["defaultRichTextElements"]),i=Z(t),l=function(e,a){var t=Object(b.b)(a),r=Object(n.a)(Object(n.a)({},b.a),e),i=r.locale,o=r.defaultLocale,l=r.onError;i?!Intl.NumberFormat.supportedLocalesOf(i).length&&l?l(new s.d('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&l&&l(new s.d('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(l&&l(new s.b('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),r.locale=r.defaultLocale||"en");var u=e.messages?e.messages[Object.keys(e.messages)[0]]:void 0;return e.defaultRichTextElements&&u&&"string"===typeof u&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'),Object(n.a)(Object(n.a)({},r),{formatters:t,formatNumber:L.bind(null,r,t.getNumberFormat),formatNumberToParts:O.bind(null,r,t.getNumberFormat),formatRelativeTime:P.bind(null,r,t.getRelativeTimeFormat),formatDate:E.bind(null,r,t.getDateTimeFormat),formatDateToParts:k.bind(null,r,t.getDateTimeFormat),formatTime:C.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:R.bind(null,r,t.getDateTimeFormat),formatTimeToParts:T.bind(null,r,t.getDateTimeFormat),formatPlural:S.bind(null,r,t.getPluralRules),formatMessage:f.bind(null,r,t),formatList:M.bind(null,r,t.getListFormat),formatDisplayName:D.bind(null,r,t.getDisplayNames)})}(Object(n.a)(Object(n.a)(Object(n.a)({},o.a),r),{defaultRichTextElements:i}),a);return Object(n.a)(Object(n.a)({},l),{formatMessage:q.bind(null,{locale:l.locale,timeZone:l.timeZone,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:i},l.formatters)})};!function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.cache=Object(b.c)(),a.state={cache:a.cache,intl:Q(J(a.props),a.cache),prevConfig:J(a.props)},a}Object(n.b)(a,e),a.getDerivedStateFromProps=function(e,a){var t=a.prevConfig,n=a.cache,r=J(e);return B(t,r)?null:{intl:Q(r,n),prevConfig:r}},a.prototype.render=function(){return Object(o.c)(this.state.intl),r.createElement(i.b,{value:this.state.intl},this.props.children)},a.displayName="IntlProvider",a.defaultProps=o.a}(r.PureComponent)},vQkq:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')}}]);