import React,{Component} from "react";
import { Modal, message } from "antd";
import { connect } from 'react-redux';
import SetOfficesAct from '../actions/SetOfficesAct';
import SetOfficesComp from '../components/SetOfficesComp';

class SetOfficesCont extends Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit = (data) => {
        const { handleSubmit, handleCancel } = this.props;
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 2000)) {
                message.info('设置办公地址成功!');
                handleCancel();
            } else {
                message.warn('设置办公地址失败!');
            };
        });
    }
    render(){
        const{visible}=this.props;
        return(
            visible?
                <SetOfficesComp
                    {...this.props}
                    onOk={this.handleSubmit}
                />:null
        )
    }
}

SetOfficesCont.defaultProps={
    title:"设置办公地点",
}

const mapStateToProps = (state) => ({
    visible: state.SetOfficesRedu.get('set_offices_visible'),
    loading: state.SetOfficesRedu.get('setOfficesLoading'),
})
const mapDispatchToProps = (dispatch) => ({
    handleCancel: () => { dispatch(SetOfficesAct.SetOfficesVisiable(false)) },
    handleSubmit: (data) => { return dispatch(SetOfficesAct.SetOffices(data)) },
})

export default connect(mapStateToProps,mapDispatchToProps)(SetOfficesCont);