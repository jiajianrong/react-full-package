import React from 'react';
import _ from 'lodash';

const propTypes = {

    text: React.PropTypes.oneOfType([

        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool

    ]),
    value: React.PropTypes.oneOfType([

        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool

    ]),

    uniqueId: React.PropTypes.oneOfType([

        React.PropTypes.string,
        React.PropTypes.number

    ])

};

const contextTypes = {

    selectGroup: React.PropTypes.object

};

export default class SelectItem extends React.Component {

    changeHandler = (e) => {

        const {value} = this.props;
        const {selectType, selectedValue, onChange} = this.context.selectGroup;
        let newValue;

        if (selectType === 'checkbox') {
            //多选值处理
            //判断当前选中的选项列表中是否存在此时点击的选项
            let index = selectedValue.indexOf(value);

            if (index !== -1) {
                //存在

                // 复制
                let copyX = [];
                _.extend(copyX, selectedValue);

                copyX.splice(index, 1);
                newValue = copyX;

            } else {
                //不存在
                newValue = selectedValue.concat([value]);

            }

        } else if (selectType === 'radio') {
            //单选值处理
            if (value === selectedValue) return;
            let hasSelect = selectedValue === value;
            if (!hasSelect) newValue = value;

        }
        //将新值输出
        onChange(newValue || '');

    };

    initOptional = () => {
        //初始化input属性
        const {value} = this.props;
        const {name, selectType, selectedValue} = this.context.selectGroup;
        const optional = {};

        /*
         * checked，onChange，className，name
         */
        selectType === 'checkbox' ? (optional.checked = selectedValue.indexOf(value) !== -1) : (optional.checked = (selectedValue === value));
        optional.onChange = this.changeHandler.bind(this);
        optional.type = (selectType === 'checkbox') ? 'checkbox' : 'radio';
        optional.className = 'yf-select-item';
        optional.name = name && name;

        return optional;

    };

    getClass = (optional) => {

        const {selectType} = this.context.selectGroup;
        let isChecked = optional.checked;

        if (selectType === 'radio' && isChecked) {

            return 'yf-select-item-btn-checked'

        } else if (selectType === 'radio' && !isChecked) {

            return 'yf-select-item-btn'

        } else if (selectType === 'checkbox' && isChecked) {

            return 'yf-checkbox-item-btn-checked'

        } else if (selectType === 'checkbox' && !isChecked) {

            return 'yf-checkbox-item-btn'

        }


    };

    render() {

        const {text, uniqueId, ...arg} = this.props;
        const optional = this.initOptional();

        return (

            <div className="yf-select-item-wrapper">

                <input
                    id={uniqueId}
                    {...optional}
                    {...arg}/>

                <label htmlFor={uniqueId}
                       className={this.getClass(optional)}
                       {...arg}>
                    { text }
                </label>

            </div>

        )

    }

}

SelectItem.propTypes = propTypes;
SelectItem.contextTypes = contextTypes;