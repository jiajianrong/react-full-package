import React from 'react';

export default class ServerCity extends React.Component {

    componentDidMount() {

        const {data, cityList} = this.props;

        if (!cityList || (!data.position && !data.district)) return;

    }

    render() {

        const {data, cityList} = this.props;
        if (!cityList || (!data.position && !data.district)) return null;
        const cityNames=data&&data.cities.map((item,index)=>{
                let curCity = item.toString();
                const citiesList=cityList.map((item, index)=>{
                    if (item.code.toString() === curCity) {
                        return item.name;
                    }
                    return false;
                });
                return (<span key={`citiesList${index}`}>{citiesList}</span>);
            });
        return (

            <div className="yf-apartment-server-city margin-bot" ref="serverCity">

                <div className="info-card">

                    <div className="info-cards-hd"><span>服务区域：</span>
                        {cityNames}
                    </div>
                    <div className="info-cards-cont">

                        <div className="hot-position">

                            <div className="hd">热门区域</div>

                            <div className="cont">{data.position}</div>

                        </div>

                        <div className="hot-district">

                            <div className="hd">热门小区</div>

                            <div className="cont">{data.district}</div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}