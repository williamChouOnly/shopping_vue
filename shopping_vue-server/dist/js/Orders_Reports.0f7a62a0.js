(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Orders_Reports"],{1276:function(e,t,a){"use strict";var r=a("d784"),n=a("44e7"),i=a("825a"),s=a("1d80"),l=a("4840"),o=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),p=[].push,m=Math.min,g=4294967295,b=!f((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(s(this)),i=void 0===a?g:a>>>0;if(0===i)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,i);var l,o,c,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,b=new RegExp(e.source,f+"g");while(l=d.call(b,r)){if(o=b.lastIndex,o>m&&(u.push(r.slice(m,l.index)),l.length>1&&l.index<r.length&&p.apply(u,l.slice(1)),c=l[0].length,m=o,u.length>=i))break;b.lastIndex===l.index&&b.lastIndex++}return m===r.length?!c&&b.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,n,a):r.call(String(n),t,a)},function(e,n){var s=a(r,e,this,n,r!==t);if(s.done)return s.value;var d=i(e),f=String(this),p=l(d,RegExp),h=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),x=new p(b?d:"^(?:"+d.source+")",v),y=void 0===n?g:n>>>0;if(0===y)return[];if(0===f.length)return null===u(x,f)?[f]:[];var _=0,w=0,R=[];while(w<f.length){x.lastIndex=b?w:0;var E,k=u(x,b?f:f.slice(w));if(null===k||(E=m(c(x.lastIndex+(b?0:w)),f.length))===_)w=o(f,w,h);else{if(R.push(f.slice(_,w)),R.length===y)return R;for(var T=1;T<=k.length-1;T++)if(R.push(k[T]),R.length===y)return R;w=_=E}}return R.push(f.slice(_)),R}]}),!b)},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},1690:function(e,t,a){},"44e7":function(e,t,a){var r=a("861d"),n=a("c6b6"),i=a("b622"),s=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,l=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(e){var t,a,n,l,d=this,f=c&&d.sticky,p=r.call(d),m=d.source,g=0,b=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(m="(?: "+m+")",b=" "+b,g++),a=new RegExp("^(?:"+m+")",p)),u&&(a=new RegExp("^"+m+"$(?!\\s)",p)),o&&(t=d.lastIndex),n=i.call(f?a:d,b),f?n?(n.input=n.input.slice(g),n[0]=n[0].slice(g),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:o&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n}),e.exports=l},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),s=a("50c4"),l=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var a,r,u,d,f,p,v=l(this),x=s(v.length),y=n(e,x),_=arguments.length;if(0===_?a=r=0:1===_?(a=0,r=x-y):(a=_-2,r=g(m(i(t),0),x-y)),x+a-r>b)throw TypeError(h);for(u=o(v,r),d=0;d<r;d++)f=y+d,f in v&&c(u,d,v[f]);if(u.length=r,a<r){for(d=y;d<x-r;d++)f=d+r,p=d+a,f in v?v[p]=v[f]:delete v[p];for(d=x;d>x-r+a;d--)delete v[d-1]}else if(a>r)for(d=x-r;d>y;d--)f=d+r-1,p=d+a-1,f in v?v[p]=v[f]:delete v[p];for(d=0;d<a;d++)v[d+y]=arguments[d+2];return v.length=x-r+a,u}})},a553:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("参数列表")])],1),a("el-card",{staticClass:"box-card"},[a("el-alert",{attrs:{title:"注意：只允许为第三级分类设置相关参数！",type:"warning","show-icon":""}}),a("el-form",{staticStyle:{"margin-top":"15px"}},[a("el-form-item",{attrs:{label:"选择商品分类："}},[a("el-cascader",{attrs:{options:e.categories,props:e.cascaderProps},on:{change:e.handleChange},model:{value:e.selectedCateKeys,callback:function(t){e.selectedCateKeys=t},expression:"selectedCateKeys"}})],1)],1),a("el-tabs",{on:{"tab-click":e.handleTabsClick},model:{value:e.activeTabsName,callback:function(t){e.activeTabsName=t},expression:"activeTabsName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.manyTableData,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return e.handleClose(n,t.row)}}},[e._v(e._s(r))])}))}}])}),a("el-table-column",{attrs:{label:"#",width:"50px",type:"index"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row.attr_id)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.delParams(t.row.attr_id)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.onlyTableData,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return e.handleClose(n,t.row)}}},[e._v(e._s(r))])}))}}])}),a("el-table-column",{attrs:{label:"#",width:"50px",type:"index"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row.attr_id)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.delParams(t.row.attr_id)}}})]}}])})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+e.getTitleText,visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFromRef",attrs:{model:e.addFrom,rules:e.addFromRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:e.getTitleText,prop:"attr_name"}},[a("el-input",{model:{value:e.addFrom.attr_name,callback:function(t){e.$set(e.addFrom,"attr_name",t)},expression:"addFrom.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addParams}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+e.getTitleText,visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[a("el-form",{ref:"editFromRef",attrs:{model:e.editFrom,rules:e.editFromRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:e.getTitleText,prop:"attr_name"}},[a("el-input",{model:{value:e.editFrom.attr_name,callback:function(t){e.$set(e.editFrom,"attr_name",t)},expression:"editFrom.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editParams}},[e._v("确 定")])],1)],1)],1)},n=[],i=(a("99af"),a("4160"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),s={data:function(){return{categories:[],cascaderProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},selectedCateKeys:[],manyTableData:[],onlyTableData:[],activeTabsName:"many",addDialogVisible:!1,addFrom:{attr_name:""},addFromRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},editDialogVisible:!1,editFrom:{},editFromRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]}}},created:function(){this.getCategories()},computed:{getCateId:function(){return 3===this.selectedCateKeys.length?this.selectedCateKeys[2]:null},getTitleText:function(){return"many"===this.activeTabsName?"动态参数":"静态属性"}},methods:{getCategories:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories").then((function(t){e.categories=t.data.data}));case 2:case"end":return t.stop()}}),t)})))()},handleChange:function(){this.getParamsData()},handleTabsClick:function(){this.getParamsData()},getParamsData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(3===e.selectedCateKeys.length){t.next=5;break}return e.selectedCateKeys=[],e.manyTableData=[],e.onlyTableData=[],t.abrupt("return");case 5:return t.next=7,e.$http.get("categories/".concat(e.getCateId,"/attributes"),{params:{sel:e.activeTabsName}}).then((function(t){200!==t.data.meta.status&&e.$message.error("获取参数列表失败！"),t.data.data.forEach((function(e){e.attr_vals=e.attr_vals?e.attr_vals.split(" "):[]})),"many"===e.activeTabsName?e.manyTableData=t.data.data:e.onlyTableData=t.data.data}));case 7:case"end":return t.stop()}}),t)})))()},saveAttrVals:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.put("categories/".concat(t.getCateId,"/attributes/").concat(e.attr_id),{attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:e.attr_vals.join(" ")});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",t.$message.error("修改参数项失败！"));case 6:t.$message.success("修改参数项成功！");case 7:case"end":return a.stop()}}),a)})))()},handleClose:function(e,t){t.attr_vals.splice(e,1),this.saveAttrVals(t)},addDialogClosed:function(){this.$refs.addFromRef.resetFields()},addParams:function(){var e=this;this.$refs.addFromRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("categories/".concat(e.getCateId,"/attributes"),{attr_name:e.addFrom.attr_name,attr_sel:e.activeTabsName});case 4:if(r=t.sent,n=r.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加参数失败！"));case 8:e.$message.success("添加参数成功！"),e.addDialogVisible=!1,e.getParamsData();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("categories/".concat(t.getCateId,"/attributes/").concat(e),{params:{attr_sel:t.activeTabsName}});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",t.$message.error("获取分类失败！"));case 6:t.editFrom=n.data,t.editDialogVisible=!0;case 8:case"end":return a.stop()}}),a)})))()},editDialogClosed:function(){this.$refs.editFromRef.resetFields()},editParams:function(){var e=this;this.$refs.editFromRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("categories/".concat(e.getCateId,"/attributes/").concat(e.editFrom.attr_id),{attr_name:e.editFrom.attr_name,attr_sel:e.activeTabsName});case 4:if(r=t.sent,n=r.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("修改参数失败！"));case 8:e.$message.success("修改参数成功！"),e.getParamsData(),e.editDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},delParams:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("categories/".concat(t.getCateId,"/attributes/").concat(e)).then((function(e){var a=e.data;if(200!==a.meta.status)return t.$message.error("删除参数失败");t.$message({type:"success",message:"删除参数成功!"}),t.getParamsData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 2:case"end":return a.stop()}}),a)})))()}}},l=s,o=(a("af44"),a("2877")),c=Object(o["a"])(l,r,n,!1,null,"4cef1402",null);t["default"]=c.exports},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},af44:function(e,t,a){"use strict";var r=a("1690"),n=a.n(r);n.a},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),i=a("b622"),s=a("9263"),l=a("9112"),o=i("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var m=i(e),g=!n((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),b=g&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return t=!0,null},a[m](""),!t}));if(!g||!b||"replace"===e&&(!c||!u||f)||"split"===e&&!p){var h=/./[m],v=a(m,""[e],(function(e,t,a,r,n){return t.exec===s?g&&!n?{done:!0,value:h.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=v[0],y=v[1];r(String.prototype,e,x),r(RegExp.prototype,m,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&l(RegExp.prototype[m],"sham",!0)}},fb86:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("数据统计")]),a("el-breadcrumb-item",[e._v("数据报表")])],1),a("el-card",[a("div",{staticStyle:{width:"750px",height:"400px"},attrs:{id:"main"}})])],1)},n=[],i=(a("96cf"),a("1da1")),s=a("164e"),l=a.n(s),o=a("60bb"),c=a.n(o),u={data:function(){return{options:{title:{text:"用户来源"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#E9EEF3"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1}],yAxis:[{type:"value"}]}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=l.a.init(document.getElementById("main")),t.next=3,e.$http.get("reports/type/1").then((function(t){var r=c.a.merge(e.options,t.data.data);a.setOption(r)}));case 3:case"end":return t.stop()}}),t)})))()}},d=u,f=a("2877"),p=Object(f["a"])(d,r,n,!1,null,"b6df66dc",null);t["default"]=p.exports}}]);
//# sourceMappingURL=Orders_Reports.0f7a62a0.js.map