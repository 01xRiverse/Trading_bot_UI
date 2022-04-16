import styled from 'styled-components'
import {GiSparkSpirit} from 'react-icons/gi'


export const NavbarContainer=styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    background-color:#6b7280;

    @media screen and (max-width:800px){
        display: none;
    }
    `
export const LogoContainer=styled.div`
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    margin: 5px;    
    margin-left:20px;

`

    
export const Logo=styled.div`
    font-size:3rem;
    color:white;
    `
export const Spirit=styled(GiSparkSpirit)`
    margin-left: -5px;
    font-size:4rem;
    color:white;`


export const NavItemContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    `

    