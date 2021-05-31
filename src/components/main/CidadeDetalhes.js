import React from 'react';
// import { useParams } from "react-router-dom";

export default class CidadeDetalhes extends React.Component{
    
    render(){
        // const { params } = this.props;
        // if(!params.id) return null;

        // const { id_cidade } = useParams();
    
        // if(!id_cidade) return null;
        // const params_1 = JSON.stringify({
        //     'p_id_cidade': id_cidade
        // });


        return <h1>Hello, {this.props.name}</h1>;
        // return( 
        //     <h3> ID: {params_1}</h3>
        // );
    }
}