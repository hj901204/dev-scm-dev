import React, { Component } from "react";
import { Breadcrumb,Select, Input, Button, Table, Popconfirm,message } from 'antd';
import { is } from 'immutable';
import MTable from '../../base/components/TableComp';
import { shouldComponentUpdate } from '../../base/consts/Utils';

const BItem = Breadcrumb.Item;
const Search = Input.Search;
const Option = Select.Option;

const columns = [
    {
        title: 'addressCode',
        dataIndex: 'addressCode',
        key: 'addressCode',
        hidden: true,
    }, {
        title: '名称',
        dataIndex: 'addressName',
        key: 'addressName',
    }, {
        title: '详细地址',
        dataIndex: 'addressDetl',
        key: 'addressDetl',
    }, {
        title: '所属组织',
        dataIndex: 'org',
        key: 'org',
        render:  (txt, record, index)=>{ 
            return txt.map(org=>org.deptName).join('，');
        }
    }, {
        title: '注册',
        dataIndex: 'isReg',
        key: 'isReg',
    }, {
        title: '经营',
        dataIndex: 'isMag',
        key: 'isMag',
    }, {
        title: '收货',
        dataIndex: 'isRep',
        key: 'isRep',
    }, {
        title: '发货',
        dataIndex: 'isSog',
        key: 'isSog',
    }, {
        title: '开票',
        dataIndex: 'isBil',
        key: 'isBil',
    },{
        title:"办公",
        dataIndex:'isOfe',
        key:'isOfe',
        hidden:'true',
    },{
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (txt, record, index) => {
             return window.ENUM.getEnum("dataStatus",txt+'')},
    },{
        title: '更新人',
        dataIndex: 'updatePerson',
        key: 'updatePerson',
    },{
        title: '更新时间',
        dataIndex: 'updateDate',
        key: 'updateDate',
    }, {
        dataIndex: 'operation',
        title: '操作',
    }];


class AddressComp extends Component {
    constructor(props, context) {
        super(props, context);
        columns[columns.length - 1].render = (txt, record, index) =>
            <div>
                {/*<a href="#" onClick={() => this.onEditAddress(record.addressCode) }>编辑  </a>*/}
                <Popconfirm title={
                    <div>
                        <h5>确定要删除该地址吗</h5>
                    </div>
                } onConfirm={() => this.onDelete(record.addressCode)}>
                    <a href="#">删除</a>        
                </Popconfirm>

                {
                    record.status==0?
                    <Popconfirm title={
                        <div>
                            <h5>确定要停用该地址吗</h5>
                        </div>
                         } onConfirm={() => this.onDisable(record.addressCode,record.status)}>
                        <a href="#">停用</a>    
                    </Popconfirm>
                    :null
                }

                {
                    record.status==2?
                    <Popconfirm title={
                        <div>
                            <h5>确定要启用该地址吗</h5>
                        </div>
                        } onConfirm={() => this.onDisable(record.addressCode,record.status)}>
                        <a href="#">启用</a>    
                    </Popconfirm>
                 :null
                }
            </div>
    }

    componentDidMount() {
        this.props.tablePaging(1);
    }
    onEditAddress = (id) => {
        const { addressId, EditAddressVisiable} = this.props;
        if (id != addressId) {
            EditAddressVisiable(id);
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    };
    onDelete = (id) => {
        const { onClear, AddressDel } = this.props;
        AddressDel(id).then(json => {
                if (json.status && (json.status === 2000)) {
                    // message.info('删除地址成功!');
                    onClear();
                } else if (json.status && (json.status === 4355)) {
                    message.warn('删除地址失败!');
                }
            }
        );
    }
    onDisable=(AaddressCode,status)=>{
        const {onClear,AddressDisable}=this.props;
        AddressDisable(AaddressCode,status).then(json=>{
            if(json.status===2000){
                onClear();
            }else if(json.status===4355){
                message.warn('修改状态失败!');
            }
        })
    }
    render() {
        const { AddAddressVisiable, onSearch, SearchVal, tabLoading, tablePaging, ...props } = this.props;

        return (
            <div >
                <div className="manage-head">
                    <SearchComp SearchVal={SearchVal} onSearch={onSearch}/>
                    {/*<div>
                        <Button type="default" onClick={AddAddressVisiable}>新增职位</Button>
                    </div>*/}
                </div>
                <div className="manage-body">
                    <MTable
                        {...props}
                        loading={tabLoading}
                        cols={columns}
                        rowKey={"addressCode"}
                        pageOnChange={tablePaging}
                    />
                </div>
            </div>
        );
    }
}
export default AddressComp;




class SearchComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            SearchVal:props.SearchVal,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.SearchVal !== this.props.SearchVal) {
            this.setState({ SearchVal: nextProps.SearchVal})
        }
    }
    onChange = ( SearchVal ) => {
        this.setState({SearchVal})
    }
    render() {
        return (
                    <div>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            defaultValue="0"
                        >
                       {
                           window.ENUM.getEnum('dataStatus').map(item=>{
                               return <Option value={item.catCode} key={item.catCode}>{item.catName}</Option>
                           })
                       }
                    </Select>
                    <Search
                        placeholder="输入职位名称／编号搜索"
                        style={{ width: 200 }}
                        onSearch={this.props.onSearch}
                        value={this.state.SearchVal}
                        onChange={(e) => this.onChange(e.target.value)}
                    />
                        </div>

        )
    }
}