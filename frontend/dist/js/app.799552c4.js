(function(t){function e(e){for(var s,a,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)a=i[u],o[a]&&f.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5435abaa":"cb684b81"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-5435abaa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var s="css/"+({}[t]||t)+"."+{"chunk-5435abaa":"4e67874d"}[t]+".css",o=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===s||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[t],d.parentNode.removeChild(d),n(r)},d.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(d)}).then(function(){a[t]=0}));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,n){s=o[t]=[e,n]});e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");r.type=s,r.request=a,n[1](r)}o[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1326:function(t,e,n){"use strict";var s=n("26ee"),a=n.n(s);a.a},"26ee":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("bc3a"),o=n.n(a),r={},i=o.a.create(r);i.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),i.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},s["a"].use(Plugin);Plugin;var c=n("bb71");n("da64");s["a"].use(c["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Nav"),n("router-view")],1)},u=[],f=function(){var t=this,e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"bg"}},[a("transition",{attrs:{name:"fade"}},[a("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:e.CanShow,expression:"CanShow"}],staticClass:"box"},[a("div",{staticClass:"left center"},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("cf05"),alt:""},on:{click:function(){t.$router.push("/")}}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"guides"}),a("div",{staticClass:"infos"},e._l(e.info[0][e.loginStatus],function(t,n){return a("div",{key:n,staticClass:"info-single center"},[a("i",{class:t.icon}),e._v("\n                        "+e._s(t.text)+"\n                        "),a("div",{staticClass:"botLine"})])}),0)])])],1)],1)},d=[],v={mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop||document.body.scrollTop;0==e?(t.show=!0,window.clearTimeout(t.timeout)):(t.show=!1,e<t.scrollValue&&t.ScrollControl()),t.scrollValue=e})},data:function(){return{show:!0,scrollValue:0,timeout:null,loginStatus:0,info:[[[{text:"註冊",icon:"fas fa-user-plus"},{text:"登入",icon:"fas fa-sign-in-alt"}]],[["登出"]]]}},methods:{ScrollControl:function(){var t=this;window.clearTimeout(this.timeout),this.show=!0,this.timeout=window.setTimeout(function(){t.show=!1,window.clearTimeout(t.timeout)},2e3)}},computed:{CanShow:function(){return!this.$store.state.pageNotFound&&(!!this.show||void 0)}}},p=v,h=(n("d40d"),n("2877")),m=n("6544"),g=n.n(m),b=n("71d9"),C=Object(h["a"])(p,f,d,!1,null,"18e07300",null),x=C.exports;g()(C,{VToolbar:b["a"]});var w={name:"App",components:{Nav:x},data:function(){return{}}},y=w,_=(n("5c0b"),n("7496")),S=Object(h["a"])(y,l,u,!1,null,null,null),B=S.exports;g()(S,{VApp:_["a"]});var k=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("div",{staticClass:"navbox"}),n("div",{staticClass:"body"},[n("div",{staticClass:"left"}),n("div",{staticClass:"mid"},[n("v-layout",{staticClass:"midLayout",attrs:{row:""}},[n("v-flex",{attrs:{lg8:""}},[n("div",{staticClass:"searchBox"},[n("v-layout",{staticClass:"searchLayout"},[n("v-flex",{staticClass:"slf",attrs:{lg8:""}},[n("div",{staticClass:"selectBox"},[n("div",{staticClass:"selected",on:{mouseenter:function(e){return t.SelectFocus(!0)},click:function(e){return t.SelectFocus(!1)}}},[t._v("\n                    "+t._s(t.selectValue)+"\n                  ")]),n("button",{ref:"select",staticClass:"selects"},t._l(t.selectBox,function(e,s){return n("div",{key:s,staticClass:"select",on:{click:function(n){t.SelectFocus(!1),t.ChangeSelectValue(e)}}},[t._v("\n                      "+t._s(e)+"\n                    ")])}),0)]),n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",size:"20"},on:{focus:function(e){t.searchBoxFocus=!0},blur:function(e){t.searchBoxFocus=!1}}}),n("div",{staticClass:"placeholder"},[t.searchBoxFocus?n("div",{staticClass:"phtext"},[t._v("\n                      搜尋中...\n                    ")]):t._e(),t.searchBoxFocus?t._e():n("div",{staticClass:"phtext"},[t._v("\n                      搜尋"+t._s(t.selectValue)+"\n                    ")])])]),n("div",{staticClass:"send"},[n("button",[t._v("搜尋")])])]),n("v-flex",{staticClass:"slf slr",attrs:{lg4:""}},[n("div",{staticClass:"createArticle"},[t._v("\n                  發文\n                ")])])],1)],1),n("div",{staticClass:"classBox"}),n("div",{staticClass:"articleList"},t._l(10,function(e,s){return n("div",{key:s,staticClass:"articleBox",on:{mouseenter:function(e){t.aritcleBoxHoverId=s},mouseleave:function(e){t.aritcleBoxHoverId=-1}}},[n("transition",{attrs:{name:"fade"}},[s==t.aritcleBoxHoverId?n("div",{staticClass:"articleArrow"}):t._e()]),n("v-layout",{staticClass:"abl"},[n("v-flex",{staticClass:"ablf",attrs:{lg2:""}},[n("div",{staticClass:"articleClass"},[n("v-icon",{staticClass:"articleIcon"},[t._v("star_border")]),t._v("\n                    文章分類\n                  ")],1)]),n("v-flex",{staticClass:"ablf",attrs:{lg8:""}},[n("div",{staticClass:"articleTitle"},[t._v("\n                    文章標題\n                  ")])]),n("v-flex",{staticClass:"ablf",attrs:{lg2:""}},[n("div",{staticClass:"isuser"},[t._v("\n                    發文者\n                  ")]),n("div",{staticClass:"postTime"},[t._v("\n                    時間\n                  ")])])],1)],1)}),0)]),n("v-flex",{attrs:{lg4:""}},[t._v("\n          4\n        ")])],1)],1),n("div",{staticClass:"right"})])])},j=[],F={data:function(){return{selectBox:["標題","發布者","時間"],selectValue:"標題",searchBoxFocus:!1,aritcleBoxHoverId:-1}},methods:{SelectFocus:function(t){t?this.$refs.select.focus():this.$refs.select.blur()},ChangeSelectValue:function(t){this.selectValue=t}}},P=F,O=(n("1326"),n("0e8f")),V=n("132d"),E=n("a722"),N=Object(h["a"])(P,T,j,!1,null,"7765b606",null),A=N.exports;g()(N,{VFlex:O["a"],VIcon:V["a"],VLayout:E["a"]}),s["a"].use(k["a"]);var L=new k["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:A},{path:"*",name:"404 error",component:function(){return n.e("chunk-5435abaa").then(n.bind(null,"7dac"))}}]}),$=n("2f62");s["a"].use($["a"]);var I=new $["a"].Store({state:{pageNotFound:!1},mutations:{PageNotFound:function(t){t.pageNotFound=!t.pageNotFound}},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:L,store:I,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("6879"),a=n.n(s);a.a},6879:function(t,e,n){},afa8:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.4b85dfe0.png"},d40d:function(t,e,n){"use strict";var s=n("afa8"),a=n.n(s);a.a}});
//# sourceMappingURL=app.799552c4.js.map