import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Logon from "./Pages/Logon/Index";
import Register from "./Pages/Register/Index";
import Profile from "./Pages/Profile/index";
import newIncident from "./Pages/newIncident/index";

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/"exact component={Logon}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={newIncident}/>
        </Switch>
        </BrowserRouter>
    )
}

