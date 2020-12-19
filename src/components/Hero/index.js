import React from 'react'
import { HeroContainer, HeroText, PhoneMockupOne, PhoneMockupTwo, HorizontalRule } from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroContainer>          
                <HeroText>
                    <h3>Food app</h3>
                    <h1>Why stay hungry when</h1>
                    <h1>you can order form Bella Onojie</h1>
                    <h4>Download the bella onoje’s food app now on</h4>
                </HeroText>
                <PhoneMockupOne />
                <PhoneMockupTwo />
                <HorizontalRule />
            </HeroContainer>     
        </div>
    )
}

export default Hero
