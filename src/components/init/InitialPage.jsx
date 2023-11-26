import React from "react";
import Barber from "./informações/InfoBarber";

const InitialPage = () => {
    return (
        <div className=" flex flex-col justify-center items-center bg-[#111] h-screen">
            <div className="w-8/12 flex flex-col justify-center items-center">
                <Barber />   
            </div>     
        </div>
    )
}

export default InitialPage;
