import React,{Component} from 'react'
import AccountResetComp from '../components/AccountResetComp'
import PwdResetComp from '../components/PwdResetComp'
import ResetHeaderComp from '../components/ResetHeaderComp'
import { connect } from 'react-redux'
import actions from '../actions/ResetPwdAct'
import { fromJS,Record } from 'immutable';


class AccountResetCont extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render(){
        const {nextStepVisible} = this.props;
        return (
            <div>
                <ResetHeaderComp {...this.props}/>
              {nextStepVisible ? <AccountResetComp {...this.props}/>:<PwdResetComp {...this.props}/>};
            </div>
        );
    }
}

const mapStateToProps = (state) => state.ResetPwdRedu.toJS();

const mapDispatchToProps = (dispatch) => ({
    submitPwd: (data) => {dispatch(actions.submitPwd(data))},
    nextStep: (data) => {dispatch(actions.nextStep(data))},
    sendPhoneCodeTo:(data) => {dispatch(actions.sendPhoneCodeTo(data))},
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountResetCont);