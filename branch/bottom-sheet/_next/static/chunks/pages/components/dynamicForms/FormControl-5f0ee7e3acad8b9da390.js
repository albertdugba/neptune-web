_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{"1IsZ":function(e,n,t){var o=t("ax0f"),a=t("YAkj").values;o({target:"Object",stat:!0},{values:function(e){return a(e)}})},"7bhD":function(e,n,t){},"AX+q":function(e,n,t){"use strict";var o=t("ddV6"),a=t.n(o),r=t("ERkP"),c=t.n(r),l=t("O94r"),s=t.n(l),u=t("P8nL"),i=t("sob3"),m=(t("7bhD"),t("eKd8")),p=t("qGsU"),f=t("F0xR");function d(e){function n(e){t.current&&(t.current.style.transform="translateY(".concat(e,"px)"))}var t=Object(r.useRef)(null),o=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useState)(!1),b=a()(d,2),h=b[0],v=b[1],O=Object(r.useRef)(0),E=Object(r.useRef)(0),j=Object(r.useRef)(0);Object(f.a)({attachListener:e.open,callback:function(){var e=o.current.classList;l.current.scrollTop>=1?e.add("np-bottom-sheet--top-bar--shadow"):e.remove("np-bottom-sheet--top-bar--shadow")},eventType:"scroll",parent:e.open&&document?document:void 0});var w=function(e){return function(n){j.current=(e?n.touches[0]:n).clientY,v(!0)}},C=function(e){return function(o){if(h){var a=function(e){return e-j.current}((e?o.touches[0]:o).clientY);a>0&&(E.current=a,O.current=requestAnimationFrame((function(){void 0!==O.current&&null!==t.current&&n(a)})))}}},N=function(){cancelAnimationFrame(O.current),v(!1),E.current>50&&l.current.scrollTop<=1?(t.current.style.transform=null,e.onClose&&e.onClose()):(n(0),E.current=0)};return c.a.createElement(u.a,{open:e.open,onClose:e.onClose},c.a.createElement(i.a,{open:e.open,position:m.a.BOTTOM,ref:t,className:s()("np-bottom-sheet",e.className),onTouchStart:w(!0),onTouchMove:C(!0),onTouchEnd:N,onMouseDown:w(!1),onMouseMove:C(!1),onMouseUp:N},c.a.createElement("div",{className:"np-bottom-sheet--top-bar",ref:o},c.a.createElement("div",{className:"np-bottom-sheet--handler"}),c.a.createElement(p.a,{onClick:e.onClose,size:16,className:"sr-only"})),c.a.createElement("div",{className:"np-bottom-sheet--content",ref:l},e.children)))}d.defaultProps={onClose:void 0,className:void 0,open:!1},n.a=d},KcoV:function(e,n,t){},PjJO:function(e,n,t){var o=t("fVMg")("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[o]=!1,"/./"[e](n)}catch(a){}}return!1}},YAkj:function(e,n,t){var o=t("1Mu/"),a=t("DEeE"),r=t("N4z3"),c=t("4Sk5").f,l=function(e){return function(n){for(var t,l=r(n),s=a(l),u=s.length,i=0,m=[];u>i;)t=s[i++],o&&!c.call(l,t)||m.push(e?[t,l[t]]:l[t]);return m}};e.exports={entries:l(!0),values:l(!1)}},npY3:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return m})),t.d(n,"default",(function(){return f}));var o=t("cxan"),a=t("HbGN"),r=t("ERkP"),c=t.n(r),l=t("ZVZ0"),s=t("Qi1R"),u=t("E+8c"),i=["components"],m=(c.a.createElement,{name:"FormControl"}),p={meta:m};function f(e){var n=e.components,t=Object(a.a)(e,i);return Object(l.a)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(l.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(l.a)(s.b,{code:"<FormControl\n  autoComplete={false}\n  id=\"form-control-id\"\n  name=\"form-control-name\"\n  placeholder=\"Search placeholder\"\n  displayPattern={null}\n  label=\"label\"\n  type={FormControl.Type.TEXT}\n  step={1}\n  options={[\n    { value: '1', label: 'One' },\n    { value: '2', label: 'Two' },\n    { value: '3', label: 'Three', secondary: 'secondary text' },\n  ]}\n  disabled={false}\n  readOnly={false}\n  required={false}\n  onChange={value => console.log(value)}\n  onBlur={value => console.log(value)}\n  onFocus={value => console.log(value)}\n  minLength={null}\n  maxLength={null}\n  min={null}\n  max={null}\n  minDate={null}\n  maxDate={null}\n  mode={FormControl.DateMode.DAY_MONTH_YEAR}\n  monthFormat={FormControl.MonthFormat.LONG}\n  value=\"a value\"\n  searchPlaceholder=\"placeholder\"\n  size={FormControl.Size.MEDIUM}\n  uploadProps={{ usDisabled: false, size: 'md' }}\n/>;\n",scope:{FormControl:u.a},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"FormControl",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0},nuol:function(e,n,t){var o=t("jl0/");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},qGsU:function(e,n,t){"use strict";t("1IsZ");var o=t("ERkP"),a=t.n(o),r=t("O94r"),c=t.n(r),l=t("kQwz"),s=t("/Vl7"),u=t("BAoe"),i=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),m=(t("KcoV"),a.a.forwardRef((function(e,n){var t=Object(l.a)(),o=e.onClick,r=e.className,u=e.size;return a.a.createElement("button",{ref:n,type:"button",className:c()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":u===m.Size.LARGE},r),"aria-label":t.formatMessage(i.ariaLabel),onClick:o},a.a.createElement(s.m,{size:u}))})));m.Size={SMALL:16,LARGE:24},m.defaultProps={className:null,size:m.Size.LARGE};n.a=m},uqOc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dynamicForms/FormControl",function(){return t("npY3")}])},x4t0:function(e,n,t){"use strict";var o=t("ax0f"),a=t("nuol"),r=t("cww3");o({target:"String",proto:!0,forced:!t("PjJO")("includes")},{includes:function(e){return!!~String(r(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})}},[["uqOc",0,1,2,6,3,5,7,8,9,10,11,13,14,15,16,19,20,17,21,4]]]);