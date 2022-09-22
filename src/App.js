import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import Center from "./components/Center";
import RightContent from "./components/RightContent";
import Form from "./components/Form";

function App () {
    
    return (
    <div className="ui container">
       
       <Navbar />
        <div className="ui left aligned conatiner">
        <LeftMenu />
        </div>
        <div className="ui center aligned container">
            <Center />
        </div>
        <RightContent /> 
        <Form />
        
    
    </div>
    )
}

export default App;