import React from 'react'
import { ButtonContainer ,ButtonWrapper,Button} from './NavItemStyle'



function NavItem(props) {
    return (
        <ButtonContainer>
            <ButtonWrapper><Button>{props.text}</Button></ButtonWrapper>
        </ButtonContainer>
        
           
    )
}

export default NavItem
