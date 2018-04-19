import React, { Component } from "react";
import { Breadcrumb, Input, Button, Table, Popconfirm } from 'antd';
import { is } from 'immutable';
import MTable from '../../base/components/TableComp';
import SetOfficesCont from '../dialogconts/SetOfficesCont';
const BItem = Breadcrumb.Item;
const Search = Input.Search;


class SetOfficesAnComp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { SetOfficesVisiable,...props } = this.props;

        return (
            <div >
                <Button type="default" onClick={SetOfficesVisiable}>设置办公地址</Button>
            </div>
        );
    }
}
export default SetOfficesAnComp;
