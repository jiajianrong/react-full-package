import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { Slider, Carousel } from 'lm-ui-react';


import './Home.scss';
import { fetchRecommendList } from '../../actions/home';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeRecommend from '../../components/HomeRecommend/HomeRecommend';


class Home extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
        };
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
        dispatch(fetchRecommendList('/newpc/promotion/recommend', {type:1, count:4}));

    }
    
    
    
    render() {
        
        const { number, issue, lotteryTime, headline } = this.state;
        const { cityList, homeRecommendList, homeBanner } = this.props;
        
        
        return (
            <div className="Home">
                
                
                <section className="section-banner">
                    <HomeBanner />
                </section>
                
                
                
                <section className="section-actions">
                    <Link to="/qa" className="action-item">
                        <div className="item-apply-yuefu">
                            <span>申请月付</span>
                        </div>
                    </Link>
                    
                    <Link to="/qa" className="action-item">
                        <div className="item-my-yuefu">
                            <span>我的月付</span>
                        </div>
                    </Link>
                </section>
                
                
                
                <section className="section-advantage">
                    <Link to="/about" className="section-header">
                        月付优势<i className="header-symbol-angle-right">查看更多</i>
                    </Link>
                    
                    <ul className="advantage-items">
                        <li><span className="online-apply">线上申请</span></li>
                        <li><span className="immediately-approve">秒级审批</span></li>
                        <li><span className="monthly-pay">月付房租</span></li>
                    </ul>
                </section>
                
                
                
                <section className="section-recommend">
                    <Link to="/apartment" className="section-header">
                        推荐公寓<i className="header-symbol-angle-right">查看更多</i>
                    </Link>
                    
                    <HomeRecommend recommendList={homeRecommendList} />
                </section>
                
                
                
                <section className="section-cooperate">
                    <Link to="/cooperate" className="center-href"></Link>
                </section>
                
                
                
                <div className="qa-outer-wrap">
                    <Link to="/qa" className="qa-href">客服帮助</Link>
                </div>
                
                
                
            </div>
        );
        // end return
    }
}


/**
 * react-redux的connect，通过 connect(select)(App) 连接 store 和 App 容器组件
 * mapStateToProps方法返回的对象，以及附带的dispatch方法会 以props的形式传递到container
 * 即，在container中可以
 * const { dispatch, homeRecommendList } = this.props;
 * 
 */
const mapStateToProps = (state/*store.getState*/, ownProps) => {

    return {
        homeRecommendList: state.homeRecommendList
    }

};



export default connect(mapStateToProps)(Home)