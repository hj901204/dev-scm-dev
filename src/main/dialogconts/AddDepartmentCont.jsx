import React,{Component} from "react";
import { Modal, message } from "../../base/components/AntdComp";
import { connect } from 'react-redux';
import DepartmentAct from '../actions/DepartmentAct';
import AddDepartmentComp from '../components/AddDepartmentComp';

class AddDepartmentCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel, tablePaging } = this.props;
        if (loading) {
            // console.log("表单正在提交中。。。");
            return
        }
        handleSubmit(data).then(json => {
            if (json.status && (json.status === "2000")) {
                // console.log('新增职务成功!');
                handleCancel();
                //tablePaging({key:''});
            } else {
                // console.log('新增职务失败!');
            };
        });
    }
    render() {
        const { visible } = this.props;
        return (
            visible ?
                <AddDepartmentComp
                    {...this.props}
                    onOk={this.handleSubmit}
                /> : null
        );
    }
}

AddDepartmentCont.defaultProps = {
    title: "新增部门",
    width: 800,
}

const mapStateToProps = (state) => ({
    visible: state.DepartmentRedu.get('add_department_visiable'),
    loading: state.DepartmentRedu.get('departmentLoading'),
    pDeptName: state.DepartmentRedu.get('pDeptName'),
    deptMgr: state.DepartmentRedu.get('deptMgr'),
    detail: state.DepartmentRedu.get('detail'),
})
const mapDispatchToProps = (dispatch) => ({
    handleCancel: () => { dispatch(DepartmentAct.cancel(false)) },
    handleSubmit: (data) => { return dispatch(DepartmentAct.AddDepartment(data)) },
    //getFormSelect:()=>{ dispatch(DepartmentAct.getFormSelect()) },
    // getpDeptName:()=>{dispatch(DepartmentAct.pDeptName())},
    // getdeptMgr:()=>{dispatch(DepartmentAct.deptMgr())},
    getSelectData:()=>{dispatch(DepartmentAct.getSelectData(false))},
})


export default connect(mapStateToProps,mapDispatchToProps)(AddDepartmentCont);
