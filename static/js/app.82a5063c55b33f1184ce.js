webpackJsonp([1],{NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=s("kV13"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"iconfont icon-wodezichan"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-jinrudianpu"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-hanbao"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-huiyuanqia"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-tongji"}),t._v(" "),s("div",[t._v("统计")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-31shezhi"}),t._v(" "),s("div",[t._v("设置")])])])])}]};var n={name:"App",components:{leftNav:s("C7Lr")({},e,!1,function(t){s("Rqzu")},null,null).exports}},i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("leftNav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l=s("C7Lr")(n,i,!1,function(t){s("ikhn")},null,null).exports,c=s("4WWC"),r=s("I29D"),d=s.n(r),u={name:"pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;d.a.get("https://mock.yonyoucloud.com/mock/7376/mock2").then(function(o){t.oftenGoods=o.data}).catch(function(t){alert("网络错误,不能访问")}),d.a.get("https://mock.yonyoucloud.com/mock/7376/mock").then(function(o){t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){alert("网络错误,不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){this.totalMoney=0,this.totalCount=0;for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalMoney=0,this.totalCount=0},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalMoney=0,this.totalCount=0,this.$message({message:"结账成功，感谢你有为店里出了一份力",type:"success"})):this.$message.error("不能空结，老板了解你急切的心情！")}}},v={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[t._v("数量:")]),t._v(t._s(t.totalCount)+"    "),s("small",[t._v("金额:")]),t._v(t._s(t.totalMoney)+"\n          ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(o){return t.delAllGoods()}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(o){return t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{key:o.Id,on:{click:function(s){return t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(o.price)+"元")])])}),0)])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{key:o.Id,on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)])]),t._v(" "),s("el-tab-pane",{attrs:{label:"小吃"}},[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{key:o.Id,on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{key:o.Id,on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{key:o.Id,on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)])],1)],1)])],1)],1)},staticRenderFns:[]};var _=s("C7Lr")(u,v,!1,function(t){s("bxo5")},"data-v-5ee404b6",null).exports;a.default.use(c.a);var p=new c.a({routes:[{path:"/",name:"Pos",component:_}]}),f=s("bQIR"),h=s.n(f);s("gFLX");a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",router:p,components:{App:l},template:"<App/>"})},Rqzu:function(t,o){},bxo5:function(t,o){},gFLX:function(t,o){},ikhn:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.82a5063c55b33f1184ce.js.map