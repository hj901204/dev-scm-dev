import React from 'react';
import { Form, Icon, Button, Modal, Layout, Row, Col, Popconfirm } from '../../base/components/AntdComp'

class DepartmentDetailComp extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    componentWillMount(){
        this.props.getdetail();
        
    }

    onEditDepartment=()=>{
        this.props.onEditDepartment(this.props.detail.id);
    }

    onSetup=(id)=>{
        this.props.onsetup(id).then(json=>{
            if (json.status === 2000) {
                // console.log('修改职务成功!');
            } else {
                // console.log('修改职务失败!');
            };
        });
    }

    SidebarVisiable=(tag)=>{
        this.props.SidebarVisiable(tag)
    }


    render(){
        let {detail}=this.props;
        return(
            <div className="deptSidebar" >
                        <div className="sidebox" >
                            <div className="sidetitle" >
                                <Row className="sidebutton" >
                                    <Col span={24} >
                                        {detail.status?null:<Button type="primary" onClick={()=>{this.onEditDepartment()}} >编辑</Button>}
                                        <Popconfirm title={
                                                <div>
                                                    <h5>确认要{detail.status?'启用':'停用'}该组织吗?</h5>
                                                    <p>{detail.pstatus?'上级组织目前处于停用状态，将一同被启用':''}</p>
                                                </div>
                                            } 
                                            onConfirm={()=>{this.onSetup(detail.id)}}
                                            okText="确定"
                                            cancelText="取消"
                                            >
                                            <Button type="primary">{detail.status?'启用':'停用'}</Button>
                                        </Popconfirm>
                                        <div className="xicon" onClick={()=>{this.SidebarVisiable(false)}} >X</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="side-Center">
                            <Row>
                                <Col>{detail.deptName}({detail.deptNo})</Col>
                            </Row>
                            <Row>
                                <Col>{detail.deptLevel===undefined?'':window.ENUM.getEnum("level", detail.deptLevel+'')} | {detail.deptNum} | {detail.deptMgr}</Col>
                            </Row>
                            <div className="side-Center-box">
                                <Row>
                                    <Col span={5}>是否为库存组织：</Col>
                                    <Col span={3}>{detail.isOpt===undefined?'':window.ENUM.getEnum("bool", detail.isOpt+'')}</Col>
                                    <Col span={5}>是否为采购组织：</Col>
                                    <Col span={3}>{detail.isPurchase===undefined?'':window.ENUM.getEnum("bool", detail.isPurchase+'')}</Col>
                                </Row>
                                <Row>
                                    <Col span={5}>是否为销售组织：</Col>
                                    <Col span={3}>{detail.isSell===undefined?'':window.ENUM.getEnum("bool", detail.isSell+'')}</Col>
                                    <Col span={5}>是否为财务组织：</Col>
                                    <Col span={3}>{detail.isFinance===undefined?'':window.ENUM.getEnum("bool", detail.isFinance+'')}</Col>
                                </Row>
                            </div>
                        </div>
                        <div className="side-Line" >
                        </div>
                        <div className="side-Bottom" >
                            <Row>
                                <Col span={4} className="side-Bottom-name">上级组织：</Col>
                                <Col span={18}>{detail.pDeptName}</Col>
                            </Row>
                            <Row>
                                <Col span={4} className="side-Bottom-name">组织简称：</Col>
                                <Col span={18}>{detail.deptAlias}</Col>
                            </Row>
                            <Row>
                                <Col span={4} className="side-Bottom-name">组织全称：</Col>
                                <Col span={18}>{detail.deptAll}</Col>
                            </Row>
                            <Row>
                                <Col span={4} className="side-Bottom-name">英文名称：</Col>
                                <Col span={18}>{detail.deptEng}</Col>
                            </Row>
                            <Row>
                                <Col span={4} className="side-Bottom-name">联系电话：</Col>
                                <Col span={18}>{detail.deptPhone}</Col>
                            </Row>
                            <Row>
                                <Col span={4} className="side-Bottom-name">地址：</Col>
                                <Col span={18}>{detail.addrCode}</Col>
                            </Row>
                        </div>
                    </div>
        )
    }

}

export default DepartmentDetailComp