import React, { Component, PropTypes } from 'react';
import { TreeSelect } from 'antd';
import {  buildTree, shouldComponentUpdate } from '../consts/Utils';
import TXT from '../languages';

class TreeSelectComp extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    }
    
    render() {
        const { onChange, treeData, width, maxHeight, placeholder, key, name } = this.props;
        return <TreeSelect
                    style={{ width }}
                    dropdownStyle={{ maxHeight, overflow: 'auto' }}
                    treeData={buildTree(treeData, key, name)}
                    placeholder={placeholder}
                    treeDefaultExpandAll
                    onChange={onChange}
                />
    }
}

TreeSelectComp.defaultProps = {
    key: 'id',
    name: 'name',
    width: 200,
    maxHeight: 400,
    placeholder: TXT.TREESELECT,
    treeData: [],
    onChange: ()=>{},
}

TreeSelectComp.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    maxHeight: PropTypes.number,
    placeholder: PropTypes.string,
    treeData: PropTypes.array,
    onChange: PropTypes.func, //放在表单中时不需要，使用form的onChange
}

export default TreeSelectComp;


// Example

// const treeData = [
//     {
//         "id": 0,
//         "name": "string",
//         "managerId": 0,
//         "managerName": "string",
//         "children": [
//             {}
//         ]
//     }
// ];

{/*<TreeSelectComp
    treeData={treeData}
    key='deptId'
    name='deptName'
/>*/}