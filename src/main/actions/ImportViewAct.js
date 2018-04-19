import { ReqApi } from '../../base/services/ReqApi'
import { Urls } from '../../base/consts/urls';
import { IMPORTVIEWREDU } from '../consts/ActTypes';

const actions={
    ImportViewLoading:(value)=>(dispatch,getState)=>{
        let state = getState()[IMPORTVIEWREDU].set('ImportViewLoading', value);
        dispatch({type:IMPORTVIEWREDU, state});
    },
   ImportViewVisiable:(value)=>(dispatch,getState)=>{
       
       let state=getState()[IMPORTVIEWREDU].set('ImportViewVisiable',value);
       dispatch({
           type:IMPORTVIEWREDU,
           state
       });
   },
    ImportView:(pm={})=>(dispatch,getState)=>{
        dispatch(actions.ImportViewLoading(true));
        return ReqApi.post({
            url:Urls.SET_OFFICES,
            pm
        }).then((json)=>{
            if(json.status===2000){
                dispatch(actions.ImportViewLoading(false));
            }
            return json
        })
    }
}

export default actions;