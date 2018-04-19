import React from 'react'
import DepartmentComp from '../components/DepartmentComp'
import Sidebar from '../../base/components/SidebarWrapComp';
import { connect } from 'react-redux'
import actions from '../actions/DepartmentAct';
import AddDepartmentCont from '../dialogconts/AddDepartmentCont';
import EditDepartmentCont from '../dialogconts/EditDepartmentCont';
import { fromJS, Record } from 'immutable';
import DepartmentDetailCont from '../dialogconts/DepartmentDetailCont';

class DepartmentCont extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { side_visible, record, side_Loading, SidebarVisiable } = this.props;
        return (
            <div className="manage-content">
                <DepartmentComp {...this.props}
                    tablePaging={this.tablePaging}
                    onSearch={this.onSearch}
                />
                <Sidebar maskClosable={true}
                    side_visible={side_visible}
                    onClose={() => SidebarVisiable(false)}
                >
                    <DepartmentDetailCont side_Loading={side_Loading} />
                    
                </Sidebar>
                <AddDepartmentCont tablePaging={this.tablePaging} />
                <EditDepartmentCont tablePaging={this.tablePaging} />
            </div>
        )
    }

}


const select = (state) => state.DepartmentRedu.toJS();
const mapDispatchToProps = (dispatch) => ({
    // eatApple: (id) => {
    //     dispatch(actions.eatApple(id))
    // },
    initlist: (pm) => {
        dispatch(actions.getDepartmentList(pm))
    },
    OpenModal: () => {
        dispatch(actions.openAddmodal(true))
    },
    SidebarVisiable: (value) => {
        dispatch(actions.closeSidebar(value))
    },
    onOpenSidebar: (tag) => {
        dispatch(actions.opensidebar(tag))
    }

})
export default connect(select, mapDispatchToProps)(DepartmentCont)