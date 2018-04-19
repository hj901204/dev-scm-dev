import React from 'react'
import {Table, Button, Input, Breadcrumb} from '../../base/components/AntdComp'
import actions from '../actions/DepartmentAct'
import MTable from '../../base/components/TableComp';
import { is } from 'immutable';
const Search = Input.Search;
const columns = [{
                title: '组织名称',
                dataIndex: 'deptName',
                key: 'deptName',
                width: '15%',
                }, {
                title: '组织编号',
                dataIndex: 'deptNo',
                key: 'deptNo',
                width: '10%',
                }, {
                title: '层级',
                dataIndex: 'deptLevel',
                key: 'deptLevel',
                width: '10%',
                render: (txt)=>window.ENUM.getEnum("level", txt+'')
                }, {
                title: '人数',
                dataIndex: 'deptNum',
                key: 'deptNum',
                width: '10%',
                }, {
                title: '负责人',
                dataIndex: 'deptManager',
                key: 'deptManager',
                width: '10%',
                }, {
                title: '是否为运营组织',
                dataIndex: 'isOpt',
                key: 'isOpt',
                width: '10%',
                render: (txt)=>window.ENUM.getEnum("bool", txt+'')
                }, {
                title: '是否为采购组织',
                dataIndex: 'isPurchase',
                key: 'isPurchase',
                width: '10%',
                render: (txt)=>window.ENUM.getEnum("bool", txt+'')
                }, {
                title: '是否为销售组织',
                dataIndex: 'isSell',
                key: 'isSell',
                width: '10%',
                render: (txt)=>window.ENUM.getEnum("bool", txt+'')
                }, {
                title: '是否为财务组织',
                dataIndex: 'isFinance',
                key: 'isFinance',
                width: '10%',
                render: (txt)=>window.ENUM.getEnum("bool", txt+'')
                }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (txt)=>window.ENUM.getEnum("status", txt+'')
                }];
class Department extends React.Component{
    constructor(props,context){
        super(props,context);
        columns[0].render= (text,record) => <a href="#" onClick={() => this.onOpenSidebar(record)} >{text}</a>,
        this.searchPm = { key: "", page: 1, pageSize: 20 };
        this.state = {
            searchVal: '',
            record:{},
        }
    }
    
    componentDidMount(){
        this.initlist();
    };

    initlist=()=>{
        this.searchPm = { ...this.searchPm};
        this.props.initlist(this.searchPm);
        this.setState({ searchVal: '' });
    }

    onSearch=(value)=>{
        if(value){
            this.searchPm = { ...this.searchPm,key: value};
            this.initlist();
        }
    }

    onOpenSidebar=(record)=>{
        this.props.onOpenSidebar(true);
    }

    render(){
        let {side_visible,visible,tabLoading,OpenModal,dataSource,...props}=this.props;
        const { searchVal, record} = this.state;
        let loop = (data,status) => data.map((item) => {
            if(status!==undefined){
                item.pstatus= status;
            }
            if (item.children) loop(item.children,item.status);
            return item;
        });

        return(
            <div>
                <div className="manage-head">
                    <Search
                        placeholder="输入组织名称／编号搜索"
                        style={{ width: 200 }}
                        onSearch={this.onSearch}
                        value={searchVal}
                        onChange={(e) => this.setState({ searchVal: e.target.value })}
                    />
                    <Button type="default" onClick={OpenModal}>新增职位</Button>
                </div>
                <div className="manage-body">
                    <MTable
                        {...props}
                        dataSource={loop(dataSource)}
                        loading={tabLoading}
                        pagination={false}
                        cols={columns}
                        rowKey={"id"}
                    />
                </div>
            </div>
        )
    }
}

export default Department