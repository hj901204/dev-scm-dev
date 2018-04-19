import React, { Component } from "react";
import { connect } from 'react-redux';
import { message } from '../../base/components/AntdComp';
import SiteAct from '../actions/SiteAct';
import SiteComp from '../components/SiteComp';
import TXT from '../languages';
const T = TXT.POSITION;

class SiteCont extends Component {
    constructor(props, context) {
        super(props, context);
         this.state = {
            searchPm: {
                status: 0, siteName: '', siteCode: '', page: 1, pageSize: 20
            }
        };
    }

    tablePaging = (page) => {
        let { tabLoading, SiteList } = this.props;
        if (!tabLoading){
            if (typeof page === "number") {
                this.state.searchPm.page = page;
            } else {
                this.state.searchPm = { ...this.state.searchPm, ...page };
            };
            // console.log(this.state.searchPm)
            SiteList(this.state.searchPm).then(json => {
                if (json.status === 2000) {
                } else if (json.status === 4351) {
                    // message.warn(T.LISTFAIL);
                };
            });
        }
    }

    onSearch = (val) => {
        if (!this.props.tabLoading){
            this.setState({
                searchPm: {
                   ...this.state.searchPm, siteName: val, siteCode: val, page: 1
                }
            },() => this.tablePaging());
        }
    }

    onSelect = (val) => {
        if (!this.props.tabLoading){
            val = parseInt(val);
            this.setState({
                searchPm: {
                    ...this.state.searchPm,
                    status: val,
                    page: 1, 
                }
            },() => this.tablePaging());
        }
        
    }

    onClear = () => {
        this.setState({
            searchPm: {
                ...this.state.searchPm, siteName: '', siteCode: '', page: 1
            }
        },() => this.tablePaging());
    }

    render() {
        let { status, siteName, siteCode } = this.state.searchPm;
        return (
            <div className="manage-content">
                <SiteComp {...this.props}
                    SearchVal={siteName || siteCode}
                    tablePaging={this.tablePaging}
                    onSearch={this.onSearch}
                    onSelect={this.onSelect}
                    onClear={this.onClear}
                />
                
            </div>
        );
    }

   
}

const mapStateToProps = (state) => state.SiteRedu.toJS();

const mapDispatchToProps = (dispatch) => ({
    AddSiteVisiable: () => { dispatch(SiteAct.AddSiteVisiable(true)); },
    EditSiteVisiable: (id) => { dispatch(SiteAct.EditSiteVisiable(true, id)); },
    SiteList: (pm) => dispatch(SiteAct.SiteList(pm)),
    SiteDel: (siteCode) => dispatch(SiteAct.SiteDel({ siteCode })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SiteCont);