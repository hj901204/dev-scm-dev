import React, { Component, PropTypes } from "react";
import { Form, Input, Spin, Button, Modal, Row, Col, Select } from '../../base/components/AntdComp';
import ModalComp from '../../base/components/ModalComp';
import FormModalComp from '../../base/components/FormModalComp';
import AutoSelectComp from '../../base/components/AutoSelectComp';
import TreeSelectComp from '../../base/components/TreeSelectComp';
const FormItem = Form.Item;
let treeData1 = [
    {
        "id": 1,
        "name": "安徽省",
        "managerName": "徐杰",
        "children": [
            {
                "id": 38459,
                "name": "浙江省",
                "managerName": "",
                "children": [
                    {
                        "id": 77364,
                        "name": "安徽省",
                        "managerName": "毛涛",
                        "children": []
                    },
                    {
                        "id": 77365,
                        "name": "宁夏回族自治区",
                        "managerName": "龙杰",
                        "children": []
                    },
                    {
                        "id": 77366,
                        "name": "内蒙古自治区",
                        "managerName": "陈娜",
                        "children": []
                    }
                ]
            },
            {
                "id": 38460,
                "name": "澳门特别行政区",
                "managerName": "",
                "children": [
                    {
                        "id": 77367,
                        "name": "江苏省",
                        "managerName": "田磊",
                        "children": []
                    },
                    {
                        "id": 77368,
                        "name": "天津",
                        "managerName": "夏伟",
                        "children": []
                    }
                ]
            },
            {
                "id": 38461,
                "name": "广西壮族自治区",
                "managerName": "孔刚",
                "children": [
                    {
                        "id": 77369,
                        "name": "宁夏回族自治区",
                        "managerName": "唐明",
                        "children": []
                    },
                    {
                        "id": 77370,
                        "name": "天津",
                        "managerName": "江涛",
                        "children": []
                    },
                    {
                        "id": 77371,
                        "name": "澳门特别行政区",
                        "managerName": "钱洋",
                        "children": []
                    }
                ]
            },
            {
                "id": 38462,
                "name": "内蒙古自治区",
                "managerName": "孟强",
                "children": [
                    {
                        "id": 77372,
                        "name": "甘肃省",
                        "managerName": "唐强",
                        "children": []
                    },
                    {
                        "id": 77373,
                        "name": "辽宁省",
                        "managerName": "锺静",
                        "children": []
                    },
                    {
                        "id": 77374,
                        "name": "江西省",
                        "managerName": "武涛",
                        "children": []
                    },
                    {
                        "id": 77375,
                        "name": "甘肃省",
                        "managerName": "宋秀英",
                        "children": []
                    }
                ]
            }
        ]
    }
];
class AddDepartmentComp extends FormModalComp {
    constructor(props, context) {
        super(props, context);

    }
    
    componentWillMount(){
        // this.props.getpDeptName();
        // this.props.getdeptMgr();
        this.props.getSelectData();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                this.props.onOk && this.props.onOk(data);
            }
        });
    }
    
    getComp = () => {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { Record, pDeptName, deptMgr } = this.props;
        return (
            <Form>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="组织名称"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptName', {
                                initialValue: Record.deptName||null,
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input placeholder="请输入名称" />
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="组织编号"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptNo', {
                                initialValue: Record.deptNo||null,
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input placeholder="请输入编号" />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="组织简称"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptAlias', {
                                initialValue: Record.deptAlias||null,
                                //rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input placeholder="请输入名称" />
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="组织全称"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptAll', {
                                initialValue: Record.deptAll||null,
                                //rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input placeholder="请输入编号" />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="英文名称"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptEng', {
                                initialValue: Record.deptEng||null,
                                //rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="负责人"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptManager', {
                                //initialValue: Record.deptMgr,
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                onChange: this.handleSelectChange,
                            })(
                                <AutoSelectComp
                                    key="select"
                                    width={255}
                                    selectedList={deptMgr}
                                    onSelect={this.props.handleChange}
                                    onSearch={(val) => {
                                    }}
                                    displayName={"empName"}
                                    keyName={"id"}
                                />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="层级"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptLevel', {
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                initialValue: (Record.deptLevel||0).toString(),
                                onChange: this.handleSelectChange,
                            })(
                                <Select>
                                    {
                                        window.ENUM.getEnum("level").map(level=>{
                                            return<Select.Option value={level.catCode.toString()} key={level.catCode}>{level.catName}</Select.Option>
                                        })
                                    }
                                </Select>
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="上级组织"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('pDeptName', {
                                //initialValue: Record.pDeptName,
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                onChange: this.handleSelectChange,
                            })(
                                <TreeSelectComp treeData={[pDeptName]} name='deptName' width={255} />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="是否为运营组织"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('isOpt', {
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                initialValue: (Record.isOpt||0).toString(),
                                onChange: this.handleSelectChange,
                            })(
                                <Select  placeholder="Select a option and change input text above">
                                    {
                                        window.ENUM.getEnum("bool").map(bool=>{
                                            return<Select.Option value={bool.catCode} key={bool.catCode}>{bool.catName}</Select.Option>
                                        })
                                    }
                                </Select>
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="是否为采购组织"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('isPurchase', {
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                initialValue: (Record.isPurchase||0).toString(),
                                onChange: this.handleSelectChange,
                            })(
                                <Select  placeholder="Select a option and change input text above">
                                    {
                                        window.ENUM.getEnum("bool").map(bool=>{
                                            return<Select.Option value={bool.catCode} key={bool.catCode}>{bool.catName}</Select.Option>
                                        })
                                    }
                                </Select>
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="是否为销售组织"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('isSell', {
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                initialValue: (Record.isSell||0).toString(),
                                onChange: this.handleSelectChange,
                            })(
                                <Select  placeholder="Select a option and change input text above">
                                    {
                                        window.ENUM.getEnum("bool").map(bool=>{
                                            return<Select.Option value={bool.catCode} key={bool.catCode}>{bool.catName}</Select.Option>
                                        })
                                    }
                                </Select>
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            label="是否为财务组织"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('isFinance', {
                                //rules: [{ required: true, message: 'Please select your gender!' }],
                                initialValue: (Record.isFinance||0).toString(),
                                onChange: this.handleSelectChange,
                            })(
                                <Select  placeholder="Select a option and change input text above">
                                    {
                                        window.ENUM.getEnum("bool").map(bool=>{
                                            return<Select.Option value={bool.catCode} key={bool.catCode}>{bool.catName}</Select.Option>
                                        })
                                    }
                                </Select>
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            label="联系电话"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            {this.getFD('deptPhone', {
                                initialValue: Record.deptPhone||null,
                                //rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col span={12}></Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col span={24}>
                        <FormItem
                            label="地址"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                        >
                            {this.getFD('addrCode', {
                                initialValue: Record.addrCode||null,
                                //rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}
AddDepartmentComp.defaultProps = {
    Record: {
        id: null,
        deptName: null,
        deptNo: null,
        deptLevel: 0,
        deptAlias: null,
        deptMgr: null,
        isOpt: 0,
        isPurchase: 0,
        isSell: 0,
        isFinance: 0,
        deptAll: null,
        pDeptName: null,
        deptPhone: null,
        addrCode: null,
    },
    selectedList:[
    {
        id: 1,
        name: "AAAA",
    },
    {
        id: 2,
        name: "BBBB",
    },
    {
        id: 3,
        name: "CCCC",
    },
    {
        id: 4,
        name: "DDDD",
    },
    ]
}
AddDepartmentComp.propTypes = {
    Record:PropTypes.object,
    selectedList: PropTypes.array,
}

export default Form.create()(AddDepartmentComp);
