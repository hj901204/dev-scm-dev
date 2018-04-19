import React from 'react';
import { connect } from 'react-redux';
import EditBaseDataComp from '../components/EditBaseDataComp';
import actions from '../actions/BaseDataAct';
class EditBaseDataCont extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = ()=>{
        this.props.editRecord().then((res)=>{
            if(res.status === 2000){
                this.props.handleCancel();//退出弹出框
                this.props.clearSearch();//清空筛选条件
            }else{
                let msg = "";
                res.message.map((item)=>{
                    msg += item.field === null ? item.msg : '';
                })
            }
        });
    }
    render(){
        return (<div>
            <EditBaseDataComp
                {...this.props}
                handleSubmit={this.handleSubmit}
            />
        </div>);
    }
}
EditBaseDataCont.defaultProps = {
    title: "编辑",
}
const mapStateToProps = (state)=>({
    visible:state.BaseDataRedu.toJS().edit_visiable,
    baseType:state.BaseDataRedu.toJS().baseType,
    loading:state.BaseDataRedu.toJS().dialogLoading,
    record:state.BaseDataRedu.toJS().record,
    selectData:state.BaseDataRedu.toJS().selectData
});
const mapDispatchToProps = (dispatch)=>({
    editRecord:(data)=>dispatch(actions.editRecord(data)),
    handleCancel:()=>dispatch(actions.editDialog(false)),
    getCountrys:()=>dispatch(actions.getCountrys()),
    handleChange:{
        setRegion:(code)=>dispatch(actions.setRegion(code)),
        setProvince:(code)=>dispatch(actions.setProvince(code)),
        setCity:(code)=>dispatch(actions.setCity(code)),
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(EditBaseDataCont);