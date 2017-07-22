import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import pic1 from './img/about-know.png';
import './About.scss';


export default class About extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    
    
    render() {
        
        
        return (
            <div className="About">
                <div className="about_know">
                    <div>
                        <img src={pic1}/>
                        <p>“58月付”是58同城推出的按月付房租服务</p>
                        <p>致力于为租客提供简单便捷的租房分期</p>
                        <p>从此租客只需押一付一</p>
                        <p>便可住好房，享品质</p>
                        <p className="about_know_pic"></p>
                    </div>
                </div>
                <div className="about_adv">
                    <h2>月付优势</h2>
                    <hr/>
                    <ul>
                        <li><strong>申请简单</strong><small>只需三步</small></li>
                        <li><strong>审批迅速</strong><small>1秒授信，24小时审核</small></li>
                        <li><strong>还款方便</strong><small>银行卡代扣、微信支付</small></li>
                        <li><strong>公寓精选</strong><small>优选品质公寓</small></li>
                    </ul>
                </div>
                 <div className="about_demand">
                    <h2>申请条件</h2>
                    <hr/>
                    <ul>
                        <li><span>大学生或有稳定工作收入</span></li>
                        <li><span>年龄18-45周岁</span></li>
                        <li><span>无不良信用记录</span></li>
                    </ul>
                </div>
                 <div className="about_flow">
                    <h2>申请流程</h2>
                    <hr/>
                    <ul>
                        <li>确定租住的房子</li>
                        <li>申请按月付房租</li>
                        <li>等待58月付审核</li>
                        <li>审核通过，住好房</li>
                    </ul>
                </div>
                 <div className="about_problem">
                    <h2>常见问题</h2>
                    <hr/>
                    <ul>
                        <li>
                            <h5>1、哪些租客可以使用58月付？</h5>
                            <p>大学生或有稳定工作，18-45岁，无不良信用记录</p>
                        </li>
                        <li>
                            <h5>2、58月付的费用如何收取？</h5>
                            <p>58月付不向租客收取任何服务费，免息</p>
                        </li>
                        <li>
                            <h5>3、58月付如何还款？</h5>
                            <p>绑定银行卡系统代扣，微信支付还款或主动支付还款</p>
                        </li>
                        <li>
                            <h5>4、逾期支付又是什么影响？</h5>
                            <p>租客每逾期一天，逾期收入月租金的万分之五作为逾期费用，逾期超过6天，视作违约处理</p>
                        </li>
                        <li>
                            <h5>5、退租、换租、转租的处理？</h5>
                            <p>如需退租、换租请提前告知公寓，公寓会和58月付协商沟通帮您办理清退</p>
                        </li>
                    </ul>
                </div>
                
                
                <Link to="/apply" className="bottom-fixed">申请月付</Link>
            </div>
        );
        // end return
    }
}





