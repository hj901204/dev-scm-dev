import React,{Component} from "react";
import { Modal, message,Spin } from '../../base/components/AntdComp';
import { connect } from 'react-redux';
import CompanySetAct from '../actions/CompanySetAct';
import AddCompanyComp from '../../manage/components/AddCompanyComp';

class AddPositionCont extends Component{
    constructor(props, context) {
        super(props, context);

    }
    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel, tablePaging } = this.props;
        if (loading) {
            console.log("表单正在提交中。。。");
            return
        }
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 2000)) {
                console.log('新增公司成功!');
                handleCancel();
                tablePaging({key:''});
            } else if(json.status && (json.status === 4203)) {
                console.log('新增公司失败!');
            };
        });
    }
    render() {
        const { visible } = this.props;
        return (
            visible ?
                <AddPositionComp
                    {...this.props}
                    onOk={this.handleSubmit}
                />: null
        );
    }
}

AddPositionCont.defaultProps = {
    title: "新增职位",
}

const mapStateToProps = (state) => ({
    visible: state.CompanySetRedu.get('add_position_visiable'),
    loading: state.CompanySetRedu.get('positionLoading'),
})
const mapDispatchToProps = (dispatch) => ({
    handleCancel: () => { dispatch(CompanySetAct.AddPositionVisiable(false)) },
    handleSubmit: (data) => { return dispatch(CompanySetAct.AddPosition(data)) },
})


export default connect(mapStateToProps,mapDispatchToProps)(AddPositionCont);
