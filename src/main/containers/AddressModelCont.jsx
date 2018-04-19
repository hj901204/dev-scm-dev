import React,{Component} from "react";
import { connect } from 'react-redux';
import { Button } from '../../base/components/AntdComp';
import AddAddressCont from '../dialogconts/AddAddressCont';
import EditAddressCont from '../dialogconts/EditAddressCont';
import AddressAct from '../actions/AddressAct'
class AddressModelCont extends Component{
    constructor(prop){
        super(prop);
    }
    onAdd=()=>{
        this.props.AddAddressVisiable();
    }
    onEdit=(id)=>{
        this.props.EditAddressVisiable(id);
    }
    render(){
        return (
            <div className="manage-content">
                <Button onClick={this.onAdd}>新增地址</Button>
                <Button onClick={()=>this.onEdit(1)}>编辑地址</Button>
                <AddAddressCont />
                <EditAddressCont />
            </div>
        );
    }
}
const mapStateToProps = (state) => state.AddressRedu.toJS();

const mapDispatchToProps = (dispatch) => ({
    AddAddressVisiable: () => { dispatch(AddressAct.AddAddressVisiable(true)); },
    EditAddressVisiable: (id) => { dispatch(AddressAct.EditAddressVisiable(true, id)); }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressModelCont);
