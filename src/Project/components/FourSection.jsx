import React, { createElement } from 'react'
import {Profiles} from './Data'

    function CreateElements({ CATE, Src, H2, H4 }) {
    return React.createElement(
    "div",
    { className: "card" },
    createElement(
        "div",
        { className: "category" },
        createElement("h3", null, CATE)
    ),
    createElement(
        "div",
        { className: "person" },
        createElement(
        "div",
        { className: "image" },
        createElement("img", { src: Src })
        ),
        createElement(
        "div",
        { className: "info" },
        createElement("h2", null, H2),
        createElement("h4", null, H4)
        )
    )
    );
    }


const Return = () => {
    for (let i = 0; i < Profiles.length; i++) {
    content.push(
        <CreateElements
        key={i}
        CATE={Profiles[i].category}
        Src={Profiles[i].src}
        H2={Profiles[i].H2}
        H4={Profiles[i].H4}
        />
    );
    }
    return content;
};

const content = []

const FourSection = () => {
    return (
        <div className='FourSection'>
            <div className="container">
                <Return />
            </div>
        </div>
    )
}

export default FourSection