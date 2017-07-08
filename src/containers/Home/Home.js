import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './Home.scss';
import HomeRecommend from '../../components/HomeRecommend/HomeRecommend';


class Home extends React.Component {
    
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
            <div className="Home">
                
                <div className="Home-header">
                    58月付
                </div>
                
                <div className="Home-banner">
                    房租月付,享美好生活
                </div>
                
                <div className="Home-action">
                    <Link to="/apply">
                        我要租房
                    </Link>
                    
                    &nbsp;
                    
                    <Link to="/apartment">
                        我要租房
                    </Link>
                </div>
                
                <div className="Home-recommend">
                
                    <HomeRecommend recommendList={[]} />
                    
                    <Link to="/apartment/detail">
                        推荐1
                    </Link>
                    
                    &nbsp;
                    
                    <Link to="/apartment/detail">
                        推荐2
                    </Link>
                    
                    &nbsp;
                    
                    <Link to="/apartment/detail">
                        推荐3
                    </Link>
                </div>
                
                <div className="Home-qa">
                    申请月付,我要租房
                </div>
                
            </div>
        )
    }
}

export default connect()(Home)