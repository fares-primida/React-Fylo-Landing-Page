import React from 'react'
import '../Style.scss'

const FiveSection = () => {
    return (
        <div className='FiveSection'>
            <span></span>
            <div className="container">
                <div className="title">
                    <h2>
                        Get Early Access Today
                    </h2>
                </div>
                <div className="desc">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum aliquid obcaecati ipsa tempore accusamus nulla error quas, beatae vero quae repellat aperiam perspiciatis rerum!
                    </p>
                </div>
                <div className="btns">
                    <input type="text" placeholder='@email.Example.com'/>
                    <button>Get Started For Fylo</button>
                </div>
            </div>
        </div>
    )
}

export default FiveSection