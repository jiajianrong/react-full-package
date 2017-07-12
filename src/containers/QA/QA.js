import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import QAItem from '../../components/QAItem/QAItem.js';

import './QA.scss';


class QA extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.data = {
            tabList: ['常见问题', '申请', '审核', '还款', '退租', '其他'],
            qaMap: {
                '常见问题': [
                    {
                        title: '01、退租不住了，如何解除租房借款合同？',
                        text: ['1、租客向公寓方发起退租申请', '2、公寓方需通过"后台管理系统"为租客办理退租','3、公寓处理完成后，58月付系统会自动发给您解除合同短信通知']
                    }, {
                        title: '02、关于退租违约金？',
                        text: ['1、租客办理退租后，58月付向公寓收取违约金，但不向租客收取违约金', '2、租客办理退租后，公寓方是否收取违约金等其他费用由租客和公寓方按照签订的租房合同决定，58月付不便干预']
                    }, {
                        title: '03、关于主动交租和房租代扣？',
                        text: ['方式1：','系统代扣，您只需将房租存入您的交租银行卡，58月付会在交租日前一天自动进行代扣，代扣时间为每日10点、22点','代扣成功或者失败都会短信通知您','交租日前7天还会以短信方式提醒您保持银行卡余额充足，以便成功代扣房租款，避免逾期。','方式2：','主动交房租，您只需在交租日之前进入“58月付”微信公众号点击“交房租”，使用借记卡进行交租即可']
                    }, {
                        title: '04、关于租房服务费？',
                        text: ['58月付暂不收取租客任何服务费用','58月付向公寓方收取服务费，公寓方是否收取服务费由租客租房前和公寓协商或依据租房合同而定，58月付不便干预']
                    }, {
                        title: '05、如何更改手机号？',
                        text: ['发送邮件到wangjin09@58.com','邮件标题：【**公寓租客***更换申请手机号】','邮件内容：租客***，因为***原因，将原来申请手机号***修改为****','邮件发送后，工作人员会及时处理']
                    }, {
                        title: '06、如何更换银行卡？',
                        text: ['1.租客通过微信公众号58月付，进入“个人中心”','2.点击“修改银行卡”，进入修改银行卡页面，重新绑定本人的其他银行卡']
                    }
                ],
                '申请': [
                    {
                        title: '01、58月付是什么？',
                        text: ['“58月付”是58同城推出的按月付房租的金融服务。', '通常租房需要季付、半年或年付，有了58月付，您只需凑够首月的房租及押金，剩余的房租将由58月付一次性付给公寓，您按月还款给58月付即可。']
                    }, {
                        title: '02、58月付的申请流程？',
                        text: ['（1）获得公寓房管员推荐', '（2）填写个人和租房信息', '（3）系统1秒审核，人工1-2个工作日内电话核对信息','（4）2个工作日内放款至公寓账户']
                    }, {
                        title: '03、58月付的申请条件？',
                        text: ['（1）18 -45周岁','（2）须是自己申请，不能别人代为申请','（3）须是58月付合作公寓的真实租客，合作公寓的工作人员不支持办理','（4）外国国籍人士不支持办理','（5）申请时填写的手机号必须为本人常用手机号','（6）每月租金不超过5500元']
                    }, {
                        title: '04、申请58月付，需要提交的资料？',
                        text: ['（1）本人的身份证', '（2）还款的银行卡信息']
                    }, {
                        title: '05、需要再次使用58月付交房租？',
                        text: ['租客还清最后一期账单，联系房管员办理即可']
                    }, {
                        title: '06、58月付费用如何收取？',
                        text: ['58月付是0息0手续费，您可以免费享受按月付房租的租住服务']
                    }
                ],
                '审核': [
                    {
                        title: '01、58月付的审核时间？',
                        text: ['订单提交后，58月付会在1到2个工作日内完成电话审核，请随时保持电话畅通']
                    }, {
                        title: '02、审核失败的原因？',
                        text: ['系统审核失败原因：', '（1）租客不是年满18-45周岁的中国大陆公民', '（2）租客命中某些信用黑名单，有不良的征信记录，有犯罪记录以及相关的风控红线等','人工审核失败原因： （主要是人工确认时遇到的问题）','（1）非租客本人联系方式','（2）系统与合同租金金额不符','（3）租客工作信息填写有误','（4）借款期限与租赁期限不符','（5）租客本人手机因为特殊原因不能办理(兼容性,卡顿,闪退等)','（6）公寓内部员工不得申请','（7）申请人非租客本人','（8）租客工作单位的业务涉及地产中介或者放贷业务均不得申请']
                    }, {
                        title: '03、58月付的放款时间？',
                        text: ['订单提交后，58月付一般在1个工作日内完成审核，审核之后1个工作日内完成放款']
                    }
                ],
                '还款': [
                    {
                        title: '01、如何更改手机号？',
                        text: ['发送邮件到wangjin09@58.com', '邮件标题：【**公寓租客***更换申请手机号】','邮件内容：租客***，因为***原因，将原来申请手机号***修改为****','邮件发送后，工作人员会及时处理']
                    }, {
                        title: '02、如何更换银行卡？',
                        text: [ '（1）租客登录58月付，进入“个人中心”', '（2）点击“修改银行卡”，进入修改银行卡页面，重新绑定本人的其他银行卡']
                    }, {
                        title: '03、如何确定还款日期？',
                        text: ['1、还款日期选择 ','首次还款日是租客首次给58月付还款的时间，还款日期由租客跟公寓房管员共同协商选定','2、还款日期更改 ','审核成功之后的订单，还款日期无法更改；未审核成功订单，租客需与房管员协商选定还款日期，由房管员告知58月付工作人员更改']
                    }, {
                        title: '04、逾期还款会影响个人信用吗？',
                        text: ['建议租客尽量不要逾期，逾期时间太久会影响租客的个人央行征信，也可能会对其未来买房、车贷款有不良影响；可关注手机短信提醒及个人中心账单，按时还款']
                    }, {
                        title: '05、逾期还款，产生的违约金怎么计算？',
                        text: ['租客逾期3天以内不会收取滞纳金，逾期3天以上每天收取月租金的万分之五的滞纳金，逾期超过6天会强制清退']
                    }, {
                        title: '06、58月付系统代扣房租的时间？',
                        text: ['租客绑定的银行卡内有充足的钱，58月付即可按时代扣，代扣时间每日10点、22点']
                    }, {
                        title: '07、58月付如何主动还款？',
                        text: ['1.租客进入58月付微信公众号（yuefu58tc）', '2.点击“交房租”按钮进行支付']
                    }
                ],
                '退租': [
                    {
                        title: '01、退租不住了，如何解除租房借款合同？',
                        text: ['1、租客向公寓方发起退租申请', '2、公寓方通过"后台管理系统"为租客办理退租','3、退租完成后，租客即与58月付解除合同']
                    }, {
                        title: '02、关于退租违约金？',
                        text: ['1、租客办理退租后，58月付向公寓收取违约金，但不向租客收取违约金', '2、租客办理退租后，公寓方是否收取违约金等其他费用由租客和公寓方按照签订的租房合同决定，58月付不 便干预']
                    }, {
                        title: '03、关于退租的押金？',
                        text: ['租客将押金付给了公寓方，在租客办理退租后，公寓方是否返还押金由租客和公寓方按照签订的租房合同决定，58月付不便干预']
                    }
                ],
                '其他': [
                    {
                        title: '01、关于服务费？',
                        text: ['推广期间免服务费用', '例如：借2个月租金4000元，每月只需还2000元，无任何服务费用']
                    }, {
                        title: '02、审核失败是什么原因？',
                        text: ['如果审核失败，一般是因为', '（1）个人资料不符合要求，比如说地区、年龄不在服务的范围等', '（2）填写资料为虚假信息或涉嫌欺诈等']
                    }, {
                        title: '如果审核失败是否可以再次申请，再次申请时长是多久？',
                        text: ['如系统审核失败，则不可再次申请。如人工审核失败，请联系房管员']
                    }, {
                        title: '支持的银行有哪些？',
                        text: ['目前支持13家银行的借记卡：农行、建行、兴业、浦发、中信、光大、中行、工行、华夏、平安、招商、民生、广发', '后期支持银行所有调整的请以页面通知为准']
                    }, {
                        title: '逾期交租费用是多少？',
                        text: ['如果逾期交租，您要承担罚息，罚息总额=逾期本息总额*对应罚息利率*逾期天数，罚息利率0.05 %/日', '请您按时交房租，保持您良好的个人征信记录']
                    }
                ]
            }
        };
        
        this.state = {
            currTab: this.data.tabList[0]
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
    
    
    
    componentDidMount() {

        
        
    }
    
    
    clickTabHandler(tab) {
        console.log(`${tab} is selected`)
        this.setState({'currTab': tab})
    }
    
    
    
    render() {
        
        const { number, issue, lotteryTime, headline } = this.state;
        const { cityList, homeRecommendList, homeBanner } = this.props;
        
        let listToShow = this.data.qaMap[this.state.currTab];
        
        
        return (
            <div className="QA">
                <section>
                    <header className="qa-header"><span className="desc">问题类别</span></header>
                    <ul className="title-tab">
                        {
                            this.data.tabList.map((tab, index) => {
                                return <li onClick={this.clickTabHandler.bind(this, tab)} key={`QATab${index}`}>{tab}</li>
                            })
                        }
                    </ul>
                </section>
                
                <section>
                    <header className="qa-header"><span className="desc">{this.state.currTab}</span></header>
                    <ul className="content-list">
                        {
                            listToShow.map((qaItem, index) => {
                                return (
                                    <QAItem key={`QAItem${qaItem.title}${index}`} item={qaItem}></QAItem>
                                )
                            })
                        }
                    </ul>
                </section>
                
                
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



export default connect(mapStateToProps)(QA)