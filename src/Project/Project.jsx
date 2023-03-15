import React from 'react'
import FiveSection from './components/FiveSection'
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
            <FiveSection />
        </div>
    )
}

export default Project