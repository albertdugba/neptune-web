(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"2bq+":function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"\u524d\u5f80\u7b2c{pageNumber} \u9801","np.PaginationLink.ariaLabel.inactive":"\u7576\u524d\u9801\u9762\uff0c\u7b2c{pageNumber} \u9801"}')},"3ZQK":function(e,a,t){"use strict";t.r(a),t.d(a,"defaultLocale",(function(){return T})),t.d(a,"meta",(function(){return w})),t.d(a,"default",(function(){return F}));var n={};t.r(n),t.d(n,"en",(function(){return g})),t.d(n,"de",(function(){return f})),t.d(n,"es",(function(){return b})),t.d(n,"fr",(function(){return d})),t.d(n,"hu",(function(){return v})),t.d(n,"id",(function(){return L})),t.d(n,"it",(function(){return O})),t.d(n,"ja",(function(){return y})),t.d(n,"pl",(function(){return P})),t.d(n,"pt",(function(){return h})),t.d(n,"ro",(function(){return j})),t.d(n,"ru",(function(){return N})),t.d(n,"tr",(function(){return C})),t.d(n,"zh_HK",(function(){return E}));var r=t("cxan"),i=t("HbGN"),o=t("ERkP"),l=t.n(o),s=t("ZVZ0"),c=t("6sB8"),u=t("Qi1R"),m=t("mqq0"),p=t("RmhF"),g=t("p7AC"),f=t("l6dk"),b=t("I+G5"),d=t("BAW9"),v=t("RC/W"),L=t("vQkq"),O=t("PlQb"),y=t("fiUL"),P=t("elIb"),h=t("LdYE"),j=t("GLGp"),N=t("cPsM"),C=t("trZC"),E=t("2bq+"),R=t("BAoe"),k=Object(R.a)({ariaLabel:{id:"np.CloseButton.ariaLabel"}}),T=(l.a.createElement,"en"),w={name:"Provider"},S={defaultLocale:T,meta:w};function F(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},S,t,{components:a,mdxType:"MDXLayout"}),Object(s.a)(u.b,{code:'() => {\n  const [i18n, setI18n] = React.useState({\n    locale: defaultLocale,\n    messages: supportedLanguages[defaultLocale],\n  });\n  const listOfLocales = [];\n  for (const [key] of Object.entries(supportedLanguages)) {\n    listOfLocales.push({ value: key, label: key });\n  }\n  const [selectedLocale, setSelectedLocale] = React.useState(listOfLocales[0]);\n  return (\n    <Provider i18n={i18n}>\n      Translated message: <FormattedMessage {...messages.ariaLabel} />\n      <br /><br />\n      <Select\n        selected={selectedLocale}\n        onChange={(item) => {\n          setI18n({ locale: item.value, messages: supportedLanguages[item.value] });\n          setSelectedLocale(item);\n        }}\n        placeholder="Select locale"\n        options={listOfLocales}\n      />\n    </Provider>\n  );\n}\n',scope:{Provider:m.a,Select:p.a,FormattedMessage:c.a,messages:k,supportedLanguages:n,defaultLocale:T},mdxType:"LiveEditorBlock"}),Object(s.a)(u.a,{componentName:"Provider",mdxType:"GeneratePropsTable"}))}F.isMDXComponent=!0},"6sB8":function(e,a,t){"use strict";var n=t("D57K"),r=t("ERkP"),i=t("ymT0"),o=t("yGPN"),l=t("nChe"),s=t.n(l).a||l,c=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return Object(n.b)(a,e),a.prototype.shouldComponentUpdate=function(e){var a=this.props,t=a.values,r=Object(n.c)(a,["values"]),i=e.values,o=Object(n.c)(e,["values"]);return!s(i,t)||!s(r,o)},a.prototype.render=function(){var e=this;return r.createElement(i.a.Consumer,null,(function(a){Object(o.c)(a);var t=a.formatMessage,i=a.textComponent,l=void 0===i?r.Fragment:i,s=e.props,c=s.id,u=s.description,m=s.defaultMessage,p=s.values,g=s.children,f=s.tagName,b=void 0===f?l:f,d=t({id:c,description:u,defaultMessage:m},p);return Array.isArray(d)||(d=[d]),"function"===typeof g?g(d):b?r.createElement.apply(r,Object(n.d)([b,null],d)):d}))},a.displayName="FormattedMessage",a}(r.Component);a.a=c},BAW9:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},GLGp:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},"I+G5":function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},LdYE:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},PlQb:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},"RC/W":function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},cPsM:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},elIb:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},fiUL:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},l6dk:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},mqq0:function(e,a,t){"use strict";t("jQ3i"),t("KqXw"),t("MvUL");var n=t("ERkP"),r=t.n(n),i=t("qiww"),o=t("ueEL"),l=t("ymT0"),s=t("rw2m"),c=["de","en","es","fr","hu","id","it","ja","pl","pt","ro","ru","tr","zh_HK"];function u(e){var a,t=e.i18n,n=e.children,u=Object(i.c)(),m=t.locale,p=t.messages;a=c.includes(m)?{locale:m.replace("_","-"),messages:p}:{locale:"en",messages:s};var g=Object(o.a)(a,u);return r.a.createElement(l.b,{value:g},n)}u.defaultProps={children:void 0},a.a=u},nChe:function(e,a,t){"use strict";e.exports=function(e,a){if(e===a)return!0;if(!e||!a)return!1;var t=Object.keys(e),n=Object.keys(a),r=t.length;if(n.length!==r)return!1;for(var i=0;i<r;i++){var o=t[i];if(e[o]!==a[o]||!Object.prototype.hasOwnProperty.call(a,o))return!1}return!0}},p7AC:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},rw2m:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},trZC:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},ueEL:function(e,a,t){"use strict";t.d(a,"a",(function(){return K}));var n=t("D57K"),r=t("ERkP"),i=t("ymT0"),o=t("yGPN"),l=t("mUED"),s=t("mjvE"),c=t("LYaP"),u=t("PAjK");function m(e,a){return Object.keys(e).reduce((function(t,r){return t[r]=Object(n.a)({timeZone:a},e[r]),t}),{})}function p(e,a){return Object.keys(Object(n.a)(Object(n.a)({},e),a)).reduce((function(t,r){return t[r]=Object(n.a)(Object(n.a)({},e[r]||{}),a[r]||{}),t}),{})}function g(e,a){if(!a)return e;var t=s.a.formats;return Object(n.a)(Object(n.a)(Object(n.a)({},t),e),{date:p(m(t.date,a),m(e.date||{},a)),time:p(m(t.time,a),m(e.time||{},a))})}function f(e,a,t,r){var i=e.locale,o=e.formats,s=e.messages,m=e.defaultLocale,p=e.defaultFormats,f=e.onError,b=e.timeZone,d=e.defaultRichTextElements;void 0===t&&(t={id:""});var v=t.id,L=t.defaultMessage;Object(l.a)(!!v,"[@formatjs/intl] An `id` must be provided to format a message.");var O=String(v),y=s&&Object.prototype.hasOwnProperty.call(s,O)&&s[O];if(Array.isArray(y)&&1===y.length&&y[0].type===u.a.literal)return y[0].value;if(!r&&y&&"string"===typeof y&&!d)return y.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=Object(n.a)(Object(n.a)({},d),r||{}),o=g(o,b),p=g(p,b),!y){if((!L||i&&i.toLowerCase()!==m.toLowerCase())&&f(new c.e(t,i)),L)try{return a.getMessageFormat(L,m,p).format(r)}catch(P){return f(new c.c('Error formatting default message for: "'+O+'", rendering default message verbatim',i,t,P)),"string"===typeof L?L:O}return O}try{return a.getMessageFormat(y,i,o,{formatters:a}).format(r)}catch(P){f(new c.c('Error formatting message: "'+O+'", using '+(L?"default message":"id")+" as fallback.",i,t,P))}if(L)try{return a.getMessageFormat(L,m,p).format(r)}catch(P){f(new c.c('Error formatting the default message for: "'+O+'", rendering message verbatim',i,t,P))}return"string"===typeof y?y:"string"===typeof L?L:O}var b=t("qiww"),d=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function v(e,a,t){var n=e.locale,r=e.formats,i=e.onError;void 0===t&&(t={});var o=t.format,l=o&&Object(b.e)(r,"number",o,i)||{};return a(n,Object(b.d)(t,d,l))}function L(e,a,t,n){void 0===n&&(n={});try{return v(e,a,n).format(t)}catch(r){e.onError(new c.a("FORMAT_ERROR","Error formatting number.",r))}return String(t)}function O(e,a,t,n){void 0===n&&(n={});try{return v(e,a,n).formatToParts(t)}catch(r){e.onError(new c.a("FORMAT_ERROR","Error formatting number.",r))}return[]}var y=t("EOOJ"),P=["numeric","style"];function h(e,a,t,n,r){void 0===r&&(r={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new y.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,a,t){var n=e.locale,r=e.formats,i=e.onError;void 0===t&&(t={});var o=t.format,l=!!o&&Object(b.e)(r,"relative",o,i)||{};return a(n,Object(b.d)(t,P,l))}(e,a,r).format(t,n)}catch(i){e.onError(new c.c("Error formatting relative time.",i))}return String(t)}var j=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function N(e,a,t,r){var i=e.locale,o=e.formats,l=e.onError,s=e.timeZone;void 0===r&&(r={});var c=r.format,u=Object(n.a)(Object(n.a)({},s&&{timeZone:s}),c&&Object(b.e)(o,a,c,l)),m=Object(b.d)(r,j,u);return"time"!==a||m.hour||m.minute||m.second||(m=Object(n.a)(Object(n.a)({},m),{hour:"numeric",minute:"numeric"})),t(i,m)}function C(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"date",a,o).format(l)}catch(s){e.onError(new c.a("FORMAT_ERROR","Error formatting date.",s))}return String(l)}function E(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"time",a,o).format(l)}catch(s){e.onError(new c.a("FORMAT_ERROR","Error formatting time.",s))}return String(l)}function R(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=t[2],l=void 0===o?{}:o,s=e.timeZone,u=e.locale,m=e.onError,p=Object(b.d)(l,j,s?{timeZone:s}:{});try{return a(u,p).formatRange(r,i)}catch(g){m(new c.a("FORMAT_ERROR","Error formatting date time range.",g))}return String(r)}function k(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"date",a,o).formatToParts(l)}catch(s){e.onError(new c.a("FORMAT_ERROR","Error formatting date.",s))}return[]}function T(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],i=t[1],o=void 0===i?{}:i,l="string"===typeof r?new Date(r||0):r;try{return N(e,"time",a,o).formatToParts(l)}catch(s){e.onError(new c.a("FORMAT_ERROR","Error formatting time.",s))}return[]}var w=["localeMatcher","type"];function S(e,a,t,n){var r=e.locale,i=e.onError;void 0===n&&(n={}),Intl.PluralRules||i(new y.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,w);try{return a(r,o).select(t)}catch(l){i(new c.c("Error formatting plural.",l))}return"other"}var F=["localeMatcher","type","style"],I=Date.now();function M(e,a,t,n){var r=e.locale,i=e.onError;void 0===n&&(n={}),Intl.ListFormat||i(new y.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,F);try{var l={},s=t.map((function(e,a){if("object"===typeof e){var t=function(e){return I+"_"+e+"_"+I}(a);return l[t]=e,t}return String(e)}));return Object.keys(l).length?a(r,o).formatToParts(s).reduce((function(e,a){var t=a.value;return l[t]?e.push(l[t]):"string"===typeof e[e.length-1]?e[e.length-1]+=t:e.push(t),e}),[]):a(r,o).format(s)}catch(u){i(new c.a("FORMAT_ERROR","Error formatting list.",u))}return t}var D=["localeMatcher","style","type","fallback"];function x(e,a,t,n){var r=e.locale,i=e.onError;Intl.DisplayNames||i(new y.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var o=Object(b.d)(n,D);try{return a(r,o).of(t)}catch(l){i(new c.a("FORMAT_ERROR","Error formatting display name.",l))}}var G=t("nChe"),A=t.n(G),_=t("9AS4"),B=A.a||G;function J(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function Z(e){return e?Object.keys(e).reduce((function(a,t){var n=e[t];return a[t]=Object(_.b)(n)?Object(o.b)(n):n,a}),{}):e}var q=function(e,a,t,n){var i=f(e,a,t,Z(n));return Array.isArray(i)?r.Children.toArray(i):i},K=function(e,a){var t=e.defaultRichTextElements,r=Object(n.c)(e,["defaultRichTextElements"]),i=Z(t),l=function(e,a){var t=Object(b.b)(a),r=Object(n.a)(Object(n.a)({},b.a),e),i=r.locale,o=r.defaultLocale,l=r.onError;i?!Intl.NumberFormat.supportedLocalesOf(i).length&&l?l(new c.d('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&l&&l(new c.d('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(l&&l(new c.b('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),r.locale=r.defaultLocale||"en");var s=e.messages?e.messages[Object.keys(e.messages)[0]]:void 0;return e.defaultRichTextElements&&s&&"string"===typeof s&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'),Object(n.a)(Object(n.a)({},r),{formatters:t,formatNumber:L.bind(null,r,t.getNumberFormat),formatNumberToParts:O.bind(null,r,t.getNumberFormat),formatRelativeTime:h.bind(null,r,t.getRelativeTimeFormat),formatDate:C.bind(null,r,t.getDateTimeFormat),formatDateToParts:k.bind(null,r,t.getDateTimeFormat),formatTime:E.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:R.bind(null,r,t.getDateTimeFormat),formatTimeToParts:T.bind(null,r,t.getDateTimeFormat),formatPlural:S.bind(null,r,t.getPluralRules),formatMessage:f.bind(null,r,t),formatList:M.bind(null,r,t.getListFormat),formatDisplayName:x.bind(null,r,t.getDisplayNames)})}(Object(n.a)(Object(n.a)(Object(n.a)({},o.a),r),{defaultRichTextElements:i}),a);return Object(n.a)(Object(n.a)({},l),{formatMessage:q.bind(null,{locale:l.locale,timeZone:l.timeZone,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:i},l.formatters)})};!function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.cache=Object(b.c)(),a.state={cache:a.cache,intl:K(J(a.props),a.cache),prevConfig:J(a.props)},a}Object(n.b)(a,e),a.getDerivedStateFromProps=function(e,a){var t=a.prevConfig,n=a.cache,r=J(e);return B(t,r)?null:{intl:K(r,n),prevConfig:r}},a.prototype.render=function(){return Object(o.c)(this.state.intl),r.createElement(i.b,{value:this.state.intl},this.props.children)},a.displayName="IntlProvider",a.defaultProps=o.a}(r.PureComponent)},vQkq:function(e){e.exports=JSON.parse('{"np.CloseButton.ariaLabel":"Close","np.Pagination.ariaLabel":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')}}]);