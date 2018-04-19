import React,{Component} from "react";
import { Modal, message,Spin } from '../../base/components/AntdComp';
import { connect } from 'react-redux';
import CompanyAct from '../actions/CompanyAct';
import EditCompanyComp from '../components/EditCompanyComp';

class AddCompanyCont extends Component{
    constructor(props, context) {
        super(props, context);

    }
    initData = () =>{
        const { getPositionDetail, positionId } = this.props;
        if (positionId) {
            getPositionDetail(positionId);
        }
    }

    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel, tablePaging } = this.props;
        handleSubmit(data).then(json => {
            if (json.status === 2000) {
                handleCancel();
                tablePaging();
            } ;
        });
    }

    render() {
        const { visible } = this.props;
        return (
            visible ?
                <EditCompanyComp
                    {...this.props}
                    onOk={this.handleSubmit}
                    initData={this.initData}
                />: null
        );
    }
}

AddCompanyCont.defaultProps = {
    title: "编辑职位",
}

const mapStateToProps = (state) => ({
    visible: state.CompanyRedu.get('edit_position_visiable'),
    loading: state.CompanyRedu.get('positionLoading'),
    position: state.CompanyRedu.get('position'),
    positionId: state.CompanyRedu.get('positionId'),
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleCancel: () => { 
        dispatch(CompanyAct.SidebarVisiable(false))
        dispatch(CompanyAct.EditPositionVisiable(false))
        
     },
    handleSubmit: (data) => { return dispatch(CompanyAct.EditPosition(data)) },
    getPositionDetail: (id) => { dispatch(CompanyAct.PositionDetail({ id })) },
})


export default connect(mapStateToProps,mapDispatchToProps)(AddCompanyCont);
