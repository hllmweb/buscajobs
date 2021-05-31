import React from 'react';
//import CidadeDetalhes from './CidadeDetalhes';
import { BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useParams 
} from "react-router-dom";

function Account(){
    const { id_cidade } = useParams()
    return <h3> ID: {id_cidade}</h3>
}
export default class Cidade extends React.Component{
    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirCidades();
    }

    
    exibirCidades(){
            
        const params = JSON.stringify({
            'p_id_cidade': 'todos'
        });
        
        fetch("https://api-buscajobs.herokuapp.com/cidade/lstCidade/",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: params
        }).then((response) => response.json())
           .then(responseJson => {
                this.setState({
                    db: responseJson
                });
                console.log(this.state.db);
           });
    }

    render(){
        return(
            <Router>
                <React.Fragment>
                    <h2>Accountts</h2>
                    <ul>{this.state.db.map(row => {
                        return(
                        <li key={row.id_cidade}>
                            <Link to={{pathname: `/${row.id_cidade}`}}>
                            {row.cidade}
                            </Link>
                        </li>
                        );
                        })}
                    </ul>

                    <Switch>
                    <Route path='/:id_cidade'>
                        <Account />
                    </Route>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

/*
function Child() {
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }*/

//{this.state.cidades.map(cidade => <li>{cidade.cidade}</li>)}
//<a href={`cidade/id/${row.id_cidade}`}>{row.cidade}</a>