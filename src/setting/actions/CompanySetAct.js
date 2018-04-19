import { ReqApi } from '../../base/services/ReqApi'
import { Urls ,ManageUrls} from '../../base/consts/Urls'
import { COMPANYSETREDU } from '../consts/ActTypes'
import { getData } from '../data/StoreConfig';

const actions = {
    // 被选中数量
    GetPersonalInfoDetails: (data) => (dispatch, getState) => {
        let state = getState()[COMPANYSETREDU].set('enterpriseInfo', data);
        dispatch( {type: COMPANYSETREDU, state} )
    },

    getEnterpriseInfo: () => (dispatch, getState) => {
        // 获取登录 个人信息
        ReqApi.get({
            url: Urls.SET_ENTERPRISE_INFO,
        }).then(json => {
          dispatch(actions.GetPersonalInfoDetails(json.data));
        })
    },

    AddPositionVisiable: (value) => {
        let state = getData(COMPANYSETREDU).setIn(['add_position_visiable'], value);
        return { type: COMPANYSETREDU, state }
    },
    AddPosition: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.PositionLoading(true));
        return ReqApi.post({
            url: ManageUrls.MANAGE_ADD,
            pm
        }).then(json => {
            dispatch(actions.PositionLoading(false));
            return json
        })
    },
    PositionLoading: (value) => {
        let state = getData(COMPANYSETREDU).setIn(['positionLoading'], value);
        return { type: COMPANYSETREDU, state }
    },

}

export default actions