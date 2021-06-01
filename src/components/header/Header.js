import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

export default class Header extends React.Component{
    
    render(){
        return(
            <>  
                <div className="header">
                    <div className="container">
                    <Logo />
                    <Nav />

                    <div className="header-group">
                    <h2 className="header-title">Encontre os melhores profissionais</h2>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}