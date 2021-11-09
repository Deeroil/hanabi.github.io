/*! For license information please see 30a7de92.f86af572.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[618],{8173:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(8173),r=n(7294),a=n(5774),o=n(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var o=r.value;"string"==typeof o?t.push(o):e(t,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var c=l.length;function u(e){var t=e.id,n=l.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/c*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:i,text:i+"%"}))}},1797:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(1961),s=["components"],l={id:"card-notes",title:"Card Notes"},c=void 0,u={unversionedId:"beginner/card-notes",id:"beginner/card-notes",isDocsHomePage:!1,title:"Card Notes",description:"When you play Hanabi, you will need to write card notes. This page explains why.",source:"@site/docs/beginner/card-notes.md",sourceDirName:"beginner",slug:"/beginner/card-notes",permalink:"/docs/beginner/card-notes",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/card-notes.md",version:"current",frontMatter:{id:"card-notes",title:"Card Notes"},sidebar:"mainSidebar",previous:{title:"The Chop (Question 4)",permalink:"/docs/beginner/chop-question-4"},next:{title:"The Two Types of Clues",permalink:"/docs/beginner/two-types-of-clues"}},p=[{value:"Explicit and Implicit Information",id:"explicit-and-implicit-information",children:[]},{value:"Players Need to Track Implicit Information",id:"players-need-to-track-implicit-information",children:[]},{value:"Writing Notes",id:"writing-notes",children:[]},{value:"Avoiding Mistakes",id:"avoiding-mistakes",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{id:"card-notes",mdxType:"BeginnersGuideProgress"}),(0,a.kt)("p",null,"When you play Hanabi, you will need to write ",(0,a.kt)("em",{parentName:"p"},"card notes"),". This page explains why."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"explicit-and-implicit-information"},"Explicit and Implicit Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Hanabi, players will know ",(0,a.kt)("em",{parentName:"li"},"explicit")," information and ",(0,a.kt)("em",{parentName:"li"},"implicit")," information about the cards in their hand:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Explicit"),' information is from the clues "on" the card.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Implicit")," information is from the context of the game ",(0,a.kt)("em",{parentName:"li"},"when")," the card was clued."))),(0,a.kt)("li",{parentName:"ul"},"For example, in a 3-player game:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is the first turn of the game."),(0,a.kt)("li",{parentName:"ul"},"Alice clues Bob red, touching a card on his slot 1. Alice intends for this to be a ",(0,a.kt)("em",{parentName:"li"},"Play Clue"),", signaling to Bob that he has a red 1 and that he should play it on the stacks right now."),(0,a.kt)("li",{parentName:"ul"},"From Bob's perspective, he knows that ",(0,a.kt)("em",{parentName:"li"},"explicitly"),", his red card can be red 1, red 2, red 3, red 4, or red 5."),(0,a.kt)("li",{parentName:"ul"},"But Bob also knows that ",(0,a.kt)("em",{parentName:"li"},"implicitly"),", Alice intends for him to play this red card, so it must be exactly the red 1.")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"players-need-to-track-implicit-information"},"Players Need to Track Implicit Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On ",(0,a.kt)("a",{parentName:"li",href:"https://hanab.live/"},"Hanab Live"),', the interface automatically will keep track of clues that touch cards. And the interface will automatically narrow down the identities of the cards as they "get" more clues.'),(0,a.kt)("li",{parentName:"ul"},"However, this automated tracking of ",(0,a.kt)("em",{parentName:"li"},"explicit")," information is not sufficient - there is a lot more ",(0,a.kt)("em",{parentName:"li"},"implicit")," information than ",(0,a.kt)("em",{parentName:"li"},"explicit")," information."),(0,a.kt)("li",{parentName:"ul"},"In Hanabi games where players only give basic ",(0,a.kt)("em",{parentName:"li"},"Play Clues")," to each other (like in the previous example), remembering all of the ",(0,a.kt)("em",{parentName:"li"},"implicit")," information about the cards is easy. But as games get more and more complicated, remembering ",(0,a.kt)("em",{parentName:"li"},"implicit")," information about every card in the game is impossible."),(0,a.kt)("li",{parentName:"ul"},"Thus, in order to play Hanabi properly, players ",(0,a.kt)("strong",{parentName:"li"},"must")," go above and beyond the automated ",(0,a.kt)("em",{parentName:"li"},"explicit")," tracking and record all of the implicit information themselves.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"writing-notes"},"Writing Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handily, Hanab Live allows players to track ",(0,a.kt)("em",{parentName:"li"},"implicit")," information on a card by right-clicking on it. This pops up a text box, allowing players to record any information that they want. This is called a ",(0,a.kt)("em",{parentName:"li"},"card note"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"After every single clue, players should record a note on the affected card.")),(0,a.kt)("li",{parentName:"ul"},'In the previous example, Bob should right-click on his red card and write "red 1", so that he doesn\'t forget for later.'),(0,a.kt)("li",{parentName:"ul"},"Furthermore, Alice and Cathy should ",(0,a.kt)("strong",{parentName:"li"},"also"),' right-click on Bob\'s red card and write "red 1", so that they can keep track of what Bob thinks about the card. In this way, ',(0,a.kt)("strong",{parentName:"li"},"everybody writes notes on everybody's cards."))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"avoiding-mistakes"},"Avoiding Mistakes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Since the red clue above was so simple, you may think that writing a note of "red 1" is silly and a waste of time. However, realize that Bob ',(0,a.kt)("strong",{parentName:"li"},"might not play the red 1 for many, many turns"),", at which point the game state may have dramatically changed."),(0,a.kt)("li",{parentName:"ul"},"The most common beginner mistake that we see is failing to write a note on a card, and then forgetting some piece of information later on in the game."),(0,a.kt)("li",{parentName:"ul"},"Do not forget to do this! Write ",(0,a.kt)("em",{parentName:"li"},"card notes")," after ",(0,a.kt)("strong",{parentName:"li"},"every single clue"),", no matter how simple or complicated it is!")))}m.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return l}});var i=n(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:o({pathRadius:a,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:l,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);