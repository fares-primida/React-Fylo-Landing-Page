import React from 'react'
import FourSection from './components/FourSection'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import './Style.scss'

const Project = () => {
    return (
        <div>
            <MainSection />
            <SecondSection />
            <ThirdSection />
            <FourSection />
        </div>
    )
}

export default Project