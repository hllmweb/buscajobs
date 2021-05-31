import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Cards extends React.Component{
    state = {
        post: []
    }
 
    componentDidMount(){

        const params = JSON.stringify({
            'p_id_cidade': 'todos'
        });
        

        axios 
            .post("https://api-buscajobs.herokuapp.com/cidade/lstCidade/", 
                params,
                {headers: { "Content-Type": "application/json" }}
            )
            .then(res => {
                this.setState({
                    post: res.data
                });
            }).catch(function(error){
                console.log(error);
            });
    }


    render(){
        return(
            <>
                <h3>Card</h3>
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
            </>
        );
    }
}