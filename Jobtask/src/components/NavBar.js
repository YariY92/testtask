import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <>
            
                
                    <div className="header">
                        <div className="wrapper">
                        <div className="header__wrapper">
                        <div className="header__logo">
                            <div className="header__logo-1">
                            <a href="/#" className="header__logo-link">
                                <img src="images/logo_pineapple.svg" alt="Pineapple-logo" className="header_logo-pic"/>
                             </a>
                             </div>
                             <div className="header__logo-mobile">
                            <a href="/#" className="header__logo-link">
                                <img src="images/union.svg" alt="Pineapple-logo" className="header_logo-pic"/>
                             </a>
                             </div>  
                        </div>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="/#" className="header__link ">About</a>
                                </li>
                                <li className="header__item">
                                    <a href="/#" className="header__link ">How it works</a>
                                </li> 
                                <li className="header__item">
                                    <a href="/#" className="header__link ">Contact</a>
                                </li> 
                            </ul>
                        </nav>
                        </div>
                        </div>
                    </div>
                
            
        </>
    )
}

export default NavBar
