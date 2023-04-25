import React from "react";
import CatShowerServiceItem from "../CatShowerServiceItem";
import CatGroomingServiceItem from "../CatGroomingServiceItem";
import CatVetServiceItem from "../CatVetServiceItem";

const CatMenu = () => {
    return (
        <>
            <CatShowerServiceItem />
            <CatGroomingServiceItem />
            <CatVetServiceItem />
        </>
    );
}

export default CatMenu;