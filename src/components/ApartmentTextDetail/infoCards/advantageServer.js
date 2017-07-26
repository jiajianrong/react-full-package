import React from 'react';

export default class AdvantageServer extends React.Component {

	componentDidMount () {

		const { data, distanceCollect } = this.props;

		if (!data.advantage) return;

		let topDistance = this.refs.advantageServer.offsetTop;
		
		distanceCollect(3, topDistance)

	}


	render () {

		const { data } = this.props;

		if (!data.advantage) return null;

		return (

			<div className="yf-apartment-advantage-server margin-bot" ref="advantageServer">

               <div className="info-card">

		           	<div className="info-cards-hd">优势与服务</div>
		           	<div className="info-cards-cont">

		           		{ data.advantage }

		           	</div>

               </div>

            </div>

		)

	}

}