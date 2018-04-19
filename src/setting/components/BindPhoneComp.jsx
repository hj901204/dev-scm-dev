import React, { Component } from 'react';
import FormModalComp from '../../base/components/FormModalComp';
import CodeBtnComp from '../../base/components/CodeBtnComp';
import { Layout ,Form, Input, Spin, Button, Modal,Col,Row} from '../../base/components/AntdComp';
const {Content } = Layout;
const FormItem = Form.Item;

class BindPhoneComp extends FormModalComp {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.loading){
            this.validateFds((err, data) => {
                if (!err) {
                    this.props.onOk && this.props.onOk(data);
                }
            });
        }
    }
    handlerSendPhoneCode = () => {
        this.props.form.validateFields((err, data) => {
            if (!err) {
                this.props.sendPhoneCodeTo(data)
            }
        });
    }
    getComp = () => {
        let formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        let { bindPhone } = this.props;
        return (
            <Form className="bind-phone">
                <FormItem label="新手机号:" {...formItemLayout}>
                    {this.getFD('password', {
                        initialValue: bindPhone.phoneNo,
                        rules: [
                            { type: "required",}
                        ],
                    })(
                         <Row gutter={8} style={{margin:0}}>
                        <Col span={12}>
                            <Input size="large"  placeholder="请输入新手机号" className="phone"/>
                        </Col>
                        <Col span={12}>
                        <CodeBtnComp {...this.props} sendPhoneCode={this.handlerSendPhoneCode}/>
                        </Col>
                    </Row>
                        )}
                    
                </FormItem >
                <FormItem label="验证码:" {...formItemLayout}>
                    {this.getFD('SMSCaptcha', {
                        initialValue: bindPhone.SMSCaptcha,
                        rules: [
                            { type: "required",}
                        ],
                    })(
                         <Input  placeholder="请输入验证码" className="code"/>
                        )}
                  
                </FormItem>
            </Form>
        )
    }
}
BindPhoneComp.defaultProps={
    title: '绑定手机',
    okText: '提交',
    width: 508,
    maskClosable: true,
    bindPhone:{
        phoneNo:null,
        SMSCaptcha:null,
    }
}
export default Form.create()(BindPhoneComp);

