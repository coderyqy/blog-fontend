(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d394ef8"],{"8d6f":function(e,t,a){"use strict";a("f541")},eba9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"article"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("用户管理")])],1),a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"uname",label:"昵称",width:"180"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.email?t.row.email:"无"))]}}])}),a("el-table-column",{attrs:{prop:"createAt",label:"创建时间",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"delete",on:{click:function(a){return e.deleteUser(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),l=a("8d85"),c={name:"Comment",data:function(){return{input:"23156",value:"",tableData:[]}},components:{},methods:{getAllUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])();case 2:a=t.sent,e.tableData=a,console.log(a);case 5:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["a"])(e);case 2:r=a.sent,200==r.status&&(t.$message({message:r.message,type:"success"}),t.getAllUsers());case 4:case"end":return a.stop()}}),a)})))()}},created:function(){this.getAllUsers()}},u=c,i=(a("8d6f"),a("2877")),o=Object(i["a"])(u,r,n,!1,null,"8c040c36",null);t["default"]=o.exports},f541:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3d394ef8.69387ccd.js.map