import React from "react";
import FatalErrorImg from "../images/500.png"

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error 500: Unexpected Error</h1>
        <img className="Error_Image" src={FatalErrorImg} alt="500 Fatal Error" ></img>
    </div>
)
export default FatalError