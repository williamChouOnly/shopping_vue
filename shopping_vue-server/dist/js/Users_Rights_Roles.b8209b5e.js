(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var a=r("fc6a"),n=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):n(a(e))}},"0d1f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:e.rightList}},[r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{prop:"level",label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"danger"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)},n=[],i=(r("96cf"),r("1da1")),o={data:function(){return{rightList:[]}},created:function(){this.getRightList()},methods:{getRightList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list").then((function(t){if(200!==t.data.meta.status)return e.$message.error("获取权限列表失败");e.rightList=t.data.data}));case 2:case"end":return t.stop()}}),t)})))()}}},s=o,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"6b9053eb",null);t["default"]=c.exports},"168d":function(e,t,r){},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in l)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),o="String Iterator",s=n.set,l=n.getterFor(o);i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,f,m,p=n(e),g="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,v=void 0!==h,w=c(p),y=0;if(v&&(h=a(h,b>2?arguments[2]:void 0,2)),void 0==w||g==Array&&o(w))for(t=s(p.length),r=new g(t);t>y;y++)m=v?h(p[y],y):p[y],l(r,y,m);else for(d=w.call(p),f=d.next,r=new g;!(u=f.call(d)).done;y++)m=v?i(d,h,[u.value,y],!0):u.value,l(r,y,m);return r.length=y,r}},6516:function(e,t,r){"use strict";var a=r("168d"),n=r.n(a);n.a},"746f":function(e,t,r){var a=r("428f"),n=r("5135"),i=r("e538"),o=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||o(t,e,{value:i.f(e)})}},"7cad":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserlist},model:{value:e.paramsObj.query,callback:function(t){e.$set(e.paramsObj,"query",t)},expression:"paramsObj.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserlist},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:e.userlist}},[r("el-table-column",{attrs:{label:"#",type:"index",width:"180"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"180"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{prop:"mg_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.handleChangeEvent(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.delUser(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.showRoleDialog(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.paramsObj.pagenum,"page-sizes":[1,2,5,10],"page-size":e.paramsObj.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",width:"50%",visible:e.addDialogVisible},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.closeDialog}},[r("el-form",{ref:"addRuleForm",attrs:{model:e.addFormData,rules:e.addRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addFormData.username,callback:function(t){e.$set(e.addFormData,"username",t)},expression:"addFormData.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.addFormData.password,callback:function(t){e.$set(e.addFormData,"password",t)},expression:"addFormData.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addFormData.email,callback:function(t){e.$set(e.addFormData,"email",t)},expression:"addFormData.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addFormData.mobile,callback:function(t){e.$set(e.addFormData,"mobile",t)},expression:"addFormData.mobile"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{close:e.clsoeEditDialog,"update:visible":function(t){e.editDialogVisible=t}}},[r("el-form",{ref:"editRuleForm",attrs:{model:e.editFormData,rules:e.addRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editFormData.username,callback:function(t){e.$set(e.editFormData,"username",t)},expression:"editFormData.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editFormData.email,callback:function(t){e.$set(e.editFormData,"email",t)},expression:"editFormData.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editFormData.mobile,callback:function(t){e.$set(e.editFormData,"mobile",t)},expression:"editFormData.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.roleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.roleDialogVisible=t},close:e.closeRoleDialog}},[r("div",[r("p",[e._v("当前用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前角色："+e._s(e.userInfo.role_name))]),r("p",[e._v(" 分配角色： "),r("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectRoleId,callback:function(t){e.selectRoleId=t},expression:"selectRoleId"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.roleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.changeRole}},[e._v("确 定")])],1)])],1)},n=[],i=(r("99af"),r("96cf"),r("1da1")),o={data:function(){var e=function(e,t,r){var a=/^1[34578]\d{9}$/;return a.test(t)?r():r(new Error("请输入合法的手机号码"))};return{paramsObj:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addFormData:{username:"",password:"",email:"",mobile:""},addRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,max:15,message:"用户密码长度在 6 到 15 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:7,max:11,message:"手机号码长度在 7 到 11 个字符",trigger:"blur"},{validator:e,trigger:"blur"}]},editFormData:{id:0,username:"",email:"",mobile:""},editRuleForm:{username:"",email:"",mobile:""},editDialogVisible:!1,roleList:[],userInfo:{},roleDialogVisible:!1,selectRoleId:""}},created:function(){this.getUserlist()},methods:{getUserlist:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.paramsObj}).then((function(t){var r=t.data;if(200!==r.meta.status)return e.$message.error("获取用户列表失败");e.userlist=r.data.users,e.total=r.data.total}));case 2:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.paramsObj.pagesize=e,this.getUserlist()},handleCurrentChange:function(e){this.paramsObj.pagenum=e,this.getUserlist()},handleChangeEvent:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state)).then((function(r){return 200!==r.data.meta.status?(e.mg_state=!e.mg_state,t.$message.error("更新用户状态失败")):t.$message.success("更新用户状态成功")}));case 2:case"end":return r.stop()}}),r)})))()},closeDialog:function(){this.$refs.addRuleForm.resetFields()},addUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.addRuleForm.validate((function(t){t&&e.$http.post("users",e.addFormData).then((function(t){if(201!==t.data.meta.status)return e.$message.error("添加用户失败");e.$message.success("添加用户成功"),e.addDialogVisible=!1,e.getUserlist()}))}));case 2:case"end":return t.stop()}}),t)})))()},showEditDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e).then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("查询用户信息失败！");t.editFormData.username=r.data.username,t.editFormData.email=r.data.email,t.editFormData.mobile=r.data.mobile,t.editFormData.id=r.data.id}));case 2:t.editDialogVisible=!0;case 3:case"end":return r.stop()}}),r)})))()},clsoeEditDialog:function(){this.$refs.editRuleForm.resetFields()},editUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.editRuleForm.validate((function(t){t&&e.$http.put("users/"+e.editFormData.id,{email:e.editFormData.email,mobile:e.editFormData.mobile}).then((function(t){var r=t.data;if(200!==r.meta.status)return e.$message.error("更新用户信息失败");e.$message.success("更新用户信息成功"),e.getUserlist(),e.editDialogVisible=!1}))}));case 2:case"end":return t.stop()}}),t)})))()},delUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("users/"+e).then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("删除用户失败");t.$message({type:"success",message:"删除用户成功!"}),t.getUserlist()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 2:case"end":return r.stop()}}),r)})))()},showRoleDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return[],t.roleDialogVisible=!0,t.userInfo=e,r.next=5,t.$http.get("roles").then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("获取数据失败");t.roleList=r.data}));case 5:case"end":return r.stop()}}),r)})))()},closeRoleDialog:function(){this.selectRoleId=""},changeRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectRoleId}).then((function(t){var r=t.data;if(200!==r.meta.status)return e.$message.error("修改用户角色失败");e.$message.success("修改用户角色成功"),e.roleDialogVisible=!1,e.getUserlist()}));case 2:case"end":return t.stop()}}),t)})))()}}},s=o,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"4b95d5ce",null);t["default"]=c.exports},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),l=r("4930"),c=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),p=r("825a"),g=r("7b0b"),b=r("fc6a"),h=r("c04e"),v=r("5c6c"),w=r("7c73"),y=r("df75"),R=r("241c"),D=r("057f"),x=r("7418"),$=r("06cf"),k=r("9bf2"),F=r("d1e7"),_=r("9112"),O=r("6eeb"),S=r("5692"),j=r("f772"),V=r("d012"),C=r("90e3"),N=r("b622"),E=r("e538"),A=r("746f"),I=r("d44e"),L=r("69f3"),U=r("b727").forEach,z=j("hidden"),T="Symbol",P="prototype",q=N("toPrimitive"),B=L.set,K=L.getterFor(T),J=Object[P],M=n.Symbol,H=i("JSON","stringify"),Q=$.f,W=k.f,G=D.f,X=F.f,Y=S("symbols"),Z=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),re=S("wks"),ae=n.QObject,ne=!ae||!ae[P]||!ae[P].findChild,ie=s&&u((function(){return 7!=w(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=Q(J,t);a&&delete J[t],W(e,t,r),a&&e!==J&&W(J,t,a)}:W,oe=function(e,t){var r=Y[e]=w(M[P]);return B(r,{type:T,tag:e,description:t}),s||(r.description=t),r},se=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof M},le=function(e,t,r){e===J&&le(Z,t,r),p(e);var a=h(t,!0);return p(r),d(Y,a)?(r.enumerable?(d(e,z)&&e[z][a]&&(e[z][a]=!1),r=w(r,{enumerable:v(0,!1)})):(d(e,z)||W(e,z,v(1,{})),e[z][a]=!0),ie(e,a,r)):W(e,a,r)},ce=function(e,t){p(e);var r=b(t),a=y(r).concat(pe(r));return U(a,(function(t){s&&!de.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?w(e):ce(w(e),t)},de=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===J&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,z)&&this[z][t])||r)},fe=function(e,t){var r=b(e),a=h(t,!0);if(r!==J||!d(Y,a)||d(Z,a)){var n=Q(r,a);return!n||!d(Y,a)||d(r,z)&&r[z][a]||(n.enumerable=!0),n}},me=function(e){var t=G(b(e)),r=[];return U(t,(function(e){d(Y,e)||d(V,e)||r.push(e)})),r},pe=function(e){var t=e===J,r=G(t?Z:b(e)),a=[];return U(r,(function(e){!d(Y,e)||t&&!d(J,e)||a.push(Y[e])})),a};if(l||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=C(e),r=function(e){this===J&&r.call(Z,e),d(this,z)&&d(this[z],t)&&(this[z][t]=!1),ie(this,t,v(1,e))};return s&&ne&&ie(J,t,{configurable:!0,set:r}),oe(t,e)},O(M[P],"toString",(function(){return K(this).tag})),O(M,"withoutSetter",(function(e){return oe(C(e),e)})),F.f=de,k.f=le,$.f=fe,R.f=D.f=me,x.f=pe,E.f=function(e){return oe(N(e),e)},s&&(W(M[P],"description",{configurable:!0,get:function(){return K(this).description}}),o||O(J,"propertyIsEnumerable",de,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:M}),U(y(re),(function(e){A(e)})),a({target:T,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=M(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!s},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:fe}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),a({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),H){var ge=!l||u((function(){var e=M();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));a({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var a,n=[e],i=1;while(arguments.length>i)n.push(arguments[i++]);if(a=t,(m(t)||void 0!==e)&&!se(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!se(t))return t}),n[1]=t,H.apply(null,n)}})}M[P][q]||_(M[P],q,M[P].valueOf),I(M,T),V[z]=!0},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),o=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:o},{from:n})},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},d28b:function(e,t,r){var a=r("746f");a("iterator")},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),i=r("e260"),o=r("9112"),s=r("b622"),l=s("iterator"),c=s("toStringTag"),u=i.values;for(var d in n){var f=a[d],m=f&&f.prototype;if(m){if(m[l]!==u)try{o(m,l,u)}catch(g){m[l]=u}if(m[c]||o(m,c,d),n[d])for(var p in i)if(m[p]!==i[p])try{o(m,p,i[p])}catch(g){m[p]=i[p]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),l=r("9bf2").f,c=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,g="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var r=g?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var a=r("b622");t.f=a},ebab:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",{staticClass:"box-card"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.showAddDialog}},[e._v("添加角色")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roleList}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,n){return r("el-row",{key:a.id,class:["bdBottom",0===n?"bdTop":"","itemCenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:"",type:"warning"},on:{close:function(r){return e.deleteRight(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,n){return r("el-row",{key:a.id,class:["itemCenter",0===n?"":"bdTop"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{closable:"",type:"success"},on:{close:function(r){return e.deleteRight(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a){return r("el-tag",{key:a.id,attrs:{closable:"",type:"danger"},on:{close:function(r){return e.deleteRight(t.row,a.id)}}},[e._v(e._s(a.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.delUser(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.showRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.closeAddDialog}},[r("el-form",{ref:"addRuleFormRef",attrs:{model:e.addRuleForm,rules:e.editRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRuleForm.roleName,callback:function(t){e.$set(e.addRuleForm,"roleName",t)},expression:"addRuleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRuleForm.roleDesc,callback:function(t){e.$set(e.addRuleForm,"roleDesc",t)},expression:"addRuleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[r("el-form",{ref:"editRuleFormRef",attrs:{model:e.editRuleForm,rules:e.editRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.editRuleForm.roleName,callback:function(t){e.$set(e.editRuleForm,"roleName",t)},expression:"editRuleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{model:{value:e.editRuleForm.roleDesc,callback:function(t){e.$set(e.editRuleForm,"roleDesc",t)},expression:"editRuleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.changeRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.rightDialogVisible,width:"30%"},on:{close:e.closeRightDialog,"update:visible":function(t){e.rightDialogVisible=t}}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightList,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys,props:e.defaultProps}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.rightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.changeRight}},[e._v("确 定")])],1)],1)],1)},n=[];r("99af"),r("4160"),r("a15b"),r("159b");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e){if(Array.isArray(e))return i(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function l(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return o(e)||s(e)||l(e)||c()}r("96cf");var d=r("1da1"),f={data:function(){return{roleList:[],editRuleForm:{},editRules:{roleName:[{required:!0,message:"请输入角色名",trigger:"blur"}]},editDialogVisible:!1,addRuleForm:{roleName:"",roleDesc:""},addDialogVisible:!1,rightDialogVisible:!1,rightList:[],defaultProps:{children:"children",label:"authName"},defKeys:[],roleId:0}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles").then((function(t){if(200!==t.data.meta.status)return e.$message.error("获取角色列表失败");e.roleList=t.data.data}));case 2:case"end":return t.stop()}}),t)})))()},showEditDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.editDialogVisible=!0,r.next=3,t.$http.get("roles/"+e).then((function(e){if(200!==e.data.meta.status)return t.$http.error("获取角色信息失败");t.editRuleForm=e.data.data}));case 3:case"end":return r.stop()}}),r)})))()},changeRole:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.put("roles/"+e.editRuleForm.roleId,{roleName:e.editRuleForm.roleName,roleDesc:e.editRuleForm.roleDesc}).then((function(t){if(200!=t.data.meta.status)return e.$message.error("修改角色失败");e.$message.success("修改角色成功"),e.editDialogVisible=!1,e.getRoleList()}));case 2:case"end":return t.stop()}}),t)})))()},closeAddDialog:function(){this.$refs.addRuleFormRef.resetFields()},showAddDialog:function(){this.addDialogVisible=!0},addRole:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("roles",{roleName:e.addRuleForm.roleName,roleDesc:e.addRuleForm.roleDesc}).then((function(t){if(201!=t.data.meta.status)return e.$message.error("添加角色失败");e.$message.success("添加角色成功"),e.addDialogVisible=!1,e.getRoleList()}));case 2:case"end":return t.stop()}}),t)})))()},delUser:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("roles/"+e).then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("删除角色失败");t.$message({type:"success",message:"删除角色成功!"}),t.getRoleList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 2:case"end":return r.stop()}}),r)})))()},deleteRight:function(e,t){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.$http.delete("roles/".concat(e.id,"/rights/").concat(t)).then((function(t){if(200!==t.data.meta.status)return r.$message.error("删除权限失败");r.$message({type:"success",message:"删除权限成功!"}),e.children=t.data.data}))})).catch((function(){r.$message({type:"info",message:"已取消删除"})}));case 2:case"end":return a.stop()}}),a)})))()},findChecked:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.findChecked(e,t)}))},showRightDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,t.rightDialogVisible=!0,r.next=4,t.$http.get("rights/tree").then((function(r){if(200!==r.data.meta.status)return t.$message.error("获取权限列表失败");t.rightList=r.data.data,t.findChecked(e,t.defKeys)}));case 4:case"end":return r.stop()}}),r)})))()},changeRight:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a}).then((function(t){if(200!==t.data.meta.status)return e.$message.error("更新权限失败");e.$message.success("更新权限成功"),e.rightDialogVisible=!1,e.getRoleList()}));case 4:case"end":return t.stop()}}),t)})))()},closeRightDialog:function(){this.defKeys=[]}}},m=f,p=(r("6516"),r("2877")),g=Object(p["a"])(m,a,n,!1,null,"66627b69",null);t["default"]=g.exports},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),b=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!p},{slice:function(e,t){var r,a,u,d=l(this),f=s(d.length),m=o(e,f),p=o(void 0===t?f:t,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,m,p);for(a=new(void 0===r?Array:r)(h(p-m,0)),u=0;m<p;m++,u++)m in d&&c(a,u,d[m]);return a.length=u,a}})}}]);
//# sourceMappingURL=Users_Rights_Roles.b8209b5e.js.map