import React, { Component } from 'react'
import { Layout } from '../../base/components/AntdComp';
const {Content } = Layout;


class PersonalCenterComp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.getPersonalInfo();
    }
    handlerChange=()=>{

    }
    render(){      
        const { bindPhoneVisiable,changePswNextstepVisiable,state, ...props } = this.props;   
        const info = state.personalInfo;
        return (
                <div className='personal-content'>
                        <h3 className="personal-info"><span className="title-line"></span>个人信息</h3>  
                        <div className="base">
                            <h3 className="base-info">基础信息</h3>
                            <div>
                                <p className="bace-cont base-name">姓名:<span>{info.empName}</span></p>
                                <p className="bace-cont base-section">部门:<span>{info.deptNames}</span></p>
                                <p className="bace-cont base-position">职位:<span>{info.positionName}</span></p>
                            </div>
                            <div className='photo' >
                                <img src={`${info.profilePhoto}`} alt="" />
                                <a href='#' onClick={this.props.onClick}>修改</a>
                            </div>
                        </div>
                        <div className="account">
                            <h3 className="account-info"><span className="title-line"></span>账户信息</h3>
                            <div>
                            <p className="account-phone">手机:<span>{info.phone}</span>
                                <a href="#" onClick={bindPhoneVisiable}>修改</a>
                            </p>
                            <p className="account-phone password">
                                密码:<span>************  </span>
                                <a href="#" onClick={changePswNextstepVisiable}>修改</a>
                            </p>
                        </div>
                    </div>
            </div>            
            )

    }
}

export default PersonalCenterComp



