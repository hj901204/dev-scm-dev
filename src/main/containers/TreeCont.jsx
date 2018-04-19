/**
 * Created by MW on 2017/3/13.
 */
import React from 'React'
import TreeComp from '../components/TreeComp';
import TreeAct from '../actions/TreeAct'
import {connect} from 'react-redux'

let mapStateToProps = (state) => ({
    state:state.TreeRedu.toJS(),
})

let mapDispatchToProps = (dispatch) => ({
    getDepartments : () =>{
        dispatch(TreeAct.getDepartments())
    },
     onSelect: (selectedKeys,info) => {
         dispatch(TreeAct.onSelect(info));
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(TreeComp);
