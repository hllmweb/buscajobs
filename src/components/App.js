import React from 'react';
import Cidade from './main/Cidade';
//import Header from './Header';
//import Main from './Main';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Information from './main/Information';
import Contact from './main/Contact';
//import CidadeDetalhes from './main/CidadeDetalhes';



export default class App extends React.Component{

    render(){
        return(
            <div className="header">
                <Router>
                    <nav className="menu">
                    <Link to="/sobre">Sobre</Link>  
                    <Link to="/contact">Contato</Link>  
                    

                    <Switch>
                    <Route path="/sobre">
                        <Information />
                    </Route>  
                    <Route path="/contact">
                        <Contact />
                    </Route>                    
        
                    </Switch>
                    </nav>
                </Router>



                <Cidade />
              
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>                
                <div id="home">Home</div>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <Footer />
            </div>
        );
    }
}