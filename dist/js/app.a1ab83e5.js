(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],f=0,v=[];f<s.length;f++)o=s[f],i[o]&&v.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("bb71");n("da64");r["a"].use(i["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            Menù     \n          ")])],1)],1),n("v-divider"),t._l(t.items,function(e,r){return[n("v-list-tile",{key:r,attrs:{href:e.href}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-action",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1),n("v-toolbar",{attrs:{light:""}},[n("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbare-title",[t._v("CinePaese")]),n("v-spacer"),n("v-toolbar-item",[n("ul",{staticClass:"right"},[t.isLoggedIn?n("li",[n("span",{staticClass:"email white-text"},[t._v(t._s(t.currentUser))])]):t._e(),t.isLoggedIn?n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1):t._e(),t.isLoggedIn?t._e():n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("Accedi")])],1),t.isLoggedIn?t._e():n("li",[n("router-link",{attrs:{to:"/register"}},[t._v("Registrati")])],1),t.isLoggedIn?n("li",[n("button",{staticClass:"btn",on:{click:t.logout}},[t._v("Logout")])]):t._e()]),n("v-btn",{attrs:{flat:""}},[t._v("\n        Accedi\n      ")]),n("v-btn",{attrs:{flat:""}},[t._v("\n        Registrati\n      ")])],1)],1),n("v-content",[n("Helloworld")],1),n("v-footer",{attrs:{light:"",height:"auto"}},[n("v-card",{staticClass:"red lighten-1 white--text text-xs-center flex",attrs:{flat:"",title:""}},[n("v-card-text",[t._v("\n      Cinema comunale di Tione di Trento\n      ")])],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},l=[],u={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=u,f=n("2877"),v=n("6544"),d=n.n(v),h=n("a523"),p=n("0e8f"),m=n("adda"),b=n("a722"),g=Object(f["a"])(c,s,l,!1,null,null,null),y=g.exports;d()(g,{VContainer:h["a"],VFlex:p["a"],VImg:m["a"],VLayout:b["a"]});var x={name:"App",components:{HelloWorld:y},data:function(){return{drawer:!1,items:[{icon:"perm_identity",href:"#",title:"Account"}]}}},_=x,w=n("7496"),j=n("8336"),V=n("b0af"),k=n("99d9"),C=n("549c"),L=n("ce7e"),T=n("553a"),O=n("132d"),I=n("8860"),P=n("ba95"),A=n("40fe"),M=n("5d23"),S=n("f774"),D=n("9910"),E=n("71d9"),F=n("706c"),H=Object(f["a"])(_,a,o,!1,null,null,null),q=H.exports;d()(H,{VApp:w["a"],VBtn:j["a"],VCard:V["a"],VCardText:k["a"],VContent:C["a"],VDivider:L["a"],VFooter:T["a"],VIcon:O["a"],VList:I["a"],VListTile:P["a"],VListTileAction:A["a"],VListTileContent:M["a"],VListTileTitle:M["b"],VNavigationDrawer:S["a"],VSpacer:D["a"],VToolbar:E["a"],VToolbarSideIcon:F["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(q)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.a1ab83e5.js.map