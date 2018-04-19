import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/Urls';
import { IMPORTEMPLOYEEREDU } from '../consts/ActTypes';

const actions = {
    TabLoading: (value) => (dispatch, getState) => {
        let state = getState()[IMPORTEMPLOYEEREDU].set('tabLoading', value);
        dispatch({ type: IMPORTEMPLOYEEREDU, state });
    },
    GetPositionList: (data,message) => (dispatch, getState) => {
        let { list, total, page, pageSize} = data;
        let state = getState()[IMPORTEMPLOYEEREDU].set('dataSource', list)
            .set("paging", { total, page, pageSize }).set("message",message);
        dispatch({ type: IMPORTEMPLOYEEREDU, state });
    },
    Record: (value) => (dispatch, getState) => {
        let state = getState()[IMPORTEMPLOYEEREDU].set('record', value);
        dispatch({ type: IMPORTEMPLOYEEREDU, state });
    },
    PositionList: () => (dispatch, getState) => {
        if (getState()[IMPORTEMPLOYEEREDU].get('tabLoading')) {
            console.log("表格正在加载中。。。");
            return
        };
        dispatch(actions.TabLoading(true));
        ReqApi.post({
            url: Urls.IMPORT_FILE,
        }).then((json) => {
            if(json.status && json.status == 4301){
                dispatch(actions.GetPositionList(json.data,json.message));
                dispatch(actions.TabLoading(false));
            }
        });
    },
}

export default actions;