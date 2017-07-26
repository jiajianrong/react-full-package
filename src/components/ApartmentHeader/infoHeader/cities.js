/**
 * Created by 58 on 2017/7/21.
 */
import React from 'react';
import {SelectGroup, SelectItem} from '../../../compoments_common/Select';
const styleSheet = {

    selectGroup: {

        overflow: `hidden`

    },
    selectCheck: {

        fontSize: `14px`,

    }

};
export default class Cities extends React.Component{

    constructor(props) {

        super(props);

        this.setClass=this.props.setClass.bind(this);
        this.show=this.props.show.bind(this);
        this.changeColor=this.props.changeColor.bind(this);
        this.removeByValue=this.props.removeByValue.bind(this);

    }

    render(){
        const {
            cityList,
            curCity,
            cityHandler,
            changeOpen
        } = this.props;

        return(<div className="select-item" id="cities-parent">

            <div className="label-before label" id="cities"
                 onClick={changeOpen.bind(this,'cities')}>城市
            </div>

            <div className="select-item-lists" id="city-lists">

                <div className="bg"></div>

                <SelectGroup
                    selectedValue={curCity}
                    style={styleSheet.selectGroup}
                    onChange={cityHandler}>

                    <SelectItem
                        key={0}
                        text={'不限'}
                        value={''}
                        uniqueId={`city`}
                        style={styleSheet.selectCheck}
                        onClick={changeOpen.bind(this)}
                    />
                    {

                        cityList.map((item, index) => {

                            return <SelectItem
                                key={index + 1}
                                text={item.name}
                                value={item.code}
                                uniqueId={`city${item.code}`}
                                style={styleSheet.selectCheck}
                                onClick={changeOpen.bind(this)}
                            />

                        })

                    }

                </SelectGroup>

            </div>

        </div>)
    }
}