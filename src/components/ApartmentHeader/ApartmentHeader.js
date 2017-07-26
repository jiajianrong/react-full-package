import React from 'react';

import Cities from './infoHeader/cities'
import Price from './infoHeader/price'
import Type from './infoHeader/type'
import Search from './infoHeader/search'

import './ApartmentHeader.scss';

export default class ApartmentHeader extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            openCity: false,
            openPrice: false,
            openType: false,

        };
        this.setClass = this.setClass.bind(this);
    }

    //每一个子模块的显示状态
    changeOpen=(ele)=> {
        if (ele === 'cities') {
            this.setState({
                openCity: !this.state.openCity,
                openPrice: false,
                openType: false
            }, this.show)
        } else if (ele === 'price') {
            this.setState({
                openCity: false,
                openPrice: !this.state.openPrice,
                openType: false
            }, this.show)
        } else if (ele === 'type') {
            this.setState({
                openCity: false,
                openPrice: false,
                openType: !this.state.openType
            }, this.show)
        } else {
            this.setState({
                openCity: false,
                openPrice: false,
                openType: false
            }, this.show)
        }
    };

    //选项点击显示列表,再次点击列表隐藏调用函数顺序
    show=()=> {
        let {openCity, openPrice, openType} = this.state;
        this.setClass(openCity, 'cities', 'city-lists');
        this.setClass(openPrice, 'price', 'price-lists');
        this.setClass(openType, 'type', 'type-lists');
        const curState = this.props.curState;

        curState.forEach((item, index) => {

            if (item === 'city') {

                this.changeColor('cities');

            } else if (item === 'price') {

                this.changeColor('price');

            } else if (item === 'type') {

                this.changeColor('type');

            }

        })

    };
    //选项点击显示列表,再次点击列表隐藏函数
    setClass=(state, ele1, ele2) =>{

        const showTab = document.getElementById(ele1);
        const showTabList = document.getElementById(ele2);

        if (state) {
            if (ele1 === 'type') {

                showTab.setAttribute('class', 'filter-after color-red');
                showTabList.setAttribute('class', 'type-lists show');


            } else {

                showTab.setAttribute('class', 'label-after label color-red');
                showTabList.setAttribute('class', 'select-item-lists show');

            }


        } else {

            if (ele1 === 'type') {

                showTab.setAttribute('class', 'filter-before');
                showTabList.setAttribute('class', 'type-lists');

            } else {

                showTab.setAttribute('class', 'label-before label');
                showTabList.setAttribute('class', 'select-item-lists');

            }

        }
    };

    //发送请求后如果query中有值，这该元素的字体变红色
    changeColor=(ele)=> {

        if(ele==='type'){

            document.getElementById('type').setAttribute('class', 'filter-after color-red');

        }else {

            document.getElementById(ele).setAttribute('class', 'label-before label color-red');

        }


    }

    render() {
        const {...arg} = this.props;
        return (

            <div className="ApartmentHeader">

                <div className="apartment-filter-select">
                    <Cities {...arg} changeOpen={this.changeOpen} setClass={this.setClass} show={this.show} changeColor={this.changeColor}/>
                    <Price {...arg} changeOpen={this.changeOpen} setClass={this.setClass} show={this.show} changeColor={this.changeColor}/>
                    <Type {...arg} changeOpen={this.changeOpen} setClass={this.setClass} show={this.show} changeColor={this.changeColor}/>
                </div>
                <Search {...arg}/>
            </div>

        )

    }

}
