import React from 'react';
import { connect } from 'react-redux';
import DepartmentAct from '../actions/DepartmentAct';
import DepartmentDetailComp from '../components/DepartmentDetailComp';
import { Spin } from '../../base/components/AntdComp'


class DepartmentDetailCont extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){
        let {side_Loading}=this.props;
        return(
            <Spin spinning={side_Loading}>
                <DepartmentDetailComp 
                {...this.props}
            />
            </Spin>
            
        )
    }

}

let mapStateToProps =(state)=>({
    detail: state.DepartmentRedu.get('detail'),
})

let mapDispatchToProps=(dispatch)=>({
    onEditDepartment:(id)=>{dispatch(DepartmentAct.edit_visiableLoading(true,id))},
    getdetail:()=>{dispatch(DepartmentAct.detail())},
    onsetup:(id)=>{return dispatch(DepartmentAct.setUpDpartment(id))},
    SidebarVisiable: (value) => {dispatch(DepartmentAct.closeSidebar(value))},

})

export default connect(mapStateToProps,mapDispatchToProps)(DepartmentDetailCont);