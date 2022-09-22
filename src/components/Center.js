import React from "react";
import "../style.css";

const Center = () => {

    return (
        <div className="ui center aligned container">
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        Your Balance
                        <i className="large google wallet icon"></i>
                        <h1>₹4210</h1>
                    </div>
                    <div className="ui buttons">
                        <button className="ui button">Add Money</button>
                        <button className="ui positive button">Withdraw</button>
                    </div>
                </div>
            </div>
            
                <table className="ui table">
                    <thead>
                        <tr><th><h1>Transactions</h1></th>
                            <th><h4>View All</h4></th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="content">
                                    Youtube Premium
                                     <p>9 August 2022 8:30 PM</p>
                            
                                </div>
                            </td>
                            <td>
                            ₹ -3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Facebook Ads
                                    <p>9 August 2022 9:30 PM</p>
                                </div>
                            </td>
                            <td>
                            ₹ 3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Facebook Ads
                                    <p>
                                       6 August 2022 3:30 PM
                                    </p>
                                </div>
                            </td>
                            <td>
                            ₹ 3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Hemakant kant malviya sent money to bank
                                    <p className="sub header">
                                        2 August 2022 4:30 PM
                                    </p>
                                </div>
                            </td>
                            <td>
                            ₹   3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Facebook Ads
                                    <p>
                                        6 August 2022 3:30 PM
                                    </p>
                                </div>
                            </td>
                            <td>
                            ₹  3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Facebook Ads
                                    <p>
                                        9 August 2022 9:30 PM
                                    </p>
                                </div>
                            </td>
                            <td>
                            ₹  3000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Facebook Ads
                                    <p>
                                        9 August 2022 8:30 PM
                                    </p>
                                </div>
                            </td>
                            <td>
                            ₹  3000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default Center;