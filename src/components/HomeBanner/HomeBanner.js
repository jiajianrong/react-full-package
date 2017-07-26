import React from 'react';
import { Link } from 'react-router';
import { Slider, Carousel } from 'lm-ui-react';

import './HomeBanner.scss';



export default class HomeBanner extends React.Component {

	render () {

        const { recommendList, title } = this.props;

		return (
            <div className="HomeBanner">
                
    			<Carousel height={143}>
                    <div className="banner banner-1"></div>
                    <div className="banner banner-2"></div>
                </Carousel>

            </div>
		)

	}

}

