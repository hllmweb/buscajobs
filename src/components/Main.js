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
                            <button className="btn-more">Saiba Mais</button>
                        
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
                            <button className="btn-more">Saiba Mais</button>
                        
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
                            <button className="btn-more">Saiba Mais</button>
                        
                        </div>
                        </a>
                    </div>

                </div>


                <div id="inicio">teste01</div>
                
                <div id="sobre">teste02</div>
            </>
        );
    }
}