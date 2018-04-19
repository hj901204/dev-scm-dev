import { fromJS, Record  } from 'immutable'
import { MEMBERCHANGEREDU } from '../consts/ActTypes'

let recode = fromJS({
    tableLoading: '',
    checkedLength: 0,
    dataSource: [],
    paging:{},
    infoDetials: {},
    departinfo: {},
    searchPm: {
        deptCode:'',
        positionName:'',
        positionCode: '',
        page: 1,
        pageSize: 5
    },
    record: {},
    headerBar_visible: [
        'none','block'
    ]
});

const TableRedu = ( state = recode, action) => {
    switch (action.type) {
        case MEMBERCHANGEREDU: 
            return action.state;
        default:
            return state;
    }
}

export default TableRedu