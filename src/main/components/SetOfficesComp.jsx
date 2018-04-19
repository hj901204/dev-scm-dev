import React, { Component, PropTypes } from "react";
import {Form,Select, Input, Spin, Button, Modal,Tabs,DatePicker,Row, Col } from 'antd';
import FormModalComp from '../../base/components/FormModalComp';

const { MonthPicker, RangePicker } = DatePicker;
const { TabPane } = Tabs;
const FormItem = Form.Item;
const Option = Select.Option;

class SetOfficesComp extends FormModalComp {
    constructor(props, context) {
        super(props, context);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.props.loading) {
            this.validateFds((err, data) => {
                if (!err) {
                    this.props.onOk && this.props.onOk(data);
                }
            });
        }
    }
    getAlladdress=()=>{
        console.log("查找所有办公地址");
    }
        getComp = () => {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        console.log(this.props);
        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="选择人数"
                    hasFeedback
                >
                    {this.getFD('selectPersonNum', {
                    })(
                        <span />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="办公地址"
                    hasFeedback
                >
                    {this.getFD('officeAddress', {
                    })(
                        <AutoSelectComp
                          key="Select"
                          width={200}
                          onSelect={this.props.ChangeOfficeAddress}
                          onSearch={(val)=>{
                          }}
                          displayName={"addressName"}
                          keyName={"addressCode"}
                        />
                    )}
                </FormItem>
                </Form>
        )
    }
}

export default Form.create()(SetOfficesComp);
