import React from 'react';
import '../style/header.css';

const Header = (props) => (
    <nav className=" header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="far fa-hand-pointer fa-4x text-white"></i>
                <div className="h1 ml-2 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

export default Header;