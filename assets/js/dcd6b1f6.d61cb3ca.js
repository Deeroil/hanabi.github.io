/*! For license information please see dcd6b1f6.d61cb3ca.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1857,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,h=g["".concat(o,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),i=n(7294),a=n(2389),l=n(5773),s=n(6010),o="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,u=e.block,p=e.defaultValue,g=e.values,d=e.groupId,h=e.className,m=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),x=y.tabGroupChoices,w=y.setTabGroupChoices,k=(0,i.useState)(b),E=k[0],q=k[1],O=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=x[d];null!=C&&C!==E&&f.some((function(e){return e.value===C}))&&q(C)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==E&&(P(t),q(r),null!=d&&w(d,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:N,onClick:N},a,{className:(0,s.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(m.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,a.Z)();return i.createElement(c,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),i=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},7944:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return z},default:function(){return U},frontMatter:function(){return Q},metadata:function(){return X},toc:function(){return F}});var r,i,a,l,s,o,c,u,p,g,d,h,m,f,v,b,y,x,w,k,E,q,O,P,C,N,T,j,S,R=n(7462),H=n(3366),B=n(7294),I=n(3905),G=n(1961),_=n(9877),D=n(8215),Z=["title","titleId"];function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var V=function(e){var t=e.title,n=e.titleId,R=M(e,Z);return B.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 944 378",width:944,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,r||(r=B.createElement("defs",null,B.createElement("filter",{x:0,y:0,width:1,height:1,id:"a"},B.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=B.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),a||(a=B.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=B.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),s||(s=B.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),o||(o=B.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),B.createElement("svg",A({height:100,width:90,x:464,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=B.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=B.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),p||(p=B.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:-3})),g||(g=B.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow2.svg"})),B.createElement("svg",A({height:100,width:70,x:632,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,d||(d=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",A({height:100,width:70,x:710,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,h||(h=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",A({height:100,width:70,x:788,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,m||(m=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",A({height:100,width:70,x:866,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,f||(f=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",A({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),v||(v=B.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple2.svg",y:125})),b||(b=B.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),y||(y=B.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),x||(x=B.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow1.svg",y:125})),w||(w=B.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple3.svg",y:125})),B.createElement("svg",A({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},R),t?B.createElement("title",{id:n},t):null,B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=B.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),E||(E=B.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),q||(q=B.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow1.svg",y:250})),O||(O=B.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow5.svg",y:250})),P||(P=B.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/blue5.svg",y:250})),C||(C=B.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),N||(N=B.createElement("image",{height:100,width:70,x:121,xlinkHref:"/img/pieces/cards/green3.svg",y:136.667})),T||(T=B.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green4.svg",y:170})),j||(j=B.createElement("image",{height:100,width:70,x:191,xlinkHref:"/img/pieces/cards/purple4.svg",y:203.333})),S||(S=B.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},W=["components"],Q={id:"other-general-strategy-question-1",title:"Other General Strategy (Question 1)"},z=void 0,X={unversionedId:"beginner/other-general-strategy-question-1",id:"beginner/other-general-strategy-question-1",title:"Other General Strategy (Question 1)",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-1.md",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-1",permalink:"/docs/beginner/other-general-strategy-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/other-general-strategy-question-1.md",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-1",title:"Other General Strategy (Question 1)"},sidebar:"mainSidebar",previous:{title:"Other General Strategy",permalink:"/docs/beginner/other-general-strategy"},next:{title:"Other General Strategy (Question 2)",permalink:"/docs/beginner/other-general-strategy-question-2"}},F=[],L={toc:F};function U(e){var t=e.components,n=(0,H.Z)(e,W);return(0,I.kt)("wrapper",(0,R.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)(G.Z,{id:"other-general-strategy-question-1",mdxType:"BeginnersGuideProgress"}),(0,I.kt)(_.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(D.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"It is Alice's turn and she has a yellow 2 to play."),(0,I.kt)("li",{parentName:"ul"},"Cathy has a critical blue 5 on chop."),(0,I.kt)("li",{parentName:"ul"},"Should Alice play the yellow 2 or save Cathy's blue 5?"))),(0,I.kt)(D.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Alice has a playable card and Bob doesn't have anything to do."),(0,I.kt)("li",{parentName:"ul"},"Thus, it would be bad teamwork for Alice to save Cathy's blue 5."),(0,I.kt)("li",{parentName:"ul"},"Alice should play the yellow 2 and let Bob handle saving Cathy's blue 5.")))),(0,I.kt)(V,{mdxType:"OtherGeneralStrategyQuestion1"}))}U.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);