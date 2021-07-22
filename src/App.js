import React from "react";
import { Switch,Route } from "react-router";
import Home from "./Component/Home";
import SingleMovie from "./Component/SingleMovie";
const App=()=>{
    return(
    <Switch>
        <Route path="/" exact>
    <Home/>
    </Route>
    <Route path="/movies/:id" children={<SingleMovie/>}></Route>
    </Switch>
    )
}
export default App;