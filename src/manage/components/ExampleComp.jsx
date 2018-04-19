import React, { Component } from 'react'
import { Row, Col,Button,Popconfirm,Icon} from '../../base/components/AntdComp';

export default class ExampleCont extends Component {

 constructor(props, context) {
        super(props, context);
    }

    onDelete = (id) => {
        const { onClear, PositionDel } = this.props;
        PositionDel(id).then(json => {
            if (json.status === 2000) {
                onClear();
            }
        });
    }

    render() {
        const {record}=this.props;
        return (
                    <div className="sidebarcon">
                        <div className="sidebox">
                            <Row className="sidetitle">
                                <Col span={6}><b>公司信息</b></Col>
                                <Col span={9}></Col>
                                <Col span={9} className="sidebutton">
                                    {record.status=="1"?
                                    <Button type="primary" onClick={()=>this.props.EditPositionVisiable(record.companyCode)}>编辑</Button>
                                     :null}
                                    {record.status == "1"?
                                        <Popconfirm placement="bottomRight" title={
                                            <div>
                                                <h5>确认要停用该公司吗？</h5>
                                                <p>停用后，该公司所有人员将不能再登入该公司空间</p>
                                            </div>}
                                            onConfirm={() => this.onDelete(record.companyCode)} okText="是" cancelText="否">

                                            <Button type="primary">停用</Button>

                                        </Popconfirm>:

                                        <Popconfirm placement="bottomRight" title={
                                            <div>
                                                <h5>确认要启用该公司吗？</h5>
                                            </div>}
                                            onConfirm={() => this.onDelete(record.companyCode)} okText="是" cancelText="否">

                                            <Button type="primary">启用</Button>

                                        </Popconfirm>
                                    }

                                    <div className="xicon" onClick={()=>this.props.SidebarVisiable(false)}><a href="#"><Icon type="close" /></a></div>
                                </Col>
                            </Row>
                        </div>
                        <Row className="companymargin">
                            <Col span={24}></Col>
                        </Row>
                        <Row className="companylogo">
                            <Col span={24}>
                                <div></div>
                            </Col>
                        </Row>

                        <Row className="companylist">

                            <Col span={24}>
                                <ul>
                                    <li>
                                        <div>{record.companyName}({record.companyUscc})</div>
                                        <ol>
                                            <li>{record.companyType}</li>
                                            <li>&nbsp;|&nbsp;</li>
                                            <li>{record.companyScale}</li>
                                            <li>&nbsp;|&nbsp;</li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>公司简称:</span>
                                        <b>{record.companyAbbr}</b>
                                    </li>
                                    <li>
                                        <span>法人代表:</span>
                                        <b>{record.corporation}</b>
                                    </li>
                                    <li>
                                        <span>公司电话:</span>
                                        <b>{record.telephoneNumber}</b>
                                    </li>
                                    <li>
                                        <span>注册地址:</span>
                                        <b></b>
                                    </li>
                                    <li>
                                        <span>邮编:</span>
                                        <b>{record.zipCode}</b>
                                    </li>
                                    <li>
                                        <span>公司简介:</span>
                                        <b>{record.companyDesc}</b>
                                    </li>
                                    <li>
                                        <span>业务联系人:</span>
                                        <b>{record.contacts}</b>
                                    </li>
                                    <li>
                                        <span>业务联系人手机:</span>
                                        <b>{record.contactsPhone}</b>
                                    </li>
                                    <li>
                                        <span>公司admin账号:</span>
                                        <b>{record.accountNumber}</b>
                                    </li>
                                    <li>
                                        <span>密码:</span>
                                        <b><Button type="primary" onClick={()=>this.props.ResetPassword()}>重置密码</Button> 提示：点击后，将重置密码，并将初始密码发送至业务联系人手机</b>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                    </div>
        )
    }
}