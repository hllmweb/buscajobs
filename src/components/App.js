import React from 'react';
//import Header from './Header';
import Header from './header/IndexComponents';
import Logo from './header/Logo'
import Main from './Main';


export default class App extends React.Component{

    render(){
        return(
        <>  
            <Header>
                <Logo />
            </Header>
          
            <Main />
        </>
        );
    }
}

//  <Header />