import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import { SITEREDU } from '../consts/ActTypes';

const actions = {
    TabLoading: (value) => (dispatch, getState) => {
        let state = getState()[SITEREDU].set('tabLoading', value);
        dispatch({ type: SITEREDU, state });
    },
    SiteLoading: (value) => (dispatch, getState) => {
        let state = getState()[SITEREDU].set('siteLoading', value);
        dispatch({ type: SITEREDU, state })
    },
    AddSiteVisiable: (value) => (dispatch, getState) => {
        let state = getState()[SITEREDU].set('add_site_visiable', value);
        dispatch({ type: SITEREDU, state });
    },
    EditSiteVisiable: (value, id) => (dispatch, getState) =>  {
        let state = getState()[SITEREDU].set('edit_site_visiable', value);
        if (id||id===null) state = state.set('siteId', id);
        dispatch({ type: SITEREDU, state });
    },
    GetSiteList: (json) => (dispatch, getState) => {
        let { total, page, pageSize } = json;
        let state = getState()[SITEREDU].set('dataSource', json.data.list)
            .set("paging", { total, current: page, pageSize });
        dispatch({ type: SITEREDU, state });
    },
    SiteList: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.TabLoading(true));
        return ReqApi.post({
            url: Urls.SITE_LIST,
            pm
        }).then((json) => {
            if (json.status === 2000) {
                dispatch(actions.GetSiteList(json));
            }    
            dispatch(actions.TabLoading(false));
            return json;
        });
    },
    SiteDel: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.TabLoading(true));
        return ReqApi.get({
            url: Urls.SITE_DEL,
            pm
        }).then(json => {
            dispatch(actions.TabLoading(false));
            return json;
        })
    },
}

export default actions;