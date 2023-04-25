import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import Button from "../Button";

const NavBar = () => {
    return (
        <header className="bg-transparent z-50 w-full">
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex flex-grow items-center">
                    <Link to='/'><img src={logo} alt="Logo" className="w-36 cursor-pointer" /></Link>
                    <h1 className="text-center text-3xl font-semibold text-gray-700">Carinho Pet</h1>
                </div>
                <div className="flex items-center justify-end space-x-6">
                    <Button><Link to='/login'>Login</Link></Button>
                    <Button><Link to='/cadastro'>Cadastro</Link></Button>
                    <Button><Link to='/contato'>Contato</Link></Button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;