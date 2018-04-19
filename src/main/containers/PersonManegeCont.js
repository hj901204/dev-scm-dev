/**
 * Created by MW on 2017/3/17.
 */
import React from 'react';
import PersonManageComp from '../components/PersonManageComp'
import {connect} from 'react-redux'
import personManageAct from '../actions/PersonManegeAct'


let mapStateToProps = (state) => {
    return state.PersonManageRedu.toJS();
};

let mapDispatchToProps = (dispatch) => ({
    disableEmployees: () => {
         dispatch(personManageAct.disableEmployees(1,1));
    },
    organizationChart: () => {
        dispatch(personManageAct.organizationChart());
    }
   
})

export default connect(mapStateToProps,mapDispatchToProps)(PersonManageComp)
