_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[94],{"+/eK":function(e,n){e.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"+JZ1":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Select",function(){return t("0c+Z")}])},"0c+Z":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t("cxan"),o=t("HbGN"),c=t("ERkP"),a=t.n(c),i=t("ZVZ0"),l=t("Qi1R"),u=t("RmhF"),s=t("/Vl7"),p=(a.a.createElement,{name:"Select"}),f={meta:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:"() => {\n  const [selected, setSelected] = React.useState({\n    value: 0,\n    label: 'A thing',\n    note: 'with a note',\n  });\n\n  return (\n    <Select\n      size=\"md\"\n      placeholder=\"Placeholder\"\n      dropdownRight=\"xs\"\n      dropdownWidth=\"lg\"\n      inverse={false}\n      block\n      selected={selected}\n      disabled={false}\n      onChange={(v) => setSelected(v)}\n      required={false}\n      searchPlaceholder=\"Search placeholder\"\n      dropdownUp={false}\n      search\n      options={[\n        { header: 'Basic' },\n        { value: 0, label: 'A thing', note: 'with a note' },\n        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },\n        { value: 2, label: 'A disabled thing', disabled: true },\n        { header: 'Icons' },\n        { value: 3, label: 'Profile', icon: <ProfileIcon /> },\n        { value: 4, label: 'Globe', icon: <GlobeIcon /> },\n        { header: 'Currencies' },\n        { value: 5, label: 'British pound', currency: 'gbp' },\n        { value: 6, label: 'Euro', currency: 'eur' },\n        { separator: true },\n        { value: 7, label: 'Something else' },\n        { header: 'Options with searchable alternatives' },\n        {\n          value: 8,\n          label: 'A thing with searchable alternatives',\n          searchStrings: ['abbreviation', 'acronym', 'nickname'],\n        },\n      ]}\n    />\n  );\n};\n",scope:{Select:u.a,GlobeIcon:s.q,ProfileIcon:s.x},display:"vertical",mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"Select",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},"34wW":function(e,n,t){var r=t("amH4"),o=t("QsUS");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var c=t.call(e,n);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,n)}},"4/YM":function(e,n,t){"use strict";var r=t("t/tF").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},DEeE:function(e,n,t){var r=t("yRya"),o=t("sX5C");e.exports=Object.keys||function(e){return r(e,o)}},Ya2h:function(e,n,t){var r=t("cww3"),o="["+t("+/eK")+"]",c=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),i=function(e){return function(n){var t=String(r(n));return 1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(a,"")),t}};e.exports={start:i(1),end:i(2),trim:i(3)}},guiJ:function(e,n,t){var r,o=t("FXyv"),c=t("uZvN"),a=t("sX5C"),i=t("1odi"),l=t("kySU"),u=t("8r/q"),s=t("MyxS"),p=s("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}h=r?function(e){e.write(d("")),e.close();var n=e.parentWindow.Object;return e=null,n}(r):function(){var e,n=u("iframe");return n.style.display="none",l.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F}();for(var e=a.length;e--;)delete h.prototype[a[e]];return h()};i[p]=!0,e.exports=Object.create||function(e,n){var t;return null!==e?(f.prototype=o(e),t=new f,f.prototype=null,t[p]=e):t=h(),void 0===n?t:c(t,n)}},kySU:function(e,n,t){var r=t("VCi3");e.exports=r("document","documentElement")},lbJE:function(e,n,t){"use strict";t("KqXw");var r=t("uLp7"),o=t("ct80"),c=t("fVMg"),a=t("QsUS"),i=t("WxKw"),l=c("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s="$0"==="a".replace(/./,"$0"),p=c("replace"),f=!!/./[p]&&""===/./[p]("a","$0"),d=!o((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,p){var h=c(e),v=!o((function(){var n={};return n[h]=function(){return 7},7!=""[e](n)})),b=v&&!o((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[l]=function(){return t},t.flags="",t[h]=/./[h]),t.exec=function(){return n=!0,null},t[h](""),!n}));if(!v||!b||"replace"===e&&(!u||!s||f)||"split"===e&&!d){var x=/./[h],E=t(h,""[e],(function(e,n,t,r,o){return n.exec===a?v&&!o?{done:!0,value:x.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=E[0],g=E[1];r(String.prototype,e,m),r(RegExp.prototype,h,2==n?function(e,n){return g.call(e,this,n)}:function(e){return g.call(e,this)})}p&&i(RegExp.prototype[h],"sham",!0)}},"t/tF":function(e,n,t){var r=t("i7Kn"),o=t("cww3"),c=function(e){return function(n,t){var c,a,i=String(o(n)),l=r(t),u=i.length;return l<0||l>=u?e?"":void 0:(c=i.charCodeAt(l))<55296||c>56319||l+1===u||(a=i.charCodeAt(l+1))<56320||a>57343?e?i.charAt(l):c:e?i.slice(l,l+2):a-56320+(c-55296<<10)+65536}};e.exports={codeAt:c(!1),charAt:c(!0)}},uZvN:function(e,n,t){var r=t("1Mu/"),o=t("q9+l"),c=t("FXyv"),a=t("DEeE");e.exports=r?Object.defineProperties:function(e,n){c(e);for(var t,r=a(n),i=r.length,l=0;i>l;)o.f(e,t=r[l++],n[t]);return e}},vrRf:function(e,n,t){"use strict";var r=t("ax0f"),o=t("H17f").indexOf,c=t("f4p7"),a=t("znGZ"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,u=c("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!u||!s},{indexOf:function(e){return l?i.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["+JZ1",0,1,2,6,3,5,7,10,11,12,4]]]);