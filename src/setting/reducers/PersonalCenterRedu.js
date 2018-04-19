import { fromJS, Record  } from 'immutable'
import { PERSONALCENTERREDU } from '../consts/ActTypes'

let initialData = fromJS({
    personalInfo: {},
    bind_phone_visiable:false,
    bind_phone_loading:false,
    change_psw_nextstep_visiable:false,
    change_psw_loading:false,
    change_psw_submit_visiable:false,
    pswOld:{
        password:null,
    },
    pswNew:{
        password:null,
        newPassword:null,
    },
    bindPhone:{
        phoneNo:null,
        SMSCaptcha:null
    }
});

//reducer
const PersonalCenterRedu = ( state = initialData, action) => {
    switch (action.type) {
        // 获取 部门成员 列表
        case PERSONALCENTERREDU: 
            return action.state;
        default:
            return state;
    }
}

export default PersonalCenterRedu