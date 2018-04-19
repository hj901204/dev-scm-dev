import React, { Component } from "react";
import { connect } from 'react-redux';
import { fromJS, Record } from 'immutable';
import MoveDepAct from '../actions/MoveDepAct';
import MoveDepViewComp from '../components/MoveDepViewComp';
import MoveDepCont from '../dialogconts/MoveDepCont';

class MoveDepViewCont extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        //const { sidebar_visiable, record, SidebarVisiable } = this.props;
        return (
            <div className="manage-content">
                <MoveDepViewComp {...this.props}/>
                <MoveDepCont />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.MoveDepRedu.toJS()
};

const mapDispatchToProps = (dispatch) => ({
    MoveDepVisiable: () => { dispatch(MoveDepAct.MoveDepVisiable(true)); },
})

export default connect(mapStateToProps, mapDispatchToProps)(MoveDepViewCont);
