(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{692:function(n,e,t){"use strict";n.exports=function(n){var e=function(){},t=new Promise(function(t,a){e=function(){t=null,a=null},n.then(function(n){t&&t(n)},function(n){a&&a(n)})});return t.trash=e,t}},695:function(n,e,t){n.exports={flexWrap:"style_flexWrap__pYzRU"}},703:function(n,e,t){"use strict";t.r(e);var a=t(15),r=t(16),i=t(18),o=t(17),c=t(19),s=t(1),u=t.n(s),l=t(27),d=t(692),f=t.n(d),h=t(695),p=t.n(h),m=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).loadPlugin=function(n,e){return new Promise(function(t,a){var r=document.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,t(r))}:r.onload=function(){t(r)},r.onerror=function(){a("\u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25")},r.innerHTML=e,r.src=n,document.getElementById("tradingview_wrap").appendChild(r)})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:p.a.flexWrap},u.a.createElement("div",{className:"tradingview-widget-container",id:"tradingview_wrap",style:{background:"#ffffff"}},u.a.createElement("div",{className:"tradingview-widget-container__widget"})))}},{key:"componentDidMount",value:function(){var n=this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",'{\n  "width": "100%",\n  "height": "100%",\n  "currencies": [\n    "EUR",\n    "USD",\n    "JPY",\n    "GBP",\n    "CHF",\n    "AUD",\n    "CAD",\n    "NZD",\n    "CNY"\n  ],\n  "locale": "zh_CN"\n}');this.trashablePromise=f()(n),this.trashablePromise.then(function(n){console.log("success")}).catch(function(n){console.log(n)})}},{key:"componentWillUnmount",value:function(){this.trashablePromise.trash()}}]),e}(s.PureComponent);e.default=Object(l.b)(function(n){return{}},function(n){return{}})(m)}}]);
//# sourceMappingURL=2.796eaa65.chunk.js.map