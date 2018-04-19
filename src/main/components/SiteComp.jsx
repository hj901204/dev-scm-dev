import React, { Component } from "react";
import {  Button, Popconfirm, message, Select } from '../../base/components/AntdComp';
import MTable from '../../base/components/TableComp';
import { shouldComponentUpdate } from '../../base/consts/Utils';
import SearchComp from '../../base/components/SearchComp';
import TXT from '../languages';
const T = TXT.POSITION;
const Option = Select.Option;


const columns = [
{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    hidden: true, 
}, {
    title: '编码',
    dataIndex: 'siteCode',
    key: 'siteCode',
}, {
    title: '名称',
    dataIndex: 'siteName',
    key: 'siteName',
}, {
    title: '经营组织',
    dataIndex: 'orgCode',
    key: 'orgCode',
}, {
    title: '仓储管理',
    dataIndex: 'isSog',
    key: 'isSog',
    render: (txt, record, index) => {
        return window.ENUM.getEnum("bool",txt+'')},
}, {
    title: '生产制造',
    dataIndex: 'isPrd',
    key: 'isPrd',
    render: (txt, record, index) => {
        return window.ENUM.getEnum("bool",txt+'')},
}, {
    title: '服务网点',
    dataIndex: 'isDot',
    key: 'isDot',
    render: (txt, record, index) => {
        return window.ENUM.getEnum("bool",txt+'')},
}, {
    title: '详细地址',
    dataIndex: 'addressDetl',
    key: 'addressDetl',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (txt, record, index) => {
        return window.ENUM.getEnum("dataStatus",txt+'')},
}, {
    title: '更新人',
    dataIndex: 'updateBy',
    key: 'updateBy',
}, {
    title: '更新时间',
    dataIndex: 'updateDate',
    key: 'updateDate',
}, 
{    
    dataIndex: 'handle',
    title: '操作',
}];

class SiteComp extends Component {
    constructor(props, context) {
        super(props, context);

        columns[columns.length - 1].render = (txt, record, index) =>
            <div>
                <a href="#" onClick={() => {} }>编辑 </a>
                <Popconfirm title={
                    <div>
                        <h5>确定要删除该站点吗</h5>
                        <p>删除后，该站点信息将被清除。</p>
                    </div>
                } onConfirm={() => this.onDelete(record.siteCode)}>
                    <a href="#">删除</a>
                </Popconfirm>
            </div>
    }

    onDelete = (id) => {
        let { onClear, SiteDel } = this.props;
        SiteDel(id).then(json => {
            if (json.status === 2000) {
                onClear();
            } else if (json.status === 4355) {
                    // message.warn(T.DELFAIL);
                }
            }
        );
    }    

    render() {
        let { AddSiteVisiable, onSearch, SearchVal, tabLoading, tablePaging, onSelect, ...props } = this.props;
        return (
            <div>
                <div className="manage-head">
                    <Select defaultValue='0' style={{ width: 160 }} onSelect={onSelect}>
                    {
                        window.ENUM.getEnum("dataStatus").map(item => {
                             return <Option value={item.catCode} key={item.catCode}>{item.catName}</Option>
                         })
                    }    
                    </Select>
                    <SearchComp SearchVal={SearchVal} onSearch={onSearch}
                        placeholder='输入名称/详细地址搜索' />
                    <Button type="default" onClick={AddSiteVisiable}>新建</Button>
                </div>
                <div className="manage-body">
                    <MTable
                        {...props}
                        loading={tabLoading}
                        cols={columns}
                        rowKey={"id"}
                        pageOnChange={tablePaging}
                    />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.tablePaging(1);
    }
}

export default SiteComp;
