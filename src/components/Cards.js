import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import LoadingSpinner from './loading/LoadingSpinner';


export default class Cards extends React.Component{
    state = {
        post: [],
        loading: false,
    }
 
    componentDidMount(){

        const params = JSON.stringify({
            'p_id_cidade': 'todos'
        });
        

        this.setState({loading: true }, () => {
        axios 
            .post("https://api-buscajobs.herokuapp.com/cidade/lstCidade/", 
                params,
                {headers: { "Content-Type": "application/json" }}
            )
            .then(res => {
                this.setState({
                    loading: false,
                    post: res.data
                });
            }).catch(function(error){
                console.log(error);
            });
        });
    }
//    <div className="col-2"><button>Filtrar</button></div>

    render(){
        const { loading } = this.state;
    
        return(
         
              
            <>  
                
                <div className="search">
                    <div className="container">
                        <div className="flex-col">
                            <div className="inline width-40">
                                <div className="select">
                                
                                    <select className="select-text" required>
                                  
                                    
                                        <option value="" disabled selected></option>
                                        {
                                            this.state.post.map(post => {
                                                
                                                return (
                                                    <>
                                                    {loading ? <LoadingSpinner /> :    
                                                    <option key={post.id_cidade} value={post.cidade}>
                                                       {post.cidade}
                                                    </option>
                                                    }
                                                    </>
                                                )
                                            })
                                        }
                                    
                                       
                                    </select>
                                    <span className="select-highlight"></span>
                                    <span className="select-bar"></span>
                                    <label className="select-label">Selecione a Cidade</label>
                             
                                </div>   
                            </div>
                            <div className="inline width-40">
                                <div className="input-container">
                                    <input id="vaga" className="input" type="text" pattern=".+" required />
                                    <label className="label" for="vaga">Vaga</label>
                                </div>    
                            </div>
                            <div className="inline width-20"><button className="btn-filter">Filtrar</button></div>
                         
                        </div>
                    </div>
                </div>

                
                
            </>
        );
    }
}

/*
{loading ? <LoadingSpinner /> :   
    <ul>
    {this.state.post.map(post =>{
        let Id = post.id_cidade;
       
        return(
            <li key={post.id_cidade}>
                <div className="description">
                    Descrição
                   {post.cidade}
                </div>
                <Link to={{
                    pathname: `/read/${post.id_cidade}`,
                    value: {Id}
                }}>
                Leia Mais Informações Aqui
                </Link>
            </li>
        
        );
       
    })}
    </ul>
    } */