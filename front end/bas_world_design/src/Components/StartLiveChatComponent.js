import React from "react";
import { useNavigate } from "react-router-dom";
import '../Components/StartLiveChatComponent.css';

function OpenLiveSupport(){

    let navigate = useNavigate();

    function OpenSupport(){
        navigate('/support');
    }





    return(
        <div className="support" onClick={OpenSupport}> Go to live support </div>
    )

}

export default OpenLiveSupport;