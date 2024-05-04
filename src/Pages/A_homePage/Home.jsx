import React from "react";
import NavMenu from "../../Components/Navbar/NavMenu";
import BgSearch from "./bg-search/BgSearch";
import New from "./new-collection/New";

export default function Home () {
    return (
        <>
            <NavMenu />
            <BgSearch />
            <New />
        </>
    )
}