import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './ApartmentDetail.scss';



class ApartmentDetail extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    
    
    render() {
        
        return (
            <div className="ApartmentDetail">
                
                Apartment_recommend_detail_1,2,3
                
            </div>
        )
    }
}

export default connect()(ApartmentDetail)