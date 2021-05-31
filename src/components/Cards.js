import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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


    render(){
        const { loading } = this.state;
    
        return(
            <>  
                <h3>Card</h3>
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
                } 
                
            </>
        );
    }
}