import React, { Component } from "react";
import { connect } from 'react-redux';
import { message } from 'antd';
import PositionAct from '../actions/PositionAct';
import PositionComp from '../components/PositionComp';
import AddPositionCont from '../dialogconts/AddPositionCont';
import EditPositionCont from '../dialogconts/EditPositionCont';
import TXT from '../languages';
const T = TXT.POSITION;

class PositionCont extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchPm = { positionName: '', positionCode: '',page: 1,pageSize: 20};
    }
    tablePaging = (page) => {
        const { tabLoading, PositionList } = this.props;
        if (!tabLoading){
            if (typeof page === "number") {
                this.searchPm.page = page;
            } else {
                this.searchPm = { ...this.searchPm, ...page };
            };
            PositionList(this.searchPm);
        }
    }
    onSearch = (val) => {
        if (!this.props.tabLoading){
            this.searchPm = { ...this.searchPm, positionName: val, positionCode: val, page: 1 };
            this.tablePaging();
        }
    }
    onClear = () => {
        this.searchPm = { ...this.searchPm, positionName: '', positionCode: '', page: 1 };
        this.tablePaging();
    }
    render() {
        const { sidebar_visiable, record, SidebarVisiable } = this.props;
        const { positionName, positionCode} = this.searchPm;
        return (
            <div className="manage-content">
                <PositionComp {...this.props}
                    SearchVal={positionName || positionCode}
                    tablePaging={this.tablePaging}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    onClear={this.onClear}
                />
                <AddPositionCont tablePaging={this.onClear} />
                <EditPositionCont tablePaging={this.onClear} />
            </div>
        );
    }
}



const mapStateToProps = (state) => state.PositionRedu.toJS();

const mapDispatchToProps = (dispatch) => ({
    AddPositionVisiable: () => { dispatch(PositionAct.AddPositionVisiable(true)); },
    EditPositionVisiable: (id) => { dispatch(PositionAct.EditPositionVisiable(true, id)); },
    PositionList: (pm) => dispatch(PositionAct.PositionList(pm)),
    PositionDel: (positionNumber) => dispatch(PositionAct.PositionDel({ positionNumber })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PositionCont);
