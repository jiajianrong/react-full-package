/**
 * Created by 58 on 2017/7/13.
 */
import React from 'react';
import Carousel from '../../compoments_common/Carousel';
import './ApartmentBanner.scss'

export default class ApartmentBanner extends React.Component {

    render(){

        const height=document.body.clientWidth*0.66;
        const width=document.body.clientWidth;
        const imgListDiv=this.props.imgLists.map((item,index)=>{
            return<div key={`imgList${index}`} style={{'background':`url(${item}) no-repeat`,
                'height':`${height}px`,'backgroundSize':'cover'}}></div>
        });

        return(

            <div className="ApartmentBanner" style={{height:height}}>

                <Carousel
                    width={width}
                    height={height}
                    speed={3}
                    easing={'easeOutCirc'}
                    autoplay= {false}
                    autoplayInterval={8000}
                    arrow={false}
                    dots={true}
                    children={imgListDiv}
            />

            </div>

        )

    }

}