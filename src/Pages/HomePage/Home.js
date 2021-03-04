import React from 'react'
import { InfoSection, Pricing } from '../../Components'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
