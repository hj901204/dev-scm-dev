import React,{Component} from "react";
import { connect } from 'react-redux';
import { Modal, message } from '../../base/components/AntdComp';
import AddressAct from '../actions/AddressAct';
import EditAddressComp from '../components/EditAddressComp';

class AddAddressCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    initData = () =>{
        const {loading, AddressDetail, addressId,handleCancel } = this.props;
        if (!loading && addressId) {
            AddressDetail(addressId).then(json => {
                if (json.status && (json.status === 2000)) {
                    // message.info('获取地址详情成功!');
                } else if (json.status && (json.status === 4352)) {
                    message.warn('获取地址详情失败!');
                    handleCancel(null);
                };
            });
        }
    }

    handleSubmit = (data) => {
        const { handleSubmit, handleCancel, tablePaging } = this.props;
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 2000)) {
                // message.info('修改地址成功!');
                handleCancel();
                tablePaging();
            } else if (json.status && (json.status === 4354)){
                message.warn('修改地址失败!');
            };
        });
    }
    render() {
        const { visible } = this.props;
        return (
            visible ?
                <EditAddressComp
                    {...this.props}
                    onOk={this.handleSubmit}
                    initData={this.initData}
                /> : null
        );
    }
}

AddAddressCont.defaultProps = {
    title: "编辑地址",
    width:766,
}

const mapStateToProps = (state) => ({
    visible: state.AddressRedu.get('edit_address_visiable'),
    loading: state.AddressRedu.get('addressLoading'),
    address: state.AddressRedu.get('address'),
    addressId: state.AddressRedu.get('addressId'),
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleCancel: (id) => { dispatch(AddressAct.EditAddressVisiable(false,id)) },
    handleSubmit: (data) =>  dispatch(AddressAct.EditAddress(data)) ,
    AddressDetail: (addressCode) =>  dispatch(AddressAct.AddressDetail({ addressCode })) ,
})


export default connect(mapStateToProps,mapDispatchToProps)(AddAddressCont);
