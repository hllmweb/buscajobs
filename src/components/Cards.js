import React from 'react';
import SearchForm from './header/SearchForm';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
//import LoadingSpinner from './loading/LoadingSpinner';


export default class Cards extends React.Component{

    render(){
        //const { loading } = this.state;
    
        return(
         
            <>  
                
                <div className="search">
                    <div className="container">
                        <SearchForm /> 
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