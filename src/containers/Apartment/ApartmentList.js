import React from 'react';
import {connect} from 'react-redux';
import ApartmentHeader from '../../components/ApartmentHeader/ApartmentHeader'
import ApartmentListContent from '../../components/ApartmentListContent/ApartmentListContent'
import {
    fetchApartmentsList,
    fetchCityList,
    curQueryFun,
    curCityFun,
    curTypeFun,
    curPriceFun,
} from '../../actions/apartment';
import {priceList} from '../../config/index';
import * as _ from 'lodash';

import './ApartmentList.scss';


const passedFilter = (val) => {

    let result = false;//不通过
    //不存在
    if (val === undefined) return result;
    //number||string||array
    (typeof val === 'number') && (result = true);
    val.length && (val.length !== 0) && (result = true); //涵盖数组，字符串

    return result;

};

class ApartmentList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            curState: []

        };
        this.queryHandler = this.queryHandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
        this.typeHandler = this.typeHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.searchClickHandler = this.searchClickHandler.bind(this);
    }


    componentDidMount() {

        const {apartmentList, cityList} = this.props;

        (apartmentList.dateList.length === 0 && apartmentList.recommendList && apartmentList.recommendList.length === 0) && this.delayRequestList();

        cityList.length === 0 && this.fetchCityList();

    }

    //拉取公寓列表
    fetchApartmentsList = () => {
        //公寓列表信息
        const {dispatch} = this.props;
        const query = this.filterQuery();

        dispatch(fetchApartmentsList('/newpc/apartment/list', query))

    };
    //延迟发送请求
    delayRequestList = () => {
        //公寓列表
        setTimeout(this.fetchApartmentsList.bind(this), 0)

    };

    //拉取城市列表
    fetchCityList = () => {
        //城市列表
        const {dispatch} = this.props;
        dispatch(fetchCityList('/nodeapi/cities', {}));
    };

    //过滤请求参数
    filterQuery() {

        const {curQuery, curCity, curType, curPrice} = this.props;
        const query = {};
        const {minPrice, maxPrice} = this.transformPrice(curPrice);

        passedFilter(curQuery) && (query.name = curQuery);
        passedFilter(curCity) && (query.city = curCity);
        passedFilter(curType) && (query.tags = curType);
        passedFilter(minPrice) && (query.min_price = minPrice);
        passedFilter(maxPrice) && (query.max_price = maxPrice);

        return query;

    }

    //解析价格
    transformPrice(curPrice) {

        const result = {

            minPrice: undefined,
            maxPrice: undefined

        };

        if ((curPrice !== 0) && !curPrice && curPrice === '') return result;

        const curIndex = _.findIndex(priceList, {value: curPrice});
        let minPrice = priceList[curIndex]['minPrice'];
        let maxPrice = priceList[curIndex]['maxPrice'];

        return {

            minPrice,
            maxPrice

        }

    }

    //查询值
    queryHandler = (e) => {

        const {dispatch} = this.props;
        dispatch(curQueryFun(e.target.value));

    };

    //删除数组中存在的值
    removeByValue = (ary, val) => {
        for (let i = 0; i < ary.length; i++) {
            if (ary[i] === val) {
                ary.splice(i, 1);
                break;
            }
        }
    };

    //选择城市
    cityHandler = (val) => {

        const {dispatch} = this.props;
        dispatch(curCityFun(val));
        this.delayRequestList();

        let curState = this.state.curState;

        if (val && curState.indexOf('city') === -1) {

            this.setState({
                curState: curState.concat(['city'])
            })

        } else if (!val) {

            this.removeByValue(curState, 'city');

        }

    };

    //tags选择-多选全部选完点击确定发送列表请求
    typeHandler = (val) => {

        const {dispatch} = this.props;
        let curState = this.state.curState;

        if (val.length !== 0 && curState.indexOf('type') === -1) {

            this.setState({

                curState: curState.concat(['type'])

            })

        } else if (val.length === 0) {

            this.removeByValue(curState, 'type');

        }

        dispatch(curTypeFun(val));
        // this.delayRequestList();

    };

    //价格选择
    priceHandler = (val) => {

        const {dispatch} = this.props;
        dispatch(curPriceFun(val));
        this.delayRequestList();
        let curState = this.state.curState;
        if (val && curState.indexOf('price') === -1) {

            this.setState({
                curState: curState.concat(['price'])
            })

        } else if (!val) {
            this.removeByValue(curState, 'price');
        }

    };

    //查询按钮
    searchClickHandler = () => {

        this.delayRequestList();

    };

    render() {

        // const pathList = [{ text: '月付公寓', router: '/apartment' }, { text: '公寓列表', router: null }];
        const {
            apartmentList,
            cityList,
            curQuery,
            curCity,
            curType,
            curPrice
        } = this.props;

        return (

            <div className="yf-apartment-ApartmentList">
                <ApartmentHeader
                    cityList={cityList}
                    curQuery={curQuery}
                    curCity={curCity}
                    curType={curType}
                    curPrice={curPrice}
                    queryHandler={this.queryHandler}
                    cityHandler={this.cityHandler}
                    typeHandler={this.typeHandler}
                    priceHandler={this.priceHandler}
                    searchClickHandler={this.searchClickHandler}
                    show={this.show}
                    curState={this.state.curState}
                    removeByValue={this.removeByValue}
                />
                <ApartmentListContent apartmentList={apartmentList} curQuery={curQuery} curPage={this.curPage} pageHandler={this.pageHandler}/>
            </div>

        )

    }
}
const getStateFun = (state, ownProps) => {

    return {

        apartmentList: state.apartmentList,
        curQuery: state.curQuery,
        curCity: state.curCity,
        curType: state.curType,
        curPrice: state.curPrice,
        cityList: state.cityList,

    }

};

export default connect(getStateFun)(ApartmentList)