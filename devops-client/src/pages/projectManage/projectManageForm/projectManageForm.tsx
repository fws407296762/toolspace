import * as React from "react";
import {Form,Input,Button} from "antd";

interface ProjectManageFormProps{
    footer?:boolean
}

interface ProjectManageFormState {
    layout:{
        labelCol:object,
        wrapperCol:object
    }
}

class ProjectManageForm extends React.Component<ProjectManageFormProps,ProjectManageFormState>{
    public static defaultProps:ProjectManageFormProps = {
        footer:true
    }
    constructor(props:ProjectManageFormProps){
        super(props);
        this.state = {
            layout:{
                labelCol:{span:3},
                wrapperCol:{span:21}
            }
        }
    }
    public render(): React.ReactNode{
        return (
            <Form name="demo" {...this.state.layout}>
                <Form.Item
                    label="项目名"
                    name="zhname"
                    rules={[{required:true,message:"请输入项目名"}]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="别名"
                    name="enname"
                    rules={[{required:true,message:"请输入别名"}]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="描述"
                    name="description"
                    rules={[{required:true,message:"请输入描述"}]}
                >
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                {
                    this.props.footer && <Form.Item  wrapperCol={{offset:21}}>
                        <Button htmlType="submit" type="primary">保存</Button>
                    </Form.Item>
                }
            </Form>
        );
    }
}


export default ProjectManageForm