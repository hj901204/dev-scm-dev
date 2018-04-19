import React,{Component} from "react";
import { Modal, message } from "antd";
import { connect } from 'react-redux';
import ImportViewAct from '../actions/ImportViewAct';
import ImportViewComp from '../components/ImportViewComp';


class ImportViewCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel} = this.props;
        handleSubmit(data).then(json => {
            if (json.status && (json.status === 200)) {
                console.log('保存成功!');
                handleCancel();
            } else if (json.status && (json.status === 4353)) {
                console.log('保存失败!');
            };
        });
    }
    render() {
        const { visible } = this.props;
        return (
            visible ?
                <ImportViewComp
                    {...this.props}
                    onOk={this.handleSubmit}
                /> : null
        );
    }
}

ImportViewCont.defaultProps = {
    title: "导入员工",
}

const mapStateToProps = (state) => ({
        visible: state.ImportViewRedu.get('ImportViewVisiable'),
        loading: state.ImportViewRedu.get('ImportViewLoading'),
})

const mapDispatchToProps = (dispatch) => ({
    handleCancel: () => { dispatch(ImportViewAct.ImportViewVisiable(false)) },
    handleSubmit: (data) => { return dispatch(ImportViewAct.ImportView(data)) },
})


export default connect(mapStateToProps,mapDispatchToProps)(ImportViewCont);
