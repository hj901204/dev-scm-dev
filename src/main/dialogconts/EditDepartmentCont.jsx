import React,{Component} from "react";
import { Modal, message } from "../../base/components/AntdComp";
import { connect } from 'react-redux';
import DepartmentAct from '../actions/DepartmentAct';
import EditDepartmentComp from '../components/EditDepartmentComp';

class AddDepartmentCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    initData = () =>{
        //const { loading, PositionDetail, positionId, handleCancel } = this.props;
        const { geteditdata, departmentId, handleCancel } = this.props;
        if (departmentId) {
            geteditdata(departmentId);
        }
    }
    
    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel, tablePaging } = this.props;
        if (loading) {
            // console.log("表单正在提交中。。。");
            return
        }
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 2000)) {
                // console.log('修改职务成功!');
                handleCancel();
                tablePaging({ key: '' });
            } else {
                // console.log('修改职务失败!');
            };
        });
    }
    render() {
        const { visible } = this.props;
        return (
            visible ?
                <EditDepartmentComp
                    {...this.props}
                    onOk={this.handleSubmit}
                    initData={this.initData}
                /> : null
        );
    }
}

AddDepartmentCont.defaultProps = {
    title: "编辑部门",
    width: 800,
}

const mapStateToProps = (state) => ({
    visible: state.DepartmentRedu.get('edit_department_visiable'),
    deptMgr: state.DepartmentRedu.get('deptMgr'),
    detail: state.DepartmentRedu.get('detail'),
    pDeptName: state.DepartmentRedu.get('pDeptName'),
    loading: state.DepartmentRedu.get('departmentLoading'),
    Record: state.DepartmentRedu.get('record'),
    departmentId: state.DepartmentRedu.get('DepartmentId'),
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleCancel: (id) => { dispatch(DepartmentAct.edit_visiableLoading(false,id)) },
    handleSubmit: (data) => { return dispatch(DepartmentAct.EditDepartment(data)) },
    // getpDeptName:()=>{dispatch(DepartmentAct.pDeptName())},
    // getdeptMgr:()=>{dispatch(DepartmentAct.deptMgr())},
    getSelectData:()=>{dispatch(DepartmentAct.getSelectData(false))},
    geteditdata: (id) => { dispatch(DepartmentAct.getEditData({id})) },
})


export default connect(mapStateToProps,mapDispatchToProps)(AddDepartmentCont);
