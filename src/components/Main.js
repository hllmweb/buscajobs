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
            </>
        );
    }
}