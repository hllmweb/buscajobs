import React from 'react';
import Header from './header/Header';
import Main from './Main';


export default class App extends React.Component{

    render(){
        return(
        <>  
            <Header />
            <Main />
        </>
        );
    }
}

//  <Header />