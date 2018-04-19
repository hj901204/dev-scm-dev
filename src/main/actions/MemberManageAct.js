import { ReqApi } from '../../base/services/ReqApi'
import { MEMBERCHANGEREDU,PERSONMANAGE } from '../consts/ActTypes'
import { MemberManage } from '../../base/consts/urls';

const actions = {
    //loading
    tableLoading: (value) => (dispatch, getState) => {
        let state = getState()[MEMBERCHANGEREDU].set('tableLoading', value);
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    // 被选中数量
    checkedList: (len) => (dispatch, getState) => {
        let state = getState()[MEMBERCHANGEREDU].set('checkedLength', len);
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    GetInfoList: (val) => (dispatch, getState) => {
        const { list, page, pageSize, total } = val;
        let state = getState()[MEMBERCHANGEREDU].set('dataSource',list).set('paging', {page, pageSize, total}).set('headerBar_visible', ["none","block"]);
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    GetInfoDetails: (val) => (dispatch, getState) => {
        let state = getState()[MEMBERCHANGEREDU].set('infoDetials', val);
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    DepartInfo: (val) => (dispatch, getState) => {
        let state = getState()[MEMBERCHANGEREDU].set('departinfo', val);
        let data = {
            deptCode: val.key,
            employeeName: '',
            phone: '',
            page: 1,
            pageSize: 5
        }
        dispatch(actions.getMemberInfoList(data));
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    // 获取员工列表
    getMemberInfoList: ( pm = {} ) => (dispatch, getState) =>{
        dispatch( actions.tableLoading(true) )     
        ReqApi.get({
            url: MemberManage.POSITION_INFO_LIST,
            pm
        }).then(json => {
            if(json.status == 2000){
                dispatch(actions.GetInfoList(json.data));
            }    
            dispatch(actions.tableLoading(false))      
        })
    },


    // 获取员工详细信息
    getDetailsInfo: (pm = {}) => (dispatch, getState) => {
        ReqApi.get({
            url: MemberManage.GET_DETAILS_INFO,
            pm
        }).then(json => {
            dispatch(actions.GetInfoDetails(json.data));
        })
    },
    headerChange: (len) => (dispatch, getState) => {
        let state = '';
        if(len>0){
            state = getState()[MEMBERCHANGEREDU].set('headerBar_visible', ["block","none"]);
        }else {
            state = getState()[MEMBERCHANGEREDU].set('headerBar_visible', ["none","block"]);
        }      
        dispatch( {type: MEMBERCHANGEREDU, state} )
    },
    onOpenSidebar:(value)=> (dispatch, getState) => {
        let state = getState()[PERSONMANAGE].set('side_visible', value);
        dispatch( {type: PERSONMANAGE, state} )
    },
}

export default actions