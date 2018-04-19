import React, { Component } from 'react'
import actions from '../actions/MemberManageAct'
import SearchComp from '../../base/components/SearchComp';
import {Button, Spin, Pagination, Input, Layout, Table} from '../../base/components/AntdComp'

class HeaderToManageComp extends Component {
    constructor(props, context) {
        super(props, context);       
    }
    render(){
        let { state, checkedList, onSearch, SearchVal, ...props } = this.props;
        SearchVal = '';
        return (
            <div>
                <div className='tableHeader'>    
                    <div className = 'head-line-one' style= {{ display: state.headerBar_visible[0] }}  >
                        <span>批量修改部门</span>
                        <span>停用账户</span>
                        <span>设置办公地点</span>
                    </div>
                    <div className = 'head-line-two' style={{display: state.headerBar_visible[1] }}>
                        <div className="depart-info" style={{float:'left'}}>
                            {
                                state.departinfo.departLeader != "" && state.departinfo.departLeader != undefined ? (
                                    state.departinfo.departName + '(共 '+state.departinfo.departNum+' 个部门)，共'+state.dataSource.length +'人| 负责人：' + state.departinfo.departLeader
                                ) : null
                            }
                        </div>
                        <div style={{float:'left'}}> 
                            <SearchComp style={{ width: 183 }} 
                                    placeholder = '输入姓名/手机搜索'
                                    onSearch = { onSearch }
                                    SearchVal = { SearchVal }
                            />
                        </div>
                        <div className='head-line-btn' style={{float:'left'}}>
                            <Button type="default">新增员工</Button>
                            <Button type="default">导入</Button>
                            <Button type="default">导出</Button>
                        </div>
                    </div>
                </div>  
            </div>
        );

    }
}

export default HeaderToManageComp