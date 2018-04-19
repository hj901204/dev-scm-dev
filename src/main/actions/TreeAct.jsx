/**
 * Created by MW on 2017/3/13.
 */
import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import { TREE } from '../consts/ActTypes';
import PersonMangerAct from '../actions/PersonManegeAct'
import MemberManageAct from '../actions/MemberManageAct'
let actions = {
    reqJson:{
        conditions: [
            {
                field: "deptNo",
                value: "",
                operation: 1
            },
            {
                field: "deptName",
                value: "",
                "operation": 1
            }
        ],
        relations: "deptNo or deptName",
        status: ""
    },
    getDepartments: (pm = {}) => (dispatch, getState) => {
        return ReqApi.post({
            url: Urls.DEPARTMENT_LIST,
            pm:actions.reqJson
        }).then((json) => {
                if (json.status == 2000){
                    dispatch(actions.setData([json.data]));
                }
        });
    },
    setData: (val) => (dispatch, getState) => {
        let state = getState()[TREE].set('data', val).set('loading',false);
        dispatch({type: TREE, state});
    },
    onSelect: (info) => (dispatch, getState) => {
        let val = {
            key: info.node.props.id,
            departNum: info.node.props.children? info.node.props.children.length : 0,
            departLeader: info.node.props.deptManager,
            departName: info.node.props.deptName
        };
        dispatch(PersonMangerAct.disableEmployees(2,2));
        dispatch(MemberManageAct.DepartInfo(val));
    }
}



export default actions