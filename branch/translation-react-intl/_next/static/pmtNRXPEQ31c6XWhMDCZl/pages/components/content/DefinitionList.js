(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/ZZR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/DefinitionList",function(){return e("t7/X")}])},"7J1Q":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED",HORIZONTAL_RIGHT_ALIGNED:"HORIZONTAL_RIGHT_ALIGNED"}},CrPR:function(n,t,e){var r=e("e1rg");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(n,t,e){var r=e("QKKh"),o=e("QOpd"),i=e("R/wC")("species");n.exports=function(n,t){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},JbFr:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},O94r:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&n.push(a)}else if("object"===i)for(var u in r)e.call(r,u)&&r[u]&&n.push(u)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(n.exports=r)}()},PjUs:function(n,t,e){var r=e("fyTV"),o=e("xFK5"),i=e("k8sU"),a=e("QI0Q"),u=e("DZbC"),c=[].push,s=function(n){var t=1==n,e=2==n,s=3==n,l=4==n,f=6==n,p=5==n||f;return function(m,d,y,O){for(var L,v,A=i(m),E=o(A),T=r(d,y,3),_=a(E.length),I=0,w=O||u,N=t?w(m,_):e?w(m,0):void 0;_>I;I++)if((p||I in E)&&(v=T(L=E[I],I,A),n))if(t)N[I]=v;else if(v)switch(n){case 3:return!0;case 5:return L;case 6:return I;case 2:c.call(N,L)}else if(l)return!1;return f?-1:s||l?l:N}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},QOpd:function(n,t,e){var r=e("l9lp");n.exports=Array.isArray||function(n){return"Array"==r(n)}},"R/wC":function(n,t,e){var r=e("4im6"),o=e("lEPA"),i=e("d3yh"),a=e("rdnw"),u=e("e1rg"),c=e("CrPR"),s=o("wks"),l=r.Symbol,f=c?l:l&&l.withoutSetter||a;n.exports=function(n){return i(s,n)||(u&&i(l,n)?s[n]=l[n]:s[n]=f("Symbol."+n)),s[n]}},WuAH:function(n,t,e){"use strict";e("sL/y");var r,o=e("gC0r"),i=e.n(o),a=e("ERkP"),u=e.n(a),c=e("O94r"),s=e.n(c),l=e("7J1Q"),f=(e("alEp"),function(n){return 0<=[l.a.HORIZONTAL_LEFT_ALIGNED,l.a.HORIZONTAL_RIGHT_ALIGNED,l.a.HORIZONTAL_JUSTIFIED].indexOf(n)}),p=(r={},i()(r,l.a.HORIZONTAL_RIGHT_ALIGNED,"text-sm-right"),i()(r,l.a.HORIZONTAL_JUSTIFIED,"text-sm-justify"),r),m=function(n){var t=n.definitions,e=n.layout,r=n.muted;return u.a.createElement("dl",{className:s()("tw-definition-list d-flex ",{"text-muted":r,"flex-column":e===l.a.VERTICAL_ONE_COLUMN,"tw-definition-list--columns flex-column flex-row--sm":e===l.a.VERTICAL_TWO_COLUMN,"tw-definition-list--horizontal flex-column":f(e)})},t.map((function(n){var t=n.title,r=n.value,o=n.key;return u.a.createElement("div",{className:"tw-definition-list__item",key:o},u.a.createElement("dt",null,t),u.a.createElement("dd",{className:p[e]||""},r))})))};m.Layout=l.a,m.defaultProps={definitions:[],layout:m.Layout.VERTICAL_TWO_COLUMN,muted:!1},m.Layout=l.a,t.a=m},YyzA:function(n,t,e){var r=e("AoMu"),o=e("R/wC"),i=e("zLxc"),a=o("species");n.exports=function(n){return i>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},alEp:function(n,t,e){},e1rg:function(n,t,e){var r=e("AoMu");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ellU:function(n,t,e){var r=e("OzhJ");n.exports=r("navigator","userAgent")||""},fyTV:function(n,t,e){var r=e("JbFr");n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 0:return function(){return n.call(t)};case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},gC0r:function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},jw1G:function(n,t,e){var r=e("MlVR"),o=e("AoMu"),i=e("d3yh"),a=Object.defineProperty,u={},c=function(n){throw n};n.exports=function(n,t){if(i(u,n))return u[n];t||(t={});var e=[][n],s=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:c,f=i(t,1)?t[1]:void 0;return u[n]=!!e&&!o((function(){if(s&&!r)return!0;var n={length:-1};s?a(n,1,{enumerable:!0,get:c}):n[1]=1,e.call(n,l,f)}))}},"sL/y":function(n,t,e){"use strict";var r=e("EtS/"),o=e("PjUs").map,i=e("YyzA"),a=e("jw1G"),u=i("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})},"t7/X":function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return f})),e.d(t,"default",(function(){return d}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),u=e("ZVZ0"),c=e("Qi1R"),s=e("WuAH"),l="<DefinitionList\n  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  muted={false}\n  definitions={[\n    {\n      title: 'A simple title',\n      value: 'A simple value',\n      key: 'first',\n    },\n    {\n      title: <span>Use wrapper elements to style</span>,\n      value: <span className=\"h3\">89.45GBP</span>,\n      key: 'second',\n    },\n    {\n      title: 'Long strings will wrap',\n      value: 'And values with long words will eventuallybreakontothenextline',\n      key: 'third',\n    },\n  ]}\n/>;\n",f=(a.a.createElement,{name:"DefinitionList"}),p={meta:f},m="wrapper";function d(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(u.a)(m,Object(r.a)({},p,e,{components:t,mdxType:"MDXLayout"}),Object(u.a)(c.b,{code:l,scope:{DefinitionList:s.a},mdxType:"LiveEditorBlock"}),Object(u.a)(c.a,{componentName:"DefinitionList",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},zLxc:function(n,t,e){var r,o,i=e("4im6"),a=e("ellU"),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o}},[["/ZZR",0,1,2,3,4,6,5]]]);