(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{U8R0:function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",a=/^\[object .+?Constructor\]$/,o=/^(?:0|[1-9]\d*)$/,i="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=i||l||Function("return this")();function c(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(t,(function(t){return[t,e[t]]}))}var s,f,d=Function.prototype,m=Object.prototype,p=u["__core-js_shared__"],h=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),v=d.toString,y=m.hasOwnProperty,b=m.toString,g=RegExp("^"+v.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=m.propertyIsEnumerable,x=(s=Object.keys,f=Object,function(e){return s(f(e))}),O=F(u,"DataView"),k=F(u,"Map"),j=F(u,"Promise"),E=F(u,"Set"),C=F(u,"WeakMap"),M=S(O),R=S(k),A=S(j),L=S(E),D=S(C);function N(e,t){var n=V(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&W(e)}(e)&&y.call(e,"callee")&&(!w.call(e,"callee")||"[object Arguments]"==b.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,a=!!r;for(var o in e)!t&&!y.call(e,o)||a&&("length"==o||q(o,r))||n.push(o);return n}function T(e){return!(!I(e)||function(e){return!!h&&h in e}(e))&&($(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?g:a).test(S(e))}function _(e){if(!function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||m;return e===n}(e))return x(e);var t=[];for(var n in Object(e))y.call(e,n)&&"constructor"!=n&&t.push(n);return t}function F(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return T(n)?n:void 0}var P=function(e){return b.call(e)};function q(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}function S(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(O&&"[object DataView]"!=P(new O(new ArrayBuffer(1)))||k&&P(new k)!=n||j&&"[object Promise]"!=P(j.resolve())||E&&P(new E)!=r||C&&"[object WeakMap]"!=P(new C))&&(P=function(e){var t=b.call(e),a="[object Object]"==t?e.constructor:void 0,o=a?S(a):void 0;if(o)switch(o){case M:return"[object DataView]";case R:return n;case A:return"[object Promise]";case L:return r;case D:return"[object WeakMap]"}return t});var V=Array.isArray;function W(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!$(e)}function $(e){var t=I(e)?b.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var J,z=(J=function(e){return W(e)?N(e):_(e)},function(e){var t=P(e);return t==n?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}(e):t==r?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(e):c(e,J(e))});e.exports=z}).call(this,n("lpmq"))},a7lk:function(e,t,n){},reYk:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return I})),n.d(t,"default",(function(){return z}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),u=n("Qi1R"),c=n("WuAH"),s=(n("+oxZ"),n("+KXO"),n("2G9S"),n("ho0z"),n("KqXw"),n("Ysgh"),n("1t7P"),n("jQ/y"),n("lTEL"),n("7x/C"),n("kYxP"),n("z84I"),n("M+/F"),n("iKE+"),n("DZ+c"),n("7xRU"),function(e,t,n){if(!e)return{};var r=E(e);return r=d(r),r=p(r),r=h(r),Object.keys(r).forEach((function(e){r[e]=f(r[e],t,n)})),r}),f=function(e,t,n){var r=E(e);return y(r),v(r),w(r),x(r,n),r},d=function(e){if(e instanceof Array){var t=[];return e.forEach((function(e){e.fields?t=t.concat(m(e,e.fields)):e.group?t=t.concat(m(e,e.group)):t.push(e)})),t}return e},m=function(e,t){return e.name&&t.length&&!t[0].name&&(t[0].name=e.name),e.width&&t.length&&!t[0].width&&(t[0].width=e.width),e.tooltip&&t.length&&!t[0].help&&(t[0].help={message:e.tooltip}),e.info&&t.length&&!t[0].help&&(t[0].help={message:e.info}),2===t.length&&t.forEach((function(e){e.width="md"})),3===t.length&&(t[0].width="md",t[1].width="md"),t},p=function(e){if(e instanceof Array){var t={};return e.forEach((function(e){var n=e.key||e.name;delete e.key,t[n]=E(e)})),t}return e},h=function(e){if(e instanceof Array)throw new Error("Expecting a map of fields, not an array");var t={};return Object.keys(e).forEach((function(n){if(0<n.indexOf(".")){var r=n.split("."),a=r[0];t[a]||(t[a]={type:"object",properties:{}}),t[a].properties[r[1]]=e[n]}else t[n]=e[n]})),t},v=function(e){switch(e.type&&e.type.toLowerCase&&e.type.toLowerCase()){case"text":e.type="string";break;case"date":e.type="string",e.format="date";break;case"password":e.type="string",e.control="password";break;case"checkbox":e.type="boolean";break;case"select":e.control||(e.control="select"),delete e.type;break;case"radio":e.control="radio",delete e.type;break;case"upload":e.type="string",e.format="base64url";break;case"tel":e.type="string",e.format="phone";break;case"textarea":e.type="string",e.control="textarea"}e.control||"object"===e.type||(e.control=O(e))},y=function(e){e.name&&!e.title&&(e.title=e.name,delete e.name),e.validationRegexp&&(e.pattern=e.validationRegexp,delete e.validationRegexp),e.min&&(e.minimum=e.min,delete e.min),e.max&&(e.maximum=e.max,delete e.max),e.example&&!e.placeholder&&(e.placeholder=e.example,delete e.example),e.tooltip&&!e.help&&(e.help={message:e.tooltip},delete e.tooltip),e.valuesAllowed&&!e.values&&(e.values=e.valuesAllowed,delete e.valuesAllowed),e.values&&e.values.map&&(e.values=b(e.values)),e.value&&!e.default&&(e.default=e.value,delete e.value),e.values&&e.values&&e.values.length&&e.values[0]&&!e.values[0].value&&e.values[0].label&&!e.placeholder&&(e.placeholder=e.values[0].label,e.values=e.values.slice(1))},b=function(e){return e.map(g)},g=function(e){return!e.label&&e.title&&(e.label=e.title,delete e.title),!e.label&&e.name&&(e.label=e.name,delete e.name),!e.value&&e.code&&(e.value=e.code,delete e.code),!e.value&&e.key&&(e.value=e.key,delete e.key),e},w=function(e){if(e.pattern)try{RegExp(e.pattern)}catch(t){console.warn("API regexp is invalid"),delete e.pattern}else delete e.pattern},x=function(e,t){return e.validationMessages=e.validationMessages?e.validationMessages:t,e.validationMessages?(e.validationMessages.minimum&&(e.validationMessages.min=e.validationMessages.minimum,delete e.validationMessages.minimum),void(e.validationMessages.maximum&&(e.validationMessages.max=e.validationMessages.maximum,delete e.validationMessages.maximum))):void delete e.validationMessages},O=function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return j(e);switch(e.type){case"string":return k(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}},k=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},j=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},E=function(e){return JSON.parse(JSON.stringify(e))},C=n("ddV6"),M=n.n(C),R=(n("LW0h"),n("U8R0")),A=n.n(R),L=(n("hBpG"),n("kQwz")),D=n("O94r"),N=n.n(D),T=n("b0Hy"),_=function(e,t){for(var n=0;F(e,t+n);)n+=1;return n},F=function(e,t){return e[t]&&"*"!==e[t]},P=(n("a7lk"),function(e){var t=e.field,n=e.value,r=Object(L.a)().locale,a=[];switch(t.tagClassName&&t.tagClassName.h3&&(a.push("h3"),a.push("formatted-value__h3-custom-alignment")),t.control){case"select":case"radio":return i.a.createElement("span",null,function(e,t){var n=e.find((function(e){return e.value===t}));return n&&n.label?n.label:t}(t.values,n));case"date":return i.a.createElement("span",null,Object(T.b)(n instanceof Date?n:new Date(n),r));case"number":return i.a.createElement("span",null,Object(T.d)(n,r));case"password":return i.a.createElement("span",null,function(e){return Array(e.length+1).join("*")}(n));case"file":return i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{alt:t.title,src:n}));case"checkbox":return i.a.createElement("span",null,JSON.stringify(n));default:return i.a.createElement("span",{className:N()(a)},function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;if("string"!=typeof t)return e;var n=t;0<n.indexOf("||")&&(n=n.substring(0,t.indexOf("||")));for(var r="",a=0,o=e.length,i=0;o;)F(n,i)?(r+=n[i],a+=1):(r+=e[i-a],o-=1),i+=1;var l=_(n,i);return l&&(r+=n.substr(i,l)),r}(n,t.displayFormat))}});function q(e,t){return A()(e).map((function(e){var n=M()(e,2);return function(e,t,n){var r=t.title,a=t.group,o=t.hidden;return!n[e]||o?null:{title:r,value:a?a.map((function(t,r){return i.a.createElement(P,{key:r,field:t,value:n[e]})})):i.a.createElement(P,{field:t,value:n[e]}),key:e}}(n[0],n[1],t)})).filter((function(e){return!!e}))}var S=n("7J1Q"),V=function(e){var t=e.model,n=e.title,r=e.layout,a=e.fields;return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",{className:"m-t-1"},i.a.createElement("div",{className:"p-t-3 h4"},n)),i.a.createElement(c.a,{layout:r,definitions:q(s(a),t)}))};V.defaultProps={title:null,layout:S.a.VERTICAL_TWO_COLUMN};var W=V,$=["components"],I=(i.a.createElement,{name:"DynamicFieldDefinitionList"}),J={meta:I};function z(e){var t=e.components,n=Object(a.a)(e,$);return Object(l.a)("wrapper",Object(r.a)({},J,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:"<DynamicFieldDefinitionList\n  title=\"This is an awesome component\"\n  layout={Layout.VERTICAL_TWO_COLUMN}\n  model={{\n    text: 'helloworld',\n    number: 123456,\n    select: '1',\n    date: '2000-12-20T00:00:00.000Z',\n    checkbox: true,\n    radio: '2',\n    password: 'qwerty',\n    telephone: '+441234567890',\n    textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\n  }}\n  fields={{\n    text: {\n      title: 'Text',\n      type: 'text',\n      displayFormat: '***** - *****||*-*-*',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      tagClassName: {\n        h3: true,\n      },\n    },\n    number: {\n      title: 'Number',\n      type: 'number',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    select: {\n      title: 'Select',\n      type: 'string',\n      control: 'select',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    password: {\n      title: 'Password',\n      type: 'string',\n      control: 'password',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    date: {\n      title: 'Date',\n      type: 'string',\n      format: 'date',\n      refreshRequirementsOnChange: true,\n    },\n    telephone: {\n      title: 'Telephone',\n      type: 'string',\n      control: 'tel',\n      placeholder: 'Enter...',\n    },\n    radio: {\n      title: 'Radio',\n      type: 'string',\n      control: 'radio',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    checkbox: {\n      title: 'Checkbox',\n      type: 'boolean',\n      placeholder: 'Label',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    textarea: {\n      title: 'Textarea',\n      type: 'string',\n      control: 'textarea',\n      refreshRequirementsOnChange: true,\n    },\n    file: {\n      title: 'File',\n      type: 'string',\n      format: 'base64url',\n      refreshRequirementsOnChange: true,\n    },\n    hidden: {\n      type: 'string',\n      hidden: true,\n      default: 'hidden-value',\n    },\n  }}\n/>;\n",scope:{DynamicFieldDefinitionList:W,Layout:S.a},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"DynamicFieldDefinitionList",mdxType:"GeneratePropsTable"}))}z.isMDXComponent=!0}}]);