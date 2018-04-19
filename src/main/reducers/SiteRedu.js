import { fromJS, Record ,Map} from 'immutable';
import { SITEREDU }from '../consts/ActTypes';

let initState = fromJS({
    tabLoading: false,
    siteLoading: false,
    add_site_visiable: false,
    edit_site_visiable: false,
    sidebar_visiable: false,
    siteId: null,
    dataSource: [],
    paging: {
        // current: page || act.current,
        // total,
        // pageSize
    },
    record: {},
});

const SiteRedu = (state = initState, action) => {
    switch (action.type) {
        case SITEREDU:  
            return action.state;    
        default:    
            return state;
    }
}

export default SiteRedu;