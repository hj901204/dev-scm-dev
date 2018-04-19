import React, { Component } from 'react'
import actions from '../actions/MemberManageAct'
import SearchComp from '../../base/components/SearchComp';
import {Button, Spin, Pagination, Input, Layout, Table} from '../../base/components/AntdComp'

class HeaderToOutInfoComp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
       this.props.refreshList( )
    }
    render(){
         let { state, checkedList, state2, onSearch, SearchVal, ...props } = this.props;
         SearchVal = '';
        return (
            <div>
                <div className='tableHeader'>       
                    <p  style={{float:'left'}}>已停用员工( {state.paging.total} )</p>
                    <div style={{float:'left'}}>
                        <SearchComp style={{ width: 183 }} 
                                    placeholder = '输入姓名/手机搜索'
                                    onSearch = { onSearch }
                                    SearchVal = { SearchVal }
                        />
                    </div>
                </div>
            </div>  
        );

    }
}

export default HeaderToOutInfoComp