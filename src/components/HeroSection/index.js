import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../video/video2.mp4'
import { Button }from './ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Onyx Cards</HeroH1>
                    <HeroP>
                        The Leading Choice For Online Revision
                    </HeroP>
                    <HeroP>
                        Guaranteed to make you do better in school
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
