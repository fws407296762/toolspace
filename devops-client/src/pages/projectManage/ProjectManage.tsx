import * as React from "react";
import {Table,Button,Modal} from "antd";
import "./ProjectManage.css";
import ProjectManageForm from "./projectManageForm";
import {ReactNode} from "react";

interface ProjectManageProps{

}

interface ProjectManageState {
    readonly columns:Array<Object>,
    modal:{
        title:string,
        visible:boolean,
        width?:string,
        footer?:null | ReactNode,
        okText?:string,
        cancelText?:string
    }
}

class ProjectManage extends React.Component<ProjectManageProps,ProjectManageState>{
    constructor(props:ProjectManageProps){
        super(props);
        this.state = {
            columns:[
                {
                    title:"项目名",
                    key:"zhname"
                },
                {
                    title:"别名",
                    key:"enname"
                },
                {
                    title:"操作",
                    key:"action",
                    align:"center"
                }
            ],
            modal:{
                title:"新增项目",
                visible:true,
                okText:"保存",
                cancelText:"取消"
            }
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="body__main body__main--projectmanage">
                <div className="buttons__box">
                    <Button type="primary" onClick={this.addProject}>新增项目</Button>
                </div>
                <Table columns={this.state.columns}></Table>
                <Modal
                    visible={this.state.modal.visible}
                    title={this.state.modal.title}
                    okText={this.state.modal.okText}
                    cancelText={this.state.modal.cancelText}
                >
                    <ProjectManageForm footer={false}></ProjectManageForm>
                </Modal>
            </div>
        );
    }
    addProject(){
        console.log("addProject:")
    }
}

export default ProjectManage;