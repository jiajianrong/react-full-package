/**
 * Created by 58 on 2017/7/21.
 */
import React from 'react';
import {SelectGroup, SelectItem} from '../../../compoments_common/Select';
import {apartmentTags} from '../../../config/index';

const styleSheet = {

    selectGroup: {

        overflow: `hidden`

    },
    selectCheck: {

        fontSize: `14px`,

    }

};
export default class Type extends React.Component{
    constructor(props) {

        super(props);

        this.typeHandler=this.props.typeHandler.bind(this);
        this.setClass=this.props.setClass.bind(this);
        this.show=this.props.show.bind(this);
        this.changeColor=this.props.changeColor.bind(this);
        this.removeByValue=this.props.removeByValue.bind(this);
        this.searchClickHandler = this.props.searchClickHandler.bind(this);

    }

    //tags选项--重置
    cancelType=()=> {

        this.props.typeHandler([]);

    };

    //tags选项--确定
    sureType=()=> {
        const {
            curType,
        } = this.props;
        this.props.typeHandler(curType);
        this.props.changeOpen();
        this.props.searchClickHandler();

    };

    render(){
        const {
            curType,
            typeHandler,
            changeOpen
        } = this.props;
        const width = window.screen.width;
        const height = window.screen.height;
        return(
            <div className="select-item lm-ui-sort">

                <div className="filter">
                    <span  className="filter-before" id="type"  onClick={changeOpen.bind(this,'type')}>公寓特色</span>
                </div>

                <div className="type-lists" style={{height: `${height}px`,marginTop:'14px'}}
                     id="type-lists">

                    <SelectGroup
                        selectType={'checkbox'}
                        selectedValue={curType}
                        style={styleSheet.selectGroup}
                        onChange={typeHandler}>

                        {

                            apartmentTags.map((item, index) => {

                                return <SelectItem
                                    key={index}
                                    text={item.text}
                                    value={item.value}
                                    uniqueId={`type${item.value}`}
                                    style={styleSheet.selectCheck}
                                />
                            })

                        }

                    </SelectGroup>
                    <div className="btn-group">
                        <div className='box' style={{width: `${width * 0.5}px`}}>
                            <input type="button" value="重置" className="cancel"
                                   onClick={this.cancelType.bind(this)}/>
                        </div>
                        <div className="box" style={{width: `${width * 0.5}px`}}>
                            <input type="button" value="确定" className="sure"
                                   onClick={this.sureType.bind(this)}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}