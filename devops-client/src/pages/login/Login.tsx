import * as React from "react";
import * as ReactDOM from "react-dom";
import {Form,Input,Button} from "antd";
import "./login.css";
class Login extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            layout:{
                labelCol:{
                    span:6
                },
                wrapperCol:{
                    span:14
                }
            }
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="body__main body__main--login">
                <div className={"login__box"}>
                    <Form {...this.state.layout}>
                        <Form.Item label="用户名">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input.Password></Input.Password>
                        </Form.Item>
                        <Form.Item wrapperCol={{span:14,offset:6}}>
                            <Button block type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;