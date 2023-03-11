import React, { createElement } from 'react'
import '../Style.scss'
import {IconCards} from './Data'

function CreateElements({ SRC, TITLE, DESCRIPTION }) {
    return React.createElement(
    "div",
    { className: "card" },
    createElement(
        "div",
        { className: "image" },
        createElement("img", { src: SRC }, null)
    ),
    createElement("div", { className: "title" }, TITLE),
    createElement("div", { className: "desc" }, DESCRIPTION)
    );
}


const ReturnElements = () => {
    for(let i = 0; i < IconCards.length; i++) {
        content.push(<CreateElements 
        key={i}
        SRC={IconCards[i].Src}
        TITLE={IconCards[i].title}
        DESCRIPTION={IconCards[i].Description}
        />)
    }
    return content
}

const content = []

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <div className="container">
                <ReturnElements />
                {/* <div className="card">
                    <div className="image">
                        <img src={Icon} alt="" />
                    </div>
                    <div className="title">
                    Acsses Your Files Any Where
                    </div>
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores alias optio, sapiente, ratione nesciunt sed quibusdam ducimus tempore placeat blanditiis non a unde, ipsum ab!
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={Icon} alt="" />
                    </div>
                    <div className="title">
                    Acsses Your Files Any Where
                    </div>
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores alias optio, sapiente, ratione nesciunt sed quibusdam ducimus tempore placeat blanditiis non a unde, ipsum ab!
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={Icon} alt="" />
                    </div>
                    <div className="title">
                    Acsses Your Files Any Where
                    </div>
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores alias optio, sapiente, ratione nesciunt sed quibusdam ducimus tempore placeat blanditiis non a unde, ipsum ab!
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={Icon} alt="" />
                    </div>
                    <div className="title">
                    Acsses Your Files Any Where
                    </div>
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores alias optio, sapiente, ratione nesciunt sed quibusdam ducimus tempore placeat blanditiis non a unde, ipsum ab!
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SecondSection