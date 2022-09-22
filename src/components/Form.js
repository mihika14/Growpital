import React from "react";
import "../style.css";
// import { data } from "./data";
import {Routes, Route, useNavigate} from 'react-router-dom';

var data = [
    {
        "BankBalance": "XXXXX",
        "transactionamount": 15000,
        "transactiondate": "2022-08-12 15:55",
        "PaymentType": {
            "Id": "X",
            "Name": "Bank to Wallet Transfer"
        }
    }
]

var senderDetails = [
    {
        "sender": "Saurabh Sharma",
        "bank": "SBI",
        "IFSC": "SBINO16095",
        "accountno": "xxxxxxxx5736",
        "transactiondate": "2022-08-12 15:55"
    }
]
var recieverDetails = [
    {
        "reciever": "Saurabh Sharma",
        "wallet": "Growpital Wallet",
        "referenceno": "DBTR/222201998174",
        "transactiondate": "2022-08-12 15:55"
    }
]

function Form() {
    return (
        <div className="formbg">
            <div className="form">
                <div className="money">
                    <div className="moneymessage">
                        Money added to wallet <br />from bank account
                    </div>
                    <h1>{data[0].transactionamount}</h1>
                    <br />
                    <h6>{data[0].transactiondate}</h6>
                </div>
                <div className="message">
                    <h1>Transaction complete!</h1>
                    <h2>Tap to view this transaction</h2>
                </div>
                <div className="Rectangle">
                    <div className="sender">
                        <h5>From</h5>
                        <h1>{senderDetails[0].sender}</h1>
                        <div className="accountDetails">
                            <p>{senderDetails[0].bank}
                                <br />
                                Ref No. {senderDetails[0].accountno}</p>
                            {senderDetails[0].transactiondate}
                        </div>
                    </div>
                    <div className="reciever">
                        <h5>To</h5>
                        <h1>{recieverDetails[0].reciever}</h1>
                        <div className="recieverDetails">
                            <p>{recieverDetails[0].wallet}
                                <br />
                                Ref No. {recieverDetails[0].referenceno}</p>
                            {recieverDetails[0].transactiondate}
                        </div>
                    </div>
                    <div className="method">
                        Payment Method : UPI
                        <br />
                        Transaction ID: {recieverDetails[0].referenceno}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form;