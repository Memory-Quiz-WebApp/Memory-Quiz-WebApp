module.exports=function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(t){if(0!==n[t]){var r=require("./"+{1:"ada10ea64729c3cf4dcb",2:"ceb509671e3c72c7226e"}[t]+".js"),o=r.modules,c=r.ids;for(var l in o)e[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/_nuxt/",r.oe=function(e){process.nextTick((function(){throw e}))},r(r.s=15)}([function(e,t){e.exports=require("vue")},function(e,t){e.exports=require("firebase-admin")},function(e,t,n){"use strict";function r(e,t,n,r,o,c,l,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:e,options:f}}n.d(t,"a",(function(){return r}))},function(e,t){e.exports=require("firebase/app")},function(e,t){},function(e,t){},function(e,t){e.exports=require("vue-no-ssr")},function(e,t){e.exports=require("vue-client-only")},function(e,t){e.exports=require("vue-router")},function(e,t){e.exports=require("vuex")},function(e,t){},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("bootstrap-vue")},function(e,t,n){e.exports=n(21)},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t.default=o.a},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t.default=o.a},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o})),n.d(t,"getters",(function(){return c})),n.d(t,"actions",(function(){return l}));const r=()=>({ready:!1,user:null}),o={resetUser:e=>{e.user=null},setAuthUser(e,{authUser:t}){if(t){const{displayName:n,email:r,emailVerified:o,isAnonymous:c,photoUrl:l,providerData:d,uid:h}=t;e.user={displayName:n,email:r,emailVerified:o,isAnonymous:c,photoUrl:l,providerData:d,uid:h}}},setReady(e,t=!0){e.ready=t}},c={getReady:e=>e.ready},l={onAuthStateChanged({commit:e},{authUser:t}){t?e("setAuthUser",{authUser:t}):e("resetUser")},set_ready({commit:e},t){e("setReady",t)}}},function(e,t,n){"use strict";n.r(t);var r=n(11),o=n(0),c=n.n(o),l=n(12),d=n.n(l);var h={};function f(e){return e.then(e=>e.default||e)}function m(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=c.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function x(e,t=!1,n="components"){return Array.prototype.concat.apply([],e.matched.map((e,r)=>Object.keys(e[n]).map(o=>(t&&t.push(r),e[n][o]))))}function y(e,t){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((r,o)=>(e.components[o]?r.push(t(e.components[o],e.instances[o],e,o,n)):delete e.components[o],r),[])))}(e,async(e,n,r,o)=>("function"!=typeof e||e.options||(e=await e()),r.components[o]=e=m(e),"function"==typeof t?t(e,n,r,o):e)))}async function v(e){if(e)return await y(e),{...e,meta:x(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function w(e,t){e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:t.payload,error:t.error,base:"/",env:{}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=(t,path,n)=>{if(!t)return;e.context._redirected=!0;let r=typeof path;"number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=t),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const r=e.indexOf("://");-1!==r?(n=e.substring(0,r),e=e.substring(r+3)):e.startsWith("//")&&(e=e.substring(2));let o,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=o?"#"+o:""}(path,n),e.context.next({path:path,status:t}))},e.context.beforeNuxtRender=e=>t.beforeRenderFns.push(e));const[n,r]=await Promise.all([v(t.route),v(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=r),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function _(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():$(e[0],t).then(()=>_(e.slice(1),t))}function $(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,(function(e,data){e&&t.error(e),n(data=data||{})}))}):e(t))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function C(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?S:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<r.length;e++){if(c=o(r[e]),!t[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===e?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?S(r,!0):o(r),!t[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(e,t){const n=[];let r=0,o=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=k.exec(e));){const t=l[0],d=l[1],h=l.index;if(path+=e.slice(o,h),o=h+t.length,d){path+=d[1];continue}const f=e[o],m=l[2],x=l[3],y=l[4],v=l[5],w=l[6],_=l[7];path&&(n.push(path),path="");const $=null!=m&&null!=f&&f!==m,C="+"===w||"*"===w,k="?"===w||"*"===w,S=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:S,optional:k,repeat:C,partial:$,asterisk:Boolean(_),pattern:pattern?E(pattern):_?".*":"[^"+j(S)+"]+?"})}o<e.length&&(path+=e.substr(o));path&&n.push(path);return n}(e,t))}const k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(e,t){const n=t?/[?#]/g:/[/?#]/g;return encodeURI(e).replace(n,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function j(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(e){return e.replace(/([=!:$/()])/g,"\\$1")}var T=n(13),A=n.n(T),O=n(7),N=n.n(O),P=n(6),M=n.n(P),R=n(8),I=n.n(R);c.a.use(I.a);const D={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(e,t,n){let r=!1;const o=x(e);o.length<2&&o.every(e=>!1!==e.options.scrollToTop)?r={x:0,y:0}:o.some(e=>e.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return e.path===t.path&&e.hash!==t.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(t=>{c.$once("triggerScroll",()=>{if(e.hash){let t=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(t="#"+window.CSS.escape(t.substr(1)));try{document.querySelector(t)&&(r={selector:t})}catch(e){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}t(r)})})},routes:[{path:"/inspire",component:()=>f(n.e(2).then(n.bind(null,26))),name:"inspire"},{path:"/",component:()=>f(n.e(1).then(n.bind(null,25))),name:"index"}],fallback:!1};var B={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const r=t,o=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};z.forEach(e=>{void 0!==d[e]&&(h[e]=d[e])});const f={};U.forEach(e=>{"function"==typeof d[e]&&(f[e]=d[e].bind(r))});const m=f.beforeEnter;if(f.beforeEnter=e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,e)},!1===d.css){const e=f.leave;(!e||e.length<2)&&(f.leave=(t,n)=>{e&&e.call(r,t),r.$nextTick(n)})}let x=e("routerView",data);return n.keepAlive&&(x=e("keep-alive",{props:n.keepAliveProps},[x])),e("transition",{props:h,on:f},[x])}};const z=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],U=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var V={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},L=n(2);var F=Object(L.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[e._ssrNode('<div class="error">',"</div>",[e._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+e._ssrEscape(e._s(e.message))+"</div> "),404===e.statusCode?e._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[e._v("Back to the home page")])],1):e._e(),e._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(e){var t=n(16);t.__inject__&&t.__inject__(e)}),null,"2cbb3ac4").exports,K={name:"Nuxt",components:{NuxtChild:B,NuxtError:F},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(e){this.displayingNuxtError&&(this.errorFromNuxtError=e,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[e]=this.$route.matched;if(!e)return this.$route.path;const t=e.components.default;if(t&&t.options){const{options:e}=t;if(e.key)return"function"==typeof e.key?e.key(this.$route):e.key}return/\/$/.test(e.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),e("div",{},[e("h2","An error occured while showing the error page"),e("p","Unfortunately an error occured and while showing the error page another error occured"),e("p",`Error details: ${this.errorFromNuxtError.toString()}`),e("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),e(F,{props:{error:this.nuxt.err}})):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},Q={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var X=Object(L.a)(Q,void 0,void 0,!1,(function(e){var t=n(17);t.__inject__&&t.__inject__(e)}),null,"fe299f5c").exports,G=(n(18),n(19),{data:()=>({clipped:!1,drawer:!1,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"})}),W={data:()=>({clipped:!1,drawer:!1,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"})},H={data:()=>({clipped:!1,drawer:!1,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"})};const Y={"_centered-blank":Object(L.a)(G,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex align-items-center",staticStyle:{height:"100vh"}},[t("nuxt")],1)}),[],!1,null,null,"2dd77610").exports,_default:Object(L.a)(W,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-container",{attrs:{fluid:""}},[t("b-navbar",[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"index"}}},[this._v("\n        Home\n      ")]),this._v(" "),t("b-nav-item",{attrs:{to:{name:"inspire"}}},[this._v("\n        Inspire\n      ")])],1)],1),this._v(" "),t("b-row",[t("b-col",[t("nuxt")],1)],1)],1)}),[],!1,null,null,"6ebf1ffc").exports,"_logged-out":Object(L.a)(H,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-container",{staticClass:"p-0",attrs:{fluid:""}},[t("b-row",[t("b-col",[t("nuxt")],1)],1)],1)}),[],!1,null,null,"4ef25b18").exports};var J={head:{title:"Memory Quiz WebApp",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"A WebApp for testing memory."},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"nuxt-on-firebase"},{hid:"author",name:"author",content:"KiritchoukC"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"nuxt-on-firebase"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"nuxt-on-firebase"},{hid:"og:description",name:"og:description",property:"og:description",content:"Project for dev.to tutorial on how to host a nuxt app on firebase"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{rel:"manifest",href:"/_nuxt/manifest.b2630da6.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),r=e(this.layout||"nuxt"),o=e("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const e=function(e,t=!1){return x(e,t,"instances")}(this.$route);if(!e.length)return;this.$loading.start();const t=e.map(e=>{const p=[];return e.$options.fetch&&p.push($(e.$options.fetch,this.context)),e.$options.asyncData&&p.push($(e.$options.asyncData,this.context).then(t=>{for(const n in t)c.a.set(e.$data,n,t[n])})),Promise.all(p)});try{await Promise.all(t)}catch(e){this.$loading.fail(),function(e){c.a.config.errorHandler&&c.a.config.errorHandler(e)}(e),this.error(e)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){return e&&Y["_"+e]||(e="default"),this.layoutName=e,this.layout=Y["_"+e],this.layout},loadLayout:e=>(e&&Y["_"+e]||(e="default"),Promise.resolve(Y["_"+e]))},components:{NuxtLoading:X}},Z=n(9),ee=n.n(Z);c.a.use(ee.a);let te={};(te=function(e,t){if((e=e.default||e).commit)throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);return"function"!=typeof e&&(e=Object.assign({},e)),function(e,t){if(e.state&&"function"!=typeof e.state){console.warn(`'state' should be a method that returns an object in ${t}`);const n=Object.assign({},e.state);e=Object.assign({},e,{state:()=>n})}return e}(e,t)}(n(20),"store/index.js")).modules=te.modules||{};const ne=te instanceof Function?te:()=>new ee.a.Store(Object.assign({strict:!1},te));var re=n(14);c.a.use(re.BootstrapVue,{});n(10);var oe=async function(e,t){const n={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}};t(n.iconProperty.replace("$",""),ie(n.icons))};const ie=e=>t=>e[t]||"";var se=n(1),ae=n.n(se);const ce={apiKey:"AIzaSyAG6sDbZA6zyNvBMtdXYiX2RwOu2Tr2bPk",authDomain:"memory-quiz-webapp.firebaseapp.com",databaseURL:"https://memory-quiz-webapp.firebaseio.com",projectId:"memory-quiz-webapp",storageBucket:"memory-quiz-webapp.appspot.com",messagingSenderId:"646847919634",appId:"1:646847919634:web:f06d21c65d693f966c0acb",measurementId:"G-E3B1Y7M282"};if(!ae.a.apps.length){const e=ae.a.credential.applicationDefault();ae.a.initializeApp({credential:e,...ce})}var ue=async({req:e,res:t})=>{if(!e||!e.headers.authorization)return;const n=(e.headers.authorization||"").split(" "),r=n.length>1?n[1]:"";try{const e=await ae.a.auth().verifyIdToken(r);if(e.uid){const n=await ae.a.auth().getUser(e.uid);t.locals={...t.locals,user:{...n,allClaims:e,idToken:r}}}}catch(e){console.error(e)}},le=n(3);const pe={apiKey:"AIzaSyAG6sDbZA6zyNvBMtdXYiX2RwOu2Tr2bPk",authDomain:"memory-quiz-webapp.firebaseapp.com",databaseURL:"https://memory-quiz-webapp.firebaseio.com",projectId:"memory-quiz-webapp",storageBucket:"memory-quiz-webapp.appspot.com",messagingSenderId:"646847919634",appId:"1:646847919634:web:f06d21c65d693f966c0acb",measurementId:"G-E3B1Y7M282"};var main=async({res:e},t)=>{let r;if(e&&e.locals&&e.locals.user){const{default:t}=await Promise.resolve().then(n.t.bind(null,24,7)),o=new t(le,{config:pe,sessions:{sessionLifetime:36e5,loginDelay:50}});r=await o.startSession(e.locals.user.uid),e.locals._session=r,e.locals._manager=o}else r=le.apps.find(a=>"[DEFAULT]"===a.name)||le.initializeApp(pe);await Promise.resolve().then(n.t.bind(null,23,7));const o=r.auth(),c=le.auth;t("fireAuth",o),t("fireAuthObj",c),await Promise.resolve().then(n.t.bind(null,22,7));const l=r.firestore(),d=le.firestore;t("fireStore",l),t("fireStoreObj",d)};const de={apiKey:"AIzaSyAG6sDbZA6zyNvBMtdXYiX2RwOu2Tr2bPk",authDomain:"memory-quiz-webapp.firebaseapp.com",databaseURL:"https://memory-quiz-webapp.firebaseio.com",projectId:"memory-quiz-webapp",storageBucket:"memory-quiz-webapp.appspot.com",messagingSenderId:"646847919634",appId:"1:646847919634:web:f06d21c65d693f966c0acb",measurementId:"G-E3B1Y7M282"};if(!ae.a.apps.length){const e=ae.a.credential.applicationDefault();ae.a.initializeApp({credential:e,...de})}var he=async({res:e})=>{if(e&&e.locals&&e.locals.user&&e.locals.user.uid&&e.locals._manager){const t=e.locals.user.uid,n=e.locals._manager;if(n.getUser(t))return;try{const e=await ae.a.auth().createCustomToken(t);await n.login(t,e)}catch(e){console.log(e)}}};c.a.component(N.a.name,N.a),c.a.component(M.a.name,{...M.a,render:(e,t)=>M.a.render(e,t)}),c.a.component(B.name,B),c.a.component("NChild",B),c.a.component(K.name,K),c.a.use(A.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const fe={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function me(e){const t=await new I.a(D),n=ne(e);n.$router=t;const r=n.registerModule;n.registerModule=(path,e,t)=>r.call(n,path,e,Object.assign({preserveState:!1},t));const o={store:n,router:t,nuxt:{defaultTransition:fe,transitions:[fe],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},fe,{name:e}):Object.assign({},fe,e):fe),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,o.context._errored=Boolean(t),t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}},...J};n.app=o;const l=e?e.next:e=>o.router.push(e);let d;if(e)d=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);d=t.resolve(path).route}await w(o,{store:n,route:d,next:l,error:o.nuxt.error.bind(o),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});const h=function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(void 0===t)throw new Error("inject(key, value) has no value provided");o[e="$"+e]=t,n[e]=o[e];const r="__nuxt_"+e+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(e)||Object.defineProperty(c.a.prototype,e,{get(){return this.$root.$options[e]}})}))};return"function"==typeof oe&&await oe(o.context,h),"function"==typeof ue&&await ue(o.context,h),"function"==typeof main&&await main(o.context,h),"function"==typeof he&&await he(o.context,h),e&&e.url&&await new Promise((n,r)=>{t.push(e.url,n,()=>{const r=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,o.context.route=await v(t),o.context.params=t.params||{},o.context.query=t.query||{},r(),n()})})}),{store:n,app:o,router:t}}var xe={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.component(xe.name,xe),c.a.component("NLink",xe),global.fetch||(global.fetch=d.a);const ye=()=>new c.a({render:e=>e("div")});const ge=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(r.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=async e=>{e.redirected=!1,e.next=ge(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:t,router:n,store:r}=await me(e),o=new c.a(t);e.meta=o.$meta(),e.asyncData={};const l=async()=>{await Promise.all(e.beforeRenderFns.map(t=>$(t,{Components:y,nuxtState:e.nuxt}))),e.rendered=()=>{e.nuxt.state=r.state}},d=async()=>{const n="function"==typeof F.layout?F.layout(t.context):F.layout;return e.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},f=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),d()),y=x(n.match(e.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",t.context)}catch(e){throw console.debug("Error occurred when calling nuxtServerInit: ",e.message),e}if(e.redirected)return ye();if(e.nuxt.error)return d();let v=[];if(v=v.map(e=>"function"==typeof e?e:("function"!=typeof h[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),h[e])),await _(v,t.context),e.redirected)return ye();if(e.nuxt.error)return d();let w=y.length?y[0].options.layout:F.layout;if("function"==typeof w&&(w=w(t.context)),await o.loadLayout(w),e.nuxt.error)return d();if(w=o.setLayout(w),e.nuxt.layout=o.layoutName,v=[],(w=m(w)).options.middleware&&(v=v.concat(w.options.middleware)),y.forEach(e=>{e.options.middleware&&(v=v.concat(e.options.middleware))}),v=v.map(e=>"function"==typeof e?e:("function"!=typeof h[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),h[e])),await _(v,t.context),e.redirected)return ye();if(e.nuxt.error)return d();let C=!0;try{for(const e of y)if("function"==typeof e.options.validate&&!(C=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),d()}if(!C)return e._generate&&(e.nuxt.serverRendered=!1),f();if(!y.length)return f();const k=await Promise.all(y.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=$(n.options.asyncData,t.context);o.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(t.context)):r.push(null),Promise.all(r)}));return e.nuxt.data=k.map(e=>e[0]||{}),e.redirected?ye():e.nuxt.error?d():(await l(),o)}},function(e,t){e.exports=require("firebase/firestore")},function(e,t){e.exports=require("firebase/auth")},function(e,t){e.exports=require("@nuxtjs/firebase/lib/services/SessionManager")}]);