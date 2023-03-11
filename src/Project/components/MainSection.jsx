import React from 'react'
import Header from './Header'
import Intro from '../images/illustration-intro.png'
import BackImg from '../images/bg-curvy-desktop.svg'
import '../Style.scss'

const MainSection = () => {
    return (
        <div className='main-section'>
            <div className="container">
                <Header />
                <div className="image">
                    <img src={Intro} alt="" />
                </div>
                <div className="title">
                    <h2>
                        All Your File In Your Secure Location, <br />
                        Accissible AnyWhere
                    </h2>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Nisi fugit error hic dicta <br /> quibusdam unde totam dolorem ea.  In adipisci quaerat nam reprehenderit <br /> rem officiis praesentium autem? Eveniet, cupiditate ea?</p>
                </div>
                <div className="btn">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="backImage">
                <img src={BackImg} alt="" />
            </div>
        </div>
    )
}

export default MainSection