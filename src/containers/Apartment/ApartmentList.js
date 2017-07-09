import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './ApartmentList.scss';



class ApartmentList extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    
    
    render() {
        
        return (
            <div className="ApartmentList">
                
                Department_recommend_list
                
            </div>
        )
    }
}

export default connect()(ApartmentList)