/*! For license information please see f1c0b2c8.efb1f21a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1931],{8173:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function r(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return r}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return h}});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(i),h=r,g=u["".concat(s,".").concat(h)]||u[h]||m[h]||n;return i?a.createElement(g,l(l({ref:t},d),{},{components:i})):a.createElement(g,l({ref:t},d))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<n;o++)l[o]=i[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var a=i(8173),r=i(7294),n=i(5774),l=i(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,i){for(var r,n=(0,a.Z)(i);!(r=n()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function d(e){var t=e.id,i=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var a=Math.round((i+1)/o*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(n.Ip,{value:a,text:a+"%"}))}},6695:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return Ce},default:function(){return Ae},frontMatter:function(){return Se},metadata:function(){return je},toc:function(){return He}});var a,r,n,l,c,s,o,d,m,u,h,g,p,f,b,y,v,x,w,E,k,N,O,q,P,S,C,j,H,B,A,M,T,I,R,_,z,D=i(2122),G=i(9756),W=i(7294),Z=i(3905),L=i(1961),V=["title","titleId"];function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var Q,U,$,J,K,Y,ee,te,ie,ae,re,ne,le,ce,se,oe,de,me,ue,he,ge,pe,fe,be,ye,ve,xe,we,Ee=function(e){var t=e.title,i=e.titleId,D=F(e,V);return W.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:280,viewBox:"0 0 944 280",width:944,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,a||(a=W.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),r||(r=W.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),n||(n=W.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),l||(l=W.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),c||(c=W.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),W.createElement("svg",X({height:100,width:90,x:464,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,s||(s=W.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice"))),o||(o=W.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue1.svg"})),W.createElement("svg",X({height:20,width:64,x:557,y:105,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,d||(d=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,m||(m=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 1")))),u||(u=W.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue2.svg"})),W.createElement("svg",X({height:20,width:64,x:635,y:105,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,h||(h=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,g||(g=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 2")))),p||(p=W.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue3.svg"})),W.createElement("svg",X({height:20,width:64,x:713,y:105,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,f||(f=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,b||(b=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 3")))),y||(y=W.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue4.svg"})),W.createElement("svg",X({height:20,width:64,x:791,y:105,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,v||(v=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,x||(x=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 4")))),w||(w=W.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/blue5.svg"})),W.createElement("svg",X({height:20,width:64,x:869,y:105,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,E||(E=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,k||(k=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 5")))),W.createElement("svg",X({height:100,width:90,x:464,y:140,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,N||(N=W.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),O||(O=W.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red1.svg",y:140})),W.createElement("svg",X({height:20,width:64,x:557,y:245,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,q||(q=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,P||(P=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 1")))),S||(S=W.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red2.svg",y:140})),W.createElement("svg",X({height:20,width:64,x:635,y:245,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,C||(C=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,j||(j=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 2")))),H||(H=W.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red3.svg",y:140})),W.createElement("svg",X({height:20,width:64,x:713,y:245,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,B||(B=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,A||(A=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 3")))),M||(M=W.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red4.svg",y:140})),W.createElement("svg",X({height:20,width:64,x:791,y:245,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,T||(T=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,I||(I=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 4")))),R||(R=W.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red5.svg",y:140})),W.createElement("svg",X({height:20,width:64,x:869,y:245,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,_||(_=W.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),W.createElement("svg",X({height:20,width:64,className:"example","aria-labelledby":i},D),t?W.createElement("title",{id:i},t):null,z||(z=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Slot 5")))))},ke=["title","titleId"];function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var qe=function(e){var t=e.title,i=e.titleId,a=Oe(e,ke);return W.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,Q||(Q=W.createElement("defs",null,W.createElement("filter",{x:0,y:0,width:1,height:1,id:"card-layout-2_yml__a"},W.createElement("feFlood",{floodColor:"#0ff"})))),U||(U=W.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),$||($=W.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),J||(J=W.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),K||(K=W.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),Y||(Y=W.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),W.createElement("svg",Ne({height:100,width:90,x:464,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,ee||(ee=W.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),te||(te=W.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#card-layout-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),ie||(ie=W.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),W.createElement("svg",Ne({height:100,width:70,x:554,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,ae||(ae=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:70,x:632,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,re||(re=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:70,x:710,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,ne||(ne=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:70,x:788,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,le||(le=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:70,x:866,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,ce||(ce=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,se||(se=W.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),W.createElement("svg",Ne({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,oe||(oe=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W.createElement("svg",Ne({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,de||(de=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),me||(me=W.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),W.createElement("svg",Ne({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,ue||(ue=W.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/1.svg"}))),he||(he=W.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),ge||(ge=W.createElement("circle",{cx:745,cy:110,r:15,stroke:"#fff",strokeWidth:2})),W.createElement("svg",Ne({height:16,width:16,x:737,y:102,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,pe||(pe=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"1"))),fe||(fe=W.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),W.createElement("svg",Ne({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,be||(be=W.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/1.svg"}))),ye||(ye=W.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),ve||(ve=W.createElement("circle",{cx:823,cy:110,r:15,stroke:"#fff",strokeWidth:2})),W.createElement("svg",Ne({height:16,width:16,x:815,y:102,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,xe||(xe=W.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"1"))),W.createElement("svg",Ne({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":i},a),t?W.createElement("title",{id:i},t):null,we||(we=W.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Pe=["components"],Se={id:"card-layout",title:"Card Layout"},Ce=void 0,je={unversionedId:"beginner/card-layout",id:"beginner/card-layout",isDocsHomePage:!1,title:"Card Layout",description:"In this guide, there will be some images to show off the concepts introduced.",source:"@site/docs/beginner/card-layout.md",sourceDirName:"beginner",slug:"/beginner/card-layout",permalink:"/docs/beginner/card-layout",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/card-layout.md",version:"current",frontMatter:{id:"card-layout",title:"Card Layout"},sidebar:"mainSidebar",previous:{title:"Intro",permalink:"/docs/beginner"},next:{title:"The Chop",permalink:"/docs/beginner/chop"}},He=[{value:"Play Stacks &amp; Player Hands",id:"play-stacks--player-hands",children:[]},{value:"Clues",id:"clues",children:[]},{value:"Challenge Questions",id:"challenge-questions",children:[]}],Be={toc:He};function Ae(e){var t=e.components,i=(0,G.Z)(e,Pe);return(0,Z.kt)("wrapper",(0,D.Z)({},Be,i,{components:t,mdxType:"MDXLayout"}),(0,Z.kt)(L.Z,{id:"card-layout",mdxType:"BeginnersGuideProgress"}),(0,Z.kt)("p",null,"In this guide, there will be some images to show off the concepts introduced."),(0,Z.kt)("br",null),(0,Z.kt)("h2",{id:"play-stacks--player-hands"},"Play Stacks & Player Hands"),(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},"The five ",(0,Z.kt)("strong",{parentName:"li"},"play stacks")," are on the left."),(0,Z.kt)("li",{parentName:"ul"},"The ",(0,Z.kt)("strong",{parentName:"li"},"player hands")," are on the right."),(0,Z.kt)("li",{parentName:"ul"},"Alice is always player 1. (She will always go first.)"),(0,Z.kt)("li",{parentName:"ul"},"Bob is always player 2. (He will always go second.)"),(0,Z.kt)("li",{parentName:"ul"},"Cards are drawn and added to the left side to each hand.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"Thus, Alice's newest card is the blue 1 and Bob's newest card is the red 1."))),(0,Z.kt)("li",{parentName:"ul"},"Conversely, the oldest card is the right-most card.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"Thus, Alice's oldest card is the blue 5 and Bob's oldest card is the red 5."))),(0,Z.kt)("li",{parentName:"ul"},"A card's ",(0,Z.kt)("em",{parentName:"li"},"slot")," refers to its position in the hand, from left to right.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"Thus, the blue 1 is on slot 1, the blue 2 is on slot 2, etc.")))),(0,Z.kt)(Ee,{mdxType:"CardLayout1"}),(0,Z.kt)("h2",{id:"clues"},"Clues"),(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},'Arrows indicate that a card was "touched" by the last clue that was given.'),(0,Z.kt)("li",{parentName:"ul"},"Clued cards will have permanent yellow borders around them.")),(0,Z.kt)(qe,{mdxType:"CardLayout2"}),(0,Z.kt)("h2",{id:"challenge-questions"},"Challenge Questions"),(0,Z.kt)("p",null,'After each section, there will be one or more challenge questions. Once you have solved the question, click on the "Solution" tab near the top of the screen to see the answer.'))}Ae.isMDXComponent=!0},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return s}});var a=i(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function n(e){var t=e.className,i=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:n,dashRatio:r,counterClockwise:i})),d:l({pathRadius:n,counterClockwise:i}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,r=2*Math.PI*a,n=(1-i)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-n:n)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,i),a)-i)/(a-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,r=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,d=this.getPathRadius(),m=this.getPathRatio();return(0,a.createElement)("svg",{className:r.root+" "+i,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:r.background,style:c.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(n,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:d,strokeWidth:s,style:c.trail}),(0,a.createElement)(n,{className:r.path,counterClockwise:l,dashRatio:m*t,pathRadius:d,strokeWidth:s,style:c.path}),o?(0,a.createElement)("text",{className:r.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component)}}]);