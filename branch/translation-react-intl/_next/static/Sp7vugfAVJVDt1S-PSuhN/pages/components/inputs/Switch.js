(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"6gor":function(e,n,c){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},O94r:function(e,n,c){var t;!function(){"use strict";var c={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)&&t.length){var o=a.apply(null,t);o&&e.push(o)}else if("object"===r)for(var i in t)c.call(t,i)&&t[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},cGSD:function(e,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Switch",function(){return c("cjIA")}])},cjIA:function(e,n,c){"use strict";c.r(n),c.d(n,"meta",(function(){return k})),c.d(n,"default",(function(){return b}));var t=c("cxan"),a=c("HbGN"),r=c("ERkP"),o=c.n(r),i=c("ZVZ0"),s=c("Qi1R"),u=c("O94r"),l=c.n(u),p=(c("5s8o"),c("/Vl7")),d=c("6gor"),h=function(e){var n=e.checked,c=e.onClick,t=e.className,a=e.id;return o.a.createElement("span",{className:l()("switch",{"switch--unchecked":!n,"switch--checked":n},t),onClick:c,onKeyDown:function(e){(32===e.code||e.keyCode===d.a.SPACE)&&(e.preventDefault(),c())},tabIndex:0,role:"checkbox","aria-checked":n,id:a},o.a.createElement("span",{className:"switch--thumb"},n?o.a.createElement(p.d,{filled:!0,size:24}):o.a.createElement(p.i,{filled:!0,size:24})),o.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};h.defaultProps={checked:!1,className:null,id:null};var f=h,m="() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return <Switch checked={checked} onClick={() => setCheck(!checked)} />;\n};\n",k=(o.a.createElement,{name:"Switch"}),w={meta:k},E="wrapper";function b(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(i.a)(E,Object(t.a)({},w,c,{components:n,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:m,scope:{Switch:f},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0}},[["cGSD",0,1,2,4,7,3,5]]]);