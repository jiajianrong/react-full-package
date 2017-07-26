/**
 * Created by 58 on 2017/7/21.
 */
import React from 'react';
import {SelectGroup, SelectItem} from '../../../compoments_common/Select';
import {priceList} from '../../../config/index';
const styleSheet = {

    selectGroup: {

        overflow: `hidden`

    },
    selectCheck: {

        fontSize: `14px`,

    }

};
export default class Price extends React.Component{

    constructor(props) {

        super(props);
        this.setClass=this.props.setClass.bind(this);
        this.show=this.props.show.bind(this);
        this.changeColor=this.props.changeColor.bind(this);
        this.removeByValue=this.props.removeByValue.bind(this);

    }
    render(){
        const {
            curPrice,
            priceHandler,
            changeOpen
        } = this.props;

        const height = window.screen.height;

        return(
            <div className="select-item " >

                <div className="label-before label" id="price"
                     onClick={changeOpen.bind(this,'price')}>价格
                </div>

                <div className="select-item-lists" id="price-lists">

                    <div className="bg"></div>

                    <SelectGroup
                        selectedValue={curPrice}
                        style={styleSheet.selectGroup}
                        onChange={priceHandler}>
                        {

                            priceList.map((item, index) => {

                                return <SelectItem
                                    key={index}
                                    text={item.text}
                                    value={item.value}
                                    uniqueId={`price${index}`}
                                    style={styleSheet.selectCheck}
                                    onClick={changeOpen.bind(this)}
                                />

                            })

                        }

                    </SelectGroup>

                </div>


            </div>

        )}


}