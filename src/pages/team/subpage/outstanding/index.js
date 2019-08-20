import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {  Card,  } from 'antd';
import { actionCreators } from './store';
import OrderList from '@/pages/account/subpage/exports/components/OrderList';
import {StyledOutstanding} from './style'

class Outstanding extends PureComponent {


	componentWillMount(){
		 const  { data } = this.props.teamHistory
		!data.length&&this.props.init()

	}

	render() {
		const { data } = this.props.teamHistory
		const historyProps = {
			dataSource:data,
			columns:[
				{
					title : 'Ticket',
					dataIndex:'orderNo',
					key:'orderNo',
				},
				{
					title:'Open Time',
					dataIndex:'openTime',
					key:'openTime',
				},
				{
					title:'Type',
					dataIndex:'type',
					key:'type',
				},
				{
					title:'Size',
					dataIndex:'size',
					key:'size',
				},
				{
					title:'Item',
					dataIndex:'item',
					key:'item',
				},
				{
					title:'Price',
					dataIndex:'price',
					key:'price1',
				},
				{
					title:'Close Time',
					dataIndex:'closeTime',
					key:'closeTime',
				},
				{
					title:'Price',
					dataIndex:'price',
					key:'price2',
				
				},
				{
					title:'Profit',
					dataIndex:'profit',
					key:'profit',
				}
			]
		}
		return (
			<StyledOutstanding theme={this.props.theme} >

			
				<Card
				className="history"
					bordered={false}
					title={
						<>
							<h2>历史最佳交易</h2>
							<p>Best deal in history</p>
						</>
					}
					headStyle={{
						color: '#fff',
						border: 'none'
					}}
				>
						<OrderList type="position" {...historyProps} />
				</Card>
		
		
				<Card
					bordered={false}
					title={
						<>
							<h2>擅长的交易策略名词</h2>
							<p>Good trading strategy terms</p>
						</>
					}
					className="terms"
					headStyle={{
						color: '#fff',
						border: 'none'
					}}
				>
					<ol  >
						<li>Alph_a 高稳定收益型趋势策略。其收益平稳，风险小，对抗风险能力强。</li>
						<li>Alph_b 波动率策略。即时把控行情，顺势而为。</li>
						<li>Alph_c 收割式盈利策略。随时随刻，紧咬住行情波动的脉络，多空收割利润。</li>
						<li>Alph_d 新闻数据收割机。第一时间截获新闻实时数据，通过分析数据，快速下单，且在消息结束，波动乏力时，及时出场。</li>
						<li>Alph_e 网格策略。渔网式网络行情，收割利润。</li>
					</ol>
				</Card>
				</StyledOutstanding>
		)
	}
}

const mapStateToProps = state=>({
	teamHistory : state.get('teamHistory').toJS(),
	
  theme: state.getIn(['header', 'theme'])
})
const mapDispatchToProps = dispatch => ({
  init(){
    dispatch(actionCreators.getData())
  }
})

export  default connect(mapStateToProps,mapDispatchToProps) (Outstanding) ;
