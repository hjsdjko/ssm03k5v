(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xuesheng-add-or-update"],{1304:function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),o=i(t("e2b1")),a={data:function(){return{ruleForm:{xuehao:"",mima:"",xuesheng:"",banji:"",xingbie:"",nianling:"",shouji:"",youxiang:"",touxiang:""},banjiOptions:[],banjiIndex:0,xingbieOptions:[],xingbieIndex:0,user:{},ro:{xuehao:!1,mima:!1,xuesheng:!1,banji:!1,xingbie:!1,nianling:!1,shouji:!1,youxiang:!1,touxiang:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var t,i,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:return i=r.sent,this.user=i.data,r.next=7,this.$api.option("banji","banjimingcheng",{});case 7:if(i=r.sent,this.banjiOptions=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=18;break}return this.ruleForm.id=e.id,r.next=16,this.$api.info("xuesheng",this.ruleForm.id);case 16:i=r.sent,this.ruleForm=i.data;case 18:if(!e.cross){r.next=61;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 21:if((r.t1=r.t0()).done){r.next=61;break}if(o=r.t1.value,"xuehao"!=o){r.next=27;break}return this.ruleForm.xuehao=n[o],this.ro.xuehao=!0,r.abrupt("continue",21);case 27:if("mima"!=o){r.next=31;break}return this.ruleForm.mima=n[o],this.ro.mima=!0,r.abrupt("continue",21);case 31:if("xuesheng"!=o){r.next=35;break}return this.ruleForm.xuesheng=n[o],this.ro.xuesheng=!0,r.abrupt("continue",21);case 35:if("banji"!=o){r.next=39;break}return this.ruleForm.banji=n[o],this.ro.banji=!0,r.abrupt("continue",21);case 39:if("xingbie"!=o){r.next=43;break}return this.ruleForm.xingbie=n[o],this.ro.xingbie=!0,r.abrupt("continue",21);case 43:if("nianling"!=o){r.next=47;break}return this.ruleForm.nianling=n[o],this.ro.nianling=!0,r.abrupt("continue",21);case 47:if("shouji"!=o){r.next=51;break}return this.ruleForm.shouji=n[o],this.ro.shouji=!0,r.abrupt("continue",21);case 51:if("youxiang"!=o){r.next=55;break}return this.ruleForm.youxiang=n[o],this.ro.youxiang=!0,r.abrupt("continue",21);case 55:if("touxiang"!=o){r.next=59;break}return this.ruleForm.touxiang=n[o],this.ro.touxiang=!0,r.abrupt("continue",21);case 59:r.next=21;break;case 61:this.styleChange();case 62:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},banjiChange:function(r){this.banjiIndex=r.target.value,this.ruleForm.banji=this.banjiOptions[this.banjiIndex]},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.xuehao){r.next=3;break}return this.$utils.msg("学号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.xuesheng){r.next=9;break}return this.$utils.msg("学生不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){r.next=12;break}return this.$utils.msg("年龄应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 15:if(!this.ruleForm.id){r.next=20;break}return r.next=18,this.$api.update("xuesheng",this.ruleForm);case 18:r.next=22;break;case 20:return r.next=22,this.$api.add("xuesheng",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=a},"2a81":function(r,e,t){"use strict";var i=t("5718"),n=t.n(i);n.a},4277:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0fb00152]{padding:%?20?%}.content[data-v-0fb00152]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0fb00152]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0fb00152]{width:%?180?%}.avator[data-v-0fb00152]{width:%?150?%;height:%?60?%}.right-input[data-v-0fb00152]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0fb00152]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0fb00152]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0fb00152]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0fb00152]{border:0}.cu-form-group uni-input[data-v-0fb00152]{padding:0 %?30?%}.uni-input[data-v-0fb00152]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0fb00152]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0fb00152]::after{line-height:%?88?%}.select .uni-input[data-v-0fb00152]{line-height:%?88?%}.input .right-input[data-v-0fb00152]{line-height:%?110?%}',""]),r.exports=e},5718:function(r,e,t){var i=t("4277");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=t("4f06").default;n("d2e9499e",i,!0,{sourceMap:!1,shadowMode:!1})},"693b":function(r,e,t){"use strict";var i,n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.xuehao,placeholder:"学号"},model:{value:r.ruleForm.xuehao,callback:function(e){r.$set(r.ruleForm,"xuehao",e)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("学生")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.xuesheng,placeholder:"学生"},model:{value:r.ruleForm.xuesheng,callback:function(e){r.$set(r.ruleForm,"xuesheng",e)},expression:"ruleForm.xuesheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("班级")]),t("v-uni-picker",{attrs:{value:r.banjiIndex,range:r.banjiOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.banjiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.banji?r.ruleForm.banji:"请选择班级"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("性别")]),t("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("年龄")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("邮箱")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.youxiang,placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},f19e:function(r,e,t){"use strict";t.r(e);var i=t("693b"),n=t("f2c1");for(var o in n)"default"!==o&&function(r){t.d(e,r,(function(){return n[r]}))}(o);t("2a81");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0fb00152",null,!1,i["a"],a);e["default"]=u.exports},f2c1:function(r,e,t){"use strict";t.r(e);var i=t("1304"),n=t.n(i);for(var o in i)"default"!==o&&function(r){t.d(e,r,(function(){return i[r]}))}(o);e["default"]=n.a}}]);