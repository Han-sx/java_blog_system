webpackJsonp([12],{"2hfY":function(t,e,n){"use strict";e.a=function(t){var e=new Date(t),n=(Date.now()-e)/1e3;if(n<30)return"刚刚";if(n<3600)return Math.ceil(n/60)+"分钟前";if(n<86400)return Math.ceil(n/3600)+"小时前";if(n<172800)return"1天前";return t}},"33ZO":function(t,e,n){"use strict";var o={name:"BaseHeader",props:{activeIndex:String,simple:{type:Boolean,default:!1}},data:function(){return{}},computed:{user:function(){return{login:0!=this.$store.state.account.length,avatar:this.$store.state.avatar}}},methods:{logout:function(){var t=this,e=this;this.$store.dispatch("logout").then(function(){t.$router.push({path:"/"})}).catch(function(t){"error"!==t&&e.$message({message:t,type:"error",showClose:!0})})}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-header",{staticClass:"me-area"},[o("el-row",{staticClass:"me-header"},[o("el-col",{staticClass:"me-header-left",attrs:{span:4}},[o("router-link",{staticClass:"me-title",attrs:{to:"/"}},[o("img",{attrs:{src:n("dLd/")}})])],1),t._v(" "),t.simple?[t._t("default")]:o("el-col",{attrs:{span:16}},[o("el-menu",{attrs:{router:!0,"menu-trigger":"click","active-text-color":"#5FB878","default-active":t.activeIndex,mode:"horizontal"}},[o("el-menu-item",{attrs:{index:"/"}},[t._v("首页")]),t._v(" "),o("el-menu-item",{attrs:{index:"/category/all"}},[t._v("文章分类")]),t._v(" "),o("el-menu-item",{attrs:{index:"/tag/all"}},[t._v("标签")]),t._v(" "),o("el-menu-item",{attrs:{index:"/archives"}},[t._v("文章归档")]),t._v(" "),o("el-col",{attrs:{span:4,offset:4}},[o("el-menu-item",{attrs:{index:"/write"}},[o("i",{staticClass:"el-icon-edit"}),t._v("写文章")])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-menu",{attrs:{router:!0,"menu-trigger":"click",mode:"horizontal","active-text-color":"#5FB878"}},[t.user.login?[o("el-submenu",{attrs:{index:""}},[o("template",{slot:"title"},[o("img",{staticClass:"me-header-picture",attrs:{src:t.user.avatar}})]),t._v(" "),o("el-menu-item",{attrs:{index:""},on:{click:t.logout}},[o("i",{staticClass:"el-icon-back"}),t._v("退出")])],2)]:[o("el-menu-item",{attrs:{index:"/login"}},[o("el-button",{attrs:{type:"text"}},[t._v("登录")])],1),t._v(" "),o("el-menu-item",{attrs:{index:"/register"}},[o("el-button",{attrs:{type:"text"}},[t._v("注册")])],1)]],2)],1)],2)],1)},staticRenderFns:[]};var r=n("VU/8")(o,a,!1,function(t){n("njJV")},null,null);e.a=r.exports},"7xIN":function(t,e){},GeOV:function(t,e){},IcnI:function(t,e,n){"use strict";var o=n("//Fk"),a=n.n(o),r=n("NYxO"),c=n("7+uW"),i=n("Moy7"),s=n("M9A7");c.default.use(r.a),e.a=new r.a.Store({state:{id:"",account:"",name:"",avatar:"",token:Object(i.a)()},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_ACCOUNT:function(t,e){t.account=e},SET_NAME:function(t,e){t.name=e},SET_AVATAR:function(t,e){t.avatar=e},SET_ID:function(t,e){t.id=e}},actions:{login:function(t,e){var n=t.commit;return new a.a(function(t,o){Object(s.b)(e.account,e.password).then(function(e){e.success?(n("SET_TOKEN",e.data),Object(i.c)(e.data),t()):o(e.msg)}).catch(function(t){o(t)})})},getUserInfo:function(t){var e=t.commit,n=t.state;return new a.a(function(t,o){Object(s.a)(n.token).then(function(n){n.success?(e("SET_ACCOUNT",n.data.account),e("SET_NAME",n.data.nickname),e("SET_AVATAR",n.data.avatar),e("SET_ID",n.data.id),t(n)):(e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(i.b)(),t(n))}).catch(function(t){e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(i.b)(),o(t)})})},logout:function(t){var e=t.commit,n=t.state;return new a.a(function(t,o){Object(s.c)(n.token).then(function(n){n.success&&(e("SET_TOKEN",""),e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(i.b)(),t())}).catch(function(t){o(t)})})},fedLogOut:function(t){var e=t.commit;return new a.a(function(t){e("SET_TOKEN",""),e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(i.b)(),t()}).catch(function(t){reject(t)})},register:function(t,e){var n=t.commit;return new a.a(function(t,o){Object(s.d)(e.account,e.nickname,e.password).then(function(e){e.success?(n("SET_TOKEN",e.data),Object(i.c)(e.data),t()):o(e.msg)}).catch(function(t){o(t)})})}}})},M9A7:function(t,e,n){"use strict";e.b=function(t,e){var n={account:t,password:e};return Object(o.a)({url:"/login",method:"post",data:n})},e.c=function(t){return Object(o.a)({headers:{Authorization:t},url:"/logout",method:"get"})},e.a=function(t){return Object(o.a)({headers:{Authorization:t},url:"/users/currentUser",method:"get"})},e.d=function(t,e,n){var a={account:t,nickname:e,password:n};return Object(o.a)({url:"/register",method:"post",data:a})};var o=n("OOvn")},Moy7:function(t,e,n){"use strict";e.a=function(){return localStorage.token},e.c=function(t){return localStorage.token=t},e.b=function(){return localStorage.removeItem("token")}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("fCJj");var o=n("qBF2"),a=n.n(o),r=n("7+uW"),c={name:"GoTop",data:function(){return{topShow:!1}},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.topShow=!1},needToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.topShow=t>400}},mounted:function(){this.$nextTick(function(){window.addEventListener("scroll",this.needToTop)})}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.topShow,expression:"topShow"}],staticClass:"me-to-top",on:{click:this.toTop}},[e("i",{staticClass:"el-icon-caret-top"})])])},staticRenderFns:[]};var s={name:"App",components:{GoTop:n("VU/8")(c,i,!1,function(t){n("gaZc")},null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("go-top")],1)},staticRenderFns:[]};var l=n("VU/8")(s,u,!1,function(t){n("aO6o")},null,null).exports,f=n("2X9z"),d=n.n(f),h=n("/ocq"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-footer",{staticClass:"me-area"},[e("div",{staticClass:"me-footer"},[e("p",[this._v("Designed by\n      "),e("strong",[e("router-link",{staticClass:"me-login-design-color",attrs:{to:"/"}},[this._v("博客之路")])],1)])])])},staticRenderFns:[]};var p=n("VU/8")({name:"BaseFooter",data:function(){return{}},methods:{},mounted:function(){}},m,!1,function(t){n("oVF/")},null,null).exports,v={name:"Home",data:function(){return{activeIndex:"/",footerShow:!0}},components:{"base-header":n("33ZO").a,"base-footer":p},beforeRouteEnter:function(t,e,n){n(function(e){e.activeIndex=t.path})},beforeRouteUpdate:function(t,e,n){"/"==t.path?this.footerShow=!0:this.footerShow=!1,this.activeIndex=t.path,n()}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("el-container",[e("base-header",{attrs:{activeIndex:this.activeIndex}}),this._v(" "),e("router-view",{staticClass:"me-container"}),this._v(" "),e("base-footer",{directives:[{name:"show",rawName:"v-show",value:this.footerShow,expression:"footerShow"}]})],1)],1)},staticRenderFns:[]};var g=n("VU/8")(v,_,!1,function(t){n("GeOV")},null,null).exports,T=n("IcnI"),b=n("Moy7");r.default.use(h.a);var E=new h.a({routes:[{path:"/write/:id?",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){return t(n("tgdm"))}.bind(null,n)).catch(n.oe)},meta:{requireLogin:!0}},{path:"",name:"Home",component:g,children:[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){return t(n("mlqX"))}.bind(null,n)).catch(n.oe)}},{path:"/log",component:function(t){return n.e(6).then(function(){return t(n("joCn"))}.bind(null,n)).catch(n.oe)}},{path:"/archives/:year?/:month?",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){return t(n("3/TF"))}.bind(null,n)).catch(n.oe)}},{path:"/messageBoard",component:function(t){return n.e(8).then(function(){return t(n("ncpC"))}.bind(null,n)).catch(n.oe)}},{path:"/view/:id",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("u66k"))}.bind(null,n)).catch(n.oe)}},{path:"/:type/all",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){return t(n("4fko"))}.bind(null,n)).catch(n.oe)}},{path:"/:type/:id",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){return t(n("8wPo"))}.bind(null,n)).catch(n.oe)}}]},{path:"/login",component:function(t){return n.e(4).then(function(){return t(n("lmfZ"))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(t){return n.e(5).then(function(){return t(n("tcoL"))}.bind(null,n)).catch(n.oe)}}],scrollBehavior:function(t,e,n){return{x:0,y:0}}});E.beforeEach(function(t,e,n){Object(b.a)()?"/login"===t.path?n({path:"/"}):0===T.a.state.account.length?T.a.dispatch("getUserInfo").then(function(t){n()}).catch(function(){d()({type:"warning",showClose:!0,message:"登录已过期"}),n({path:"/"})}):n():t.matched.some(function(t){return t.meta.requireLogin})?d()({type:"warning",showClose:!0,message:"请先登录哦"}):n()});var w=E,O=n("M4fF"),S=n.n(O),A=(n("7xIN"),n("2hfY"));r.default.config.productionTip=!1,r.default.use(a.a),Object.defineProperty(r.default.prototype,"$_",{value:S.a}),r.default.directive("title",function(t,e){document.title=t.dataset.title}),r.default.filter("format",A.a),new r.default({el:"#app",router:w,store:T.a,template:"<App/>",components:{App:l}})},OOvn:function(t,e,n){"use strict";var o=n("2X9z"),a=n.n(o),r=n("//Fk"),c=n.n(r),i=n("mtWM"),s=n.n(i),u=n("IcnI"),l=n("Moy7"),f=s.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:1e4});f.interceptors.request.use(function(t){return u.a.state.token&&(t.headers["Oauth-Token"]=Object(l.a)()),t},function(t){c.a.reject(t)}),f.interceptors.response.use(function(t){"timeout"==t.headers.session_time_out&&u.a.dispatch("fedLogOut");var e=t.data;return 200!==e.code?90001===e.code?c.a.reject("error"):90002===e.code?(a()({type:"warning",showClose:!0,message:"未登录或登录超时，请重新登录哦"}),c.a.reject("error")):70001===e.code?(console.info("权限认证错误"),a()({type:"warning",showClose:!0,message:"你没有权限访问哦"}),c.a.reject("error")):c.a.reject(e.msg):t.data},function(t){return a()({type:"warning",showClose:!0,message:"连接超时"}),c.a.reject("error")}),e.a=f},aO6o:function(t,e){},"dLd/":function(t,e,n){t.exports=n.p+"static/img/logo.b3a48c0.png"},fCJj:function(t,e){},gaZc:function(t,e){},njJV:function(t,e){},"oVF/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c26513e292436e28aea3.js.map