import React, { Component } from "react";
import { Breadcrumb, Input, Button, Table, Popconfirm } from 'antd';
import { is } from 'immutable';
import MTable from '../../base/components/TableComp';
import MoveDepCont from '../dialogconts/MoveDepCont';


class MoveDepViewComp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { MoveDepVisiable,...props } = this.props;
        return (
            <div >
                <Button type="default" onClick={MoveDepVisiable}>批量修改部门</Button>
            </div>
        );
    }
}
export default MoveDepViewComp;
