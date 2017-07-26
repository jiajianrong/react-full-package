import React from 'react';
import './Apply.scss';


export default class Apply extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    componentDidMount() {
        //console.log('incept: apply need login first');
    }
    
    
    render() {
        
        console.log('apply');
        
        
        return (
            <div className="Apply">
               {this.props.children}
            </div>
        );
        // end return
    }
}





