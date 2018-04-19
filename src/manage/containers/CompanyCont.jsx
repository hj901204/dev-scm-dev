
import React, { Component } from "react";
import { connect } from 'react-redux';
import CompanyAct from '../actions/CompanyAct';
import PositionComp from '../containers/ManageCont';
import Sidebar from '../../base/components/SidebarWrapComp';
import AddCompanyCont from '../dialogconts/AddCompanyCont';
import EditCompanyCont from '../dialogconts/EditCompanyCont';
import ExampleComp from '../components/ExampleComp';
import { fromJS, Record } from 'immutable';
import {Spin} from '../../base/components/AntdComp';

class CompanyCont extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchPm = { status:'0',companyName: '', companyCode: '',page: 1,pageSize: 20};
    }

    tablePaging = (page) => {
        let { tabLoading, PositionList } = this.props;
        if (!tabLoading){
            if (typeof page === "number") {
                this.searchPm.page = page;
            } else {
                this.searchPm = { ...this.searchPm, ...page };
            };
            PositionList(this.searchPm)
        }
    }

    onSearch = (val) => {
        if (!this.props.tabLoading){
            this.searchPm = { ...this.searchPm, companyName: val, companyCode: val, page: 1 };
            this.tablePaging();
        }
    }
    
    onChange = (val) => {
        if (!this.props.tabLoading){
            this.searchPm = { ...this.searchPm, status:val, page: 1 };
            this.tablePaging();
        }
    }
    onClear = () => {
        this.searchPm = { ...this.searchPm, companyName: '', companyCode: '',status:'0', page: 1 };
        this.tablePaging();
    }
    render() {
        let { sidebar_visiable, SidebarVisiable,sidebar_loding} = this.props;
        return (
            <div className="manage-content">
                <PositionComp {...this.props}
                    tablePaging={this.tablePaging}
                    onSearch={this.onSearch}
                    onClear={this.onClear}
                    onChange={this.onChange}
                    SearchVal={this.searchPm.companyName}
                    statusVal={this.searchPm.status}
                />
                <Sidebar maskClosable={true}
                         side_visible={sidebar_visiable}
                         onClose={() => SidebarVisiable(false)}

                >
                    <Spin spinning={sidebar_loding}><ExampleComp {...this.props}  onClear={this.onClear}/></Spin>
                </Sidebar>
                <AddCompanyCont tablePaging={this.onClear} />
                <EditCompanyCont tablePaging={this.onClear} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.CompanyRedu.toJS()

};

const mapDispatchToProps = (dispatch) => ({
    Record: (id) => { dispatch(CompanyAct.Record({id})) },
    SearchPm: (value) => { dispatch(CompanyAct.SearchPm(value)) },
    SidebarVisiable: (value) => { dispatch(CompanyAct.SidebarVisiable(value)) },
    SidebarLoding:()=>{ dispatch(CompanyAct.SidebarLoding(true)) },
    AddPositionVisiable: () => { dispatch(CompanyAct.AddPositionVisiable(true)); },
    EditPositionVisiable: (id) => {dispatch(CompanyAct.EditPositionVisiable(true,id)); },
    ResetPassword:() => { dispatch(CompanyAct.ResetPassword()); },//重置密码
    PositionList: (pm) => { dispatch(CompanyAct.PositionList(pm)); },
    PositionDel: (authcode) => { return dispatch(CompanyAct.PositionDel({ authcode })); },
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCont);
