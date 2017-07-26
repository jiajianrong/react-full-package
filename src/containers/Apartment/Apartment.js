import React from 'react';
import {connect} from 'react-redux';

import './Apartment.scss';

class Apartment extends React.Component {

    render() {
        
        return (
            <div className="Apartment">
                
                {this.props.children}
                
            </div>
        )
    }
}

export default connect()(Apartment)