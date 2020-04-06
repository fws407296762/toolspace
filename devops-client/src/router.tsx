import * as React from 'react';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import Login from "./pages/login/index";
import ProjectManage from "./pages/projectManage";
class CRouter extends React.Component<any,any>{
    public render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Redirect to="/login"></Redirect>
                    </Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/projectmanage" component={ProjectManage}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default CRouter
