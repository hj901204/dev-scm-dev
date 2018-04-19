import { ReqApi } from '../../base/services/ReqApi'
import {GETDEAVTIVEMEMER} from '../consts/ActTypes'
import { MemberManage } from '../../base/consts/urls';


const actions = {
    GetDeactivedMemberInfoList: (val) => (dispatch, getState) => {
        const { list, page, pageSize, total } = val;
        let state = getState()[GETDEAVTIVEMEMER].set('outInfoData', list).set('paging', {page, pageSize, total} );
        dispatch( {type: GETDEAVTIVEMEMER, state} )
    },
    getDeactivedList: ( pm = {} ) => (dispatch, getState) =>{
        //缺少loading状态
        ReqApi.get({
            url: MemberManage.GET_DEACTIVEDMEMBER_LIST,
            pm
        }).then(json => {      
            dispatch(actions.GetDeactivedMemberInfoList(json.data));
        })
    }
}

export default actions