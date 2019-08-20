import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import makeTrashable from 'trashable';

const strJson=`{
	"exchange": "US",
	"showChart": true,
	"locale": "zh_CN",
	"width": "100%",
	"height": "100%",
	"largeChartUrl": "",
	"plotLineColorGrowing": "rgba(60, 188, 152, 1)",
	"plotLineColorFalling": "rgba(255, 74, 104, 1)",
	"gridLineColor": "rgba(242, 243, 245, 1)",
	"scaleFontColor": "rgba(214, 216, 224, 1)",
	"belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
	"belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
	"symbolActiveColor": "rgba(242, 250, 254, 1)"
  }`; 


class Stockmarket extends PureComponent {
	render() {
		return (
			<>
				<div className="tradingview-widget-container" id="tradingview_wrap_2" style={{background: '#ffffff'}}>
					<div className="tradingview-widget-container__widget"></div>
				</div>
				
			</>
		)
	}

	componentDidMount() {
        let result = this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js", strJson);
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
            document.getElementById('tradingview_wrap_2').appendChild(script);
        });
        return promise
	}
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Stockmarket);