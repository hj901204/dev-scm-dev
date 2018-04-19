import React, { Component, PropTypes } from "react";
import {Modal, Spin, Button,Col,Row,Upload } from 'antd';
import ModalComp from '../../base/components/ModalComp';
import { shouldComponentUpdate } from '../../base/consts/Utils';

const files = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  defaultFileList: [{
    uid: -1,
    name: '新建 Microsoft Excel 工作表<div className="xlsx"> </div>',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  },{
    uid: 2,
    name: '221212.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  }]
}

class ImportViewComp extends ModalComp {
    constructor(props, context) {
        super(props, context);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    }

    handleSubmit = () => {
        this.props.handleSubmit && this.props.handleSubmit();
    }

    handleCancel = (e) => {
        e.preventDefault();
        if (!this.props.loading) {
            this.props.handleCancel && this.props.handleCancel(e);
        }
    }
    getComp = () => {
        return (
            <div className="upload-dialog"  onCancel={this.handleCancel} >
                <div className="dialog-inner">
                    <Row className="upload-form">
                        <Col span={3} className="upload-label">
                            <label>选择文件</label>
                        </Col>
                        <Col span={9} className="upload-btn">
                            <Upload {...files}>
                                <Button type="primary">浏 览</Button>
                            </Upload>
                        </Col>
                        <Col span={9} className="upload-text">
                            <div className="text-box"><span className="ant-form-text">(仅支持xis格式，文件最大10M)</span></div>
                        </Col>
                        <Col span={3} className="upload-text"><a href="#">下载</a></Col>
                    </Row>
                    <div className="upload-tip">
                        <h3 className="tip-title">温馨提示：为了不耽误您的时间，请先查看以下注意事项</h3>
                        <div className="tip-item">1.姓名,手机必填项</div>
                        <div className="tip-item">2.导入部门必须填写完整的路径，用"/"隔开：例如“市场部/市场一部”</div>
                    </div>
                </div>
            </div>
        )
        
    }
}

ImportViewComp.defaultProps={
    title: 'title',
    okText: '导入',
    width: 770,
    maskClosable: true,
}
export default ImportViewComp;
