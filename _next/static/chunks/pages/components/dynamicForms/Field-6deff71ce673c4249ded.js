_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"1IsZ":function(e,n,t){var a=t("ax0f"),r=t("YAkj").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},LiCV:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return B})),t.d(n,"default",(function(){return X}));var a=t("cxan"),r=t("HbGN"),o=t("ERkP"),l=t.n(o),s=t("ZVZ0"),c=t("Qi1R"),u=(t("jwue"),t("z84I"),t("ho0z"),t("+KXO"),t("1IsZ"),t("+oxZ"),t("97Jx")),i=t.n(u),p=t("VrFO"),d=t.n(p),m=t("Y9Ll"),f=t.n(m),h=t("1Pcy"),v=t.n(h),g=t("5Yy7"),y=t.n(g),E=t("N+ot"),b=t.n(E),w=t("AuHH"),N=t.n(w),x=t("KEM+"),M=t.n(x),k=t("O94r"),O=t.n(k),j=t("ZrBu"),F=t("tFYr"),T=t("E+8c"),C=t("2k+G"),P=(t("1t7P"),t("jQ/y"),t("2G9S"),t("vrRf"),t("lTEL"),t("7xRU"),t("M+/F"),t("7x/C"),t("iKE+"),t("KqXw"),t("DZ+c"),t("Ysgh"),t("kYxP"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return L(e);switch(e.type){case"string":return R(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),R=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},L=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},S=t("KVzC");function _(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=N()(e);if(n){var r=N()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return b()(this,t)}}var I={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},V=function(e){function n(e){var a;return d()(this,n),a=t.call(this,e),M()(v()(a),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),a.state={focused:!1,changed:!1,error:e.errorMessage},a}y()(n,e);var t=_(n);return f()(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var n=this.props.onFocus;n&&n(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var n=this.props.onBlur;n&&n(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var n={},t=this.props.field;return Object(S.h)(e,t).forEach((function(e){var a=e.toLowerCase(),r=t.validationMessages&&t.validationMessages[a]||I[a.toUpperCase()];r&&(n[a]=r)})),n}},{key:"updateAlert",value:function(e){var n=this.props,t=n.value,a=n.field,r=n.errorMessage,o=n.warningMessage,s=this.state,c=s.focused,u=s.changed,i=s.error,p=u&&!c?this.validateValue(t):{};return 0<this.objectSizeOf(p)?{type:"error",content:Object.keys(p).map((function(e){return l.a.createElement("div",{key:e},p[e])}))}:i&&r?{type:"error",content:l.a.createElement(l.a.Fragment,null,r)}:o?{type:"warning",content:l.a.createElement(l.a.Fragment,null,o)}:c&&a.help&&a.help.message?{type:"info",content:l.a.createElement(l.a.Fragment,null,a.help.message)}:c&&a.help&&a.help.list&&0<a.help.list.length?{type:"info",content:a.help.list.map((function(e,n){return l.a.createElement("div",{key:n},e)}))}:c&&a.help&&a.help.do&&0<a.help.do.length&&a.help.dont&&0<a.help.dont.length?{type:"info",content:l.a.createElement("div",{className:"m-b-1"},l.a.createElement(j.a,{dos:a.help.do,donts:a.help.dont}))}:c&&e!==C.a.FILE&&a.help&&a.help.image?{type:"info",content:l.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(a.help.image),alt:a.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,n=this.props,t=n.name,a=n.field,r=n.value,o=n.locale,s=n.label,c=a.control||P(a),u=this.updateAlert(c),p=!!u.content,d=c!==C.a.FILE&&c!==C.a.UPLOAD&&c!==C.a.CHECKBOX;return l.a.createElement("div",{className:O()("form-group","tw-field-".concat(t),{"has-info":"info"===u.type&&p,"has-error":"error"===u.type&&p,"has-warning":"warning"===u.type&&p,hidden:a.hidden})},d&&l.a.createElement("label",{className:"control-label"},s),l.a.createElement(T.a,i()({},a,{type:c,name:t,locale:o,value:r,onChange:function(n){return e.onChange(n)},onFocus:function(n){return e.onFocus(n)},onBlur:function(n){return e.onBlur(n)}})),p&&l.a.createElement(F.a,{type:u.type},u.content))}}]),n}(o.Component);V.defaultProps={locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null};var A=V,B=(l.a.createElement,{name:"Field"}),z={meta:B};function X(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(a.a)({},z,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(s.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(s.a)(c.b,{code:"() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",scope:{Field:A},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}X.isMDXComponent=!0},PjJO:function(e,n,t){var a=t("fVMg")("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[a]=!1,"/./"[e](n)}catch(r){}}return!1}},T0YW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dynamicForms/Field",function(){return t("LiCV")}])},YAkj:function(e,n,t){var a=t("1Mu/"),r=t("DEeE"),o=t("N4z3"),l=t("4Sk5").f,s=function(e){return function(n){for(var t,s=o(n),c=r(s),u=c.length,i=0,p=[];u>i;)t=c[i++],a&&!l.call(s,t)||p.push(e?[t,s[t]]:s[t]);return p}};e.exports={entries:s(!0),values:s(!1)}},ZrBu:function(e,n,t){"use strict";t("z84I");var a=t("ERkP"),r=t.n(a),o=t("/Vl7"),l=(t("9s95"),function(e){var n=e.dos,t=e.donts;return r.a.createElement("div",{className:"tw-instructions"},n.map((function(e,n){return r.a.createElement("div",{className:"instruction m-t-1",key:n},r.a.createElement(o.g,{size:24,className:"do"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),t.map((function(e,n){return r.a.createElement("div",{className:"instruction m-t-1",key:n},r.a.createElement(o.l,{size:24,className:"dont"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});l.defaultProps={dos:[],donts:[]};var s=l;n.a=s},nuol:function(e,n,t){var a=t("jl0/");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},x4t0:function(e,n,t){"use strict";var a=t("ax0f"),r=t("nuol"),o=t("cww3");a({target:"String",proto:!0,forced:!t("PjJO")("includes")},{includes:function(e){return!!~String(o(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})}},[["T0YW",0,1,2,6,3,5,7,8,9,10,11,14,12,15,16,19,18,20,21,4]]]);