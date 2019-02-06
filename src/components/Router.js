import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App';
import Branch from './Branch';
import NotFound from './NotFound';
import Subcategory from './SubCategory';
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/branch/:id" component={Branch}></Route>
            <Route path="/equipment/:id" component={Subcategory}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;