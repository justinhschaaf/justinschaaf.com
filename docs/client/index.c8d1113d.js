import{S as t,i as e,s,e as n,a as r,b as i,t as o,c as a,d as l,f as u,g as c,h,j as p,k as f,l as d,m as y,n as g,o as m,p as v,B as b,q as k,r as C,u as w,v as P,w as E,x as S,y as T,z as O,A as $}from"./client.62efd207.js";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function j(t,e,s){return t(s={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&s.path)}},s.exports),s.exports}var x=j((function(t,e){var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("unable to locate global object")}();t.exports=e=s.fetch,s.fetch&&(e.default=s.fetch.bind(s)),e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response}));class B{static async load(t){var e=await x(t);return await e.json()}static selectSplash(t){for(var e=void 0;null==e&&t.length>0;){var s=Math.floor(Math.random()*t.length),n=t[s];if("string"==typeof n)e=n;else if("name"in n){var r=n,i=!0;null!=r.prerequisites&&(r.prerequisites.month>0&&(new Date).getMonth()!=r.prerequisites.month&&(i=!1),r.prerequisites.day>0&&(new Date).getDate()!=r.prerequisites.month&&(i=!1)),i&&(e=r.name)}t.splice(s,1)}return e}static castEntries(t){var e={};return Object.keys(t).forEach((s=>{Object.keys(t[s]).forEach((n=>{null==e[s]&&(e[s]={});var r=t[s][n];e[s][n]=r}))})),e}}function I(t,e,s){const n=t.slice();return n[2]=e[s],n}function D(t){let e,s,n,d,y=t[1][t[2]].name+"";return{c(){e=i("a"),s=o(y),this.h()},l(t){e=a(t,"A",{class:!0,target:!0,href:!0,title:!0});var n=l(e);s=u(n,y),n.forEach(c),this.h()},h(){h(e,"class","entry svelte-7pjfa7"),h(e,"target","_blank"),h(e,"href",n=t[1][t[2]].url),h(e,"title",d=t[1][t[2]].desc)},m(t,n){r(t,e,n),p(e,s)},p(t,r){2&r&&y!==(y=t[1][t[2]].name+"")&&f(s,y),2&r&&n!==(n=t[1][t[2]].url)&&h(e,"href",n),2&r&&d!==(d=t[1][t[2]].desc)&&h(e,"title",d)},d(t){t&&c(e)}}}function N(t){let e,s=!t[1][t[2]].hidden&&D(t);return{c(){s&&s.c(),e=n()},l(t){s&&s.l(t),e=n()},m(t,n){s&&s.m(t,n),r(t,e,n)},p(t,n){t[1][t[2]].hidden?s&&(s.d(1),s=null):s?s.p(t,n):(s=D(t),s.c(),s.m(e.parentNode,e))},d(t){s&&s.d(t),t&&c(e)}}}function q(t){let e,s,n,v,b=Object.keys(t[1]),k=[];for(let e=0;e<b.length;e+=1)k[e]=N(I(t,b,e));return{c(){e=i("div"),s=i("h2"),n=o(t[0]),v=d();for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(r){e=a(r,"DIV",{class:!0});var i=l(e);s=a(i,"H2",{class:!0});var o=l(s);n=u(o,t[0]),o.forEach(c),v=y(i);for(let t=0;t<k.length;t+=1)k[t].l(i);i.forEach(c),this.h()},h(){h(s,"class","header svelte-7pjfa7"),h(e,"class","entries svelte-7pjfa7")},m(t,i){r(t,e,i),p(e,s),p(s,n),p(e,v);for(let t=0;t<k.length;t+=1)k[t].m(e,null)},p(t,[s]){if(1&s&&f(n,t[0]),2&s){let n;for(b=Object.keys(t[1]),n=0;n<b.length;n+=1){const r=I(t,b,n);k[n]?k[n].p(r,s):(k[n]=N(r),k[n].c(),k[n].m(e,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=b.length}},i:g,o:g,d(t){t&&c(e),m(k,t)}}}function A(t,e,s){let{name:n}=e,{entries:r}=e;return t.$$set=t=>{"name"in t&&s(0,n=t.name),"entries"in t&&s(1,r=t.entries)},[n,r]}class L extends t{constructor(t){super(),e(this,t,A,q,s,{name:0,entries:1})}}var M=j((function(t,e){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
var s;s=function(){return function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}return s.m=t,s.c=e,s.p="",s(0)}([function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),i=s(3),o=function(){function t(e,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.initializer.load(this,s,e),this.begin()}return n(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,s);var n=0,o=t.substr(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,n=parseInt(o),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&(r++,!(e+r>t.length)););var l=t.substring(0,e),u=t.substring(l.length+1,e+r),c=t.substring(e+r+1);t=l+u+c,r--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,r),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var r=s.strings[s.arrayPos+1];r&&n===r.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=o,t.exports=e.default},function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var n,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),o=s(2),a=(n=o)&&n.__esModule?n:{default:n},l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=r({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var l=n[o];t.strings.push(l.innerHTML.trim())}}for(var o in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e.default=l;var u=new l;e.initializer=u},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=s,t.exports=e.default},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var r="";for(r="<"===n?">":";";t.substr(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var r="";for(r=">"===n?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=n;var r=new n;e.htmlParser=r}])},t.exports=s()}));function H(t){let e;return{c(){e=i("span"),this.h()},l(t){e=a(t,"SPAN",{class:!0}),l(e).forEach(c),this.h()},h(){h(e,"class","typed")},m(t,s){r(t,e,s)},p:g,i:g,o:g,d(t){t&&c(e)}}}function _(t,e,s){let{string:n}=e;var r={strings:[n],typeSpeed:50,backSpeed:50,backDelay:1e3,showCursor:!0,cursorChar:"|",loop:!1};return v((()=>{new M(".typed",r)})),t.$$set=t=>{"string"in t&&s(0,n=t.string)},[n]}class F extends t{constructor(t){super(),e(this,t,_,H,s,{string:0})}}function R(t,e,s){const n=t.slice();return n[2]=e[s],n}function z(t,e,s){const n=t.slice();return n[5]=e[s],n}function V(t){let e,s,n,o,u,f;return{c(){e=i("a"),s=i("img"),u=d(),this.h()},l(t){e=a(t,"A",{class:!0,target:!0,href:!0});var n=l(e);s=a(n,"IMG",{src:!0,alt:!0,class:!0}),u=y(n),n.forEach(c),this.h()},h(){s.src!==(n=t[1].social[t[5]].icon)&&h(s,"src",n),h(s,"alt",o=t[1].social[t[5]].name),h(s,"class","svelte-hd0n9r"),h(e,"class","social svelte-hd0n9r"),h(e,"target","_blank"),h(e,"href",f=t[1].social[t[5]].url)},m(t,n){r(t,e,n),p(e,s),p(e,u)},p(t,r){2&r&&s.src!==(n=t[1].social[t[5]].icon)&&h(s,"src",n),2&r&&o!==(o=t[1].social[t[5]].name)&&h(s,"alt",o),2&r&&f!==(f=t[1].social[t[5]].url)&&h(e,"href",f)},d(t){t&&c(e)}}}function G(t){let e,s=t[1].social[t[5]].featured&&!t[1].social[t[5]].hidden&&V(t);return{c(){s&&s.c(),e=n()},l(t){s&&s.l(t),e=n()},m(t,n){s&&s.m(t,n),r(t,e,n)},p(t,n){t[1].social[t[5]].featured&&!t[1].social[t[5]].hidden?s?s.p(t,n):(s=V(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&c(e)}}}function J(t){let e,s,n,o,u,f,g,v,b;f=new F({props:{string:t[0]}});let T=Object.keys(t[1].social),O=[];for(let e=0;e<T.length;e+=1)O[e]=G(z(t,T,e));return{c(){e=i("div"),s=i("img"),o=d(),u=i("span"),k(f.$$.fragment),g=d(),v=i("div");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=l(e);s=a(n,"IMG",{class:!0,src:!0,alt:!0}),o=y(n),u=a(n,"SPAN",{class:!0});var r=l(u);C(f.$$.fragment,r),r.forEach(c),n.forEach(c),g=y(t),v=a(t,"DIV",{class:!0});var i=l(v);for(let t=0;t<O.length;t+=1)O[t].l(i);i.forEach(c),this.h()},h(){h(s,"class","logo svelte-hd0n9r"),s.src!==(n="assets/logos/js-fullname-light.svg")&&h(s,"src","assets/logos/js-fullname-light.svg"),h(s,"alt","Justin Schaaf"),h(u,"class","splash svelte-hd0n9r"),h(e,"class","title svelte-hd0n9r"),h(v,"class","socialicons svelte-hd0n9r")},m(t,n){r(t,e,n),p(e,s),p(e,o),p(e,u),w(f,u,null),r(t,g,n),r(t,v,n);for(let t=0;t<O.length;t+=1)O[t].m(v,null);b=!0},p(t,e){const s={};if(1&e&&(s.string=t[0]),f.$set(s),2&e){let s;for(T=Object.keys(t[1].social),s=0;s<T.length;s+=1){const n=z(t,T,s);O[s]?O[s].p(n,e):(O[s]=G(n),O[s].c(),O[s].m(v,null))}for(;s<O.length;s+=1)O[s].d(1);O.length=T.length}},i(t){b||(P(f.$$.fragment,t),b=!0)},o(t){E(f.$$.fragment,t),b=!1},d(t){t&&c(e),S(f),t&&c(g),t&&c(v),m(O,t)}}}function U(t){let e,s,n,o;return s=new L({props:{name:t[2],entries:t[1][t[2]]}}),{c(){e=i("section"),k(s.$$.fragment),n=d(),this.h()},l(t){e=a(t,"SECTION",{class:!0});var r=l(e);C(s.$$.fragment,r),n=y(r),r.forEach(c),this.h()},h(){h(e,"class","entry-section svelte-hd0n9r")},m(t,i){r(t,e,i),w(s,e,null),p(e,n),o=!0},p(t,e){const n={};2&e&&(n.name=t[2]),2&e&&(n.entries=t[1][t[2]]),s.$set(n)},i(t){o||(P(s.$$.fragment,t),o=!0)},o(t){E(s.$$.fragment,t),o=!1},d(t){t&&c(e),S(s)}}}function Y(t){let e,s,n,o,u,f;s=new b({props:{background:"assets/images/home_banner.jpg",$$slots:{default:[J]},$$scope:{ctx:t}}});let g=Object.keys(t[1]),v=[];for(let e=0;e<g.length;e+=1)v[e]=U(R(t,g,e));const j=t=>E(v[t],1,1,(()=>{v[t]=null}));return{c(){e=d(),k(s.$$.fragment),n=d(),o=i("div"),u=i("div");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){T('[data-svelte="svelte-19k3hgh"]',document.head).forEach(c),e=y(t),C(s.$$.fragment,t),n=y(t),o=a(t,"DIV",{class:!0});var r=l(o);u=a(r,"DIV",{class:!0});var i=l(u);for(let t=0;t<v.length;t+=1)v[t].l(i);i.forEach(c),r.forEach(c),this.h()},h(){document.title="Justin Schaaf // justinschaaf.com",h(u,"class","entries-inner svelte-hd0n9r"),h(o,"class","entries svelte-hd0n9r")},m(t,i){r(t,e,i),w(s,t,i),r(t,n,i),r(t,o,i),p(o,u);for(let t=0;t<v.length;t+=1)v[t].m(u,null);f=!0},p(t,[e]){const n={};if(259&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n),2&e){let s;for(g=Object.keys(t[1]),s=0;s<g.length;s+=1){const n=R(t,g,s);v[s]?(v[s].p(n,e),P(v[s],1)):(v[s]=U(n),v[s].c(),P(v[s],1),v[s].m(u,null))}for($(),s=g.length;s<v.length;s+=1)j(s);O()}},i(t){if(!f){P(s.$$.fragment,t);for(let t=0;t<g.length;t+=1)P(v[t]);f=!0}},o(t){E(s.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)E(v[t]);f=!1},d(t){t&&c(e),S(s,t),t&&c(n),t&&c(o),m(v,t)}}}var K=function(t,e,s,n){return new(s||(s=Promise))((function(r,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function a(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,a)}l((n=n.apply(t,e||[])).next())}))};function Q(t,e){return K(this,void 0,void 0,(function*(){var t=yield B.load("https://content.justinschaaf.com/common/config/website.json");return{splash:B.selectSplash(t.splashes),entries:B.castEntries(t.entries)}}))}function W(t,e,s){let{splash:n}=e,{entries:r}=e;return t.$$set=t=>{"splash"in t&&s(0,n=t.splash),"entries"in t&&s(1,r=t.entries)},[n,r]}export default class extends t{constructor(t){super(),e(this,t,W,Y,s,{splash:0,entries:1})}}export{Q as preload};
