import React from 'react';

export default class BriefIntroduction extends React.Component {

	componentDidMount () {

		const { data, distanceCollect } = this.props;

		if (!data.introduction) return;

		let topDistance = this.refs.briefIntroduction.offsetTop;
		
		distanceCollect(5, topDistance)

	}

	render () {

		const { data } = this.props;

		if (!data.introduction) return null;

		return (

			<div className="yf-apartment-brief-introduction margin-bot" ref="briefIntroduction">

               <div className="info-card">

		           	<div className="info-cards-hd">公寓介绍</div>
		           	<div className="info-cards-cont">

		           		{ data.introduction }

		           	</div>

               </div>

            </div>

		)

	}

}