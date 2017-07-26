import React from 'react';
import './ApartmentListContent.scss';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import { apartmentTagsMap } from '../../config/index.js';

export default class ApartmentListContent extends React.Component {

	render () {

        const { apartmentList,curQuery } = this.props;

        let listContent = <div></div>;

        if ( apartmentList.dateList.length === 0 && apartmentList.recommendList.length === 0 ) {

            listContent = <div></div>

        } else if ( apartmentList.dateList.length > 0 && !apartmentList.recommendList ) {

            listContent = apartmentList.dateList.map((item, index) => {

                return <ApartmentCard key={index} data={item} apartmentTagsMap={apartmentTagsMap} />

            });

        } else if ( apartmentList.dateList.length === 0 && apartmentList.recommendList.length > 0 ) {

            listContent = apartmentList.recommendList.slice(0, 5).map((item, index) => {

                return <ApartmentCard key={index} data={item.apartment} apartmentTagsMap={apartmentTagsMap} />

            });

        }

		return (

			<div className="ApartmentListContent">

                    {

                        (apartmentList.recommendList && apartmentList.recommendList.length > 0) ? <div className="no-find-apartment">

                            <div className="text">
                                <div><span>没有找到与“</span><span className="name">{curQuery}</span><span>”相关公寓</span></div>
                                <div>您可以浏览我们为您推荐的公寓</div>
                            </div>

                            <div className="hd">推荐公寓</div>

                        </div>: null

                    }

                    <div className="content">

                        <ul className="content-lists">

                            { listContent }

                        </ul>

                    </div>

                </div>


		)

	}

}