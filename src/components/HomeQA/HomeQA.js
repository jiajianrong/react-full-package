import React from 'react';
import { Link } from 'react-router';
import './HomeQA.scss';



export default class HomeQA extends React.Component {

	render () {

        const { title } = this.props;

		return (
            <div className="HomeQA">
            
                <Link to="/qa" className="title">{title}</Link>
                
    			<div className="HomeQA">
    			    home_qa_list
                </div>

            </div>
		)

	}

}


