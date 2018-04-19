import React,{Component} from "react";
import { Modal, message } from "../../base/components/AntdComp";
import { connect } from 'react-redux';
import actions from '../actions/PersonalCenterAct';
import BindPhoneComp from '../components/BindPhoneComp';
// import TXT from '../languages';
// const T = TXT.POSITION;

class BindPhoneCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    handleSubmit = (data) => {
        let { handleSubmit, handleCancel } = this.props;
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 2000)) {
                // message.info('修改手机成功!')
                handleCancel();
            }
        });
    }
    
    render() {
        let { visible } = this.props;
        return (
            visible ?
                <BindPhoneComp
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
    visible: state.PersonalCenterRedu.get('bind_phone_visiable'),
    loading: state.PersonalCenterRedu.get('bind_phone_loading'),
})
const mapDispatchToProps = (dispatch) => ({
     sendPhoneCodeTo: (data) => { dispatch(actions.sendPhoneCode(data)) },
     handleCancel: () => { dispatch(actions.bindPhoneVisiable(false)) },
     handleSubmit: (data) => dispatch(actions.bindPhoneSubmit(data)),
})


export default connect(mapStateToProps,mapDispatchToProps)(BindPhoneCont);
