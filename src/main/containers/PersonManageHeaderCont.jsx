import React, { Component } from 'react'
//两个header组建 对应停用员工和部门员工列表
import HeaderToManageComp  from '../components/HeaderToManageComp'
import HeaderToOutInfoComp  from '../components/HeaderToOutInfoComp'
import DeactivedMemberTable  from './DeActivedMemberCont'

import { connect } from 'react-redux'
import actions from '../actions/MemberManageAct'
import deactiveAct from '../actions/DeactivedMemberAct'
import { Layout } from 'antd';
import { fromJS, Record, toJS } from 'immutable';

const { Header, Footer, Sider, Content } = Layout;

class ManageHead extends Component {

constructor(props, context) {
    super(props, context);
        this.searchPm = {deptCode:'', positionName: '', positionCode: '',page: 1,pageSize: 20};
        this.searchOutInfo = { employeeName: '', phone: '',page: 1,pageSize: 20};
    }

    onSearch = (val) => {
        const { getMemberInfoList } = this.props;
        this.searchPm = { ...this.searchPm, positionName: val, positionCode: val, page: 1 };
        getMemberInfoList(this.searchPm);
    }
    
    onClear = () => {
        this.searchPm = { ...this.searchPm, positionName: '', positionCode: '', page: 1 };
    }  
    
    onSearch_outinfo = (val) => {
        this.searchOutInfo = { ...this.searchOutInfo, employeeName: val, phone: val, page: 1 };
        this.refreshOutInfoList();
    } 
    refreshOutInfoList = () => {
        let { getMemberOutInfoList } = this.props;
        getMemberOutInfoList(this.searchOutInfo);
    }    
    render() {
        let { sidebar_visiable, record, SidebarVisiable,changetable } = this.props;
        let { positionName, positionCode} = this.searchPm;
        return (
                <div>
                    {
                    changetable == 2 ? 
                    <HeaderToManageComp {...this.props} 
                        SearchVal={positionName || positionCode}
                        onSearch={this.onSearch}
                        onChange={this.onChange}
                        onClear={this.onClear}/> : 
                    <HeaderToOutInfoComp {...this.props} 
                        SearchVal={positionName || positionCode}
                        onSearch={this.onSearch_outinfo}
                        onChange={this.onChange}
                        onClear={this.onClear}
                        refreshList={this.refreshOutInfoList}/> 
                    }
                </div>
        )
    }
}

const mapStateToProps = (state) =>  {   
    return {
        changetable: state.PersonManageRedu.toJS().changetable,
        state: state.TableRedu.toJS(),
    }
};

const mapDispatchToProps = (dispatch) => ({
    getMemberInfoList: (val) => {

        dispatch( actions.getMemberInfoList(val) )
    },
    getMemberOutInfoList: (val) => {

        dispatch( deactiveAct.getDeactivedList(val) )
    }
})

export default connect( mapStateToProps, mapDispatchToProps )(ManageHead)




 




