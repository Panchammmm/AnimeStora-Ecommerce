import React from "react";
import './bgsearch.css';

import BG from '../../../assets/bg/bg-search.jpg';

export default function BgSearch (){
    return(
        <>
            <div className="bg-container">
                <img src={BG} alt="bg"></img>
            </div>
        </>
    )
}