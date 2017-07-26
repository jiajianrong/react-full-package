import React from 'react';
import { Link } from 'react-router';
import './ApartmentCard.scss';

export default class ApartmentCard extends React.Component {

    render () {

        const { data, apartmentTagsMap } = this.props;

        const imgStyle = {

            backgroundImage: `url(${data.logo})`

        };

        return (

            <div className="ApartmentCard clear" >

                <Link to={`/apartment/detail?id=${data._id}`} className="apartment-info-card">

                    <div className="card-content">

                        <div className="card-info">

                            <div className="card-img" style={imgStyle}></div>

                            <div className="card-detail">

                                <div className="name">{data.name}</div>
                                <div className="des">{data.short_introduction}</div>

                                <div className="server-list">

                                    {

                                        data.tags.map((item, index) => {

                                            return <div className="item" key={`tags${index}`}>{ apartmentTagsMap[item] }</div>

                                        }).splice(0,2)

                                    }

                                </div>

                            </div>

                        </div>
                        <div className="arrow"></div>


                    </div>

                    {

                        (data.favourable_title) ? <div className="card-active">

                            <div className="fire"></div>

                            { data.favourable_title}

                        </div>: <div className="clear"></div>

                    }

                </Link>

            </div>

        )

    }

}