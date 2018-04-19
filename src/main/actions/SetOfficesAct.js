import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import { SETOFFICESREDU } from '../consts/ActTypes';

const actions={
    SetOfficesLoading:(value)=>(dispatch,getState)=>{
        let state = getState()[SETOFFICESREDU].set('setOfficesLoading', value);
        dispatch({type:SETOFFICESREDU, state});
    },
   SetOfficesVisiable:(value)=>(dispatch,getState)=>{
       let state=getState()[SETOFFICESREDU].set('set_offices_visible',value);
       dispatch({
           type:SETOFFICESREDU,
           state
       });
   },
    SetOffices:(pm={})=>(dispatch,getState)=>{
        dispatch(actions.SetOfficesLoading(true));
        return ReqApi.post({
            url:Urls.BATCH_EDITSITE,
            pm
        }).then((json)=>{
            if(json.status===2000){
                dispatch(actions.SetOfficesLoading(false));
            }
            return json
        })
    }
}

export default actions;