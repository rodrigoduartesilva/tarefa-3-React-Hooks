import React, { useState } from "react";

const InputSpace = ({ children }) => {
    const [inputValues, setInputValues] = useState({
        email: ''
    });

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
        console.log(inputValues);
    }

    return (
        <input name='email' onChange={handleChangeValues} placeholder={children} required className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105" />
    );
}

export default InputSpace;