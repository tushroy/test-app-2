(function(e){function n(n){for(var o,a,i=n[0],u=n[1],c=n[2],p=0,s=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(s.length)s.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(l.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},a={app:0},r={app:0},l=[];function i(e){return u.p+"js/"+({about:"about","home~login~notplayable":"home~login~notplayable","home~login":"home~login",home:"home",login:"login",notplayable:"notplayable",player:"player"}[e]||e)+"."+{about:"2f7c4d83","home~login~notplayable":"ef6d15d8","home~login":"430b9ec9",home:"91852e0a",login:"4ba0174a",notplayable:"0a06355f",player:"a0645e09"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"home~login~notplayable":1,"home~login":1,home:1,login:1,notplayable:1,player:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({about:"about","home~login~notplayable":"home~login~notplayable","home~login":"home~login",home:"home",login:"login",notplayable:"notplayable",player:"player"}[e]||e)+"."+{about:"31d6cfe0","home~login~notplayable":"be1ad186","home~login":"c56eeb41",home:"712ffcca",login:"aab53789",notplayable:"07a87f9f",player:"e6a87636"}[e]+".css",r=u.p+o,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=l[i],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===o||p===r))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){c=s[i],p=c.getAttribute("data-href");if(p===o||p===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete a[e],f.parentNode.removeChild(f),t(l)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=l);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=i(e);var s=new Error;c=function(n){p.onerror=p.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var f=p;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{id:"app"}},[e.displayLoading?t("v-progress-linear",{attrs:{indeterminate:"",color:"teal"}}):e._e(),t("router-view")],1)},r=[],l={title:"IP TV For All",name:"App",components:{},data:function(){return{displayLoading:!1}},created:function(){var e=this;this.$eventBus.$on("displayLoading",(function(n){e.displayLoading=n}))},mounted:function(){var e=this;e.displayLoading=!0,this.$axios.get("../resources/ui-logon.png?timestamp=".concat((new Date).getTime())).then((function(e){var n=atob(e.data);localStorage.setItem("tokenJson",n)})).catch((function(e){console.log(e)})).then((function(){e.displayLoading=!1}))}},i=l,u=t("2877"),c=t("6544"),p=t.n(c),s=t("7496"),f=t("8e36"),h=Object(u["a"])(i,a,r,!1,null,null,null),m=h.exports;p()(h,{VApp:s["a"],VProgressLinear:f["a"]});t("d3b7");var d=t("8c4f");o["a"].use(d["a"]);var g=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("home~login~notplayable"),t.e("home~login"),t.e("home")]).then(t.bind(null,"bb51"))},children:[{path:"/about",name:"Home.About",component:function(){return t.e("about").then(t.bind(null,"84ba"))}},{path:"/player/:channelId",name:"Home.Player",component:function(){return t.e("player").then(t.bind(null,"cccf"))}},{path:"/unable-to-play",name:"Home.NotPlayable",component:function(){return Promise.all([t.e("home~login~notplayable"),t.e("notplayable")]).then(t.bind(null,"9f1a"))}}]},{path:"/login",name:"Login",component:function(){return Promise.all([t.e("home~login~notplayable"),t.e("home~login"),t.e("login")]).then(t.bind(null,"a55b"))}}],b=new d["a"]({routes:g}),y=b;function v(e){var n=e.$options.title;if(n)return"function"===typeof n?n.call(e):n}var w={created:function(){var e=v(this);e&&(document.title=e)}},P=t("f309");o["a"].use(P["a"]);var L=new P["a"]({}),O=t("bc3a"),j=t.n(O);o["a"].config.productionTip=!1,o["a"].mixin(w);var _=new o["a"];o["a"].prototype.$axios=j.a,o["a"].prototype.$eventBus=_,new o["a"]({router:y,vuetify:L,render:function(e){return e(m)}}).$mount("#app")}});