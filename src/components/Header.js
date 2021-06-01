import React from 'react';
import HeaderComponent from './header/IndexComponents';
import Logo from './header/Logo'
import Nav from './header/Nav';



export default class Header extends React.Component{
    
    render(){
        return(
            <HeaderComponent>
                <Logo />
                <Nav />
            </HeaderComponent>
        );
    }
}

/*<ButtonMob />
<Logo />
<Address />*/