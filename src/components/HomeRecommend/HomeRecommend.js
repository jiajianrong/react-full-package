import React from 'react';
import { Link } from 'react-router';
import { Slider } from 'lm-ui-react';

import './HomeRecommend.scss';



export default class HomeRecommend extends React.Component {

	render () {

        const { recommendList, title } = this.props;

		return (
            <div className="HomeRecommend">
                
    			<Slider>
                        {
        
                            recommendList.slice(0, 6).map((item, index) => {
        
                                return (
                                    
                                    <Link to={{ pathname:'/apartment/detail', query:{id: item.apartment.id} }} 
                                          key={`HomeRecommend${index}`} 
                                          className="apartment-item" >
                                        
                                        <span className="logo" style={{ backgroundImage: `url(${item.apartment.logo})` }} ></span>
                                        <span className="name">{item.apartment.name}</span>
                                        <span className="introduce">{ item.apartment.short_introduction }</span>    
                                        
        
                                    </Link>
                                );
                                // end return;
                                
                            })
        
                        }
                </Slider>

            </div>
		)

	}

}

