import React from 'react';
import {connect} from 'react-redux';
import { fetchPost } from '../../api/fetch';
import {fetchRecommendList} from '../../actions/home';
import {fetchCityList} from '../../actions/apartment';

import ApartmentTextDetail from '../../components/ApartmentTextDetail/ApartmentTextDetail';
import ApartmentBanner from '../../components/ApartmentBanner/ApartmentBanner';
import ApartmentButton from '../../components/ApartmentButton/ApartmentButton';
import './ApartmentDetail.scss';

class ApartmentDetail extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            data: null,

        }

    }

    componentDidMount () {

        const { cityList } = this.props;

        const { id } = this.props.location.query;

        id && this.fetchDetailInfo(id);

        cityList.length === 0 && this.fetchCityList();


        this.filterApartment();

    }
    //根据_id异步拉取详细信息
    fetchDetailInfo (id) {

        fetchPost('/newpc/apartment/detail', { apartmentId: id }, (data) => {

            this.setState({ data: data.apartmentMap });

        });

    }

    //拉取城市列表
    fetchCityList () {
        //城市列表
        const { dispatch } = this.props;

        dispatch(fetchCityList('/nodeapi/cities', {}));

    }

    //首页公寓列表信息
    filterApartment() {

        const {dispatch} = this.props;
        dispatch(fetchRecommendList('/newpc/promotion/recommend', {type: 1}));

    }

    render() {
        const {cityList,homeRecommendList} = this.props;

        return (
            <div className="yf-apartment-detail">


                {this.state.data && <ApartmentBanner imgLists={this.state.data.images}/>}


                { this.state.data && <ApartmentTextDetail data={this.state.data} cityList={cityList} homeRecommendList={homeRecommendList}/> }

                <ApartmentButton/>

            </div>
        )
    }
}

const getStateFun = (state, ownProps) => {

    return {

        cityList: state.cityList,
        homeRecommendList: state.homeRecommendList

    }

};

export default connect(getStateFun)(ApartmentDetail)