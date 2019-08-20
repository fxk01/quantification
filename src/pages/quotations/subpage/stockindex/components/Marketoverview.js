import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import makeTrashable from 'trashable';

const strJson=`{
	"showChart": true,
	"locale": "zh_CN",
	"width": "100%",
	"height": "100%",
	"largeChartUrl": "",
	"plotLineColorGrowing": "rgba(60, 188, 152, 1)",
	"plotLineColorFalling": "rgba(255, 74, 104, 1)",
	"gridLineColor": "rgba(233, 233, 234, 1)",
	"scaleFontColor": "rgba(214, 216, 224, 1)",
	"belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
	"belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
	"symbolActiveColor": "rgba(242, 250, 254, 1)",
	"tabs": [
	  {
		"title": "指数",
		"symbols": [
		  {
			"s": "INDEX:SPX",
			"d": "S&P 500"
		  },
		  {
			"s": "INDEX:IUXX",
			"d": "Nasdaq 100"
		  },
		  {
			"s": "INDEX:DOWI",
			"d": "Dow 30"
		  },
		  {
			"s": "INDEX:NKY",
			"d": "Nikkei 225"
		  },
		  {
			"s": "INDEX:DAX",
			"d": "DAX Index"
		  },
		  {
			"s": "OANDA:UK100GBP",
			"d": "FTSE 100"
		  }
		],
		"originalTitle": "Indices"
	  },
	  {
		"title": "商品",
		"symbols": [
		  {
			"s": "CME_MINI:ES1!",
			"d": "E-Mini S&P"
		  },
		  {
			"s": "CME:E61!",
			"d": "Euro"
		  },
		  {
			"s": "COMEX:GC1!",
			"d": "Gold"
		  },
		  {
			"s": "NYMEX:CL1!",
			"d": "Crude Oil"
		  },
		  {
			"s": "NYMEX:NG1!",
			"d": "Natural Gas"
		  },
		  {
			"s": "CBOT:ZC1!",
			"d": "Corn"
		  }
		],
		"originalTitle": "Commodities"
	  },
	  {
		"title": "债券",
		"symbols": [
		  {
			"s": "CME:GE1!",
			"d": "Eurodollar"
		  },
		  {
			"s": "CBOT:ZB1!",
			"d": "T-Bond"
		  },
		  {
			"s": "CBOT:UD1!",
			"d": "Ultra T-Bond"
		  },
		  {
			"s": "EUREX:GG1!",
			"d": "Euro Bund"
		  },
		  {
			"s": "EUREX:II1!",
			"d": "Euro BTP"
		  },
		  {
			"s": "EUREX:HR1!",
			"d": "Euro BOBL"
		  }
		],
		"originalTitle": "Bonds"
	  },
	  {
		"title": "外汇",
		"symbols": [
		  {
			"s": "FX:EURUSD"
		  },
		  {
			"s": "FX:GBPUSD"
		  },
		  {
			"s": "FX:USDJPY"
		  },
		  {
			"s": "FX:USDCHF"
		  },
		  {
			"s": "FX:AUDUSD"
		  },
		  {
			"s": "FX:USDCAD"
		  }
		],
		"originalTitle": "Forex"
	  }
	]
  }`; 


class Marketoverview extends PureComponent {
	render() {
		return (
			<>
				<div className="tradingview-widget-container" id="tradingview_wrap_1" style={{background: '#ffffff'}}>
					<div className="tradingview-widget-container__widget"></div>
				</div>
				
			</>
		)
	}

	componentDidMount() {
        let result = this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js", strJson);
        this.trashablePromise = makeTrashable(result);
        this.trashablePromise.then(function(script){
            // console.log('success')
        }).catch(function(ex){
            console.log(ex)
        })
	}

	componentWillUnmount() {
    this.trashablePromise.trash()
  }

	loadPlugin = (url, pluginConfig) => {
        const promise = new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            if(script.readyState){
                script.onreadystatechange=function(){

                    if(script.readyState === "loaded" || script.readyState === "complete"){
                        script.onreadystatechange=null;
                        resolve(script);
                    }
                }

            }else{
                script.onload=function(){
                    resolve(script);
                }
            }

            script.onerror = function() {
                reject('插件加载失败')
            };
            script.innerHTML = pluginConfig;
            script.src = url;
            document.getElementById('tradingview_wrap_1').appendChild(script);
        });
        return promise
	}
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Marketoverview);