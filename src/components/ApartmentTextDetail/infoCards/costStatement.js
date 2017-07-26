import React from 'react';

export default class CostStatement extends React.Component {

	componentDidMount () {

		const { data, distanceCollect } = this.props;

		if (!data.price_description) return;

		let topDistance = this.refs.costStatement.offsetTop;
		
		distanceCollect(4, topDistance)

	}

	render () {

		const { data } = this.props;

		if (!data.price_description) return null;

		return (

			<div className="yf-apartment-cost-statement margin-bot" ref="costStatement">

               <div className="info-card">

		           	<div className="info-cards-hd">费用说明</div>
		           	<div className="info-cards-cont">

		           		{ data.price_description }

		           	</div>

               </div>

            </div>

		)

	}

}