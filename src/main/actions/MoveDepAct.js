import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import { MOVEDEPREDU } from '../consts/ActTypes';

const actions={
    MoveDepLoading:(value)=>(dispatch,getState)=>{
        let state = getState()[MOVEDEPREDU].set('MoveDepLoading', value);
        dispatch({type:MOVEDEPREDU, state});
    },
   MoveDepVisiable:(value)=>(dispatch,getState)=>{
       let state=getState()[MOVEDEPREDU].set('MoveDepVisiable',value);
       dispatch({
           type:MOVEDEPREDU,
           state
       });
   },
    MoveDep:(pm={})=>(dispatch,getState)=>{
        dispatch(actions.MoveDepLoading(true));
        return ReqApi.post({
            url:Urls.SET_OFFICES,
            pm
        }).then((json)=>{
            if(json.status===2000){
                dispatch(actions.MoveDepLoading(false));
            }
            return json
        })
    }
}
export default actions;