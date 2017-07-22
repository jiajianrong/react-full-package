import React from 'react';
import { Link } from 'react-router';

import {fetchPost} from '../../api/fetch';
import { Form, FormGroup, Label, Input, Toast, List, ListGroup, Button } from 'lm-ui-react';

import './Feedback.scss';

export default class Feedback extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            content: '',
            contact_info: ''
        }
    }
    
    
    submitHandler() {
        
        let {content, contact_info} = this.state;
        let canSubmit = (content && contact_info);
        
        
        canSubmit && fetchPost('/newpc/opinion/add', this.state, () => {
            
        })
        
        canSubmit && setTimeout( () => {
            this.setState({
                content: '',
                contact_info: ''
            })
            this.setState({
                showState: !this.state.showState
            })
        }, 300 )
    }

    
   
    render() {
        
        let {content, contact_info} = this.state;
        

        return (
            <div className="Feedback">
                
                <section className="title">
                    <header className="qa-header"><span className="desc">意见反馈</span></header>
                </section>
                
                <Form>
                
                    <div className="cards">
                        <div className="form-title">我要反馈</div>
                        <FormGroup>
                            <Input
                                type='textarea'
                                maxLength={200}
                                rows={4}
                                defaultText={'您好，请描述您遇到的问题.'}
                                value={this.state.content}
                                onChange={(e) => {this.setState({content: e.target.value})}} />
                        </FormGroup>
                    </div>
                    
                    <div className="cards">
                        <FormGroup>
                            <Label>
                                <span>联系方式</span>
                            </Label>
                            <Input 
                                type='input'
                                value={this.state.contact_info}
                                defaultText={'电话、邮箱、QQ均可'}
                                onChange={(e) => {this.setState({contact_info: e.target.value})}} />
                        </FormGroup>
                    </div>
                    
                </Form>
                
                
                
                <div className='btn-content'>
                    <div>
                        <Button
                            size='long'
                            btnType='primary'
                            isRadius={true}
                            onClick={this.submitHandler.bind(this)}
                        >提交反馈</Button>
                    </div>
                </div>
                
                
                
                <Toast
                    showState={this.state.showState}
                    toastType={"Hint"}
                    timeControl={{ time: 2000, cbFun: () => {this.setState({showState: false})} }}
                    opacity={0}
                    message={'已收到您的反馈信息'} />
                
            </div>
        )

    }

}


