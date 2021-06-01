import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component{
    
    render(){
        return(
            <>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item"><AnchorLink href='#inicio'>Início</AnchorLink></li>
                        <li className="menu-item"><AnchorLink href='#sobre'>Sobre</AnchorLink></li>
                        <li className="menu-item"><AnchorLink href='#contato'>Contato</AnchorLink></li>
                    </ul>
                    <div className="menu-line"></div>
                    <div className="menu-featured"><a href="">Cadastre-se</a></div>
                </div>
               
            </>
        );
    }
}