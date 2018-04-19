import React, { Component } from "react";
import AddDepartmentComp from './AddDepartmentComp';

class EditDepartmentComp extends AddDepartmentComp {
    constructor(props, context) {
        super(props, context);

    }
    componentDidMount() {
        this.props.initData && this.props.initData();
    }
}

export default EditDepartmentComp;
