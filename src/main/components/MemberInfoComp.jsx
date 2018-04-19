import React, { Component } from 'react'
import actions from '../actions/MemberManageAct'
import Sidebar from '../../base/components/SidebarWrapComp';
import MTable from '../../base/components/TableComp';
import {Button, Spin, Pagination, Input, Layout} from '../../base/components/AntdComp'

const Search = Input.Search;

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
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
},{
    title: '办公地址',
    dataIndex: 'office',
    key: 'office',
}
];

class MemberInfoComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchVal: '',
            side_visible: false,
            record: {},
            selectedRowKeys:[],
            searchPm: {
                positionName:'',
                positionCode: '',
                page: 1,
                pageSize: 5
            }
        }
    }

    componentWillMount() {   
        columns[1].render = (txt, record, index) => <a onClick={()=>this.onOpenSidebar(record)} className='column-1'>{record.empName}</a>;
        columns[columns.length - 1].render = (txt, record, index) => <span>{ record.office.detailAddr }</span>   
        this.setState({
            searchVal: '',
            record: {},
            selectedRowKeys:[],
            searchPm: {
                positionName:'',
                positionCode: '',
                page: 1,
                pageSize: 5
            },
            selectedRowKeys: []
        });

    }

    onOpenSidebar = (record) => {
        this.props.getDetailsInfo({empCode:record.empCode});
        this.props.onOpenSidebar(true);   
    }

    onCloseSidebar = () => {
        this.props.onOpenSidebar(false);
    }

    onHeaderChange = (len) => {
        this.props.headerChange(len);
    }

    onSelectChange = (selectedRowKeys,selectedRows) =>{
        //console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
        this.onHeaderChange(selectedRows.length);
    }

    render(){
         let { state, checkedList, PersonManageState,side_visible, tablePaging, tableLoading, ...props} = this.props;
         let { searchVal, record,selectedRowKeys} = this.state;
         let dept = state.infoDetials.dept || "" ,
             maritalStatus = state.infoDetials.maritalStatus || "" ,
             office = state.infoDetials.office || "",
             position = state.infoDetials.position || "";
             
         let rowSelection = {
            onChange: this.onSelectChange
         } 
         let pagination = {   
            showSizeChanger: true,
            current: state.paging.page,
            pageSize: state.paging.pageSize,
            total: state.paging.total
         }
    return (
        <div>
            {/*<p>{ "已经选中  " + state.checkedLength + "  条"}</p>  */}
            <div>
                <MTable 
                    rowSelection = {rowSelection}
                    selRows = {this.state.selectedRowKeys}
                    cols={columns} 
                    paging={pagination}
                    dataSource={state.dataSource} 
                    pageOnChange={tablePaging}
                    rowKey={"empName"}
                    loading={tableLoading}
                    {...props} 
                />  
            </div>   
            <Sidebar maskClosable={true} side_visible={side_visible} onClose={this.onCloseSidebar} >
                <div className='info-header'>
                    <p>编辑</p>
                    <p>打印</p>
                    <p>停用</p>
                </div>
                <div className='info-body'>
                    <div className='info-body-title'>
                        <img src={state.infoDetials.profilePhoto} alt="" className='info-img'/>
                        <p>{state.infoDetials.empName}</p>
                    </div>
                    <p><span>组织：</span>  {dept.deptValue}  </p>
                    <p><span>职位：</span>  {position.positionValue}</p>
                    <p><span>手机：</span>  {state.infoDetials.phone}  </p>
                    <p><span>固定电话：</span>  {state.infoDetials.telNo}  </p>
                    <p><span>邮箱：</span>  {state.infoDetials.email}  </p>
                    <p><span>办公地址：</span>  {office.provinceCode+""+office.cityCode+""+office.areaCode}  </p>
                    <p><span>入职时间：</span>  {state.infoDetials.entryDate}  </p>
                    <p><span>婚姻状态：</span>  {maritalStatus.maritalStatusValue }  </p>
                    <p><span>身份证号：</span>  {state.infoDetials.identityNO}  </p>
                    <p><span>家庭住址：</span>  {state.infoDetials.homeAddr}  </p>
                </div>
            </Sidebar>
        </div>
    );

    }
}

export default MemberInfoComp