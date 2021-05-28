import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import PrivateRoute from './PrivateRoute';

import Newwallets from "../Newwallets/Newwallets";
import Login from "../Login/Login";

class CustomRouter extends React.Component<any, {

    isRedirect: boolean,

}> {
    constructor(props: any) {
        super(props)
        this.state = {

            isRedirect: false,//Make this true id you want to redirect to cleartax page
        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path="/home" component={Newwallets} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </Router>
        );
    }
}
export default CustomRouter;

