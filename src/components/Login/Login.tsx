import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { PAGE_TWO_ERROR_TEXT } from './../common/constant';
import { isMobileValidNumber } from './../common/Helperfunction';
import axios from "axios"
import { API } from './../common/constant';
import { Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import ReactGA from 'react-ga'

class PartnerReferral extends React.Component<any,
    {

        date_match_modal: boolean,
        action: string,


    }> {

    constructor(props: any) {
        super(props);
        this.state =
        {

            date_match_modal: false,
            action: "",

        }

    }


    componentDidMount = () => {
        ReactGA.set({ page: '/login' })
        ReactGA.pageview('/login');
        ReactGA.event({
            category: `Page`,
            action: 'Login',
            label: 'Login Rendered'
        });
    }


    handleCloseSub = () => {
        this.setState({ date_match_modal: false })
    };


    changeState = () => {
        localStorage.setItem("Login", "true")
        this.setState({ action: "home" })
    }
    renderFormSign = () => {

        return (
            <Card className="" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" className="main-title mb-3">
                        BID APP
         </Typography>

                    <Button variant="contained" color="primary" className="btn-class mt-4" onClick={this.changeState}>LOGIN</Button>

                </CardContent>
                <CardActions>
                    <Button size="small">By: Malay Mishra</Button><br />
                    <Button size="small">{process.env.REACT_APP_ENV}</Button>
                </CardActions>
            </Card>
        )
    }

    renderDialog = () => {
        const { date_match_modal
        } = this.state;
        return (
            <Dialog
                open={date_match_modal}
                onClose={this.handleCloseSub}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <h3 className="modal-title">Hi, </h3>
                <h3 className="modal-subtitle">Wrong Credentials </h3>

                <DialogActions>
                    <Button onClick={this.handleCloseSub} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    render() {


        if (this.state.action === 'home') {
            return (
                <Redirect to={{
                    pathname: `/home`
                }} />
            )
        }

        return (
            <div className="max-width-in">
                <this.renderFormSign />
                <this.renderDialog />

            </div>
        );
    }
}

export default PartnerReferral;