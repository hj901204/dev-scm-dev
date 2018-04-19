import { fromJS, Record ,Map} from 'immutable';
import { COMPANYREDU }from '../consts/ActTypes';

let initState = fromJS({
    tabLoading: false,
    positionLoading: false,
    add_position_visiable: false,
    edit_position_visiable: false,
    sidebar_visiable: false,
    sidebar_loding:false,
    addposition_loading:false,
    // position: {},
    positionId: null,
    dataSource: [],
    paging: {},
    searchPm: {
        key: "",
        page: 1,
        pageSize: 20
    },
    record: {},
    editdata:{},
});

const CompanyRedu = (state = initState, action) => {
    switch (action.type) {
        case COMPANYREDU:
            return action.state;
        default:
            return state;
    }
}

export default CompanyRedu;