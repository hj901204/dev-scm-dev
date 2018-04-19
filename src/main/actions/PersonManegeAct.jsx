import { PERSONMANAGE } from '../consts/ActTypes'
import memberManageAct from '../actions/MemberManageAct'

const actions = {
        organizationChart: () => (dispatch, getState) => {
            let TreeReduFirst = getState().TreeRedu._root.entries[0][1][0];
            let val = {
                key: TreeReduFirst.id,
                departNum: TreeReduFirst.children? TreeReduFirst.children.length : 0,
                departLeader: TreeReduFirst.deptManager,
                departName: TreeReduFirst.deptName
            };
            dispatch(actions.disableEmployees(2,2));
            dispatch(memberManageAct.DepartInfo(val));
        },
     disableEmployees: (e,active) => (dispatch, getState) => {
        let flag = 1;
        switch (e){
            case 1:
                flag = 1;
                break;
            case 2:
                flag = 2;
                break;
            default :
                flag = 1;
        }
        let selectDisEmployees,selectOrgChart;
        switch (active) {
            case 1:
                selectDisEmployees = false;
                selectOrgChart = true;
                break;
            case 2:
                selectDisEmployees = true;
                selectOrgChart = false;
                break;
            default :
                selectDisEmployees = getState().PersonManageRedu._root.entries[2][1];
                selectOrgChart = getState().PersonManageRedu._root.entries[3][1];
        }
        let state = getState()[PERSONMANAGE].set('changetable', flag).set('selectDisEmployees',!selectDisEmployees).set('selectOrgChart',!selectOrgChart);
        dispatch({type: PERSONMANAGE, state})
    }
}


export default actions;
