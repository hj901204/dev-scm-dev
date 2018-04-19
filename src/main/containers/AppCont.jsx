import React, {Component} from "react";
import LayoutTop from '../components/LayoutTopComp';
import LayoutSider from '../components/LayoutSiderComp';
import TabsCont from './TabsCont';
import PageLoadingCont from './PageLoadingCont';

import {Layout, Menu, Breadcrumb, Icon} from '../../base/components/AntdComp';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class AppCont extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            pageLoading: true,
            collapsed: false,
            mode: 'inline'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                pageLoading: false
            })
        }, 10);
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        return (
            <div className="ew-layout">
                <PageLoadingCont />
                <Layout>
                    <div className="ew-layout-header">
                        <LayoutTop />
                    </div>
                    <Layout>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                        >
                            <LayoutSider mode={this.state.mode}/>
                        </Sider>
                        <Layout className="ew-layout-content">
                            <div className="ew-breadcrumb">
                                <div className="breadcrum-inner">
                                    <Breadcrumb separator=">">
                                        <Breadcrumb.Item>你所在的位置</Breadcrumb.Item>
                                        <Breadcrumb.Item>组织架构</Breadcrumb.Item>
                                        <Breadcrumb.Item>职位</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <Content>
                                <TabsCont />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

