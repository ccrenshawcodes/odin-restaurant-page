(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(957),n.b),u=c()(r());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Freehand&display=swap);"]),u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fasthand&display=swap);"]);var l=s()(d);u.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Fasthand', cursive;\n    letter-spacing: .2rem;\n    font-size: large;\n}\n\nh1 {\n    font-family: 'Freehand', cursive;\n    letter-spacing: .2rem;\n    font-size: larger;\n}\n\n#content {\n    background-image: url(${l});\n    background-size: cover;\n    background-position-x: center;\n    color: white;\n    height: 100vh;\n    width: 100vw;\n}\n\n.page-title, .nav {\n    background-color: black;\n    opacity: 80%;\n    color: white;\n    display: flex;\n    justify-content: space-around;\n}\n\n.nav > button {\n    color: white;\n    border: none;\n    background-color: black;\n    opacity: 80%;\n    padding: 1em;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.menu-page, .about-page, .home-content {\n    background-color: black;\n    opacity: 80%;\n    margin: 5em;\n    padding: 3em;\n}\n\n.about-page > * {\n    text-decoration: none;\n    color: white;\n    text-align: center;\n}\n\n.about-page {\n    display: flex;\n    flex-direction: column;\n}\n`,""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},957:(e,t,n)=>{e.exports=n.p+"7bd12a343b4c902d1b7e.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=document.querySelector("#content");function t(){const e=document.querySelector("article"),t=document.createElement("div");t.classList.add("home-content"),t.textContent="Do you want pasta? Who are you kidding - we both know you do",e.appendChild(t)}var o=n(379),r=n.n(o),a=n(795),c=n.n(a),i=n(569),s=n.n(i),d=n(565),u=n.n(d),l=n(216),p=n.n(l),m=n(589),f=n.n(m),h=n(426),v={};function b(){const e=document.querySelector("article");for(;e.firstChild;)e.removeChild(e.firstChild)}v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(){const t=document.createElement("div");t.classList.add("page-title");const n=document.createElement("h1");n.textContent="Allegro! Fine Pasta",t.appendChild(n),e.appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("nav");const n=document.createElement("button");n.classList.add("home-button"),n.textContent="home",t.appendChild(n);const o=document.createElement("button");o.classList.add("menu-button"),o.textContent="menu",t.appendChild(o);const r=document.createElement("button");r.classList.add("about-button"),r.textContent="about",t.appendChild(r),e.appendChild(t)}(),function(){const t=document.createElement("article");e.appendChild(t)}(),t(),document.querySelector(".home-button").addEventListener("click",(()=>{b(),t()})),document.querySelector(".menu-button").addEventListener("click",(()=>{b(),function(){const e=document.querySelector("article"),t=document.createElement("div");t.classList.add("menu-page");const n=document.createElement("h2");n.textContent="lunch menu",t.appendChild(n);const o=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li");r.textContent="pasta (15)",a.textContent="pasta (8)",o.appendChild(r),o.appendChild(a),t.appendChild(o);const c=document.createElement("h2");c.textContent="dinner menu",t.appendChild(c);const i=document.createElement("ul"),s=document.createElement("li"),d=document.createElement("li");s.textContent="pasta (17)",d.textContent="pasta (23)",i.appendChild(s),i.appendChild(d),t.appendChild(i),e.appendChild(t)}()})),document.querySelector(".about-button").addEventListener("click",(()=>{b(),function(){const e=document.querySelector("article"),t=document.createElement("div");t.classList.add("about-page");const n=document.createElement("span");n.textContent="Click below to contact us!";const o=document.createElement("a");o.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"),o.textContent="Click Here",t.appendChild(n),t.appendChild(o),e.appendChild(t)}()}))})()})();