var app;(()=>{"use strict";var e,t,r,o,n={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.exports}a.m=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,a.d(n,i),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"static/js/"+e+".[contentHash].js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="demo:",a.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var l,u;if(void 0!==n)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var f=d[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+n){l=f;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",o+n),l.src=e),r[e]=[t];var c=(t,o)=>{l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),u&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,l,u]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);u&&u(a)}for(t&&t(r);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkdemo=self.webpackChunkdemo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var l,u,d,s,f={};l=f,u={"./App":()=>Promise.all([a.e(230),a.e(499)]).then((()=>()=>a(6499)))},d=(e,t)=>(a.R=t,t=a.o(u,e)?u[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),s=(e,t)=>{if(a.S){var r="default",o=a.S[r];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[r]=e,a.I(r,t)}},a.d(l,{get:()=>d,init:()=>s}),app=f})();