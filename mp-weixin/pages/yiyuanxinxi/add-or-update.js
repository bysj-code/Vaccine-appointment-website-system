(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yiyuanxinxi/add-or-update"],{2872:function(e,n,i){"use strict";i.r(n);var t=i("ecc0"),r=i("eb85");for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);i("a8ce");var u,s=i("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"61bbe419",null,!1,t["a"],u);n["default"]=o.exports},"31fa":function(e,n,i){},4068:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void i(c)}s.done?n(o):Promise.resolve(o).then(t,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var u=e.apply(n,i);function s(e){a(u,t,r,s,o,"next",e)}function o(e){a(u,t,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("b7aa"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{cross:"",ro:{username:!1,password:!1,yiyuanxinxiName:!1,yiyuanxinxiTypes:!1,yiyuanxinxiPhone:!1,addressTypes:!1,yiyuanxinxiPhoto:!1,yiyuanxinxiContent:!1,createTime:!1},ruleForm:{username:"",password:"",yiyuanxinxiName:"",yiyuanxinxiTypes:"",yiyuanxinxiValue:"",yiyuanxinxiPhone:"",addressTypes:"",addressValue:"",yiyuanxinxiPhoto:"",yiyuanxinxiContent:"",createTime:""},user:{},yiyuanxinxiTypesOptions:[],yiyuanxinxiTypesIndex:0,addressTypesOptions:[],addressTypesIndex:0}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return u(t.default.mark((function i(){var r,a,u,s,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r={page:1,limit:100,dicCode:"yiyuanxinxi_types"},i.next=3,n.$api.page("dictionary",r);case 3:return a=i.sent,n.yiyuanxinxiTypesOptions=a.data.list,u={page:1,limit:100,dicCode:"address_types"},i.next=8,n.$api.page("dictionary",u);case 8:if(s=i.sent,n.addressTypesOptions=s.data.list,!e.id){i.next=16;break}return n.ruleForm.id=e.id,i.next=14,n.$api.info("yiyuanxinxi",n.ruleForm.id);case 14:o=i.sent,n.ruleForm=o.data;case 16:e.yiyuanxinxiId&&(n.ruleForm.yiyuanxinxiId=e.yiyuanxinxiId);case 17:case"end":return i.stop()}}),i)})))()},methods:{yiyuanxinxiTypesChange:function(e){this.yiyuanxinxiTypesIndex=e.target.value,this.ruleForm.yiyuanxinxiValue=this.yiyuanxinxiTypesOptions[this.yiyuanxinxiTypesIndex].indexName,this.ruleForm.yiyuanxinxiTypes=this.yiyuanxinxiTypesOptions[this.yiyuanxinxiTypesIndex].codeIndex},addressTypesChange:function(e){this.addressTypesIndex=e.target.value,this.ruleForm.addressValue=this.addressTypesOptions[this.addressTypesIndex].indexName,this.ruleForm.addressTypes=this.addressTypesOptions[this.addressTypesIndex].codeIndex},yiyuanxinxiPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yiyuanxinxiPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.username){i.next=3;break}return n.$utils.msg("账户不能为空"),i.abrupt("return");case 3:if(n.ruleForm.yiyuanxinxiName){i.next=6;break}return n.$utils.msg("医院名称不能为空"),i.abrupt("return");case 6:if(n.ruleForm.yiyuanxinxiPhone||n.$validate.isMobile(n.ruleForm.yiyuanxinxiPhone)){i.next=9;break}return n.$utils.msg("联系方式不能为空并且需要输入正确格式"),i.abrupt("return");case 9:if(n.ruleForm.addressTypes){i.next=12;break}return n.$utils.msg("地区不能为空"),i.abrupt("return");case 12:if(n.ruleForm.yiyuanxinxiPhoto){i.next=15;break}return n.$utils.msg("医院图片不能为空"),i.abrupt("return");case 15:if(!n.ruleForm.id){i.next=20;break}return i.next=18,n.$api.update("yiyuanxinxi",n.ruleForm);case 18:i.next=22;break;case 20:return i.next=22,n.$api.save("yiyuanxinxi",n.ruleForm);case 22:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 24:case"end":return i.stop()}}),i)})))()},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,i("543d")["default"])},a8ce:function(e,n,i){"use strict";var t=i("31fa"),r=i.n(t);r.a},cfd6:function(e,n,i){"use strict";(function(e){i("48e8");t(i("66fd"));var n=t(i("2872"));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(n.default)}).call(this,i("543d")["createPage"])},eb85:function(e,n,i){"use strict";i.r(n);var t=i("4068"),r=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},ecc0:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"b7aa"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["cfd6","common/runtime","common/vendor"]]]);