import React from 'react';

/*
 * props:
 *  name
 *  selectedType
 *  selectValue
 *  onChange  
 */

const propTypes = {

	name: React.PropTypes.string,
	selectType: React.PropTypes.string,
	selectedValue: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array

	]),
    onChange: React.PropTypes.func.isRequired

};

const defaultProps = {

	selectType: 'radio',
	onChange: () => {}

};

const childContextTypes = {

	selectGroup: React.PropTypes.object

};

export default class SelectGroup extends React.Component {

	getChildContext= ()=> {

		const { name, selectType, selectedValue, onChange } = this.props;

		return {
		
			selectGroup: {

        		name, selectType, selectedValue, onChange

      		}

		};

    }

	render () {
		
		const { name, selectType, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="yf-select-group" {...arg}>

				{ this.props.children }

			</div>

		)

	}

}

SelectGroup.propTypes = propTypes;
SelectGroup.defaultProps = defaultProps;
SelectGroup.childContextTypes = childContextTypes;