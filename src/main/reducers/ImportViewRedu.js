import { fromJS, Record ,Map} from 'immutable';
import { IMPORTVIEWREDU }from '../consts/ActTypes';

let initState = fromJS({
    //sidebar_visiable: false,
    ImportViewVisiable:false,
    ImportViewLoading:false,
   // dataSource: [],
    //record: {},
});


const ImportViewRedu = (state = initState, action) => {
    switch (action.type) {
        case IMPORTVIEWREDU:
            return action.state; 
        default:    
            return state;
    }
}

export default ImportViewRedu;