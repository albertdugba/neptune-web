_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{CqdY:function(e,n){e.exports="/neptune-web/branch/next/_next/static/images/popover-release-mar-2021_1-b7ce8084bff5fa44a978536b5e6d1537.png"},HFyK:function(e,n,l){"use strict";var t=l("ddV6"),o=l.n(t),r=l("ERkP"),a=l("aWzz"),s=l.n(a),i=l("O94r"),u=l.n(i),c=(l("+oxZ"),{threshold:.1}),p=function(e){var n=e.elRef;if("eager"===e.loading)return[!1];var l=Object(r.useState)(!1),t=o()(l,2),a=t[0],s=t[1],i=function(e,l){e.forEach((function(e){e.isIntersecting&&(s(!0),l.unobserve(n.current))}))};return Object(r.useEffect)((function(){var e,l=!1;return window.IntersectionObserver&&n&&n.current?!l&&(e=new IntersectionObserver(i,c)).observe(n.current):s(!0),function(){l=!0,e&&e.unobserve(n.current)}}),[n]),[a]},d=(l("PkpH"),l("jg1C")),h=function(e){var n=e.id,l=e.src,t=e.alt,a=e.onLoad,s=e.onError,i=e.className,c=e.loading,h=e.stretch,g=e.shrink,m=Object(r.useRef)(),b=p({elRef:m,loading:c}),P=o()(b,1)[0],f=l,T=a;return"lazy"!==c||P||(f="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",T=null),Object(d.jsx)("img",{id:n,alt:t,src:f,className:u()(["tw-image",{"tw-image__stretch":h,"tw-image__shrink":g},i]),ref:m,onLoad:T,onError:s})};h.propTypes={id:s.a.string,src:s.a.string.isRequired,alt:s.a.string.isRequired,onLoad:s.a.func,onError:s.a.func,className:s.a.string,loading:s.a.oneOf(["lazy","eager"]),stretch:s.a.bool,shrink:s.a.bool},h.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};n.a=h},PkpH:function(e,n,l){},c9VE:function(e,n,l){"use strict";l.r(n),l.d(n,"meta",(function(){return g})),l.d(n,"default",(function(){return m}));var t=l("ERkP"),o=l.n(t),r=l("3g/d"),a=l("HFyK"),s=l("CqdY"),i=l.n(s),u=l("p9bC"),c=l.n(u),p=l("snVg"),d=l.n(p),h=o.a.createElement,g={name:"Popover Upgrade guide",date:"2021-03-08",authors:[{name:"Andrea Piras",githubUsername:"andreapiras"}],hidden:!0};function m(){return h("div",null,h(r.a,{message:"These changes will be released in components v35. See the Popover designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@34.2.16-beta.48"}),h("p",null,"We refactored Popover to make it more robust and accessible. The positioning engine has also been replaced with a more sophisticated tool called"," ",h("a",{href:"https://popper.js.org/",rel:"noreferrer",target:"_blank"},"Popper"),"."),h("h2",null,"Changes"),h("table",{className:"docs-table table"},h("thead",null,h("tr",null,h("th",null,"Old API"),h("th",null,"New API"),h("th",null,"Change type"))),h("tbody",null,h("tr",null,h("td",null,h("code",null,"children: Types.element | Types.string")),h("td",null,h("code",null,"children: Types.node")),h("td",null,"BREAKING CHANGE: Internal logic has changed. Elements will not be wrapped in focusable elements")),h("tr",null,h("td",null,h("code",null,"classNames: Types.string")),h("td",null,h("code",null,"className: Types.string")),h("td",null,"BREAKING CHANGE: prop name")),h("tr",null,h("td",null,h("code",null,"content:",h("br",null),"Types.element | Types.string | Types.func")),h("td",null,h("code",null,"content: Types.node")),h("td",null,"BREAKING CHANGE: Removed type function support")),h("tr",null,h("td",null,h("code",null,"containsFocusableElement")),h("td",null,"-"),h("td",null,"Deleted this property")),h("tr",null,h("td",null,h("code",null,"preferredPlacement: ",h("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT |",h("br",null),"Popover.Placement.BOTTOM | Popover.Placement.LEFT | Popover.Placement.LEFT_TOP |",h("br",null),"Popover.Placement.RIGHT_TOP | Popover.Placement.BOTTOM_RIGHT |",h("br",null),"Popover.Placement.BOTTOM_LEFT")),h("td",null,h("code",null,"preferredPlacement:",h("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT | Popover.Placement.BOTTOM | Popover.Placement.LEFT")),h("td",null)),h("tr",null,h("td",null,h("code",null,"title: Types.element | Types.string")),h("td",null,h("code",null,"title: Types.node")),h("td",null)))),h("ul",null,h("li",null,h("b",null,"className"))),h(r.a,{type:"warning",message:"Breaking change"}),h("p",null,"ClassNames has been renamed to ClassName and To be consistent with the rest of our API now accepts only strings \u201cclass1 class2 \u2026\u201d"),h("ul",null,h("li",null,h("b",null,"containsFocusableElement"))),h(r.a,{type:"warning",message:"Breaking change"}),h("p",null,"containsFocusableElement was introduced in this"," ",h("a",{href:"https://github.com/transferwise/neptune-web/commit/e0787fe3ed0dc1af48a3296129cda4f479219da6#diff-d4f3b771644287c2d339aea614ebe1e12841586ca1d3c421e21d98f2bb7f877a"},"PR")," ","to allow Popover to be opened by multiple triggers and attach focus props."),h("p",null,"Example: Avatar + choose an icons"),h(a.a,{src:i.a,alt:"Avatar + choose an icons",loading:"lazy",stretch:!1,shrink:!0}),h("p",null,"To achieve the same behavior you can do something similar:"),h("pre",null,"// This is not the cleanest solution but still better to embed this logic in Popover for one use case.\nconst simulateTriggerClick = () => {\n  // Do your stuff here\n  triggerRef.current.click();\n};\n<Popover content={<IconElement onClick={()=>simulateTriggerClick()} \u2026>\n  <button ref={triggerRef} ...>\n    <Avatar ...>\n      \ud83e\udddc\ud83c\udffc\n    </Avatar>\n    Choose an icon\n  </button>\n</Popover>"),h("ul",null,h("li",null,h("b",null,"preferredPlacement"))),h(r.a,{type:"warning",message:"**DEPRECATION**"}),h("p",null,"We deprecated some of the preferredPlacement"),h("table",{className:"docs-table table"},h("thead",null,h("tr",null,h("th",null,"Deprecated"),h("th",null,"Supported"))),h("tbody",null,h("tr",null,h("td",null,h("code",null,"Popover.Position.LEFT_TOP")),h("td",null,h("code",null,"Popover.Position.TOP"))),h("tr",null,h("td",null,h("code",null,"Popover.Position.RIGHT_TOP")),h("td",null,h("code",null,"Popover.Position.TOP"))),h("tr",null,h("td",null,h("code",null,"Popover.Position.BOTTOM_LEFT")),h("td",null,h("code",null,"Popover.Position.BOTTOM"))),h("tr",null,h("td",null,h("code",null,"Popover.Position.BOTTOM_RIGHT")),h("td",null,h("code",null,"Popover.Position.BOTTOM"))))),h("p",null,"The only supported position will be TOP, RIGHT, BOTTOM, LEFT. Please note that Popper engine is going to determine the best position for your popover based on the space available on screen if the one provided is not suitable."),h("ul",null,h("li",null,h("b",null,"content"))),h(r.a,{type:"warning",message:"Breaking change"}),h("p",null,"The old API used to accept"),h("ul",null,h("li",null,"Types.element"),h("li",null,"Types.string"),h("li",null,"Types.func")),h("p",null,"Now it will accept only nodes.",h("br",null),"Popover content should accept only a restricted set of html (see docs) and translatable string."),h("ul",null,h("li",null,h("b",null,"Markup"))),h(r.a,{type:"warning",message:"Breaking change"}),h("p",null,"Although we don\u2019t provide official support for user relying on html and css internal implementation, it\u2019s worth mention that the both html structure and css have changed."),h("h2",null,"Migration Example"),h("h3",null,"Old API"),h("pre",null,'<Popover\n  containsFocusableElement={containsFocusableElement}\n  content="You\u2019ll get this rate as long..."\n  preferredPlacement={Popover.Placement.BOTTOM_RIGHT}\n  title="Guaranteed rate"\n>\n  <Icon> / <span> / string\n</Popover>'),h("h3",null,"New API"),h("pre",null,'<Popover\n  content={You\u2019ll get this rate as long...}\n  preferredPlacement={Popover.Placement.BOTTOM}\n  title="Guaranteed rate"\n>\n  <button ...>\n      <Icon> / string\n  </button>\n</Popover>'),h("h2",null,"Adaptive Positioning"),h(r.a,{type:"warning",message:"**VISUAL CHANGE**"}),h("p",null,"At the moment Popover doesn\u2019t change its placements when reaching the windows boundaries. Its position gets recalculated only on open/close. The new version adapts to the container and calculates automatically the best placement on screen for both content and arrow"),h(a.a,{src:c.a,alt:"Popover Adaptive Positioning",loading:"lazy",stretch:!1}),h("h2",null,"Mobile Behaviour"),h(r.a,{type:"warning",message:"**VISUAL CHANGE**"}),h("p",null,"In order to align mobile web with mobile behaviour, Popover will now open in a bottomSheet on Mobile size devices."),h(a.a,{src:d.a,alt:"Popover example of mobile behaviour",loading:"lazy",stretch:!1}),h("h2",null,"Dependency requirements"),h("pre",null,"@transferwise/components >= 35.x.x",h("br",null),"@transferwise/neptune-css >= 9.x.x"))}},p9bC:function(e,n){e.exports="/neptune-web/branch/next/_next/static/images/popover-release-mar-2021_2-304524b1e4ec399923e767c20cefdbab.png"},pWoL:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-03-08-popover-upgrade-guide",function(){return l("c9VE")}])},snVg:function(e,n){e.exports="/neptune-web/branch/next/_next/static/images/popover-release-mar-2021_3-6bde12d971dc956ab728043882e085fb.png"}},[["pWoL",0,1,2,3]]]);