import React from 'react';
import '../style.css';


function RightContent() {
    return (
        <div className="ui card">
            <div className="text">
                Add Money
            </div>
            <br />
            <div className="ui input">
                <input
                    type="text"
                    placeholder="Enter Amount to Add"
                />
            </div>
            <div className="extra content">
                <button className="ui text">₹5000</button>
                <button className="ui text">₹1000</button>
                <button className="ui text">₹5000</button>
                <button className="ui text">₹5000</button>
            </div>
            <div className="ui segment">
                <i className='big building icon'>
                    <h2>Send Money to Bank.</h2>
                    <p>RTGS/NEFT/IMPS?   Continue</p>
                </i>
            </div>

            <div className="btn">
                Continue

            </div>

        </div>

    )
}

export default RightContent;