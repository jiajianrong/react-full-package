import React from 'react';
import { Link } from 'react-router';

import {fetchPost} from '../../api/fetch';
import { Form, FormGroup, Label, Input, Toast, List, ListGroup, Button } from 'lm-ui-react';

import './Feedback.scss';

export default class Feedback extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            contact_info: '',
            content: ''
        }
    }
    
    
    submitHandler() {
        fetchPost('/newpc/opinion/add', this.state, () => {
            this.setState({
                contact_info: '',
                content: ''
            })
        })
    }

    
   
    render() {

        return (
            <div className="Feedback">
                
                
                
                <Form>
                
                    <div className="cards">
                        <div className="form-title">多行文本</div>
                        <FormGroup>
                            <Input
                                type='textarea'
                                maxLength={200}
                                rows={4}
                                defaultText={'您好，请描述您遇到的问题'}
                                value={this.state.content}
                                onChange={(e) => {this.setState({content: e.target.value})}} />
                        </FormGroup>
                    </div>
                    
                    <div className="cards">
                        <div className="form-title">普通输入框</div>
                        <FormGroup>
                            <Label>
                                <span>姓名</span>
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
                        >提交申请</Button>
                    </div>
                </div>
                
                
                
            </div>
        )

    }

}


