import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import * as AT from '../consts/ActTypes';


const actions = {
    TabAdd: (tab) => ({
        type: AT.TAB_ADD,
        tab
    }),
    TabRemove: (key,activeKey) => ({
        type: AT.TAB_REMOVE,
        key,
        activeKey
    }),
    TabChange: (activeKey) => ({
        type: AT.TAB_CHANGE,
        activeKey
    }),
}

export default actions