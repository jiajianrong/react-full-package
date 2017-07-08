import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


import './Home.scss';
import { fetchRecommendList } from '../../actions/home';
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
    
    
    
    componentDidMount () {

        const { dispatch } = this.props;
        //每次返回首页自动移动到顶部
        //window.scrollTo(0, windowScrollDistance);
        //打点统计数据
        //coreTrace.send('home');
        //拉取首页banner
        //dispatch(fetchHomeBanner('/newpc/banner/list', { type: 1 }));
        //拉取推荐公寓
        dispatch(fetchRecommendList('/newpc/promotion/recommend', {type:1, count:10}));

    }
    
    
    
    render() {
        
        const { number, issue, lotteryTime, headline } = this.state;
        const { cityList, homeRecommendList, homeBanner } = this.props;
        
        
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
                
                    <HomeRecommend recommendList={homeRecommendList} />
                    
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


const getStateFun = (state, ownProps) => {

    return {

        homeRecommendList: state.homeRecommendList

    }

};


export default connect(getStateFun)(Home)