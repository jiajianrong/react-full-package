import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './ApartmentDetail.scss';



class ApartmentDetail extends React.Component {
    
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
            <div className="ApartmentDetail">
                
                Apartment_recommend_detail_1,2,3
                
            </div>
        )
    }
}

export default connect()(ApartmentDetail)