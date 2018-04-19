import { fromJS, Record,Map} from 'immutable';
import {ADDRESSREDU} from '../consts/ActTypes';

let initState = fromJS({
    tabLoading: false,
    addressLoading: false,
    add_address_visiable: false,
    edit_address_visiable: false,
    address: {
        addressCode: null,
        addressName: null,
        addressDetl: null,
        org: [

        ],
        isReg:null,
        isMag:null,
        isRep:null,
        isSog:null,
        isBil:null,
        isOfe:null,
        status:null,
        updatePerson:null,
        updateDate:null,
    },
    addressId: null,
    dataSource: [],
    paging:{
        // current: page || act.current,
        // total,
        // pageSize
    },
    record:{},
}), next_state;

const AddressRedu = (state =initState, action) => {
    switch (action.type) {
        case ADDRESSREDU:
            return action.state;
        default:
            return state;
    }
}

export default AddressRedu;