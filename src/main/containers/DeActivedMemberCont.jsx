import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions/DeactivedMemberAct'
import DeActivedMember  from '../components/DeActivedMemberComp'
import { fromJS, Record} from 'immutable';

class DeactivedMemberTable extends Component {
    constructor(props, context) {
        super(props, context); 
        this.searchVal = { page:'', pageSize:'', employeeName:'', phone:'' }
    }    
    tablePaging = (page) => {
        let { getDeactivedList } = this.props;
        this.searchVal.page = page;
        getDeactivedList(this.searchVal)
    }
    render() {
       let { state, getDeactivedList } = this.props;
        return (
            <div>
                <DeActivedMember  
                     {...this.props}
                     state = { state } 
                     tablePaging= {this.tablePaging}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>  ({
   state: state.GetActivedMemberRedu.toJS()
})

const mapDispatchToProps = ( dispatch, getState ) => ({
    getDeactivedList: (val) => {
        dispatch( actions.getDeactivedList(val) )
    }
})



export default connect( mapStateToProps, mapDispatchToProps )(DeactivedMemberTable)

