import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { PAGE_TWO_ERROR_TEXT } from './../common/constant';
import { isMobileValidNumber, dumpData } from './../common/Helperfunction';
import axios from "axios"
import { API } from './../common/constant';
import ReactGA from 'react-ga';
import CustomTable from './../common/CustomTable/customTable'
import { ContextMain } from './../common/ContextMain'
import VisibilityIcon from '@material-ui/icons/Visibility';
class PartnerReferral extends React.Component<any,
    {

        date_match_modal: boolean,
        modalData: any
    }> {

    constructor(props: any) {
        super(props);
        this.state =
        {
            date_match_modal: false,
            modalData: ""
        }

    }


    handleCloseSub = () => {
        this.setState({ date_match_modal: false })
    };

    showModal = (eve: any, data: any) => {
        { console.log("modaldata", data) }
        this.setState({ date_match_modal: true, modalData: data })
    }
    render() {
        const COL_REFER = [
            { title: "Customer Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone" },
            { title: "Premium", field: "hasPremium" },
            { title: "Max Bids", field: "bids" },

        ];

        const dataDump: any = dumpData(this.context?.userData[0])

        const COL_INSIDE = [
            { title: "Amount", field: "amount" },
            { title: "Car Title", field: "carTitle" },
        ];


        return (
            <div className="max-width-in">

                <CustomTable options={
                    {
                        paginationType: "stepped",
                        search: true,
                        paging: true,
                        filtering: false,
                        showTitle: false,
                        toolbar: true,
                        emptyRowsWhenPaging: false,
                        pageSize: 5,
                        actionsColumnIndex: -1
                    }
                }
                    localization={
                        {
                            // body: {
                            //     emptyDataSourceMessage: <> <img src={
                            //         tableIcon
                            //     }
                            //         alt="Icon" className="table-icon" /> <Typography component="h4" className="table-text">Make your first referral and start earning today.</Typography> <div className="table-refer"> <Button variant="contained" color="primary" className="custom-primary-button-refer"><Link to='home'><img src={
                            //             btnReferEarnings
                            //         }
                            //             alt="icon" className="btn-gap" />Refer Now</Link> </Button> </div> </>,
                            // }
                        }
                    }
                    actions={[
                        {
                            icon: () => <VisibilityIcon />,
                            tooltip: 'Show User',
                            onClick: (evt: any, data: any) => {
                                this.showModal(evt, data)
                            }
                        }
                    ]}

                    columns={
                        COL_REFER
                    }
                    data={
                        dataDump
                    }
                />

                <Dialog
                    open={this.state.date_match_modal}
                    onClose={this.handleCloseSub}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    {this.state.modalData == "" ?
                        <h3 className="modal-title">Fetching</h3>
                        : <>
                            <h3 className="modal-title">{this.state.modalData.name}</h3>
                            <img src={this.state.modalData.avatar} alt="icon" />
                            <CustomTable options={
                                {
                                    paginationType: "stepped",
                                    search: true,
                                    paging: true,
                                    filtering: false,
                                    showTitle: false,
                                    toolbar: true,
                                    emptyRowsWhenPaging: false,
                                    pageSize: 5,
                                    actionsColumnIndex: -1
                                }
                            }
                                columns={
                                    COL_INSIDE
                                }
                                data={
                                    this.state.modalData.bidsData
                                }
                            />

                            <DialogActions>
                                <Button onClick={this.handleCloseSub} color="primary">
                                    Close
                            </Button>
                            </DialogActions>
                        </>}

                </Dialog>
            </div>
        );
    }
}

PartnerReferral.contextType = ContextMain
export default PartnerReferral;