/**
 * Created by 58 on 2017/7/13.
 */
import React from 'react';
import { apartmentTagsMap } from '../../config/index.js';
import ActiveCard from './infoCards/activeCard';
import ServerCity from './infoCards/serverCity';
import ApartmentDetailCard from './infoCards/apartmentDetailCard';
import CostStatement from './infoCards/costStatement';
import AdvantageServer from './infoCards/advantageServer';
import BriefIntroduction from './infoCards/briefIntroduction';

import './ApartmentTextDetail.scss'


export default class ApartmentTextDetail extends React.Component{

    render(){

        const {data,cityList,homeRecommendList} = this.props;

        return(
            <div className="ApartmentTextDetail">

                    <ApartmentDetailCard data={data} apartmentTagsMap={apartmentTagsMap} homeRecommendList={homeRecommendList}/>
                    <ActiveCard data={data}/>
                    <ServerCity data={data} cityList={cityList}/>
                    <AdvantageServer data={data}/>
                    <CostStatement data={data}/>
                    <BriefIntroduction data={data}/>

            </div>
        )
    }
}