(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[3049],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=l,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.createElement(h,n(n({ref:t},u),{},{components:a})):r.createElement(h,n({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,n[1]=c;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8787:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e){var t=e.className,a=e.counterClockwise,l=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:l,counterClockwise:a})),d:n({pathRadius:i,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function n(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,l=2*Math.PI*r,i=(1-a)*l;return{strokeDasharray:l+"px "+l+"px",strokeDashoffset:(t?-i:i)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,l=e.classes,n=e.counterClockwise,c=e.styles,o=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,r.createElement)("svg",{className:l.root+" "+a,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:l.background,style:c.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:l.trail,counterClockwise:n,dashRatio:t,pathRadius:u,strokeWidth:o,style:c.trail}),(0,r.createElement)(i,{className:l.path,counterClockwise:n,dashRatio:m*t,pathRadius:u,strokeWidth:o,style:c.path}),s?(0,r.createElement)("text",{className:l.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function s(e){var t=e.part,a=Math.round((t-1)/61*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(o,{value:a,text:a+"%"}))}},221:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return F},default:function(){return Q},frontMatter:function(){return Z},metadata:function(){return X},toc:function(){return z}});var r,l,i,n,c,o,s,u,m,p,d,h,g,y,f,b,x,v,w,k,E,N,C,P,O,j,M,T,S,R=a(2122),_=a(9756),V=a(7294),B=a(3905),D=a(8787),W=["title","titleId"];function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var A=function(e){var t=e.title,a=e.titleId,R=I(e,W);return V.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,r||(r=V.createElement("defs",null,V.createElement("filter",{x:0,y:0,width:1,height:1,id:"tempo-clue_yml__a"},V.createElement("feFlood",{floodColor:"#0ff"})))),l||(l=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),i||(i=V.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow3.svg"})),n||(n=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green4.svg"})),c||(c=V.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),o||(o=V.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),V.createElement("svg",H({height:100,width:90,x:464,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,s||(s=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=V.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#tempo-clue_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=V.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),V.createElement("svg",H({height:100,width:70,x:554,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,p||(p=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:632,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,d||(d=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:710,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,h||(h=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:788,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,g||(g=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:866,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,y||(y=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,f||(f=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),V.createElement("svg",H({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,b||(b=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,x||(x=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,v||(v=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,w||(w=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),k||(k=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),E||(E=V.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red2.svg",y:125})),N||(N=V.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow_dark.svg",y:85})),C||(C=V.createElement("circle",{cx:901,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),V.createElement("svg",H({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,P||(P=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),V.createElement("svg",H({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,O||(O=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,j||(j=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,M||(M=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,T||(T=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",H({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":a},R),t?V.createElement("title",{id:a},t):null,S||(S=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},q=["components"],Z={id:"minimum-clue-value-principle",title:"Minimum Clue Value Principle (MCVP)"},F=void 0,X={unversionedId:"beginner/minimum-clue-value-principle",id:"beginner/minimum-clue-value-principle",isDocsHomePage:!1,title:"Minimum Clue Value Principle (MCVP)",description:"No Nonsense Clues",source:"@site/docs/beginner/minimum-clue-value-principle.md",sourceDirName:"beginner",slug:"/beginner/minimum-clue-value-principle",permalink:"/docs/beginner/minimum-clue-value-principle",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/minimum-clue-value-principle.md",version:"current",frontMatter:{id:"minimum-clue-value-principle",title:"Minimum Clue Value Principle (MCVP)"},sidebar:"mainSidebar",previous:{title:"Save Principle (Question 2)",permalink:"/docs/beginner/save-principle-question-2"},next:{title:"Minimum Clue Value Principle (Question 1)",permalink:"/docs/beginner/minimum-clue-value-principle-question-1"}},z=[{value:"No Nonsense Clues",id:"no-nonsense-clues",children:[]},{value:"Tempo Clues",id:"tempo-clues",children:[]},{value:"Minimum Clue Value Principle (MCVP)",id:"minimum-clue-value-principle-mcvp",children:[]}],G={toc:z};function Q(e){var t=e.components,a=(0,_.Z)(e,q);return(0,B.kt)("wrapper",(0,R.Z)({},G,a,{components:t,mdxType:"MDXLayout"}),(0,B.kt)(D.Z,{part:"46",mdxType:"BeginnersGuideProgress"}),(0,B.kt)("h3",{id:"no-nonsense-clues"},"No Nonsense Clues"),(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},"Usually, players only discard when they have nothing else to do. But don't take this the wrong way."),(0,B.kt)("li",{parentName:"ul"},"Players are ",(0,B.kt)("strong",{parentName:"li"},"not allowed")," to just clue any card:",(0,B.kt)("ul",{parentName:"li"},(0,B.kt)("li",{parentName:"ul"},"Players are only allowed to give ",(0,B.kt)("em",{parentName:"li"},"Play Clues")," to actual playable cards."),(0,B.kt)("li",{parentName:"ul"},"Players are only allowed to give ",(0,B.kt)("em",{parentName:"li"},"Save Clues")," to the specific cards outlined in the ",(0,B.kt)("em",{parentName:"li"},"Save Principle")," section."))),(0,B.kt)("li",{parentName:"ul"},"If players cannot give a legal ",(0,B.kt)("em",{parentName:"li"},"Play Clue")," or ",(0,B.kt)("em",{parentName:"li"},"Save Clue"),", then they ",(0,B.kt)("strong",{parentName:"li"},"must discard"),".")),(0,B.kt)("br",null),(0,B.kt)("h3",{id:"tempo-clues"},"Tempo Clues"),(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},"Furthermore, players might be tempted to ",(0,B.kt)("strong",{parentName:"li"},"clue a card again that already has a clue on it")," in order to make it play right now. We call this kind of clue a ",(0,B.kt)("em",{parentName:"li"},"Tempo Clue"),"."),(0,B.kt)("li",{parentName:"ul"},"A ",(0,B.kt)("em",{parentName:"li"},"Tempo Clue")," is defined as a ",(0,B.kt)("em",{parentName:"li"},"Play Clue"),' that does not "get" any brand new cards.'),(0,B.kt)("li",{parentName:"ul"},(0,B.kt)("em",{parentName:"li"},"Tempo Clues")," are quite inefficient - the team is using two clues to get one card. Since ",(0,B.kt)("em",{parentName:"li"},"Tempo Clues")," are so bad, we say that players are ",(0,B.kt)("strong",{parentName:"li"},"only allowed to perform ",(0,B.kt)("em",{parentName:"strong"},"Tempo Clues")," in special situations"),", like when a player is forced to give a clue."),(0,B.kt)("li",{parentName:"ul"},"For example, in a 3-player game:",(0,B.kt)("ul",{parentName:"li"},(0,B.kt)("li",{parentName:"ul"},"Alice is in a special situation where she cannot discard."),(0,B.kt)("li",{parentName:"ul"},"Bob has a 2 in his hand that was saved with a ",(0,B.kt)("em",{parentName:"li"},"2 Save")," clue earlier on in the game. He does not know what color it is, but assumes that it is either a red 2 or a blue 2."),(0,B.kt)("li",{parentName:"ul"},'Alice clues red to Bob, "filling in" the red 2. This is a ',(0,B.kt)("em",{parentName:"li"},"Tempo Clue")," because there are no new cards. (Since this is so inefficient, Alice would never do this unless she was in a special stalling situation.)"),(0,B.kt)("li",{parentName:"ul"},"Bob can now play the red 2.")))),(0,B.kt)(A,{mdxType:"TempoClue"}),(0,B.kt)("h3",{id:"minimum-clue-value-principle-mcvp"},"Minimum Clue Value Principle (MCVP)"),(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},"So, if a player only has the option to give a ",(0,B.kt)("em",{parentName:"li"},"Tempo Clue")," or to discard, then they ",(0,B.kt)("strong",{parentName:"li"},"must discard"),"."),(0,B.kt)("li",{parentName:"ul"},"We formally express this concept as ",(0,B.kt)("em",{parentName:"li"},"Minimum Clue Value Principle"),": ",(0,B.kt)("strong",{parentName:"li"},"all clues must get at least one previously unclued card played or saved"),"."),(0,B.kt)("li",{parentName:"ul"},"In other words, as a group, we hold ourselves to a high standard, and we don't give inefficient clues.")))}Q.isMDXComponent=!0}}]);