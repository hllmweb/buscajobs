import React from 'react';
import HeaderPrincipal from './Header';
import Main from './Main';


export default class App extends React.Component{

    render(){
        return(
        <>  
            <HeaderPrincipal />
            <Main />
        </>
        );
    }
}

//  <Header />