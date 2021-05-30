import { Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../../style.css"
import { ContextMain } from "./../../common/ContextMain"
import axios from "axios"
import { API } from '../../common/constant';
import CircularProgress from "@material-ui/core/CircularProgress";
import CommonApi from "../../common/commonApi"

const Privateroute = withRouter((props: any) => {
    const state = CommonApi(props)

    const validationDynamic = () => {
        localStorage.removeItem("Login");
        props.history.push('/login')
    }

    console.log("pp", state.isValid[1])
    console.log("keysss", state.userData[0])
    if (localStorage.getItem("Login") != undefined && localStorage.getItem("Login") != null) {
        if (state.userData[0].length > 0) {
            return (
                <Route render={() =>
                    <div className="bg-grey full-len mt-3" >
                        <ContextMain.Provider value={state}>
                            <div className="max-width max-width-padd mt-4">
                                <Card className="custom-card card-dashboard">
                                    <CardContent >
                                        <h1 className="header-main">Trav Clan Assignment</h1>
                                        <Button variant="contained" color="primary" className="btn-class mt-4" onClick={validationDynamic}>Logout</Button>
                                        <div className="col-md-12 mt-5">
                                            <props.component />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </ContextMain.Provider>
                    </ div>} />
            )
        }
        else {
            if (state.isReferValid[0]) {
                return (
                    <Redirect to={{
                        pathname: `/`,
                    }} />
                )
            } else {
                return (
                    <div className="Circular-Progress">
                        <CircularProgress color="inherit" />
                    </div>
                )
            }
        }
    }
    else {
        return (
            <Redirect to={{
                pathname: `/`,
            }} />
        )
    }


})
export default Privateroute;
