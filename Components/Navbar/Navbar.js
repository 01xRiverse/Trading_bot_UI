import React from 'react'
import { Spirit, Logo, LogoContainer, NavbarContainer, NavItemContainer } from './NavbarStyle';
import Login from './Login'
import NavItem from './NavItem'
function Navbar() {
    return (
        <div>
            <NavbarContainer> 
                <LogoContainer>
                    <Logo>Nandi</Logo>
                    <Spirit></Spirit>
                </LogoContainer>
                <NavItemContainer>
                    <NavItem text="Home"></NavItem>
                    <NavItem text="Dashboard"></NavItem>
                    <NavItem text="KillSwitch"></NavItem>
                    <NavItem text="Contact Me"></NavItem> 
                    <Login></Login>
                </NavItemContainer>
          
            </NavbarContainer>
        </div>
    )
}

export default Navbar
