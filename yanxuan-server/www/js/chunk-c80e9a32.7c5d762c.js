(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c80e9a32"],{1712:function(t,i,e){"use strict";var s=e("fd61"),n=e.n(s);n.a},"2bb1":function(t,i,e){"use strict";var s=e("fe7e");i["a"]=Object(s["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.b(),style:t.style},[t._t("default")],2)},name:"swipe-item",data:function(){return{offset:0}},computed:{style:function(){var t=this.$parent,i=t.vertical,e=t.computedWidth,s=t.computedHeight;return{width:e+"px",height:i?s+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"}}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)}})},"2d86":function(t,i,e){"use strict";e.r(i);var s,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"page subpage",attrs:{id:"detail"}},[e("app-header",{attrs:{title:t.goodsInfo.name}}),e("scroller",{staticClass:"goods-content"},[t.bannerUrls.length>0?e("div",{staticClass:"banner"},[e("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1},on:{change:t.pageChange}},t._l(t.bannerUrls,function(t,i){return e("van-swipe-item",{key:i},[e("img",{attrs:{src:t}})])}),1),e("span",{staticClass:"indicator"},[t._v(t._s(t.swipeIndex)+"/"+t._s(t.bannerUrls.length))])],1):t._e(),e("ul",{staticClass:"characteristic"},t._l(t.goodsInfo.characteristicList,function(i,s){return e("li",{key:s,staticClass:"characteristic-item"},[e("img",{attrs:{src:i.picUrl}}),e("p",t._l(i.simpleDescList,function(i,s){return e("span",{key:s},[t._v("\n                            "+t._s(i)+"\n                        ")])}),0)])}),0),e("p",{staticClass:"price"},[e("span",[t._v("¥"+t._s(t.goodsInfo.retailPrice))]),e("span",[t._v("¥"+t._s(t.goodsInfo.counterPrice)+".00")])]),e("div",{staticClass:"tip"},t._l(t.goodsInfo.itemTagList,function(i,s){return e("span",{key:s},[t._v("\n                    "+t._s(i.name)),e("van-icon",{attrs:{name:"arrow"}})],1)}),0),e("div",{staticClass:"main"},[e("div",{staticClass:"title"},[e("h3",[t._v(t._s(t.goodsInfo.name))]),e("h6",[t._v(t._s(t.goodsInfo.simpleDesc))])]),e("div",{staticClass:"comment-icon"},[e("p",[t._v(t._s(t.goodsInfo.commentCount))]),e("p",[t._v("用户评价")]),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("div",{staticClass:"handle"},[e("van-cell",{attrs:{title:"请选择规格数量","is-link":""}}),e("van-cell",{attrs:{title:"限制：特价商品不可与优惠券叠加使用"}}),e("van-cell",{attrs:{title:"配送：请选择配送地址","is-link":""}}),e("van-cell",{attrs:{title:"积分：购买最高得"+Math.floor(t.goodsInfo.retailPrice/10)+"积分","is-link":""}})],1),t.goodsDetail?e("div",{staticClass:"detail",domProps:{innerHTML:t._s(t.goodsDetail)}}):t._e()]),e("div",{staticClass:"tool-bar border-top"},[e("div",{staticClass:"contact border-right"},[e("van-icon",{attrs:{name:"service-o"}})],1),e("div",{staticClass:"buy border-right",on:{click:t.buyAction}},[t._v("\n                立即购买\n            ")]),e("div",{staticClass:"add-cart",on:{click:t.addCartAction}},[t._v("\n                加入购物车\n            ")])])],1),e("router-view")],1)},o=[],a=(e("e7e5"),e("d399")),c=e("cebc"),r=e("bd86"),h=(e("c194"),e("7744")),u=(e("4b0a"),e("2bb1")),d=(e("7f7f"),e("7844"),e("5596")),l=e("2f62"),f={components:(s={},Object(r["a"])(s,d["a"].name,d["a"]),Object(r["a"])(s,u["a"].name,u["a"]),Object(r["a"])(s,h["a"].name,h["a"]),s),props:["id"],data:function(){return{swipeIndex:1}},computed:Object(c["a"])({},Object(l["d"])({bannerUrls:function(t){return t.goods.bannerUrls},goodsInfo:function(t){return t.goods.goodsInfo},goodsDetail:function(t){return t.goods.goodsDetail}})),methods:{pageChange:function(t){this.swipeIndex=t+1},buyAction:function(){this.$router.push("/itemdetail/"+this.id+"/buy")},addCartAction:function(){this.$store.commit("cart/addGoods",{id:this.id,name:this.goodsInfo.name,price:this.goodsInfo.retailPrice,mainPicUrl:this.bannerUrls[0]}),Object(a["a"])("添加成功")}},created:function(){this.$store.commit("goods/setId",this.id),this.$store.dispatch("goods/getGoodsDetail",this.id)},beforeDestroy:function(){this.$store.dispatch("goods/removeGoodsData")}},p=f,v=(e("6cad"),e("1712"),e("2877")),m=Object(v["a"])(p,n,o,!1,null,"e715cb3c",null);m.options.__file="goods-detail.vue";i["default"]=m.exports},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var s=e("fe7e"),n=e("3875"),o=e("db78");i["a"]=Object(s["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.b()},[e("div",{class:t.b("track"),style:t.trackStyle,on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,transitionend:function(i){i.stopPropagation(),t.$emit("change",t.activeIndicator)}}},[t._t("default")],2),t._t("indicator",[t.showIndicators&&t.count>1?e("div",{class:t.b("indicators",{vertical:t.vertical}),on:{transitionend:function(t){t.stopPropagation()}}},t._l(t.count,function(i){return e("i",{class:t.b("indicator",{active:i-1===t.activeIndicator}),style:i-1===t.activeIndicator?t.indicatorStyle:null})}),0):t._e()])],2)},name:"swipe",mixins:[n["a"]],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,initialSwipe:Number,indicatorColor:String,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},mounted:function(){this.initialize(),this.$isServer||Object(o["b"])(window,"resize",this.onResize,!0)},activated:function(){this.rendered&&this.initialize(),this.rendered=!0},destroyed:function(){this.clear(),this.$isServer||Object(o["a"])(window,"resize",this.onResize,!0)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(t.preventDefault(),t.stopPropagation(),this.move(0,Math.min(Math.max(this.delta,-this.size),this.size))))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move(t>0?this.delta>0?-1:1:0)}this.swiping=!1,this.autoPlay()}},move:function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);var e=this.delta,s=this.active,n=this.count,o=this.swipes,a=this.trackSize,c=0===s,r=s===n-1,h=!this.loop&&(c&&(i>0||t<0)||r&&(i<0||t>0));h||n<=1||(o[0]&&(o[0].offset=r&&(e<0||t>0)?a:0),o[n-1]&&(o[n-1].offset=c&&(e>0||t<0)?-a:0),t&&s+t>=-1&&s+t<=n&&(this.active+=t),this.offset=i-this.active*this.size)},swipeTo:function(t){var i=this;this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),setTimeout(function(){i.swiping=!1,i.move(t%i.count-i.active)},30)},correctPosition:function(){this.active<=-1&&this.move(this.count),this.active>=this.count&&this.move(-this.count)},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move(1),t.autoPlay()},30)},i))}}})},"5d99":function(t,i,e){},"6cad":function(t,i,e){"use strict";var s=e("5d99"),n=e.n(s);n.a},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},8270:function(t,i,e){},c194:function(t,i,e){"use strict";e("68ef")},fd61:function(t,i,e){}}]);
//# sourceMappingURL=chunk-c80e9a32.7c5d762c.js.map