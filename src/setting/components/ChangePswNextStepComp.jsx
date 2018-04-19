import React, { Component ,propTypes} from 'react';
import FormModalComp from '../../base/components/FormModalComp';
import CodeBtnComp from '../../base/components/CodeBtnComp';
import { Layout ,Form, Input, Spin, Button, Modal,Col,Row} from '../../base/components/AntdComp';
const {Content } = Layout;
const FormItem = Form.Item;

class ChangePswNextStepComp extends FormModalComp {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.loading){
            this.validateFds((err, data) => {
                console.log(data)
                if (!err) {
                    this.props.onOk && this.props.onOk(data);
                }
            });
        }
    }
    getComp = () => {
        let formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { pswOld } = this.props;
        return (
            <Form className="bind-phone">
                <FormItem label="登录密码:" {...formItemLayout}>
                    {this.getFD('password', {
                        initialValue: pswOld.password,
                        rules: [
                            { type: "required",}
                        ],
                    })(
                         <Input  placeholder="请输入登录密码"/>
                        )}
                 
                </FormItem>
            </Form>
        )
    }
}

ChangePswNextStepComp.defaultProps = {
    pswOld: {
        password: null,
    },
    title: '验证登录密码',
    okText: '下一步',
    width: 389,
    maskClosable: true,
}
// ChangePswNextStepComp.propTypes = {
//     psw: PropTypes.object,
// }
export default Form.create()(ChangePswNextStepComp);

