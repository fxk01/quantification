(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{692:function(t,n,e){"use strict";t.exports=function(t){var n=function(){},e=new Promise(function(e,a){n=function(){e=null,a=null},t.then(function(t){e&&e(t)},function(t){a&&a(t)})});return e.trash=n,e}},693:function(t,n,e){t.exports={flexWrap:"style_flexWrap__1IjDQ"}},706:function(t,n,e){"use strict";e.r(n);e(109);var a=e(32),r=(e(92),e(20)),o=e(15),i=e(16),l=e(18),c=e(17),s=e(19),u=e(1),d=e.n(u),g=e(27),m=e(692),h=e.n(m),f=function(t){function n(){var t,e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(r)))).loadPlugin=function(t,n){return new Promise(function(e,a){var r=document.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,e(r))}:r.onload=function(){e(r)},r.onerror=function(){a("\u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25")},r.innerHTML=n,r.src=t,document.getElementById("tradingview_wrap_1").appendChild(r)})},e}return Object(s.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"tradingview-widget-container",id:"tradingview_wrap_1",style:{background:"#ffffff"}},d.a.createElement("div",{className:"tradingview-widget-container__widget"})))}},{key:"componentDidMount",value:function(){var t=this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",'{\n\t"showChart": true,\n\t"locale": "zh_CN",\n\t"width": "100%",\n\t"height": "100%",\n\t"largeChartUrl": "",\n\t"plotLineColorGrowing": "rgba(60, 188, 152, 1)",\n\t"plotLineColorFalling": "rgba(255, 74, 104, 1)",\n\t"gridLineColor": "rgba(233, 233, 234, 1)",\n\t"scaleFontColor": "rgba(214, 216, 224, 1)",\n\t"belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",\n\t"belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",\n\t"symbolActiveColor": "rgba(242, 250, 254, 1)",\n\t"tabs": [\n\t  {\n\t\t"title": "\u6307\u6570",\n\t\t"symbols": [\n\t\t  {\n\t\t\t"s": "INDEX:SPX",\n\t\t\t"d": "S&P 500"\n\t\t  },\n\t\t  {\n\t\t\t"s": "INDEX:IUXX",\n\t\t\t"d": "Nasdaq 100"\n\t\t  },\n\t\t  {\n\t\t\t"s": "INDEX:DOWI",\n\t\t\t"d": "Dow 30"\n\t\t  },\n\t\t  {\n\t\t\t"s": "INDEX:NKY",\n\t\t\t"d": "Nikkei 225"\n\t\t  },\n\t\t  {\n\t\t\t"s": "INDEX:DAX",\n\t\t\t"d": "DAX Index"\n\t\t  },\n\t\t  {\n\t\t\t"s": "OANDA:UK100GBP",\n\t\t\t"d": "FTSE 100"\n\t\t  }\n\t\t],\n\t\t"originalTitle": "Indices"\n\t  },\n\t  {\n\t\t"title": "\u5546\u54c1",\n\t\t"symbols": [\n\t\t  {\n\t\t\t"s": "CME_MINI:ES1!",\n\t\t\t"d": "E-Mini S&P"\n\t\t  },\n\t\t  {\n\t\t\t"s": "CME:E61!",\n\t\t\t"d": "Euro"\n\t\t  },\n\t\t  {\n\t\t\t"s": "COMEX:GC1!",\n\t\t\t"d": "Gold"\n\t\t  },\n\t\t  {\n\t\t\t"s": "NYMEX:CL1!",\n\t\t\t"d": "Crude Oil"\n\t\t  },\n\t\t  {\n\t\t\t"s": "NYMEX:NG1!",\n\t\t\t"d": "Natural Gas"\n\t\t  },\n\t\t  {\n\t\t\t"s": "CBOT:ZC1!",\n\t\t\t"d": "Corn"\n\t\t  }\n\t\t],\n\t\t"originalTitle": "Commodities"\n\t  },\n\t  {\n\t\t"title": "\u503a\u5238",\n\t\t"symbols": [\n\t\t  {\n\t\t\t"s": "CME:GE1!",\n\t\t\t"d": "Eurodollar"\n\t\t  },\n\t\t  {\n\t\t\t"s": "CBOT:ZB1!",\n\t\t\t"d": "T-Bond"\n\t\t  },\n\t\t  {\n\t\t\t"s": "CBOT:UD1!",\n\t\t\t"d": "Ultra T-Bond"\n\t\t  },\n\t\t  {\n\t\t\t"s": "EUREX:GG1!",\n\t\t\t"d": "Euro Bund"\n\t\t  },\n\t\t  {\n\t\t\t"s": "EUREX:II1!",\n\t\t\t"d": "Euro BTP"\n\t\t  },\n\t\t  {\n\t\t\t"s": "EUREX:HR1!",\n\t\t\t"d": "Euro BOBL"\n\t\t  }\n\t\t],\n\t\t"originalTitle": "Bonds"\n\t  },\n\t  {\n\t\t"title": "\u5916\u6c47",\n\t\t"symbols": [\n\t\t  {\n\t\t\t"s": "FX:EURUSD"\n\t\t  },\n\t\t  {\n\t\t\t"s": "FX:GBPUSD"\n\t\t  },\n\t\t  {\n\t\t\t"s": "FX:USDJPY"\n\t\t  },\n\t\t  {\n\t\t\t"s": "FX:USDCHF"\n\t\t  },\n\t\t  {\n\t\t\t"s": "FX:AUDUSD"\n\t\t  },\n\t\t  {\n\t\t\t"s": "FX:USDCAD"\n\t\t  }\n\t\t],\n\t\t"originalTitle": "Forex"\n\t  }\n\t]\n  }');this.trashablePromise=h()(t),this.trashablePromise.then(function(t){console.log("success")}).catch(function(t){console.log(t)})}},{key:"componentWillUnmount",value:function(){this.trashablePromise.trash()}}]),n}(u.PureComponent),b=Object(g.b)(function(t){return{}},function(t){return{}})(f),w=function(t){function n(){var t,e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(r)))).loadPlugin=function(t,n){return new Promise(function(e,a){var r=document.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,e(r))}:r.onload=function(){e(r)},r.onerror=function(){a("\u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25")},r.innerHTML=n,r.src=t,document.getElementById("tradingview_wrap_2").appendChild(r)})},e}return Object(s.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"tradingview-widget-container",id:"tradingview_wrap_2",style:{background:"#ffffff"}},d.a.createElement("div",{className:"tradingview-widget-container__widget"})))}},{key:"componentDidMount",value:function(){var t=this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",'{\n\t"exchange": "US",\n\t"showChart": true,\n\t"locale": "zh_CN",\n\t"width": "100%",\n\t"height": "100%",\n\t"largeChartUrl": "",\n\t"plotLineColorGrowing": "rgba(60, 188, 152, 1)",\n\t"plotLineColorFalling": "rgba(255, 74, 104, 1)",\n\t"gridLineColor": "rgba(242, 243, 245, 1)",\n\t"scaleFontColor": "rgba(214, 216, 224, 1)",\n\t"belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",\n\t"belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",\n\t"symbolActiveColor": "rgba(242, 250, 254, 1)"\n  }');this.trashablePromise=h()(t),this.trashablePromise.then(function(t){console.log("success")}).catch(function(t){console.log(t)})}},{key:"componentWillUnmount",value:function(){this.trashablePromise.trash()}}]),n}(u.PureComponent),p=Object(g.b)(function(t){return{}},function(t){return{}})(w),E=e(693),C=e.n(E),y=function(t){function n(){return Object(o.a)(this,n),Object(l.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(a.a,{type:"flex",gutter:16,className:C.a.flexWrap},d.a.createElement(r.a,{className:"gutter-row",span:14,style:{height:"100%"}},d.a.createElement(b,null)),d.a.createElement(r.a,{className:"gutter-row",span:10,style:{height:"100%"}},d.a.createElement(p,null))))}}]),n}(u.PureComponent);n.default=Object(g.b)(function(t){return{}},function(t){return{}})(y)}}]);
//# sourceMappingURL=1.f7223fb8.chunk.js.map