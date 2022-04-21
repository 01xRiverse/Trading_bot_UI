import React from 'react'
import { Page ,Button,Text} from './KillswitchStyle'
import {GiBiohazard} from 'react-icons/gi'
import {CgDanger} from 'react-icons/cg'

function Killswitch() {
    return (
        <Page>
            <Text size="2rem" angle="-20deg" top="10%"  left="5%">Close all trades?? </Text>
            <Text size="1.4rem" angle="20deg" top="10%" right="5%">Are you sure ??</Text>
            <Text size="3rem" angle="0deg" bottom="0" left="5%">Ciao Adios!!</Text>
            <Text size="2rem" angle="-20deg" top="50%" left="5%">JUST DO IT!!!</Text>
            <Text size="4rem" angle="90deg" top="50%" right="5%">BIG NO NO</Text>
            <Text size="2rem" angle="0deg" bottom="10%" left="50%">Rugged </Text>
            <Text size="2.2rem" angle="0deg" top="10%" left="40%">Sometimes all i think about is U</Text>
            <Text size="4rem" angle="0deg" top="25%" left="25%" an="true" at="3000ms" ait="infinite" atf="linear"><GiBiohazard></GiBiohazard></Text>
            <Text size="4rem" angle="0deg" bottom="25%" left="25%"><CgDanger></CgDanger></Text>
            <Text size="2.2rem" angle="-20deg" top="25%" right="20%">Why life so hard??</Text> 
            <Button>Killswitch</Button>
        </Page>
    )
}

export default Killswitch
