import React, { Component } from "react";
import { connect } from 'react-redux';
import { message } from 'antd';
import AddressAct from '../actions/AddressAct';
import AddressComp from '../components/AddressComp';
import AddAddressCont from '../dialogconts/AddAddressCont';
import EditAddressCont from '../dialogconts/EditAddressCont';


class AddressCont extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchPm = {addressName: '', addressDetl: '',page: 1,pageSize: 20};
    }
    tablePaging = (page) => {
        const { tabLoading, AddressList } = this.props;
        if (!tabLoading){
            if (typeof page === "number") {
                this.searchPm.page = page;
            } else {
                this.searchPm = { ...this.searchPm, ...page };
            };
            AddressList(this.searchPm).then(json => {
                if (json.status && (json.status === 2000)) {
                    // message.info('获取地址列表成功!');
                } else if (json.status && (json.status === 4351)) {
                    message.warn('获取地址列表失败!');
                };
            });
        }
    }
    onSearch = (val) => {
        if (val){
            this.searchPm = { ...this.searchPm, addressName: val, addressDetl: val, page: 1 };
            this.tablePaging();
        }
    }
    onClear = () => {
        this.searchPm = { ...this.searchPm, addressName: '', addressDetl: '', page: 1 };
        this.tablePaging();
    }
    render() {
        const {addressName, addressDetl} = this.searchPm;
        return (
            <div className="manage-content">
                <AddressComp {...this.props}
                             SearchVal={addressName || addressDetl}
                             tablePaging={this.tablePaging}
                             onSearch={this.onSearch}
                             onChange={this.onChange}
                             onClear={this.onClear}
                />
                <AddAddressCont tablePaging={this.onClear} />
                <EditAddressCont tablePaging={this.onClear} />
            </div>
        );
    }
}

const mapStateToProps = (state) => state.AddressRedu.toJS();
const mapDispatchToProps = (dispatch) => ({
    AddAddressVisiable: () => { dispatch(AddressAct.AddAddressVisiable(true)); },
    EditAddressVisiable: (id) => { dispatch(AddressAct.EditAddressVisiable(true, id)); },
    AddressList: (pm) => dispatch(AddressAct.AddressList(pm)),
    AddressDel: (addressCode) => dispatch(AddressAct.AddressDel({ addressCode })),
    AddressDisable:(addressCode,status)=>dispatch(AddressAct.AddressDisable({addressCode:[addressCode],status})),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressCont);
