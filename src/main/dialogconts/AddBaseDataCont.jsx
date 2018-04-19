import React from 'react';
import { connect } from 'react-redux';
import AddBaseDataComp from '../components/AddBaseDataComp';
import actions from '../actions/BaseDataAct';
class AddBaseDataCont extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = ()=>{
        this.props.addRecord().then((res)=>{
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
            <AddBaseDataComp
                {...this.props}
                handleSubmit={this.handleSubmit}
            />
        </div>);
    }
}
AddBaseDataCont.defaultProps = {
    title: "新增职位",
    record:{

    }
}
const mapStateToProps = (state)=>({
    visible:state.BaseDataRedu.toJS().add_visiable,
    baseType:state.BaseDataRedu.toJS().baseType,
    loading:state.BaseDataRedu.toJS().dialogLoading,
    selectData:state.BaseDataRedu.toJS().selectData
});
const mapDispatchToProps = (dispatch)=>({
    addRecord:(data)=>dispatch(actions.addRecord(data)),
    handleCancel:()=>dispatch(actions.addDialog(false)),
    getCountrys:()=>dispatch(actions.getCountrys()),
    handleChange:{
        setRegion:(code)=>dispatch(actions.setRegion(code)),
        setProvince:(code)=>dispatch(actions.setProvince(code)),
        setCity:(code)=>dispatch(actions.setCity(code)),
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(AddBaseDataCont);