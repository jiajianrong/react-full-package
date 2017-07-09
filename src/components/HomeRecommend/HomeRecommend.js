import React from 'react';
import { Link } from 'react-router';
import './HomeRecommend.scss';



export default class HomeRecommend extends React.Component {

	render () {

        const { recommendList, title } = this.props;

		return (
            <div className="HomeRecommend">
            
                <div className="title">{title}</div>
                
    			<div className="outer-wrap">
        			<div className="inner-wrap">
                        {
        
                            recommendList.slice(0, 6).map((item, index) => {
        
                                return (
                                    
                                    <Link to={{ pathname:'/apartment/detail', query:{id: item.apartment.id} }} 
                                          key={`HomeRecommend${index}`} 
                                          className="every-item" >
        
                                        <span className="logo"></span>
        
                                        <span className="name">{item.apartment.name}</span>
        
                                        <div className="introduce">{ item.apartment.short_introduction }</div>
        
                                    </Link>
                                );
                                // end return;
                                
                            })
        
                        }
                    </div>
                </div>

            </div>
		)

	}

}

