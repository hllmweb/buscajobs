import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link /*, useLocation*/ } from 'react-router-dom';
import LoadingSpinner from './loading/LoadingSpinner';


const Read = (props) => {
    // usando hook 
    //const [title, settitle] = useState();

    
    const [body, setbody] = useState();
    const [id_cidade, setid] = useState();
    // const [loading=false, setLoading] = useState();
    
    //let Location = useLocation();
    
    // const Load = () =>{
    //   setLoading(true)
    // }

    //console.log(Location);
    // console.log(props,'props');
    // console.log(props.match.params.id);
    //let Id = Location.value.Id;   
    let Id = props.match.params.id;
    let isLoading = false;
    // console.log(Id, " Location.data.Id novo id");

    useEffect(() => {
        const params = JSON.stringify({
          'p_id_cidade': Id
        });
        isLoading = true; 
        console.log(isLoading);
        //axios(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        axios
          .post("https://api-buscajobs.herokuapp.com/cidade/lstIdCidade/",
            params,
            {headers: { "Content-Type": "application/json" }}
        ).then(data => {
          //let gettitle = data.data.title;
          let getbody = data.data.cidade;
          let getid = data.data.id_cidade;
          //let loading = true;
          // settitle(gettitle);
        
          //setLoading(loading)
          setbody(getbody)
          setid(getid)
          //console.log(loading);
          })
          .catch(function(error) {
            console.log(error);
          });
    
      },[Id]);
    

    return(
        <>
            <Link to="/">Voltar.</Link>
            {(isLoading ? <LoadingSpinner /> : '')}
            <div className="title">id: {id_cidade}</div>
            <div className="description">{body}</div>
        </>
    );

}


export default Read;