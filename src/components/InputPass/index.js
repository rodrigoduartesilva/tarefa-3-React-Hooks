import React, { useState } from "react";

const InputPass = ({ children }) => {
    const [inputValues, setInputValues] = useState({
        senha: ''
    });

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
        console.log(inputValues);
    }

    return (
        <input name='senha' onChange={handleChangeValues} placeholder={children} required className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105" type="password" />
    );
}

export default InputPass;