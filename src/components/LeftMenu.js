import React from "react";
import "../style.css";

const leftMenu = () => {
    return (
        <div className="ui vertical pointing menu">
            <a className="item">
                    <i className="align justify icon"></i>
                Menu
            </a>
            <a className="item">
                <i className="home icon"></i>
                Home
            </a>
            <a className="item">
            <i className="briefcase icon"></i>
                Portfolio
            </a>
            <a className="item">
                <i className="rupee sign icon"></i>
                Invest
            </a>
            <a className="active item">
            <i className="google wallet icon"></i>
                Wallet
            </a>
            <a className="item">
            <i className="headphones icon"></i>
                Support
            </a>
        </div>
    )
}

export default leftMenu;