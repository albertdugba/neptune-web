_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"0FSu":function(t,n,e){var r=e("IRf+"),o=e("g6a+"),a=e("N9G2"),c=e("tJVe"),i=e("aoZ+"),s=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,p=6==t,m=7==t,l=5==t||p;return function(d,v,y,h){for(var b,w,x=a(d),E=o(x),N=r(v,y,3),g=c(E.length),S=0,j=h||i,O=n?j(d,g):e||m?j(d,0):void 0;g>S;S++)if((l||S in E)&&(w=N(b=E[S],S,x),t))if(n)O[S]=w;else if(w)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:s.call(O,b)}else switch(t){case 4:return!1;case 7:s.call(O,b)}return p?-1:u||f?f:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},"56Cj":function(t,n,e){var r=e("ct80");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},GJtw:function(t,n,e){var r=e("ct80"),o=e("fVMg"),a=e("T+0C"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"IRf+":function(t,n,e){var r=e("hpdy");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},IjDp:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/InstructionsList",function(){return e("cpcP")}])},N9G2:function(t,n,e){var r=e("cww3");t.exports=function(t){return Object(r(t))}},"T+0C":function(t,n,e){var r,o,a=e("9JhN"),c=e("ZORK"),i=a.process,s=i&&i.versions,u=s&&s.v8;u?o=(r=u.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},TbR9:function(t,n,e){var r=e("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},ZORK:function(t,n,e){var r=e("VCi3");t.exports=r("navigator","userAgent")||""},ZrBu:function(t,n,e){"use strict";e("z84I");var r=e("ERkP"),o=e.n(r),a=e("/Vl7"),c=(e("9s95"),function(t){var n=t.dos,e=t.donts;return o.a.createElement("div",{className:"tw-instructions"},n.map((function(t,n){return o.a.createElement("div",{className:"instruction m-t-1",key:n},o.a.createElement(a.e,{size:24,className:"do"}),o.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},t))})),e.map((function(t,n){return o.a.createElement("div",{className:"instruction m-t-1",key:n},o.a.createElement(a.j,{size:24,className:"dont"}),o.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},t))})))});c.defaultProps={dos:[],donts:[]};var i=c;n.a=i},"aoZ+":function(t,n,e){var r=e("dSaG"),o=e("xt6W"),a=e("fVMg")("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[a])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},cpcP:function(t,n,e){"use strict";e.r(n),e.d(n,"meta",(function(){return f})),e.d(n,"default",(function(){return m}));var r=e("cxan"),o=e("HbGN"),a=e("ERkP"),c=e.n(a),i=e("ZVZ0"),s=e("Qi1R"),u=e("ZrBu"),f=(c.a.createElement,{name:"InstructionsList"}),p={meta:f};function m(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:"<InstructionsList\n  dos={[\n    'Do an initial money transfer',\n    'Invite at least 3 friends',\n    'Convince them to use this amazing product',\n  ]}\n  donts={[\n    <>Paying extra <a href=\"\">hidden fees</a> for transfers</>, \n    'Use bad exchange rate'\n  ]}\n/>;\n",scope:{InstructionsList:u.a},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"InstructionsList",mdxType:"GeneratePropsTable"}))}m.isMDXComponent=!0},fVMg:function(t,n,e){var r=e("9JhN"),o=e("TN3B"),a=e("8aeu"),c=e("HYrn"),i=e("56Cj"),s=e("TbR9"),u=o("wks"),f=r.Symbol,p=s?f:f&&f.withoutSetter||c;t.exports=function(t){return a(u,t)||(i&&a(f,t)?u[t]=f[t]:u[t]=p("Symbol."+t)),u[t]}},hpdy:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},xt6W:function(t,n,e){var r=e("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},z84I:function(t,n,e){"use strict";var r=e("ax0f"),o=e("0FSu").map,a=e("GJtw"),c=e("znGZ"),i=a("map"),s=c("map");r({target:"Array",proto:!0,forced:!i||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,n,e){var r=e("1Mu/"),o=e("ct80"),a=e("8aeu"),c=Object.defineProperty,i={},s=function(t){throw t};t.exports=function(t,n){if(a(i,t))return i[t];n||(n={});var e=[][t],u=!!a(n,"ACCESSORS")&&n.ACCESSORS,f=a(n,0)?n[0]:s,p=a(n,1)?n[1]:void 0;return i[t]=!!e&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,f,p)}))}}},[["IjDp",0,1,2,6,3,5,4]]]);