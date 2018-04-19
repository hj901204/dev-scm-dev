import React, { Component } from "react";
import { Breadcrumb, Input, Button, Table, Popconfirm } from 'antd';
import { is } from 'immutable';
import MTable from '../../base/components/TableComp';
import ImportViewCont from '../dialogconts/ImportViewCont';


class ImViewComp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { ImportViewVisiable,...props } = this.props;
        return (
            <div >
                <Button type="default" onClick={ImportViewVisiable}>导入员工</Button>
            </div>
        );
    }
}
export default ImViewComp;
