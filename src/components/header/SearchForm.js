import React from 'react';
import axios from 'axios';
import LoadingSpinner from '../loading/LoadingSpinner';
class SearchForm extends React.Component {
    /*constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  */

  
    state = {
        post: [],
        loading: false,
        onSelect: '',
        username: ''
    }
 
    // handleChange(event) {    this.setState({value: event.target.value});  }
    // handleSubmit(event) {
    //   alert('Um nome foi enviado: ' + this.state.value);
    //   event.preventDefault();
    // }

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

    mySubmitHandler = (event) => {
        event.preventDefault();
       
        alert("Pesquisar" + this.state.username);
      }
   

    onSelect(event) {
        
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex].getAttribute('data-key'));
        //alert(event.target.options[selectedIndex].getAttribute('data-key'));
        
    }

 

    render() {
     const { loading } = this.state;

      return (

        <form onSubmit={this.mySubmitHandler}>
                        <div className="flex-col">
                            <div className="inline width-40">
                                <div className="select">
                                    <select name="cidade" className="select-text" required onChange={this.onSelect}>
                                        <option defaultValue=""></option>
                                        {
                                            this.state.post.map((item, key) => {
                                              
                                                return (
                                                    <>
                                                    {loading ? <LoadingSpinner /> :    
                                                    <option key={key} data-key={item.id_cidade} value={item.cidade}>
                                                       {item.cidade}
                                                    </option>
                                                    }
                                                    </>
                                                )
                                            })
                                        }   
                                    </select>
                                    <span className="select-highlight"></span>
                                    <span className="select-bar"></span>
                                    <label htmlFor="cidade" className="select-label">Selecione a Cidade</label>
                                </div>   
                            </div>

                            <div className="inline width-40">
                                <div className="input-container">
                                    <div className="select">
                                        <select name="vaga" className="select-text" required onChange={this.onSelect}>
                                            <option defaultValue=""></option>
                                            <option value="Programador PHP" data-key="Programador PHP">Programador PHP</option> 
                                            <option value="Editor de Vídeo" data-key="Editor de Vídeo">Editor de Vídeo</option> 
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label htmlFor="vaga" className="select-label">Selecione a Vaga</label>
                                    </div>   
                                </div>    
                            </div>
                            <div className="inline width-20"><button className="btn-filter">Filtrar</button></div>
                        </div>
                        </form>


      );
    }
  }

  export default SearchForm;

  /*
                                      <input id="vaga" name="vaga"  className="input" type="text" pattern=".+" required />
                                    <label className="label" htmlFor="vaga">Vaga</label>
  */