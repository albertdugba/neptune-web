(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"7J1Q":function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).VERTICAL="VERTICAL",a.VERTICAL_TWO_COLUMN="VERTICAL_TWO_COLUMN",a.VERTICAL_ONE_COLUMN="VERTICAL_ONE_COLUMN",a.HORIZONTAL="HORIZONTAL",a.HORIZONTAL_JUSTIFIED="HORIZONTAL_JUSTIFIED",a.HORIZONTAL_LEFT_ALIGNED="HORIZONTAL_LEFT_ALIGNED",a.HORIZONTAL_RIGHT_ALIGNED="HORIZONTAL_RIGHT_ALIGNED"},U8R0:function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",a=/^\[object .+?Constructor\]$/,i=/^(?:0|[1-9]\d*)$/,l="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,u=l||o||Function("return this")();function c(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(t,(function(t){return[t,e[t]]}))}var s,f,d=Function.prototype,m=Object.prototype,p=u["__core-js_shared__"],h=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),v=d.toString,y=m.hasOwnProperty,g=m.toString,b=RegExp("^"+v.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=m.propertyIsEnumerable,E=(s=Object.keys,f=Object,function(e){return s(f(e))}),w=D(u,"DataView"),x=D(u,"Map"),L=D(u,"Promise"),T=D(u,"Set"),_=D(u,"WeakMap"),N=Z(w),R=Z(x),A=Z(L),I=Z(T),k=Z(_);function j(e,t){var n=G(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&S(e)}(e)&&y.call(e,"callee")&&(!O.call(e,"callee")||"[object Arguments]"==g.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,a=!!r;for(var i in e)!t&&!y.call(e,i)||a&&("length"==i||F(i,r))||n.push(i);return n}function C(e){return!(!V(e)||function(e){return!!h&&h in e}(e))&&(U(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?b:a).test(Z(e))}function M(e){if(!function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||m;return e===n}(e))return E(e);var t=[];for(var n in Object(e))y.call(e,n)&&"constructor"!=n&&t.push(n);return t}function D(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return C(n)?n:void 0}var H=function(e){return g.call(e)};function F(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<t}function Z(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(w&&"[object DataView]"!=H(new w(new ArrayBuffer(1)))||x&&H(new x)!=n||L&&"[object Promise]"!=H(L.resolve())||T&&H(new T)!=r||_&&"[object WeakMap]"!=H(new _))&&(H=function(e){var t=g.call(e),a="[object Object]"==t?e.constructor:void 0,i=a?Z(a):void 0;if(i)switch(i){case N:return"[object DataView]";case R:return n;case A:return"[object Promise]";case I:return r;case k:return"[object WeakMap]"}return t});var G=Array.isArray;function S(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!U(e)}function U(e){var t=V(e)?g.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var P,q=(P=function(e){return S(e)?j(e):M(e)},function(e){var t=H(e);return t==n?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}(e):t==r?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(e):c(e,P(e))});e.exports=q}).call(this,n("lpmq"))},WuAH:function(e,t,n){"use strict";var r,a=n("KEM+"),i=n.n(a),l=(n("z84I"),n("ERkP")),o=n.n(l),u=n("O94r"),c=n.n(u),s=n("7J1Q"),f=(n("alEp"),function(e){return 0<=[s.a.HORIZONTAL_LEFT_ALIGNED,s.a.HORIZONTAL_RIGHT_ALIGNED,s.a.HORIZONTAL_JUSTIFIED].indexOf(e)}),d=(r={},i()(r,s.a.HORIZONTAL_RIGHT_ALIGNED,"text-sm-right"),i()(r,s.a.HORIZONTAL_JUSTIFIED,"text-sm-justify"),r),m=function(e){var t=e.definitions,n=e.layout,r=e.muted;return o.a.createElement("dl",{className:c()("tw-definition-list d-flex ",{"text-muted":r,"flex-column":n===s.a.VERTICAL_ONE_COLUMN,"tw-definition-list--columns flex-column flex-row--sm":n===s.a.VERTICAL_TWO_COLUMN,"tw-definition-list--horizontal flex-column":f(n)})},t.map((function(e){var t=e.title,r=e.value,a=e.key;return o.a.createElement("div",{className:"tw-definition-list__item",key:a},o.a.createElement("dt",null,t),o.a.createElement("dd",{className:d[n]||""},r))})))};m.defaultProps={definitions:[],layout:s.a.VERTICAL_TWO_COLUMN,muted:!1},t.a=m},a7lk:function(e,t,n){},alEp:function(e,t,n){},reYk:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return V})),n.d(t,"default",(function(){return q}));var r=n("cxan"),a=n("HbGN"),i=n("ERkP"),l=n.n(i),o=n("ZVZ0"),u=n("Qi1R"),c=n("WuAH"),s=(n("+oxZ"),n("+KXO"),n("2G9S"),n("ho0z"),n("KqXw"),n("Ysgh"),n("1t7P"),n("jQ/y"),n("lTEL"),n("7x/C"),n("kYxP"),n("z84I"),n("M+/F"),n("iKE+"),n("DZ+c"),n("7xRU"),function(e,t,n){if(!e)return{};var r=T(e);return r=d(r),r=p(r),r=h(r),Object.keys(r).forEach((function(e){r[e]=f(r[e],t,n)})),r}),f=function(e,t,n){var r=T(e);return y(r),v(r),O(r),E(r,n),r},d=function(e){if(e instanceof Array){var t=[];return e.forEach((function(e){e.fields?t=t.concat(m(e,e.fields)):e.group?t=t.concat(m(e,e.group)):t.push(e)})),t}return e},m=function(e,t){return e.name&&t.length&&!t[0].name&&(t[0].name=e.name),e.width&&t.length&&!t[0].width&&(t[0].width=e.width),e.tooltip&&t.length&&!t[0].help&&(t[0].help={message:e.tooltip}),e.info&&t.length&&!t[0].help&&(t[0].help={message:e.info}),2===t.length&&t.forEach((function(e){e.width="md"})),3===t.length&&(t[0].width="md",t[1].width="md"),t},p=function(e){if(e instanceof Array){var t={};return e.forEach((function(e){var n=e.key||e.name;delete e.key,t[n]=T(e)})),t}return e},h=function(e){if(e instanceof Array)throw new Error("Expecting a map of fields, not an array");var t={};return Object.keys(e).forEach((function(n){if(0<n.indexOf(".")){var r=n.split("."),a=r[0];t[a]||(t[a]={type:"object",properties:{}}),t[a].properties[r[1]]=e[n]}else t[n]=e[n]})),t},v=function(e){switch(e.type&&e.type.toLowerCase&&e.type.toLowerCase()){case"text":e.type="string";break;case"date":e.type="string",e.format="date";break;case"password":e.type="string",e.control="password";break;case"checkbox":e.type="boolean";break;case"select":e.control||(e.control="select"),delete e.type;break;case"radio":e.control="radio",delete e.type;break;case"upload":e.type="string",e.format="base64url";break;case"tel":e.type="string",e.format="phone";break;case"textarea":e.type="string",e.control="textarea"}e.control||"object"===e.type||(e.control=w(e))},y=function(e){e.name&&!e.title&&(e.title=e.name,delete e.name),e.validationRegexp&&(e.pattern=e.validationRegexp,delete e.validationRegexp),e.min&&(e.minimum=e.min,delete e.min),e.max&&(e.maximum=e.max,delete e.max),e.example&&!e.placeholder&&(e.placeholder=e.example,delete e.example),e.tooltip&&!e.help&&(e.help={message:e.tooltip},delete e.tooltip),e.valuesAllowed&&!e.values&&(e.values=e.valuesAllowed,delete e.valuesAllowed),e.values&&e.values.map&&(e.values=g(e.values)),e.value&&!e.default&&(e.default=e.value,delete e.value),e.values&&e.values&&e.values.length&&e.values[0]&&!e.values[0].value&&e.values[0].label&&!e.placeholder&&(e.placeholder=e.values[0].label,e.values=e.values.slice(1))},g=function(e){return e.map(b)},b=function(e){return!e.label&&e.title&&(e.label=e.title,delete e.title),!e.label&&e.name&&(e.label=e.name,delete e.name),!e.value&&e.code&&(e.value=e.code,delete e.code),!e.value&&e.key&&(e.value=e.key,delete e.key),e},O=function(e){if(e.pattern)try{RegExp(e.pattern)}catch(t){console.warn("API regexp is invalid"),delete e.pattern}else delete e.pattern},E=function(e,t){return e.validationMessages=e.validationMessages?e.validationMessages:t,e.validationMessages?(e.validationMessages.minimum&&(e.validationMessages.min=e.validationMessages.minimum,delete e.validationMessages.minimum),void(e.validationMessages.maximum&&(e.validationMessages.max=e.validationMessages.maximum,delete e.validationMessages.maximum))):void delete e.validationMessages},w=function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return L(e);switch(e.type){case"string":return x(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}},x=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},L=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},T=function(e){return JSON.parse(JSON.stringify(e))},_=n("ddV6"),N=n.n(_),R=(n("LW0h"),n("U8R0")),A=n.n(R),I=(n("hBpG"),n("kQwz")),k=n("O94r"),j=n.n(k),C=n("b0Hy"),M=function(e,t){for(var n=0;D(e,t+n);)n+=1;return n},D=function(e,t){return e[t]&&"*"!==e[t]},H=(n("a7lk"),function(e){var t=e.field,n=e.value,r=Object(I.a)().locale,a=[];switch(t.tagClassName&&t.tagClassName.h3&&(a.push("h3"),a.push("formatted-value__h3-custom-alignment")),t.control){case"select":case"radio":return l.a.createElement("span",null,function(e,t){var n=e.find((function(e){return e.value===t}));return n&&n.label?n.label:t}(t.values,n));case"date":return l.a.createElement("span",null,Object(C.b)(n instanceof Date?n:new Date(n),r));case"number":return l.a.createElement("span",null,Object(C.d)(n,r));case"password":return l.a.createElement("span",null,function(e){return Array(e.length+1).join("*")}(n));case"file":return l.a.createElement("div",{className:"thumbnail"},l.a.createElement("img",{alt:t.title,src:n}));case"checkbox":return l.a.createElement("span",null,JSON.stringify(n));default:return l.a.createElement("span",{className:j()(a)},function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;if("string"!=typeof t)return e;var n=t;0<n.indexOf("||")&&(n=n.substring(0,t.indexOf("||")));for(var r="",a=0,i=e.length,l=0;i;)D(n,l)?(r+=n[l],a+=1):(r+=e[l-a],i-=1),l+=1;var o=M(n,l);return o&&(r+=n.substr(l,o)),r}(n,t.displayFormat))}});function F(e,t){return A()(e).map((function(e){var n=N()(e,2);return function(e,t,n){var r=t.title,a=t.group,i=t.hidden;return!n[e]||i?null:{title:r,value:a?a.map((function(t,r){return l.a.createElement(H,{key:r,field:t,value:n[e]})})):l.a.createElement(H,{field:t,value:n[e]}),key:e}}(n[0],n[1],t)})).filter((function(e){return!!e}))}var Z=n("7J1Q"),G=function(e){var t=e.model,n=e.title,r=e.layout,a=e.fields;return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",{className:"m-t-1"},l.a.createElement("div",{className:"p-t-3 h4"},n)),l.a.createElement(c.a,{layout:r,definitions:F(s(a),t)}))};G.defaultProps={title:null,layout:Z.a.VERTICAL_TWO_COLUMN};var S=G,U=["components"],V=(l.a.createElement,{name:"DynamicFieldDefinitionList"}),P={meta:V};function q(e){var t=e.components,n=Object(a.a)(e,U);return Object(o.a)("wrapper",Object(r.a)({},P,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)(u.b,{code:"<DynamicFieldDefinitionList\n  title=\"This is an awesome component\"\n  layout={Layout.VERTICAL_TWO_COLUMN}\n  model={{\n    text: 'helloworld',\n    number: 123456,\n    select: '1',\n    date: '2000-12-20T00:00:00.000Z',\n    checkbox: true,\n    radio: '2',\n    password: 'qwerty',\n    telephone: '+441234567890',\n    textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\n  }}\n  fields={{\n    text: {\n      title: 'Text',\n      type: 'text',\n      displayFormat: '***** - *****||*-*-*',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      tagClassName: {\n        h3: true,\n      },\n    },\n    number: {\n      title: 'Number',\n      type: 'number',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    select: {\n      title: 'Select',\n      type: 'string',\n      control: 'select',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    password: {\n      title: 'Password',\n      type: 'string',\n      control: 'password',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    date: {\n      title: 'Date',\n      type: 'string',\n      format: 'date',\n      refreshRequirementsOnChange: true,\n    },\n    telephone: {\n      title: 'Telephone',\n      type: 'string',\n      control: 'tel',\n      placeholder: 'Enter...',\n    },\n    radio: {\n      title: 'Radio',\n      type: 'string',\n      control: 'radio',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    checkbox: {\n      title: 'Checkbox',\n      type: 'boolean',\n      placeholder: 'Label',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    textarea: {\n      title: 'Textarea',\n      type: 'string',\n      control: 'textarea',\n      refreshRequirementsOnChange: true,\n    },\n    file: {\n      title: 'File',\n      type: 'string',\n      format: 'base64url',\n      refreshRequirementsOnChange: true,\n    },\n    hidden: {\n      type: 'string',\n      hidden: true,\n      default: 'hidden-value',\n    },\n  }}\n/>;\n",scope:{DynamicFieldDefinitionList:S,Layout:Z.a},mdxType:"LiveEditorBlock"}),Object(o.a)(u.a,{componentName:"DynamicFieldDefinitionList",mdxType:"GeneratePropsTable"}))}q.isMDXComponent=!0}}]);