import React,{Component} from "react";
import { connect } from 'react-redux';
import SetOfficesAct from '../actions/SetOfficesAct';
import SetOfficesAnComp from '../components/SetOfficesAnComp';
import SetOfficesCont from '../dialogconts/SetOfficesCont'
import { fromJS, Record } from 'immutable';

class SetOfficesAnCont extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <SetOfficesAnComp {...this.props} />
                <SetOfficesCont/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>state.SetOfficesRedu.toJS();

const mapDispatchToProps = (dispatch) => ({
    SetOfficesVisiable: () => {
        dispatch(SetOfficesAct.SetOfficesVisiable(true));
    },
    ChangeOfficeAddress:()=>{
        dispatch(SetOfficesAct.ChangeOfficeAddress());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SetOfficesAnCont);
