import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/Urls';
import { BASEDATAREDU } from '../consts/ActTypes';

const actions = {
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@刷新页面@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    getList:(pm = {})=>(dispatch,getState)=>{
        dispatch(actions.tableLoading(true));
        ReqApi.get({
            url: Urls.BASEDATA[getState()[BASEDATAREDU].get("baseType")].getList,
            pm
        }).then((json) => {
            dispatch(actions.tableLoading(false));
            let state = getState()[BASEDATAREDU].setIn(["dataSource"],json.data.list);
            state = state.setIn(["paging"],{page:json.data.page,pageSize:json.data.pageSize,total:json.data.total});
            dispatch({type:BASEDATAREDU , state});
        },(json)=>{
            dispatch(actions.tableLoading(false));
        });
    },
    selectType:(type)=>(dispatch,getState)=>{    //选择基础数据的类型
        let state = getState()[BASEDATAREDU].setIn(["baseType"],type);
        dispatch({type:BASEDATAREDU , state});
        dispatch(actions.getList());
    },
    refreshTable:(page)=>(dispatch,getState)=>{
        let state = getState()[BASEDATAREDU].setIn(["searchPm"],page);
        dispatch({type:BASEDATAREDU , state});
        dispatch(actions.getList(page));
    },
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@loading和dialog@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    tableLoading:(bool)=>(dispatch,getState)=>{
        let state = getState()[BASEDATAREDU].setIn(["tableLoading"],bool);
        dispatch({type:BASEDATAREDU , state});
    },
    dialogLoading:(bool)=>(dispatch,getState)=>{
        let state = getState()[BASEDATAREDU].setIn(["dialogLoading"],bool);
        dispatch({type:BASEDATAREDU , state});
    },
    addDialog:(bool)=>(dispatch,getState)=>{
        let state = getState()[BASEDATAREDU].setIn(["add_visiable"],bool);
        state = state.setIn(["selectData","region"],[]);
        state = state.setIn(["selectData","province"],[]);
        state = state.setIn(["selectData","city"],[]);
        dispatch({type:BASEDATAREDU , state});
    },
    editDialog:(bool)=>(dispatch,getState)=>{
        let state = getState()[BASEDATAREDU].setIn(["edit_visiable"],bool);
        state = state.setIn(["selectData","region"],[]);
        state = state.setIn(["selectData","province"],[]);
        state = state.setIn(["selectData","city"],[]);
        dispatch({type:BASEDATAREDU , state});
    },
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@操作数据@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    addRecord:(data)=>(dispatch,getState)=>{
        dispatch(actions.dialogLoading(true));
        return ReqApi.post({
            url: Urls.BASEDATA[getState()[BASEDATAREDU].get("baseType")].add,
        }).then((json) => {
            dispatch(actions.dialogLoading(false));
            return json;
        });
    },
    editRecord:(data)=>(dispatch,getState)=>{
        dispatch(actions.dialogLoading(true));
        return ReqApi.post({
            url: Urls.BASEDATA[getState()[BASEDATAREDU].get("baseType")].updata,
        }).then((json) => {
            dispatch(actions.dialogLoading(false));
            return json;
        });
    },
    getRecord:(code)=>(dispatch,getState)=>{
        dispatch(actions.editDialog(true));
        dispatch(actions.dialogLoading(true));
        ReqApi.get({
            url: Urls.BASEDATA[getState()[BASEDATAREDU].get("baseType")].getDetail,
        }).then((json) => {
            dispatch(actions.dialogLoading(false));
            let state = getState()[BASEDATAREDU].setIn(["record"],json.data);
            dispatch({type:BASEDATAREDU , state});
        });
    },
    deleteItem:(code)=>(dispatch,getState)=>{
        return ReqApi.post({
            url: Urls.BASEDATA[getState()[BASEDATAREDU].get("baseType")].delete,
        }).then((json) => {
            return json;
        });
    },
    clearSearch:()=>(dispatch,getState)=>{
        let pageSize = getState()[BASEDATAREDU].get("searchPm").pageSize;
        let state = getState()[BASEDATAREDU].setIn(["searchPm"],{
            page:1,
            pageSize
        });
        dispatch({type:BASEDATAREDU , state});
    },
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@获取下拉数据@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    getCountrys:()=>(dispatch,getState)=>{
        ReqApi.get({
            url: Urls.COUNTRY_SELECTED,
        }).then((json) => {
            let state = getState()[BASEDATAREDU].setIn(["selectData","country"],json.data.list);
            dispatch({type:BASEDATAREDU , state});
        });
    },
    setRegion:(code)=>(dispatch,getState)=>{
        ReqApi.get({
            url: Urls.REGION_SELECTED,
            code
        }).then((json) => {
            let state = getState()[BASEDATAREDU].setIn(["selectData","region"],json.data.list);
            dispatch({type:BASEDATAREDU , state});
        });
    },
    setProvince:(code)=>(dispatch,getState)=>{
        ReqApi.get({
            url: Urls.PROVINCE_SELECTED,
            code
        }).then((json) => {
            let state = getState()[BASEDATAREDU].setIn(["selectData","province"],json.data.list);
            dispatch({type:BASEDATAREDU , state});
        });
    },
    setCity:(code)=>(dispatch,getState)=>{
        ReqApi.get({
            url: Urls.CITY_SELECTED,
            code
        }).then((json) => {
            let state = getState()[BASEDATAREDU].setIn(["selectData","city"],json.data.list);
            dispatch({type:BASEDATAREDU , state});
        });
    },
}
export default actions;