import React,{Component} from "react";
import LayoutTopComp from '../components/LayoutTopComp'
import CompanyCont from './CompanyCont';


export default class AppCont extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            pageLoading:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                pageLoading:false
            })
        },10);//延时1秒
    }
    render(){
        return (
            <div className="ew-layout">
                {
                    this.state.pageLoading?(<div className="page-loading">
                            <div className="animationload">
                                <div className="osahanloading"></div>
                            </div>
                        </div>):null
                }
                <div className="ew-layout-header">
                    <LayoutTopComp />
                </div>
                <div className="ew-layout-manage">
                    <CompanyCont />
                </div>
            </div>
        )
    }
}

