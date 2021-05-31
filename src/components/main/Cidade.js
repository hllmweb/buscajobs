import React from 'react';
//import CidadeDetalhes from './CidadeDetalhes';
import { BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useParams 
} from "react-router-dom";

function Account(){
    const { id_cidade } = useParams();

    if(!id_cidade) return null;
    const params_1 = JSON.stringify({
        'p_id_cidade': id_cidade
    });

    // fetch("https://api-buscajobs.herokuapp.com/cidade/lstIdCidade/",{
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: params_1
    // }).then((response) => response.json())
    //    .then(responseJson_1 => {
    //         return console.log(responseJson_1);
    //    });

    //REALIZAR A BUSCA DA CIDADE
    return( 
        <h3> ID: {params_1}</h3>
    );
}


export default class Cidade extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            db: [],
            valorId: '',
        });
        this.exibirCidades();

    }

        
    setValorId = (valorId)=>{
        this.setState({ valorId });
    }

    hello(e){
        console.log(e.target.href);
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
        console.log(this.state);
        return(
            <Router>
                <React.Fragment>
                    <h2>Accountts</h2>
                    <ul>{this.state.db.map(row => {
                        return(
                        <li key={row.id_cidade}>
                            <Link to={{
                                pathname: `/${row.id_cidade}`
                            }} >
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

<CidadeDetalhes name="Maria"/>
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