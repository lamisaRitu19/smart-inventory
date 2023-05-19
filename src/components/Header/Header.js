import React from 'react';
import logo from '../../assets/NeuralLogo.png';

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-r from-gradientBlue to-gradientPurple px-6 py-4">
            <button className="btn btn-link normal-case text-xl">
                <img src={logo} alt="" />
            </button>
        </div>
    );
};

export default Header;