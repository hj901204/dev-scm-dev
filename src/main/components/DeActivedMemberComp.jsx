import React, { Component } from 'react'
import {Button, Pagination, Input } from '../../base/components/AntdComp'
import MTable from '../../base/components/TableComp';
const columns = [{
        title: 'empCode',
        dataIndex: 'empCode',
        key: 'empCode',
        hidden: true,
    }, {
        title: '姓名',
        dataIndex: 'empName',
        key: 'empName',
    }, {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
    }, {
        title: '组织',
        dataIndex: 'deptName',
        key: 'deptName',
    },{
        title: '职位',
        dataIndex: 'positionName',
        key: 'positionName',
    },{
        title: '停用时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
    },{
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
];

class DeActivedMember extends Component {
    constructor(props, context) {
        super(props, context);
        columns[columns.length - 1].render = (txt, record, index) => <a onClick={()=>this.onRecover(record.operation)} >恢复</a>;
        this.state = {
            searchVal: '',
            record: {},
            searchPm: {
                positionName:'',
                positionCode: '',
                page: 1,
                pageSize: 5
            }
        }
    }
    
    componentWillMount() {
       this.setState({
            searchVal: '',
            record: {},
            searchPm: {
                positionName:'',
                positionCode: '',
                page: 1,
                pageSize: 5
            }
        })
    }


    onRecover = (val) => {
       // console.log(val)
    }

    render(){    
         
        let { state, tablePaging, ...props } = this.props;
        let { searchVal, record} = this.state;
        let pagination = {   
            showSizeChanger: true,
            current: state.paging.page,
            pageSize: state.paging.pageSize,
            total: state.paging.total
        }
        return (
            <div>
                <MTable 
                    cols={columns}  
                    dataSource={state.outInfoData} 
                    rowKey = {"empCode"}   
                    paging = {pagination}
                    pageOnChange={tablePaging}
                    {...props} 
                />
            </div>
        );

    }
}

export default DeActivedMember

