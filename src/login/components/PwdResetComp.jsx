import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from '../../base/components/AntdComp';
const FormItem = Form.Item;
class PwdResetComp extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            submitLoading:false
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                this.props.submitPwd(data)
            }
        });
    }
   
    render(){
        let {submitLoading,resetPsw} = this.props;
        let { getFieldDecorator } = this.props.form;
        return (
            <div className="reset-wrapper">
                <div className="reset-box">
                    <div className="reset-text">
                        <h1 className="reset-title">忘记密码</h1>
                        <div className="reset-list">
                            <span className="reset-circle"></span>
                            <span className="reset-line"></span>
                            <span className="reset-circle circle-show"></span>
                        </div>
                        <div className="acount-message">
                            <span className="acount-text">账户验证</span>
                            <span className="acount-text2">密码重置</span>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="reset-form">
                            <FormItem>
                                {getFieldDecorator('newPassword', {
                                    initialValue: resetPsw.newPassword,
                                    rules: [
                                        { type: "required",}
                                    ],
                                })(
                                    <Input  placeholder="请输入密码" className="acount-phone" type="password"/>
                                    )}
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请确认密码" className="acount-phone" type="password"/>
                            </FormItem>
                            <FormItem className="reset-button">
                                <Button type="primary" htmlType="submit" className="reset-form-button" loading={submitLoading}>提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
// PwdResetComp.defaultProps={
//     resetPsw:{
//         phoneNo:null,
//         newPassword:null,
//     }
// }
// const PwdResetComp = Form.create()(ResetPwdFormComp);
// export default PwdResetComp;
PwdResetComp.defaultProps={
    resetPsw:{
        phoneNo:null,
        newPassword:null,
    }
}
export default Form.create()(PwdResetComp);