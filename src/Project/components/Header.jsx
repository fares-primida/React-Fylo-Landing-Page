import React from 'react'
import Logo from '../images/logo.svg'
import '../Style.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="pages">
                    <p>Features</p>
                    <p>Team</p>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Header