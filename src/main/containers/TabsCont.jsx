import React,{Component} from "react";
import { connect } from "react-redux";
import { Tabs, Button } from 'antd';
import TabsAct from '../actions/TabsAct';

//加载容器列表
import MainCont from './MainCont';
import PositionCont from './PositionCont';
import AddressCont from './AddressCont';
import AddressModelCont from './AddressModelCont';
import EmployeeCont from './EmployeeCont';
import ImViewCont from './ImViewCont';
import MoveDepViewCont from './MoveDepViewCont';

import SiteCont from './SiteCont';
import DepartmentCont from './DepartmentCont';
import ImportEmployeeCont from './ImportEmployeeCont';
import PersonComp from '../components/PersonComp';
import BaseDataCont from './BaseDataCont';
import MemberManageCont from './MemberManageCont';


const TabPane = Tabs.TabPane;
class TabsCont extends Component{
    constructor(prop){
        super(prop);
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    remove = (targetKey) => {
        let { tabs,activeKey,tabRemove } = this.props;
        let lastIndex;
        tabs.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const _tabs = tabs.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = _tabs[lastIndex].key;
        }
        tabRemove(targetKey,activeKey);
    }
    getContent= (tab) =>{
        switch (tab.key) {
            case "home":
                return <MemberManageCont />
                break;
            case "position":
                return <PositionCont />
                break;
            case "department":
                return <DepartmentCont />
                break;
            case "person":
                return <PersonComp />
                break;
            case 'ImportEmployeeCont':
                return <ImportEmployeeCont />
                break;
            case "address":
                return <AddressCont />
                break;
            case "employee":
                return <EmployeeCont />
                break;
            case "importview":
                return <ImViewCont />
                break;
             case "movedep":
                return <MoveDepViewCont />
            case "import":
                return <ImportEmployeeCont />
                break;
             case "site":
                return <SiteCont />
                break;
 			case "basedata":
                return <BaseDataCont />
                break;
            case "addressModel":
                return <AddressModelCont />
                break;
            case "member":
                return <MemberManageCont />
                break;
            default:
                return null;
        }
    }
    render(){
        const {tabs,activeKey,tabChange} = this.props;
        return (
            <div className="ew-tabs">
                <Tabs
                    animated={false}
                    hideAdd
                    onChange={tabChange}
                    activeKey={activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                    >
                    {
                        tabs.map(pane => 
                            <TabPane tab={pane.title} key={pane.key}>
                                {this.getContent(pane)}
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.TabsRedu.toJS();
}
const mapDispatchToProps = (dispatch) => ({
    tabAdd:(tab) => {
        dispatch(TabsAct.TabAdd({}));
    },
    tabChange: (activeKey) => {
        dispatch(TabsAct.TabChange(activeKey));
    },
    tabRemove: (key,activeKey) =>{
        dispatch(TabsAct.TabRemove(key,activeKey));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TabsCont);