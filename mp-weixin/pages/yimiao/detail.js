(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yimiao/detail"],{"2db6":function(t,e,n){"use strict";(function(t){n("48e8");i(n("66fd"));var e=i(n("c42a"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"4d95":function(t,e,n){},b978:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"aa08"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},bae8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,a,o,r){try{var u=t[o](r),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(i,a)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function u(t){o(r,i,a,u,c,"next",t)}function c(t){o(r,i,a,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return r(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return r(i.default.mark((function e(){var a,o,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),n.getyimiaoCollection(),a=t.getStorageSync("nowTable"),e.next=5,n.$api.session(a);case 5:o=e.sent,n.user=o.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),r=t.getStorageSync("pingluenStateState"),r&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 10:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return r(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("yimiao",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.yimiaoPhoto?t.detail.yimiaoPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){t.setStorageSync("orderGoods",[{yimiaoId:this.detail.id,yimiaoName:this.detail.yimiaoName,yimiaoPhoto:this.swiperList[0],buyNumber:1,yimiaoNewMoney:this.detail.yimiaoNewMoney}]),this.$utils.jump("../yimiaoOrder/confirm")},getyimiaoCollection:function(){var t=this;return r(i.default.mark((function e(){var n,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,yimiaoId:t.id,yonghuId:t.user.id,yimiaoCollectionTypes:"1"},e.next=3,t.$api.list("yimiaoCollection",n);case 3:a=e.sent,t.collectionFlag=a.data.list.length;case 5:case"end":return e.stop()}}),e)})))()},shoucang:function(){var e=this;return r(i.default.mark((function n(){var a,o,u,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,o={page:1,limit:1,yimiaoId:a.detail.id,yonghuId:a.user.id,yimiaoCollectionTypes:"1"},n.next=4,a.$api.list("yimiaoCollection",o);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return c=u.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.del("yimiaoCollection",JSON.stringify([c]));case 3:a.$utils.msg("取消成功"),a.getyimiaoCollection();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.add("yimiaoCollection",{yonghuId:a.user.id,yimiaoId:a.detail.id,yimiaoCollectionTypes:1});case 3:a.$utils.msg("收藏成功"),a.getyimiaoCollection();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return r(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("yimiaoCommentback",{page:t.num,limit:t.size,yimiaoId:e.id});case 2:a=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var t=this;return r(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../yimiaoCommentback/add-or-update?yimiaoId=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,n("543d")["default"])},bd6f:function(t,e,n){"use strict";var i=n("4d95"),a=n.n(i);a.a},c343:function(t,e,n){"use strict";n.r(e);var i=n("bae8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c42a:function(t,e,n){"use strict";n.r(e);var i=n("b978"),a=n("c343");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bd6f");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports}},[["2db6","common/runtime","common/vendor"]]]);