import { ReqApi } from '../../base/services/ReqApi'
import { ManageUrls } from '../../base/consts/Urls';
import { getData } from '../consts/StoreConfig';
import { COMPANYREDU } from '../consts/ActTypes';
import {message} from '../../base/components/AntdComp';
const actions = {
    TabLoading: (value) => {
        let state = getData(COMPANYREDU).setIn(['tabLoading'], value);
        return { type: COMPANYREDU, state }
    },
    PositionLoading: (value) => {
        let state = getData(COMPANYREDU).setIn(['positionLoading'], value);
        return { type: COMPANYREDU, state }
    },
    SidebarVisiable: (value) => {
        let state = getData(COMPANYREDU).setIn(['sidebar_visiable'], value);
        return { type: COMPANYREDU, state }
    },
    AddPositionVisiable: (value) => {
        let state = getData(COMPANYREDU).setIn(['add_position_visiable'], value);
        return { type: COMPANYREDU, state }
    },

    EditPositionVisiable: (value,id)=> {
        let state = getData(COMPANYREDU).setIn(['edit_position_visiable'], value);
        if (id) state = state.setIn(['positionId'], id);
       // console.log(id)
        return { type: COMPANYREDU, state }


    },

    Record: (pm={})=>(dispatch,getState) => {
        ReqApi.get({
            url: ManageUrls.MANAGE_DETAIL,
            pm
        }).then((json) => {
            dispatch(actions.GetRecord(json.data));
            dispatch(actions.SidebarLoadingHide(false));


        });

    },
    GetRecord:(data)=>{
        let state = getData(COMPANYREDU).setIn(['record'], data);
        return { type: COMPANYREDU, state }
    },
    GetEditData:(data)=>{
        let state = getData(COMPANYREDU).setIn(['editdata'], data);
        return { type: COMPANYREDU, state }
    },

    SidebarLoding:(value)=>{
        let state = getData(COMPANYREDU).setIn(['sidebar_loding'], value);
        return { type: COMPANYREDU, state }
    },
    SidebarLoadingHide:(value)=>{
        let state = getData(COMPANYREDU).setIn(['sidebar_loding'], value);
        return { type: COMPANYREDU, state }
    },
    SearchPm: (value) => {
        let state = getData(COMPANYREDU).setIn(['searchPm'], value);
        return { type: COMPANYREDU, state }
    },
    Position: (value) => {
        let telephoneO={telephoneO:value.telephoneNumber.substr(0,3)}
        let telephoneN={telephoneN:value.telephoneNumber.substr(5)}
        Object.assign(value, telephoneO,telephoneN);//合并对象
        let state = getData(COMPANYREDU).setIn(['position'], value);
        return { type: COMPANYREDU, state }
    },


    GetPositionList: (data) => {
        let { list, total, page, pageSize } = data;

        let statusO={status:'启用'}
        let statusN={status:'停用'}
        for(let x in list){
            if(list[x].status=='1'){
                Object.assign(list[x],statusO );
            }else{
                Object.assign(list[x],statusN );
            }

        }



        //data.list[0].status
        let state = getData(COMPANYREDU).set('dataSource', list)
            .set("paging", { total, page, pageSize });
        return { type: COMPANYREDU, state }
    },



    PositionList: (pm = {}) => (dispatch, getState) => {

        dispatch(actions.TabLoading(true));
        ReqApi.get({
            url: ManageUrls.MANAGE_LIST,
            pm
        }).then((json) => {
            dispatch(actions.GetPositionList(json.data));
            dispatch(actions.TabLoading(false));
            return json;
        });
    },
    PositionDetail: (pm = {}) => (dispatch, getState) => {
        if (getData(COMPANYREDU).get('positionLoading')) {
           // console.log("表格正在加载中。。。");
            return
        };
        if (pm.id && (pm.id === getData(COMPANYREDU).getIn(['position','id']))) {
           // console.log("选中对象和上次相同。。。");
            return
        }
        dispatch(actions.PositionLoading(true));
        ReqApi.post({
            url: ManageUrls.MANAGE_DETAIL,
            pm
        }).then(json => {
            dispatch(actions.Position(json.data));
            dispatch(actions.PositionLoading(false));
        })
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
    EditPosition: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.PositionLoading(true));
        return ReqApi.post({
            url: ManageUrls.MANAGE_UPDATE,
            pm
        }).then(json => {
            dispatch(actions.PositionLoading(false));
            return json
        })
    },
    PositionDel: (pm = {}) => (dispatch, getState) => {
        dispatch(actions.TabLoading(true));
        return ReqApi.get({
            url: ManageUrls.MANAGE_STATUS,
            pm
        }).then(json => {
            dispatch(actions.TabLoading(false));
            dispatch(actions.SidebarVisiable(false))
            return json
        })
    },
    ResetPassword:(pm = {}) => (dispatch, getState) => {
    return ReqApi.get({
        url: ManageUrls.MANAGE_RESET,
        pm
    }).then(json => {
        if(json.status && (json.status === 2000)){
            message.success('This is a message of success');
        }else if(json.status && (json.status === 4206)){
            message.error('This is a message of error');
        }

    })
},
}

export default actions