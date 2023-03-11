import React from 'react'
import '../Style.scss'
import Image from '../images/illustration-stay-productive.png'

const ThirdSection = () => {
    return (
        <div className='ThirdSection'>
            <div className="image">
                <img src={Image} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h2>
                        Stay Productive, <br />
                        WhereEver You Are
                    </h2>
                </div>
                <div className="desc1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore vel et fugit, provident quo. Laborum ipsam quis quasi officiis!
                </div>
                <div className="desc2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore vel et fugit, provident quo. Laborum ipsam quis quasi officiis!
                </div>
                <div className="link">
                    <span>See How Fylo Works</span>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection