(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"7J1Q":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED",HORIZONTAL_RIGHT_ALIGNED:"HORIZONTAL_RIGHT_ALIGNED"}},U8R0:function(e,t,n){(function(t){var n="[object Map]",a="[object Set]",r=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,i="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,u=i||o||Function("return this")();function c(e,t){return function(e,t){for(var n=-1,a=e?e.length:0,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}(t,(function(t){return[t,e[t]]}))}var s,f,d=Function.prototype,m=Object.prototype,p=u["__core-js_shared__"],v=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),h=d.toString,y=m.hasOwnProperty,g=m.toString,b=RegExp("^"+h.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=m.propertyIsEnumerable,E=(s=Object.keys,f=Object,function(e){return s(f(e))}),w=D(u,"DataView"),x=D(u,"Map"),L=D(u,"Promise"),_=D(u,"Set"),T=D(u,"WeakMap"),N=H(w),R=H(x),A=H(L),k=H(_),I=H(T);function j(e,t){var n=P(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&S(e)}(e)&&y.call(e,"callee")&&(!O.call(e,"callee")||"[object Arguments]"==g.call(e))}(e)?function(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}(e.length,String):[],a=n.length,r=!!a;for(var l in e)!t&&!y.call(e,l)||r&&("length"==l||G(l,a))||n.push(l);return n}function C(e){return!(!Z(e)||function(e){return!!v&&v in e}(e))&&(U(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?b:r).test(H(e))}function M(e){if(!function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||m;return e===n}(e))return E(e);var t=[];for(var n in Object(e))y.call(e,n)&&"constructor"!=n&&t.push(n);return t}function D(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return C(n)?n:void 0}var F=function(e){return g.call(e)};function G(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||l.test(e))&&e>-1&&e%1==0&&e<t}function H(e){if(null!=e){try{return h.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(w&&"[object DataView]"!=F(new w(new ArrayBuffer(1)))||x&&F(new x)!=n||L&&"[object Promise]"!=F(L.resolve())||_&&F(new _)!=a||T&&"[object WeakMap]"!=F(new T))&&(F=function(e){var t=g.call(e),r="[object Object]"==t?e.constructor:void 0,l=r?H(r):void 0;if(l)switch(l){case N:return"[object DataView]";case R:return n;case A:return"[object Promise]";case k:return a;case I:return"[object WeakMap]"}return t});var P=Array.isArray;function S(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!U(e)}function U(e){var t=Z(e)?g.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var V,q=(V=function(e){return S(e)?j(e):M(e)},function(e){var t=F(e);return t==n?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,a){n[++t]=[a,e]})),n}(e):t==a?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(e):c(e,V(e))});e.exports=q}).call(this,n("lpmq"))},WuAH:function(e,t,n){"use strict";n("vrRf"),n("z84I");var a,r=n("KEM+"),l=n.n(r),i=n("ERkP"),o=n.n(i),u=n("O94r"),c=n.n(u),s=n("7J1Q"),f=(n("alEp"),function(e){return 0<=[s.a.HORIZONTAL_LEFT_ALIGNED,s.a.HORIZONTAL_RIGHT_ALIGNED,s.a.HORIZONTAL_JUSTIFIED].indexOf(e)}),d=(a={},l()(a,s.a.HORIZONTAL_RIGHT_ALIGNED,"text-sm-right"),l()(a,s.a.HORIZONTAL_JUSTIFIED,"text-sm-justify"),a),m=function(e){var t=e.definitions,n=e.layout,a=e.muted;return o.a.createElement("dl",{className:c()("tw-definition-list d-flex ",{"text-muted":a,"flex-column":n===s.a.VERTICAL_ONE_COLUMN,"tw-definition-list--columns flex-column flex-row--sm":n===s.a.VERTICAL_TWO_COLUMN,"tw-definition-list--horizontal flex-column":f(n)})},t.map((function(e){var t=e.title,a=e.value,r=e.key;return o.a.createElement("div",{className:"tw-definition-list__item",key:r},o.a.createElement("dt",null,t),o.a.createElement("dd",{className:d[n]||""},a))})))};m.Layout=s.a,m.defaultProps={definitions:[],layout:m.Layout.VERTICAL_TWO_COLUMN,muted:!1},m.Layout=s.a,t.a=m},a7lk:function(e,t,n){},alEp:function(e,t,n){},reYk:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return U})),n.d(t,"default",(function(){return V}));var a=n("cxan"),r=n("HbGN"),l=n("ERkP"),i=n.n(l),o=n("ZVZ0"),u=n("Qi1R"),c=n("WuAH"),s=(n("1t7P"),n("jQ/y"),n("2G9S"),n("jwue"),n("vrRf"),n("lTEL"),n("7xRU"),n("z84I"),n("M+/F"),n("ho0z"),n("+KXO"),n("7x/C"),n("iKE+"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("+oxZ"),n("kYxP"),function(e,t,n){if(!e)return{};var a=_(e);return a=d(a),a=p(a),a=v(a),Object.keys(a).forEach((function(e){a[e]=f(a[e],t,n)})),a}),f=function(e,t,n){var a=_(e);return y(a),h(a),O(a),E(a,n),a},d=function(e){if(e instanceof Array){var t=[];return e.forEach((function(e){e.fields?t=t.concat(m(e,e.fields)):e.group?t=t.concat(m(e,e.group)):t.push(e)})),t}return e},m=function(e,t){return e.name&&t.length&&!t[0].name&&(t[0].name=e.name),e.width&&t.length&&!t[0].width&&(t[0].width=e.width),e.tooltip&&t.length&&!t[0].help&&(t[0].help={message:e.tooltip}),e.info&&t.length&&!t[0].help&&(t[0].help={message:e.info}),2===t.length&&t.forEach((function(e){e.width="md"})),3===t.length&&(t[0].width="md",t[1].width="md"),t},p=function(e){if(e instanceof Array){var t={};return e.forEach((function(e){var n=e.key||e.name;delete e.key,t[n]=_(e)})),t}return e},v=function(e){if(e instanceof Array)throw new Error("Expecting a map of fields, not an array");var t={};return Object.keys(e).forEach((function(n){if(0<n.indexOf(".")){var a=n.split("."),r=a[0];t[r]||(t[r]={type:"object",properties:{}}),t[r].properties[a[1]]=e[n]}else t[n]=e[n]})),t},h=function(e){switch(e.type&&e.type.toLowerCase&&e.type.toLowerCase()){case"text":e.type="string";break;case"date":e.type="string",e.format="date";break;case"password":e.type="string",e.control="password";break;case"checkbox":e.type="boolean";break;case"select":e.control||(e.control="select"),delete e.type;break;case"radio":e.control="radio",delete e.type;break;case"upload":e.type="string",e.format="base64url";break;case"tel":e.type="string",e.format="phone";break;case"textarea":e.type="string",e.control="textarea"}e.control||"object"===e.type||(e.control=w(e))},y=function(e){e.name&&!e.title&&(e.title=e.name,delete e.name),e.validationRegexp&&(e.pattern=e.validationRegexp,delete e.validationRegexp),e.min&&(e.minimum=e.min,delete e.min),e.max&&(e.maximum=e.max,delete e.max),e.example&&!e.placeholder&&(e.placeholder=e.example,delete e.example),e.tooltip&&!e.help&&(e.help={message:e.tooltip},delete e.tooltip),e.valuesAllowed&&!e.values&&(e.values=e.valuesAllowed,delete e.valuesAllowed),e.values&&e.values.map&&(e.values=g(e.values)),e.value&&!e.default&&(e.default=e.value,delete e.value),e.values&&e.values&&e.values.length&&e.values[0]&&!e.values[0].value&&e.values[0].label&&!e.placeholder&&(e.placeholder=e.values[0].label,e.values=e.values.slice(1))},g=function(e){return e.map(b)},b=function(e){return!e.label&&e.title&&(e.label=e.title,delete e.title),!e.label&&e.name&&(e.label=e.name,delete e.name),!e.value&&e.code&&(e.value=e.code,delete e.code),!e.value&&e.key&&(e.value=e.key,delete e.key),e},O=function(e){if(e.pattern)try{RegExp(e.pattern)}catch(t){console.warn("API regexp is invalid"),delete e.pattern}else delete e.pattern},E=function(e,t){return e.validationMessages=e.validationMessages?e.validationMessages:t,e.validationMessages?(e.validationMessages.minimum&&(e.validationMessages.min=e.validationMessages.minimum,delete e.validationMessages.minimum),void(e.validationMessages.maximum&&(e.validationMessages.max=e.validationMessages.maximum,delete e.validationMessages.maximum))):void delete e.validationMessages},w=function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return L(e);switch(e.type){case"string":return x(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}},x=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},L=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},_=function(e){return JSON.parse(JSON.stringify(e))},T=(n("LW0h"),n("ddV6")),N=n.n(T),R=n("U8R0"),A=n.n(R),k=(n("hBpG"),n("O94r")),I=n.n(k),j=n("b0Hy"),C=function(e,t){for(var n=0;M(e,t+n);)n+=1;return n},M=function(e,t){return e[t]&&"*"!==e[t]},D=(n("a7lk"),function(e){var t=e.field,n=e.value,a=e.locale,r=[];switch(t.tagClassName&&t.tagClassName.h3&&(r.push("h3"),r.push("formatted-value__h3-custom-alignment")),t.control){case"select":case"radio":return i.a.createElement("span",null,function(e,t){var n=e.find((function(e){return e.value===t}));return n&&n.label?n.label:t}(t.values,n));case"date":return i.a.createElement("span",null,Object(j.b)(n instanceof Date?n:new Date(n),a));case"number":return i.a.createElement("span",null,Object(j.d)(n,a));case"password":return i.a.createElement("span",null,function(e){return Array(e.length+1).join("*")}(n));case"file":return i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{alt:t.title,src:n}));case"checkbox":return i.a.createElement("span",null,JSON.stringify(n));default:return i.a.createElement("span",{className:I()(r)},function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;if("string"!=typeof t)return e;var n=t;0<n.indexOf("||")&&(n=n.substring(0,t.indexOf("||")));for(var a="",r=0,l=e.length,i=0;l;)M(n,i)?(a+=n[i],r+=1):(a+=e[i-r],l-=1),i+=1;var o=C(n,i);return o&&(a+=n.substr(i,o)),a}(n,t.displayFormat))}});D.defaultProps={locale:"en-GB"};var F=D;function G(e,t,n){return A()(e).map((function(e){var a=N()(e,2);return function(e,t,n,a){var r=t.title,l=t.group,o=t.hidden;return!n[e]||o?null:{title:r,value:l?l.map((function(t,r){return i.a.createElement(F,{key:r,field:t,value:n[e],locale:a})})):i.a.createElement(F,{field:t,value:n[e],locale:a}),key:e}}(a[0],a[1],t,n)})).filter((function(e){return!!e}))}var H=n("7J1Q"),P=function(e){var t=e.model,n=e.locale,a=e.title,r=e.layout,l=e.fields;return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement("div",{className:"m-t-1"},i.a.createElement("div",{className:"p-t-3 h4"},a)),i.a.createElement(c.a,{layout:r,definitions:G(s(l),t,n)}))};P.Layout=H.a,P.defaultProps={locale:"en-GB",title:null,layout:P.Layout.VERTICAL_TWO_COLUMN};var S=P,U=(i.a.createElement,{name:"DynamicFieldDefinitionList"}),Z={meta:U};function V(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)(u.b,{code:"<DynamicFieldDefinitionList\n  title=\"This is an awesome component\"\n  layout={DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  locale=\"en-GB\"\n  model={{\n    text: 'helloworld',\n    number: 123456,\n    select: '1',\n    date: '2000-12-20T00:00:00.000Z',\n    checkbox: true,\n    radio: '2',\n    password: 'qwerty',\n    telephone: '+441234567890',\n    textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\n  }}\n  fields={{\n    text: {\n      title: 'Text',\n      type: 'text',\n      displayFormat: '***** - *****||*-*-*',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      tagClassName: {\n        h3: true,\n      },\n    },\n    number: {\n      title: 'Number',\n      type: 'number',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    select: {\n      title: 'Select',\n      type: 'string',\n      control: 'select',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    password: {\n      title: 'Password',\n      type: 'string',\n      control: 'password',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    date: {\n      title: 'Date',\n      type: 'string',\n      format: 'date',\n      refreshRequirementsOnChange: true,\n    },\n    telephone: {\n      title: 'Telephone',\n      type: 'string',\n      control: 'tel',\n      placeholder: 'Enter...',\n    },\n    radio: {\n      title: 'Radio',\n      type: 'string',\n      control: 'radio',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    checkbox: {\n      title: 'Checkbox',\n      type: 'boolean',\n      placeholder: 'Label',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    textarea: {\n      title: 'Textarea',\n      type: 'string',\n      control: 'textarea',\n      refreshRequirementsOnChange: true,\n    },\n    file: {\n      title: 'File',\n      type: 'string',\n      format: 'base64url',\n      refreshRequirementsOnChange: true,\n    },\n    hidden: {\n      type: 'string',\n      hidden: true,\n      default: 'hidden-value',\n    },\n  }}\n/>;\n",scope:{DynamicFieldDefinitionList:S},mdxType:"LiveEditorBlock"}),Object(o.a)(u.a,{componentName:"DynamicFieldDefinitionList",mdxType:"GeneratePropsTable"}))}V.isMDXComponent=!0}}]);