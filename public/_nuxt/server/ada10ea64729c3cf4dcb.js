exports.ids=[1],exports.modules={25:function(t,o,e){"use strict";e.r(o);var r=e(3),n=e.n(r);e(22),e(23);var l=[{label:"Facebook",provider:new n.a.auth.FacebookAuthProvider,color:"#4267B2",variant:"primary"},{label:"Google",provider:new n.a.auth.GoogleAuthProvider,color:"#DB4437",variant:"danger"}],c={layout:"centered-blank",data:()=>({AuthProviders:l}),methods:{loginWithProvider(t){"Microsoft"===t.label&&t.setCustomParameters({tenant:"eroticle.onmicrosoft.com"}),this.$fireAuth.signInWithPopup(t).catch((function(t){const o=t.code,e=t.message,r=t.email,n=t.credential;console.log({errorCode:o,errorMessage:e,email:r,credential:n})})),console.log(t)}}},d=e(2),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"12",sm:"12","offset-sm":"12",md:"4","offset-md":"4"}},[e("div",{staticClass:"mx-auto p-2 rounded",staticStyle:{"max-width":"300px","background-color":"rgba(0,0,0,0.4)"}},[e("h1",{staticClass:"text-center text-light mb-3"},[t._v("\n          Login\n        ")]),t._v(" "),e("b-form",{staticClass:"w-100"},t._l(t.AuthProviders,(function(o,r){return e("b-button",{key:r,staticClass:"d-block w-100 mb-2 mx-auto",style:"background-color: "+o.color,attrs:{variant:o.variant},on:{click:function(e){return t.loginWithProvider(o.provider)}}},[t._v("\n            "+t._s(o.label)+"\n          ")])})),1)],1)])],1)],1)}),[],!1,null,null,"2d48cbc8");o.default=component.exports}};