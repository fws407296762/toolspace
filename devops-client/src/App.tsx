import * as React from "react";
import Router from "./router";


class App extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }
    render(){
        return (
            <Router/>
        )
    }
}

export default App;
