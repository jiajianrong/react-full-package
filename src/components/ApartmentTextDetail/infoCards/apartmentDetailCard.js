import React from 'react';

export default class ApartmentDetailCard extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            show: false
        }

    }

    componentDidMount() {

        this.delayRequestList();

    }

    //判断id是否属于首页显示‘首页推荐标题’
    delayRequestList() {

        const id=window.location.href.replace(/.*\?id=(\w+)/gi,($0,$1)=>{ return $1});
        let homeIdList=this.props.homeRecommendList&&this.props.homeRecommendList.map((item,index)=>{

                return item.apartment.id;

            });

        if(id && this.props.homeRecommendList&&homeIdList.indexOf(id)!==-1 ){

            this.setState({

                show:true

            })
        }

    }

    render() {

        const {data, apartmentTagsMap} = this.props;

        return (

            <div className="yf-apartment-card margin-bot">

                <div className="info-card">

                    <div className="info-cards-hd">
                        <span>{data.name}</span>
                        {this.state.show ? <span className="active">首页推荐</span> : null}
                        {/*{1? <span className="active">首页推荐</span> : null}*/}
                    </div>
                    <div className="des">
                        <div>{data.short_introduction}</div>
                        <div>{data.phone}</div>
                    </div>
                    <div className="server-list">

                        {

                            data.tags.map((item, index) => {

                                return <span className="item" key={`tags${index}`}>{ apartmentTagsMap[item] }</span>

                            })

                        }

                    </div>
                    <div className="price">
                        <span>{data.min_price}-{data.max_price}</span>
                        <span>元/月</span>
                    </div>

                </div>


            </div>

        )

    }

}
