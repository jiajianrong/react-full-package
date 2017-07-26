import React from 'react';

export default class ActiveCard extends React.Component {

	componentDidMount () {

		const { data, distanceCollect } = this.props;

		if (!data.promotion_activity || !data.favourable_title) return;

		let topDistance = this.refs.activeCard.offsetTop;
		
		distanceCollect(1, topDistance)

	}

	render () {

		const { data } = this.props;

		if (!data.promotion_activity || !data.favourable_title) return null;

		return (

			<div className="yf-apartment-active-card margin-bot" ref="activeCard">

               <div className="info-card">

		           	<div className="info-cards-hd"><span>{data.favourable_title}</span><span className="icon-fire-suffix"></span></div>
		           	<div className="info-cards-cont">{data.promotion_activity}</div>
		           	<div className="info-tips">详情请电话咨询公寓房管员</div>

               </div>

            </div>

		)

	}

}