import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './Apartment.scss';



class Apartment extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    
    render() {
        
        return (
            <div className="Apartment">
                
                {this.props.children}
                
            </div>
        )
    }
}

export default connect()(Apartment)