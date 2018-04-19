import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import {ADDRESSREDU} from '../consts/ActTypes';

const actions = {
    TabLoading: (value) =>(dispatch,getState)=>{
        let state = getState()[ADDRESSREDU].set('tabLoading',value);
        dispatch({type:ADDRESSREDU,state});
    },
    AddressLoading: (value) =>(dispatch,getState)=> {
        let state = getState()[ADDRESSREDU].set('addressLoading', value);
        dispatch({ type: ADDRESSREDU, state })
    },
    AddAddressVisiable: (value) =>(dispatch,getState)=>{
        let state = getState()[ADDRESSREDU].set('add_address_visiable', value);
        dispatch({ type: ADDRESSREDU, state });
    },
    EditAddressVisiable: (value,id) =>(dispatch,getState)=>{
        let state = getState()[ADDRESSREDU].set('edit_address_visiable', value);
        if (id||id===null) state = state.set('addressId', id);
        dispatch({ type: ADDRESSREDU, state });
    },
    Address: (data) =>(dispatch,getState)=>{
        data.businessValue = [];
        if(data.isMag == 1) //经营
            data.businessValue.push("isMag");
        if(data.isRep == 1) //收货
            data.businessValue.push("isRep");
        if(data.isSog == 1) //发货
            data.businessValue.push("isSog");
        if(data.isBil == 1) //开票
            data.businessValue.push("isBil");
        let state = getState()[ADDRESSREDU].set('address', data);
        dispatch({ type: ADDRESSREDU, state });
    },
    AddressDetail: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.AddressLoading(true));
        return ReqApi.get({
            url: Urls.ADDRESS_DETAIL,
            pm
        }).then(json => {
            if(json.status === 2000){
                let _data = json.data.list[0];
                dispatch(actions.Address(_data));
            }
            dispatch(actions.AddressLoading(false));
            return json;
        })
    },
    GetAddressList: (data) =>(dispatch,getState)=>{
        let { list, total, page, pageSize } = data;
        let state = getState()[ADDRESSREDU].set('dataSource', list)
            .set("paging", { total, current: page, pageSize });
        dispatch({ type: ADDRESSREDU, state });
    },
    AddressList: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.TabLoading(true));
        return ReqApi.get({
            url: Urls.ADDRESS_LIST,
            pm
        }).then((json) => {
            if(json.status===2000){
                dispatch(actions.GetAddressList(json.data));
            }
            dispatch(actions.TabLoading(false));
            return json;
        });
    },
    AddAddress: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.AddressLoading(true));
        return ReqApi.post({
            url: Urls.ADDRESS_ADD,
            pm
        }).then(json => {
            dispatch(actions.AddressLoading(false));
            return json
        })
    },
    EditAddress: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.AddressLoading(true));
        let addressCode=getState()[ADDRESSREDU].get('addressId');
        return ReqApi.post({
            url: Urls.ADDRESS_EDIT,
            pm:{...pm,addressCode}
        }).then(json => {
            dispatch(actions.AddressLoading(false));
            return json
        })
    },
    AddressDel: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.TabLoading(true));
        return ReqApi.post({
            url: Urls.ADDRESS_DEL,
            pm
        }).then(json => {
            dispatch(actions.TabLoading(false));
            return json
        })
    },
    AddressDisable:(pm={})=>(dispatch,getState)=>{
        dispatch(actions.TabLoading(true));
        return ReqApi.post({
           url:Urls.ADDRESS_ISDISABLE,
           pm
        }).then(json=>{
            dispatch(actions.TabLoading(false));
            return json
        })
    }
}

export default actions