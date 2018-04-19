import { combineReducers } from "redux"
import PositionRedu from './PositionRedu'
import EmployeeRedu from './EmployeeRedu'
import BaseDataRedu from './BaseDataRedu'

import TabsRedu from './TabsRedu'
import DepartmentRedu from './DepartmentRedu'
import PageLoadingRedu from './PageLoadingRedu'

import ImportViewRedu from './ImportViewRedu'
import MoveDepRedu from './MoveDepRedu'

import SiteRedu from './SiteRedu'
import AddressRedu from './AddressRedu'
import ImportEmployeeRedu from './ImportEmployeeRedu'
import SetOfficesRedu from './SetOfficesRedu'

import TableRedu from './MemberManageRedu'
import TreeRedu from './TreeRedu'
import PersonManageRedu from './PersonManageRedu'
import GetActivedMemberRedu from './GetDeactivedMemberRedu'


const rootReducer = combineReducers({
    PositionRedu,

    EmployeeRedu,
    PageLoadingRedu,
    ImportViewRedu,
    MoveDepRedu,
    
	TabsRedu,
    ImportEmployeeRedu,
	BaseDataRedu,
    DepartmentRedu,
    PageLoadingRedu,
    SiteRedu,
    SetOfficesRedu,
    AddressRedu,
    TableRedu,
    TreeRedu,
    PersonManageRedu,
    GetActivedMemberRedu,
})

export default rootReducer;