webpackJsonp([10],{"8YtX":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d={register:function(t){var e=t.username,n=t.password;return Object(s.a)(i,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(s.a)(u,"POST",{username:e,password:n})},logout:function(){return Object(s.a)(c)},getInfo:function(){return Object(s.a)(l)}},f=n("NYxO");window.auth=d;var h={data:function(){return{}},computed:o()({},Object(f.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(f.b)(["checkLogin","logout"]),{onLogout:function(t){t.stopPropagation(),this.logout()}})},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Let's share")])],1),t._v(" "),n("p",[t._v("分享是一种美德")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Let's share")])],1),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),t._v(" "),n("router-link",{staticClass:"user",attrs:{to:"/my"}},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("© 2019 kiterumer@gmail.com")])])}]};var m={name:"App",components:{Header:n("VU/8")(h,p,!1,function(t){n("stQT")},null,null).exports,Footer:n("VU/8")(null,g,!1,function(t){n("sKMh")},"data-v-698c5cba",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"share"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("Main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var b=n("VU/8")(m,v,!1,function(t){n("8YtX")},null,null).exports,L=n("/ocq"),w=n("Xxa5"),_=n.n(w),k=n("exGp"),x=n.n(k),P={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return d.login({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return x()(_.a.mark(function t(){var e;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.register({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return x()(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return x()(_.a.mark(function t(){var a;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,d.getInfo();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}};r.default.use(f.a);var y=new f.a.Store({modules:{auth:P,blog:{state:{},getters:{},mutations:{},actions:{}}}});r.default.use(L.a);var M=new L.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(2).then(n.bind(null,"OpX7"))}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"/oBs"))},meta:{requireAuth:!0}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"R6sS"))},meta:{requireAuth:!0}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"vv7P"))},meta:{requireAuth:!0}},{path:"/register",component:function(){return n.e(3).then(n.bind(null,"YDhy"))}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"bywM"))}}]});M.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requireAuth})?y.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var O=M,U=n("zL8q"),j=n.n(U),q=(n("tvR6"),n("pFYg")),T=n.n(q);function A(t){var e=("object"===(void 0===t?"undefined":T()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var C={install:function(t,e){t.prototype.friendlyDate=A}};r.default.config.productionTip=!1,r.default.use(j.a),r.default.use(C),new r.default({el:"#app",router:O,store:y,components:{App:b},template:"<App/>"})},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(t){console.log(t.data),"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},sKMh:function(t,e){},stQT:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3d063242d7d401bc06e0.js.map