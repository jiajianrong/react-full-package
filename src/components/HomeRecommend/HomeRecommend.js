import React from 'react';
import { Link } from 'react-router';
import './HomeRecommend.scss';

const propTypes = {

    recommendList: React.PropTypes.array,

};

const defaultProps = {

    recommendList: []

};



export default class HomeRecommend extends React.Component {

	render () {

        const { recommendList } = this.props;

		return (

			<div className="HomeRecommend">

                    aaaaa

                    <ul className="recommend-list">

                        {

                            recommendList.slice(0, 10).map((item, index) => {

                                return <Link to="/apartment/detail" query={{ id: item.apartment.id }} key={`recommendCard${index}`}>

                                    <span className="logo"></span>

                                    <span className="name">{item.apartment.name}</span>

                                    <div className="title">

                                        {

                                            item.apartment.tags && item.apartment.tags.slice(0, 3).map((items, index) => {

                                                return <span className="title-item" key={`recommendCarditem${index}`}>{ items }</span>

                                            })

                                        }

                                    </div>

                                    <div className="introduce">{ item.apartment.short_introduction }</div>

                                    <div className="action">{ item.apartment.promotion_activity }</div>

                                </Link>

                            })

                        }

                    </ul>

            </div>

		)

	}

}

HomeRecommend.propTypes = propTypes;
HomeRecommend.defaultProps = defaultProps;
