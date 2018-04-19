import { fromJS, Record } from 'immutable';
import * as AT from '../consts/ActTypes';

// let recode = Record({
//     activeKey:"position",
//     tabs:[{
//         title:"职位",
//         key:"position"
//     }]
// }), next_state;

let recode = Record({
    activeKey:"home",
    tabs:[{
        title:"员工管理",
        key:"home"
    }]
}), next_state;


export default ((state= new recode(),act)=>{
    switch(act.type){
        case AT.TAB_ADD:
            let index = state.tabs.findIndex((value, index, arr)=>{
                return value.key == act.tab.key;
            })
            if(index == -1){
                state.tabs.push(act.tab);
                return state
                .set("activeKey",act.tab.key)
                .set("tabs", state.tabs);
            }else{
                return state.set("activeKey",act.tab.key);
            }
        case AT.TAB_REMOVE:
            let _tabs = state.tabs.filter(pane => pane.key !== act.key),
                akey = act.activeKey;
            if(_tabs.length == 0){
                akey = "";
            }
            return state
            .set("activeKey",akey)
            .set("tabs", _tabs);
        case AT.TAB_CHANGE:
            return state.set("activeKey", act.activeKey);
        default:
            return state;
    }
});