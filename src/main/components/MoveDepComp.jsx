import React, { Component, PropTypes } from "react";
import {Form,Select, Input, Spin, Button, Modal,Tabs,DatePicker,Row, Col } from 'antd';
import moment from 'moment';
import FormModalComp from '../../base/components/FormModalComp';
const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;

class MoveDepComp extends FormModalComp {
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
    
       getComp = () => {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { movedep } = this.props;
        return (
                <Form>
                    <FormItem
                    {...formItemLayout}
                    label="选择人数"
                    hasFeedback
                >
                    {this.getFD('deptNum', {
                    })(
                        <span />
                    )}
                   </FormItem>
                     {/*<FormItem
                            {...formItemLayout}
                            label="选择组织"
                             hasFeedback
                        >
                            {this.getFD('deptCode', {
                                initialValue:movedep.deptCode,
                            })(
                                <AutoSelectComp
                                    key="Select"
                                    width={200}
                                    selectedList={}
                                    onSelect={this.props.Changedept}
                                    onSearch={(val)=>{

                                    }}
                                    displayName={"deptNum"}
                                    keyName={"deptCode"}
                        />

                            )}
                        </FormItem>*/}
                </Form>
        )
    }
}
MoveDepComp.defaultProps = {
    movedep: {
        
    }
}
MoveDepComp.propTypes = {
    movedep:PropTypes.object,
}


export default Form.create()(MoveDepComp);
