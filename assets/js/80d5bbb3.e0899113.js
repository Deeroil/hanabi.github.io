(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6839],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return r?n.createElement(p,l(l({ref:t},u),{},{components:r})):n.createElement(p,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,m=e.values,d=e.groupId,h=e.className,p=i(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,n.useState)(a),v=y[0],b=y[1],x=n.Children.toArray(e.children),w=[];if(null!=d){var k=g[d];null!=k&&k!==v&&m.some((function(e){return e.value===k}))&&b(k)}var E=function(e){var t=e.currentTarget,r=w.indexOf(t),n=m[r].value;b(n),null!=d&&(f(d,n),setTimeout((function(){var e,r,n,a,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case c:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:E,onClick:E},r)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:a,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,i=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,n.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,n.createElement)("text",{className:a.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function c(e){var t=e.part,r=Math.round((t-1)/61*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(s,{value:r,text:r+"%"}))}},7878:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return z},default:function(){return F},frontMatter:function(){return Q},metadata:function(){return G},toc:function(){return L}});var n,a,i,l,o,s,c,u,m,d,h,p,g,f,y,v,b,x,w,k,E,O,C,N,P,T,j,S,_=r(2122),R=r(9756),H=r(7294),q=r(3905),Z=r(8787),B=r(5064),I=r(8215),D=["title","titleId"];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var W=function(e){var t=e.title,r=e.titleId,_=M(e,D);return H.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 944 378",width:944,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,n||(n=H.createElement("defs",null,H.createElement("filter",{x:0,y:0,width:1,height:1,id:"2-save-question-3_yml__a"},H.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),i||(i=H.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=H.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),o||(o=H.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),s||(s=H.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),H.createElement("svg",A({height:100,width:90,x:464,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,c||(c=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=H.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#2-save-question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=H.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),H.createElement("svg",A({height:100,width:70,x:554,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,d||(d=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",A({height:100,width:70,x:632,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,h||(h=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",A({height:100,width:70,x:710,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,p||(p=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),g||(g=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),H.createElement("svg",A({height:100,width:70,x:788,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,f||(f=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"}))),y||(y=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:-3})),H.createElement("svg",A({height:100,width:70,x:866,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,v||(v=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"}))),H.createElement("svg",A({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,b||(b=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),x||(x=H.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),w||(w=H.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple3.svg",y:125})),k||(k=H.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow2.svg",y:125})),E||(E=H.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red2.svg",y:125})),O||(O=H.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/green2.svg",y:125})),H.createElement("svg",A({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},_),t?H.createElement("title",{id:r},t):null,C||(C=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),N||(N=H.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow5.svg",y:250})),P||(P=H.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),T||(T=H.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green1.svg",y:250})),j||(j=H.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green1.svg",y:250})),S||(S=H.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/yellow2.svg",y:250})))},V=["components"],Q={id:"2-save-question-3",title:"The 2 Save (Question 3)"},z=void 0,G={unversionedId:"beginner/2-save-question-3",id:"beginner/2-save-question-3",isDocsHomePage:!1,title:"The 2 Save (Question 3)",description:"<Tabs",source:"@site/docs/beginner/2-save-question-3.md",sourceDirName:"beginner",slug:"/beginner/2-save-question-3",permalink:"/docs/beginner/2-save-question-3",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/2-save-question-3.md",version:"current",sidebarPosition:2,frontMatter:{id:"2-save-question-3",title:"The 2 Save (Question 3)"},sidebar:"mainSidebar",previous:{title:"The 2 Save (Question 2)",permalink:"/docs/beginner/2-save-question-2"},next:{title:"The Critical Save",permalink:"/docs/beginner/critical-save"}},L=[],X={toc:L};function F(e){var t=e.components,r=(0,R.Z)(e,V);return(0,q.kt)("wrapper",(0,_.Z)({},X,r,{components:t,mdxType:"MDXLayout"}),(0,q.kt)(Z.Z,{part:"21",mdxType:"BeginnersGuideProgress"}),(0,q.kt)(B.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,q.kt)(I.Z,{value:"question",mdxType:"TabItem"},(0,q.kt)("ul",null,(0,q.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,q.kt)(I.Z,{value:"solution",mdxType:"TabItem"},(0,q.kt)("ul",null,(0,q.kt)("li",{parentName:"ul"},"Alice is not allowed to perform a ",(0,q.kt)("em",{parentName:"li"},"2 Save")," on Bob's green 2 because the other copy of the green 2 is present in Cathy's hand and is not on chop."),(0,q.kt)("li",{parentName:"ul"},"Alice is not allowed to perform a ",(0,q.kt)("em",{parentName:"li"},"2 Save")," on Cathy's yellow 2 because the other copy of the yellow 2 is present in Bob's hand and is not on chop."),(0,q.kt)("li",{parentName:"ul"},"Alice could try to clue green to Cathy as a ",(0,q.kt)("em",{parentName:"li"},"Play Clue")," on the green 2, but that would be quite an ugly clue because it would also touch both of the green 1's. (More on that later.)"),(0,q.kt)("li",{parentName:"ul"},"Thus, Alice should discard.")))),(0,q.kt)(W,{mdxType:"TwoSaveQuestion3"}))}F.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);