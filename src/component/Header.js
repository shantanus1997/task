import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header class="des-header">
                <div class="logo">
                    <img src='/assets/images/logo.svg'/>
                    <div class="logo-txt-wrap">
                        <span>AlgoExpert</span>

                    </div>
                </div>
                <nav class="algoe-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/content">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
            <header class="res-header">
        <div class="pos-f-t">
            <nav class="navbar navbar-dark ">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="logo">
                  

                </div>
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/content">Content</Link></li>
                    </ul>
            </nav>
         

        </div>
    </header>
        </div>
    )
}

export default Header