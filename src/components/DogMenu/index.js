import React from "react";
import DogShowerServiceItem from "../DogShowerServiceItem";
import DogGroomingServiceItem from "../DogGroomingServiceItem";
import DogVetServiceItem from "../DogVetServiceItem";

const DogMenu = () => {
    return (
        <>
            <DogShowerServiceItem />
            <DogGroomingServiceItem />
            <DogVetServiceItem />
        </>
    );
}

export default DogMenu;