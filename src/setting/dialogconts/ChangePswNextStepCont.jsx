import React,{Component} from "react";
import { Modal, message } from "antd";
import { connect } from 'react-redux';
import actions from '../actions/PersonalCenterAct';
import ChangePswNextStepComp from '../components/ChangePswNextStepComp';
// import TXT from '../languages';
// const T = TXT.POSITION;

class ChangePswNextStepCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    handleSubmit = (data) => {
        let { changePswNextStep, handleCancel,changePswSubmitVisiable } = this.props;
        
        changePswNextStep(data).then(json => {
            if (json.status === 2000) {
                // message.info('修改手机成功!')
                handleCancel();
                changePswSubmitVisiable()
                
            }
        });
    }
    
    render() {
        let { visible } = this.props;
        return (
            visible ?
                <ChangePswNextStepComp
                    {...this.props}
                    onOk={this.handleSubmit}
                /> : null
        );
    }
}

// BindPhoneCont.defaultProps = {
//     title: T.ADD,
// }


const mapStateToProps = (state) => ({
    visible: state.PersonalCenterRedu.get('change_psw_nextstep_visiable'),
    loading: state.PersonalCenterRedu.get('change_psw_loading'),
})
const mapDispatchToProps = (dispatch) => ({
     handleCancel: () => { dispatch(actions.changePswNextstepVisiable(false)) },
     changePswSubmitVisiable: () => { dispatch(actions.changePswSubmitVisiable(true)) },
     changePswNextStep: (data) => dispatch(actions.changePswNextStep(data)),
})


export default connect(mapStateToProps,mapDispatchToProps)(ChangePswNextStepCont);
