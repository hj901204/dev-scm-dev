import React,{Component} from "react";
import ImportEmployeeComp from '../components/ImportEmployeeComp';
import { connect } from 'react-redux';
import actions from '../actions/ImportEmployeeAct';
import {fromJS,Record} from 'immutable';

class ImportEmployeeCont extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            searchPm: {
                key:'',
                page: 1,
                pageSize: 10,
            }
        }
    }
    tablePaging = (page) => {
        const { PositionList } = this.props;
        const { searchPm } = this.state;
        if (typeof page === "number") {
            PositionList({ ...searchPm, page });
        } else {
            PositionList({ ...searchPm, ...page });
        }
    }
    render(){
        return (
            <div>
                <ImportEmployeeComp 
                    {...this.props}
                    tablePaging={this.tablePaging}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => state.ImportEmployeeRedu.toJS()

const mapDispatchToProps = (dispatch) => ({
    Record: (value) => { dispatch(PositionAct.Record(value)) },
    PositionList: () => { dispatch(actions.PositionList()); },
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportEmployeeCont);
