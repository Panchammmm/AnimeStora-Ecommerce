import React from "react";
import './bgsearch.css';

import BG from '../../../assets/bg/bg-search.jpg';
import { IoSearchCircle } from "react-icons/io5";

export default function BgSearch() {
    return (
        <>
            <div className="bg-container">
                <img src={BG} alt="bg"></img>

                <h1>Anistora Exclusives</h1>

                <div class="search-container">
                    <input type="text" placeholder="Search"></input>
                    <button type="submit"><IoSearchCircle className="search-icon" /></button>
                </div>
            </div>
        </>
    )
}