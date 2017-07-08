import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './Apartment.scss';



class Apartment extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            number: {
                red: '',
                blue: ''
            },
            issue: '',
            lotteryTime: '',
            headline: [],
            
            isNewShow: false
        };
        
        this.data = {
            
        }
    }
    
    
    
    componentWillMount() {
        // this.props.dispatch(isShowFooter(true, 0));
        
        /*serverGet(
            API_CONFIG.mainHeadLine,
            '',
            (data) => {
                this.setState({headline: data.ret_result})
            }
        )*/
    }
    
    
    
    render() {
        
        const { number, issue, lotteryTime, headline } = this.state;
        
        
        return (
            <div className="Apartment">
                
                Apartment_recommend_homepage
                
                <br />
                
                {this.props.children}
                
                
            </div>
        )
    }
}

export default connect()(Apartment)