import React, { Component,PropTypes } from "react";
import { Form,Input, Button,Checkbox} from '../../base/components/AntdComp';
import moment from 'moment';
import FormModalComp from '../../base/components/FormModalComp';
import LinkageComp from '../components/LinkageComp';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

class AddAddressComp extends FormModalComp {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.loading) {
            this.validateFds((err, data) => {
                let newData = data;
                console.log(newData);
                for (var key of data.business) {
                    newData[key] = 1;
                }
                if (!err) {
                    this.props.onOk && this.props.onOk(newData);
                }
            });
        }
    }
    getComp = () => {
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 12}, 
        };
        const tailFormItemLayout = {
            wrapperCol: {span: 14,offset: 3}
        };
        const { address } = this.props;
        const plainOptions = [
            { label: '经营', value: 'isMag' },
            { label: '收货', value: 'isRep' },
            { label: '发货', value: 'isSog' },
            { label: '开票', value: 'isBil' },
        ];
        return (
            <Form className="address-form">
                <FormItem {...formItemLayout} label="名称" hasFeedback >
                    {this.getFD('addressName', {
                        initialValue:address.addressName,
                        rules: [
                            { type:"required", message: '请输入名称' },
                        ],
                    })(
                        <Input placeholder="请输入名称" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="业务用途">
                    {this.getFD('business', {
                        initialValue:address.businessValue
                        // initialValue:address.yewuyongtu,
                    })(
                        <CheckboxGroup options={plainOptions} />
                    )}
                </FormItem>
                <FormItem className="select-ganged" labelCol={{span: 3}} wrapperCol={{ span: 16}} label="地址搜索" >
                    <LinkageComp />
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {this.getFD('addressDetl', {
                        initialValue:address.addressDetl,
                        rules: [
                            { type:"required", message: '请输入详细地址' },
                        ],
                    })(
                        <Input placeholder="详细地址" />
                    )}
                </FormItem>
                <FormItem>
                    <img src="/img/map.png" />
                </FormItem>
            </Form>
        )
    }
}
AddAddressComp.defaultProps = {
    address: {
        addressCode: null,
        addressName: null,
        addressDetl: null,
        org: [

        ],
        isReg:null,
        isMag:null,
        isRep:null,
        isSog:null,
        isBil:null,
        isOfe:null,
        status:null,
        updatePerson:null,
        updateDate:null,
    }
}
AddAddressComp.propTypes={
    position:PropTypes.object,
}
export default Form.create()(AddAddressComp);
