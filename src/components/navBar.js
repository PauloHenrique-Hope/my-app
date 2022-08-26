import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

import '../style.css'

export default function NavBar(){
    return(
        <header className='main-container'>
            <nav className='nav-main-container'>
                <h1 className='nav--logo'>Ecommerce</h1>
                <div className='nav--links-container'>
                    <ul className='nav--links'>
                        <li className='nav--cart'><a href="/">
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </a></li>
                        <li className='nav--account'><a href="/">Account</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}