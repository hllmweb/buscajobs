import React from 'react';


export default class CidadeDetalhes extends React.Component{
    
    render(){
        const { params } = this.props;
        if(!params.id) return null;


        return(
            <div>
                <h2>Lista da Cidade Selecionada</h2>
            </div>
        );
    }
}