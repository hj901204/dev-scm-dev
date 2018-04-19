import React, { Component } from "react";
import { connect } from 'react-redux';
import { fromJS, Record } from 'immutable';
import ImportViewAct from '../actions/ImportViewAct';
import ImViewComp from '../components/ImViewComp';
import ImportViewCont from '../dialogconts/ImportViewCont';

class ImViewCont extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        //const { sidebar_visiable, record, SidebarVisiable } = this.props;
        return (
            <div className="manage-content">
                <ImViewComp {...this.props}/>
                <ImportViewCont />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.ImportViewRedu.toJS()
};

const mapDispatchToProps = (dispatch) => ({
    ImportViewVisiable: () => { dispatch(ImportViewAct.ImportViewVisiable(true)); },
})

export default connect(mapStateToProps, mapDispatchToProps)(ImViewCont);
