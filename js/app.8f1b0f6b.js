(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-02eb49ec":"e432074a","chunk-288373ee":"8b790c84","chunk-7e6bff26":"13a6081d","chunk-9e0bdc3a":"4be3d30a"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-02eb49ec":1,"chunk-288373ee":1,"chunk-7e6bff26":1,"chunk-9e0bdc3a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-02eb49ec":"27e23389","chunk-288373ee":"a51f6153","chunk-7e6bff26":"e4858ef2","chunk-9e0bdc3a":"f3f3a92b"}[e]+".css",c=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===r||s===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/spa-term-project/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19c7":function(e,t,n){"use strict";n("abc7")},"3ab3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("b0c0"),{class:"logo"}),c={id:"nav"};function a(e,t,n,a,u,l){var i=Object(r["y"])("router-link"),s=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("header",null,[Object(r["f"])("h2",o,Object(r["A"])(u.logoname),1),Object(r["f"])("nav",c,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(u.navs,(function(e){return Object(r["r"])(),Object(r["d"])(i,{class:"nav",key:e,to:e.routeUrl},{default:Object(r["E"])((function(){return[Object(r["g"])(Object(r["A"])(e.name),1)]})),_:2},1032,["to"])})),128))])]),Object(r["h"])(s),Object(r["f"])("footer",null,[Object(r["f"])("span",null,Object(r["A"])(u.footertext),1)])],64)}var u={name:"App",data:function(){return{logoname:"SP.",footertext:"Copyright © spalora@bu.edu 2021",navs:[{name:"Home | ",routeUrl:"/"},{name:"About | ",routeUrl:"/about"},{name:"Contact | ",routeUrl:"/contact"},{name:"Skills | ",routeUrl:"/skills"},{name:"Experience",routeUrl:"/experience"}]}}},l=(n("19c7"),n("6b0d")),i=n.n(l);const s=i()(u,[["render",a]]);var f=s,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b={class:"home-content"},d={class:"bio-pic-section"},m=["src"],h={class:"intro-section"},g={class:"name"};function j(e,t,n,o,c,a){return Object(r["r"])(),Object(r["e"])("main",b,[Object(r["f"])("section",d,[Object(r["f"])("img",{src:c.bio_pic,alt:"Bio Pic"},null,8,m)]),Object(r["f"])("section",h,[Object(r["f"])("p",null,Object(r["A"])(c.welcome_text),1),Object(r["f"])("p",g,Object(r["A"])(c.name),1),Object(r["f"])("p",null,Object(r["A"])(c.role),1),Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return a.hireme&&a.hireme.apply(a,arguments)})},Object(r["A"])(c.hiremebtn),1)])])}var O={name:"App",data:function(){return{bio_pic:n("c39a"),welcome_text:"Hello",name:"I'm Seema",role:"FullStack & Android Developer",hiremebtn:"Hire Me"}},methods:{hireme:function(e){window.open("mailto:spalora@bu.edu?subject=Reg:Job Opening&body=Job Description and some more content goes here......")}}};n("b37d");const v=i()(O,[["render",j],["__scopeId","data-v-ea0ef6fe"]]);var y=v,k=[{path:"/",name:"Home",component:y,beforeEnter:function(e,t,n){document.getElementById("app").className="",document.getElementById("app").classList.toggle("theme_1"),n()}},{path:"/about",name:"About",component:function(){return n.e("chunk-9e0bdc3a").then(n.bind(null,"f820"))},beforeEnter:function(e,t,n){document.getElementById("app").className="",document.getElementById("app").classList.toggle("theme_2"),n()}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-02eb49ec").then(n.bind(null,"b8fa"))},beforeEnter:function(e,t,n){document.getElementById("app").className="",document.getElementById("app").classList.toggle("theme_2"),n()}},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-7e6bff26").then(n.bind(null,"ad83"))},beforeEnter:function(e,t,n){document.getElementById("app").className="",document.getElementById("app").classList.toggle("theme_2"),n()}},{path:"/experience",name:"Experience",component:function(){return n.e("chunk-288373ee").then(n.bind(null,"459e"))},beforeEnter:function(e,t,n){document.getElementById("app").className="",document.getElementById("app").classList.toggle("theme_2"),n()}}],E=Object(p["a"])({history:Object(p["b"])("/spa-term-project/"),routes:k}),_=E;Object(r["c"])(f).use(_).mount("#app")},abc7:function(e,t,n){},b37d:function(e,t,n){"use strict";n("3ab3")},c39a:function(e,t,n){e.exports=n.p+"img/bio_pic_cutout.ea82b2ff.png"}});
//# sourceMappingURL=app.8f1b0f6b.js.map