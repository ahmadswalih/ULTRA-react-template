import React from 'react'
import { InfoSection, Pricing } from '../../Components'
import {homeObjFour, homeObjThree, homeObjTwo} from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
