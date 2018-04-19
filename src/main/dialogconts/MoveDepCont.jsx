import React,{Component} from "react";
import { Modal, message } from "antd";
import { connect } from 'react-redux';
import MoveDepAct from '../actions/MoveDepAct';
import MoveDepComp from '../components/MoveDepComp';


class MoveDepCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
    handleSubmit = (data) => {
        const { loading, handleSubmit, handleCancel, tablePaging } = this.props;
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
    //    console.log(this.props.visible);
        const { visible } = this.props;
        return (
            visible ?
                <MoveDepComp
                    {...this.props}
                    onOk={this.handleSubmit}
                /> : null
        );
    }
}

MoveDepCont.defaultProps = {
    title: "批量修改部门",
}

const mapStateToProps = (state) => ({
    visible: state.MoveDepRedu.get('MoveDepVisiable'),
    loading: state.MoveDepRedu.get('MoveDepLoading'),
})
const mapDispatchToProps = (dispatch) => ({
    handleCancel: () => { dispatch(MoveDepAct.MoveDepVisiable(false)) },
    handleSubmit: (data) => { return dispatch(MoveDepAct.MoveDep(data)) },
})


export default connect(mapStateToProps,mapDispatchToProps)(MoveDepCont);
