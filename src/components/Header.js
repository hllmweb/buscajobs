import React from 'react';
import HeaderComponent  from './header/IndexComponents';
import Logo from './header/Logo'
import Nav from './header/Nav';



export default class Header extends React.Component{
    
    render(){
        return(
            <HeaderComponent.Header>
                <HeaderComponent.Logo><Logo /></HeaderComponent.Logo>
                <HeaderComponent.Nav><Nav className="menu"/></HeaderComponent.Nav>
            </HeaderComponent.Header>
        );
    }
}

/*<ButtonMob />
<Logo />
<Address />*/