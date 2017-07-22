import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import {fetchPost} from '../../api/fetch';
import { Form, FormGroup, Label, Input, Toast, List, ListGroup, Button } from 'lm-ui-react';

import pic1 from './img/cooperate_partner_pic1.png';
import pic2 from './img/cooperate_partner_pic2.png';
import pic3 from './img/cooperate_partner_pic3.png';
import pic4 from './img/cooperate_partner_pic4.png';
import pic5 from './img/cooperate_partner_pic5.png';
import pic6 from './img/cooperate_partner_pic6.png';
import './Cooperate.scss';


export default class Cooperate extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            phone: '',
            city: '',
            apartment_name: '',
            explanation: ''
        }
    }
    
    
    
    submitHandler() {
        const postUrl='/newpc/application/add';
        
        
        let canSubmit = this.validateForm();
        
        canSubmit && fetchPost(postUrl, this.state, () => {
            // '已收到您的合作申请，请等待客服联系'
        });
        
        canSubmit && setTimeout( () => {
            this.setState({
                name: '',
                phone: '',
                city: '',
                apartment_name: '',
                explanation: '',
            })
            this.setState({
                showState: !this.state.showState
            })
        }, 300 )
    }
    
    
    
    validateForm() {
        let {name, phone, city, apartment_name, explanation} = this.state;
        //return true;
        return name  // /^[\u4e00-\u9fa5·]{2,20}$/.test( name.replace(/(^\s*)/g,"") )
            && phone // /(^(\d{3,4}-)?\d{7,8})$|(^1[3578][0-9]{9}$)|(^400(-\d{3,4}){2}$)/.test( phone.replace(/(^\s*)/g,"") )
            && city
            && apartment_name
            && explanation;
    }
    
    
    
    render() {
        
        
        return (
            <div className="Cooperate">
                
                
                
                <div className="Cooperate_adv">
                    <div>
                        <ul>
                            <li><p>线上海量客户流量共享</p><p>用户量大，日新增找房用户1000000人</p></li>
                            <li><p>顶级金融机构合作</p><p>资金充足，助公寓快速回款</p></li>
                            <li><p>品牌捆绑提升公寓知名度</p><p>线上线下联合推广活动</p></li>
                            <li><p>专业顾问团队</p><p>助力公寓运营、成长</p></li>
                        </ul>
                    </div>
                </div>
                
                
                
                <div className="Cooperate_flow">
                    <h2>合作流程</h2>
                    <hr/>
                    <p><span>填写申请</span><span>平台资质审核</span><span>合作推单</span><span>提前收租</span></p>
                </div>
                
                
                
                <div className="Cooperate_apply">
                    <h2>合作申请</h2>
                    <hr/>
                    <form action="">
                        
                        <div className="input-items">
                            <p>
                                <label>姓名</label>
                                <input type="text" name="" placeholder="请输入您的姓名" value={this.state.name}
                                       onChange={(e) => {this.setState({name: e.target.value})}} />
                            </p>
                            <p>
                                <label>电话</label>
                                <input type="text" name="" placeholder="您的联系方式" value={this.state.phone}
                                       onChange={(e) => {this.setState({phone: e.target.value})}} />
                            </p>
                            <p>
                                <label>公寓名称</label>
                                <input type="text" name="" placeholder="请输入申请公寓名称" value={this.state.city}
                                       onChange={(e) => {this.setState({city: e.target.value})}} />
                            </p>
                            <p>
                                <label>所在城市</label>
                                <input type="text" name="" placeholder="请输入城市名称" value={this.state.apartment_name}
                                       onChange={(e) => {this.setState({apartment_name: e.target.value})}} />
                            </p>
                            <p>
                                <label>意向说明</label>
                                <input type="text" name="" placeholder="若有其他说明请输入" value={this.state.explanation}
                                       onChange={(e) => {this.setState({explanation: e.target.value})}} />
                            </p>
                        </div>
                        
                        {/*<center>
                            <input type="submit" value="提交申请" className="Cooperate_btn" />
                        </center>*/}
                        
                        
                        
                        <div className="btn-content">
                            <Button
                                size='long'
                                btnType='primary'
                                isRadius={true}
                                onClick={this.submitHandler.bind(this)} >提交申请</Button>
                        </div>
                        
                        
                        
                        <Toast
                            showState={this.state.showState}
                            toastType={"Hint"}
                            timeControl={{ time: 2000, cbFun: () => {this.setState({showState: false})} }}
                            opacity={0}
                            message={'已收到，请等待客服联系'} />
                        
                    </form>
                </div>
                
                
                
                <div className="Cooperate_partner">
                    <p><i>*</i>已合作的公寓</p>
                    <ul>
                        <li><img src={pic1} /></li>
                        <li><img src={pic2} /></li>
                        <li><img src={pic3} /></li>
                        <li><img src={pic4} /></li>
                        <li><img src={pic5} /></li>
                        <li><img src={pic6} /></li>
                    </ul>
                </div>
                
                
                
            </div>
        );
        // end return
    }
}
