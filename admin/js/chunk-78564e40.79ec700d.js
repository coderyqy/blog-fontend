(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78564e40"],{"07b4":function(t,e,i){"use strict";i("a7ca")},a7ca:function(t,e,i){},b3d7:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("el-container",{staticClass:"home-container"},[i("el-header",[i("div",{attrs:{id:"top"}},[i("div",{staticClass:"logo"},[t._v("后台管理系统")]),i("div",{staticClass:"util"},[i("div",{staticClass:"logout"},[i("i",{staticClass:"el-icon-switch-button",on:{click:t.logout}})])])])]),i("el-container",[i("el-aside",{attrs:{width:"200px"}},[i("div",{attrs:{id:"menu"}},[i("el-row",{staticClass:"tac"},[i("el-col",[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"rgb(53, 64, 83)","text-color":"#fff","active-text-color":"#ffd04b"}},[i("el-menu-item",{attrs:{index:"1"}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页资讯")])]),i("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.$router.push("/article")}}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("文章管理")])]),i("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.$router.push("/comment")}}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("评论管理")])]),i("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.$router.push("/message")}}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("留言管理")])]),i("el-menu-item",{attrs:{index:"5"},on:{click:function(e){return t.$router.push("/users")}}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户管理")])])],1)],1)],1)],1)]),i("el-main",[i("div",{ref:"mainview",attrs:{id:"view"}},[i("transition",{attrs:{name:"slide-fade"}},[i("router-view")],1)],1)])],1)],1)],1)},s=[],a={name:"Home",data:function(){return{clientHeight:""}},methods:{changeMainViewHeight:function(){this.clientHeight=document.documentElement.clientHeight,this.$refs.mainview.style.height="".concat(this.clientHeight-80,"px")},logout:function(){window.localStorage.clear(),this.$router.push("/adminLogin")}},beforeRouteEnter:function(t,e,i){i()},beforeRouteUpdate:function(t,e,i){i()},beforeRouteLeave:function(t,e,i){i()},created:function(){},mounted:function(){this.changeMainViewHeight()}},o=a,l=(i("07b4"),i("2877")),c=Object(l["a"])(o,n,s,!1,null,"2b4266ef",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-78564e40.79ec700d.js.map