import React from 'react';
import Read from './Read';
import Cards from './Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route  
} from 'react-router-dom';


export default class Main extends React.Component{
    
    render(){
        return(
            <>
               
               <Router>
                    <Switch>
                        <Route path="/" strict exact component={Cards} />
                        <Route path="/read/:id" strict exact component={Read} />
                    </Switch>
                </Router>
                            
                <div className="cards grid container">
                    <div className="item">
                        <a href="">
                        <div className="flex">
                            <div className="title width-100">
                                <span className="color-line-1">Contabilidade</span>
                                <div className="description">Breve descrição da profissão em destaque</div>
                            </div>
                            <button className="btn-more">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="36px" width="36px" role="img" aria-hidden="true"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
                            </button>
                        
                        </div>
                        </a>
                    </div>

                    <div className="item">
                        <a href="">
                        <div className="flex">
                            <div className="title width-100">
                                <span className="color-line-1">Contabilidade</span>
                                <div className="description">Breve descrição da profissão em destaque</div>
                            </div>
                            <button className="btn-more">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="36px" width="36px" role="img" aria-hidden="true"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
                            </button>
                        
                        </div>
                        </a>
                    </div>

                    <div className="item">
                        <a href="">
                        <div className="flex">
                            <div className="title width-100">
                                <span className="color-line-1">Contabilidade</span>
                                <div className="description">Breve descrição da profissão em destaque</div>
                            </div>
                            <button className="btn-more">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="36px" width="36px" role="img" aria-hidden="true"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
                            </button>
                        
                        </div>
                        </a>
                    </div>

                </div>


             
            </>
        );
    }
}

// <div id="inicio">teste01</div>
                
// <div id="sobre">teste02</div>