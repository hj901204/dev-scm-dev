/**
 * Created by MW on 2017/3/10.
 */
import React,{Component} from 'react';
import { Tree,Layout} from '../../base/components/AntdComp';
const { Sider } = Layout;
import Icon from "antd/lib/icon";

const TreeNode = Tree.TreeNode;

class TreeComp extends Component{
    constructor(props){
        super(props);

    }

    //初始化请求数据
    componentDidMount() {
        this.props.getDepartments();
    }


    drawMapTreeTreeNode = (data) => data.map((item) => {
        if(item.children){
            if (item.children.length > 0) {
                return (
                    <TreeNode {...item} key={item.id} title={
                        <div className="tree-node">
                            <p className="name">{item.deptName}</p>
                            {
                                item.deptManager != '' && <Icon className="icon" type="apple" />
                            }
                        </div>
                    } >
                        {
                            this.drawMapTreeTreeNode(item.children)
                        }
                    </TreeNode>
                );
            }
        }
        return(
            <TreeNode {...item} key={item.id} title={
                <div className="tree-node">
                    <p className="name">{item.deptName}</p>
                    {
                        item.deptManager != '' && <Icon className="icon" type="apple" />
                    }
                </div>
            } >

            </TreeNode>
        );

    })

    render(){
        let {state,onSelect} = this.props;
        return(
                <div className="org-tree-comp">
                    <Tree defaultExpandAll={true} onSelect={onSelect}>
                        {this.drawMapTreeTreeNode(state.data)}
                    </Tree>
                </div>
        )
    }
}

export default TreeComp