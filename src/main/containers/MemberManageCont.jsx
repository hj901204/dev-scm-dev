import React, { Component } from 'react'

import TableList  from '../components/MemberInfoComp'
import DeactivedMemberTable  from './DeActivedMemberCont'

import TreeCont from './TreeCont'
import PersonManegeCont from './PersonManegeCont'
import PersonManageHeaderCont from './PersonManageHeaderCont'
import { Spin} from '../../base/components/AntdComp';

import { connect } from 'react-redux'
import actions from '../actions/MemberManageAct'
import { fromJS, Record, toJS } from 'immutable';

class MemberManageTable extends Component {
    constructor(props, context) {
        super(props, context); 
        this.searchVal = { deptCode:'', employeeName: '', phone: '',page: 1,pageSize: 10};
    }

    tablePaging = (page) => {
        let { tableLoading } = this.props;
        let { getMemberInfoList,state } = this.props;
        this.searchVal.deptCode = state.departinfo.departNum;
        this.searchVal.page = page;
        getMemberInfoList(this.searchVal);
    }

    changeTab = (val) => {
        if(val.changetable == 2){
            return (
                 <TableList className='manage-right'
                        state = {this.props.state} 
                        side_visible={val.side_visible}
                        checkedList = {this.props.checkedList} 
                        tablePaging={this.tablePaging}
                        {...this.props}
                 />  
            )
        }else {
            return (
                <DeactivedMemberTable />
            )
        }
    }
    render() {
       let { state, tabelcheck, PersonManageState, checkedList } = this.props;
        return (           
            <div className='manage-box'>
                <div className="person-manage-top">
                    <PersonManageHeaderCont />    
                </div>
                <div className="person-manage-bottom">
                    <div className="person-manger-left">
                        <Spin spinning={this.props.treeState.loading}>
                            <PersonManegeCont />
                            <TreeCont />
                        </Spin>
                    </div>
                    <div className="person-manger-right">
                        {
                            this.changeTab(PersonManageState, this.props)
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>  {   
    return {
        state: state.TableRedu.toJS(),
        PersonManageState: state.PersonManageRedu.toJS(),
        treeState: state.TreeRedu.toJS()
    }
};

const mapDispatchToProps = (dispatch) => ({
    checkedList: (len) => {
		dispatch( actions.checkedList(len) )
	},
    getMemberInfoList: (val) => {
        dispatch( actions.getMemberInfoList(val) )
    },
    getDetailsInfo: (userID) => {
        dispatch( actions.getDetailsInfo(userID) )
    },
    headerChange: (len) => {
        dispatch( actions.headerChange(len) )
    },
    onOpenSidebar:(value)=>{
        dispatch(actions.onOpenSidebar(value))
    }
})

export default connect( mapStateToProps, mapDispatchToProps )(MemberManageTable)




 




